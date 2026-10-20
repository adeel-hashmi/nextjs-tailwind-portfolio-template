import assert from "node:assert/strict"
import test from "node:test"
import { reducer } from "../hooks/use-toast.ts"

test("a newer notification replaces the visible toast without mutating the old state", () => {
  const previous = { toasts: [{ id: "old", title: "Saved", open: true }] }
  const next = reducer(previous, {
    type: "ADD_TOAST",
    toast: { id: "new", title: "Upload failed", variant: "destructive", open: true },
  })

  assert.deepEqual(next.toasts.map((toast) => toast.id), ["new"])
  assert.equal(next.toasts[0].variant, "destructive")
  assert.deepEqual(previous, { toasts: [{ id: "old", title: "Saved", open: true }] })
})

test("an update preserves existing notification content and ignores an unknown ID", () => {
  const previous = { toasts: [{ id: "upload", title: "Uploading", description: "In progress", open: true }] }
  const updated = reducer(previous, {
    type: "UPDATE_TOAST",
    toast: { id: "upload", description: "Complete" },
  })

  assert.deepEqual(updated.toasts[0], { id: "upload", title: "Uploading", description: "Complete", open: true })
  assert.deepEqual(reducer(updated, { type: "UPDATE_TOAST", toast: { id: "missing", open: false } }), updated)
  assert.equal(previous.toasts[0].description, "In progress")
})

test("dismissal closes the toast but preserves it until removal for its exit animation", (context) => {
  context.mock.timers.enable({ apis: ["setTimeout"] })
  const previous = { toasts: [{ id: "dismissal", title: "Saved", open: true }] }
  const dismissed = reducer(previous, { type: "DISMISS_TOAST", toastId: "dismissal" })

  assert.deepEqual(dismissed.toasts, [{ id: "dismissal", title: "Saved", open: false }])
  assert.equal(previous.toasts[0].open, true)
  assert.deepEqual(reducer(dismissed, { type: "REMOVE_TOAST", toastId: "dismissal" }), { toasts: [] })
})
