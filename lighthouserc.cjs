module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start -- --hostname 127.0.0.1 --port 3104",
      startServerReadyPattern: "Ready",
      startServerReadyTimeout: 30000,
      url: [
        "http://127.0.0.1:3104/",
        "http://127.0.0.1:3104/projects",
        "http://127.0.0.1:3104/blog",
      ],
      numberOfRuns: 1,
      settings: { chromeFlags: "--headless=new" },
    },
    assert: {
      assertions: {
        "http-status-code": "error",
        "errors-in-console": "error",
        "document-title": "error",
        "html-has-lang": "error",
        "meta-viewport": "error",
      },
    },
  },
}
