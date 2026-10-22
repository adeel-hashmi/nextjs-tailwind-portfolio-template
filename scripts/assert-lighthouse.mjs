import { requiredAudits } from "../lighthouse.config.mjs"

export function assertLighthouseReport(report, expectedUrl) {
  if (!report || report.runtimeError) {
    throw new Error(`Lighthouse did not complete: ${report?.runtimeError?.message ?? "missing report"}`)
  }
  if (report.requestedUrl !== expectedUrl || report.finalDisplayedUrl !== expectedUrl) {
    throw new Error(`Lighthouse inspected an unexpected URL for ${expectedUrl}`)
  }

  const failures = requiredAudits.filter((id) => report.audits?.[id]?.score !== 1)
  if (failures.length > 0) {
    throw new Error(`${expectedUrl}: failed or missing audits: ${failures.join(", ")}`)
  }
}
