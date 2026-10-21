import { spawn } from "node:child_process"
import { once } from "node:events"
import { mkdir, writeFile } from "node:fs/promises"
import { createRequire } from "node:module"
import { fileURLToPath } from "node:url"
import lighthouse from "lighthouse"
import { launch } from "chrome-launcher"
import { port, routes } from "../lighthouse.config.mjs"
import { assertLighthouseReport } from "./assert-lighthouse.mjs"

const require = createRequire(import.meta.url)
const root = fileURLToPath(new URL("../", import.meta.url))
const reportDirectory = new URL("../.lighthouseci/", import.meta.url)
const server = spawn(process.execPath, [
  require.resolve("next/dist/bin/next"), "start", "--hostname", "127.0.0.1", "--port", String(port),
], { cwd: root, stdio: ["ignore", "pipe", "inherit"] })
let chrome
let cleanupPromise

function cleanup() {
  cleanupPromise ??= (async () => {
    try {
      await chrome?.kill()
    } finally {
      if (server.exitCode === null && server.signalCode === null) {
        const exited = once(server, "exit")
        server.kill("SIGTERM")
        const timer = setTimeout(() => server.kill("SIGKILL"), 5000)
        try {
          await exited
        } finally {
          clearTimeout(timer)
        }
      }
    }
  })()
  return cleanupPromise
}

for (const [signal, exitCode] of [["SIGINT", 130], ["SIGTERM", 143]]) {
  process.once(signal, () => { void cleanup().finally(() => process.exit(exitCode)) })
}

try {
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Production server did not start within 30 seconds")), 30000)
    let output = ""
    server.stdout.on("data", (chunk) => {
      process.stdout.write(chunk)
      output = (output + chunk).slice(-4096)
      if (output.includes("Ready in")) {
        clearTimeout(timer)
        resolve()
      }
    })
    server.once("error", (error) => { clearTimeout(timer); reject(error) })
    server.once("exit", (code) => {
      clearTimeout(timer)
      reject(new Error(`Production server exited with code ${code}`))
    })
  })

  await mkdir(reportDirectory, { recursive: true })
  chrome = await launch({ chromeFlags: ["--headless=new"], handleSIGINT: false })
  const failures = []
  for (const route of routes) {
    const url = `http://127.0.0.1:${port}${route}`
    const result = await lighthouse(url, { port: chrome.port, output: "html", logLevel: "error" })
    const name = route === "/" ? "home" : route.slice(1).replaceAll("/", "-")
    if (result) {
      await writeFile(new URL(`${name}.report.json`, reportDirectory), JSON.stringify(result.lhr, null, 2))
      await writeFile(new URL(`${name}.report.html`, reportDirectory), result.report)
    }
    try {
      assertLighthouseReport(result?.lhr, url)
      console.log(`PASS ${route}: all required Lighthouse audits`)
    } catch (error) {
      failures.push(error.message)
    }
  }
  if (failures.length > 0) throw new Error(failures.join("\n"))
} catch (error) {
  console.error(error.message)
  process.exitCode = 1
} finally {
  await cleanup()
}
