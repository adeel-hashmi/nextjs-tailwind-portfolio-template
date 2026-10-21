import assert from "node:assert/strict"
import test from "node:test"
import { assertLighthouseReport } from "../scripts/assert-lighthouse.mjs"

const url = "http://127.0.0.1:3104/"
const passingReport = () => ({
  requestedUrl: url,
  finalDisplayedUrl: url,
  audits: {
    "http-status-code": { score: 1 },
    "errors-in-console": { score: 1 },
    "document-title": { score: 1 },
    "html-has-lang": { score: 1 },
    "meta-viewport": { score: 1 },
    "viewport-insight": { score: 1 },
  },
})

test("a completed report passing every required check is accepted", () => {
  assert.doesNotThrow(() => assertLighthouseReport(passingReport(), url))
})

for (const id of Object.keys(passingReport().audits)) {
  test(`Lighthouse rejects a failed, missing or unscored ${id} audit`, () => {
    for (const score of [0, 0.5, null, undefined]) {
      const report = passingReport()
      report.audits[id].score = score
      assert.throws(() => assertLighthouseReport(report, url), new RegExp(id))
    }
    const report = passingReport()
    delete report.audits[id]
    assert.throws(() => assertLighthouseReport(report, url), new RegExp(id))
  })
}

test("Lighthouse rejects incomplete runs and unexpected redirects", () => {
  assert.throws(() => assertLighthouseReport(undefined, url), /missing report/)
  assert.throws(() => assertLighthouseReport({ ...passingReport(), runtimeError: { message: "Navigation failed" } }, url), /Navigation failed/)
  assert.throws(() => assertLighthouseReport({ ...passingReport(), finalDisplayedUrl: `${url}login` }, url), /unexpected URL/)
  assert.throws(() => assertLighthouseReport({ ...passingReport(), requestedUrl: `${url}other` }, url), /unexpected URL/)
})
