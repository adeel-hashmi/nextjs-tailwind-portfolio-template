// Senior-level analytics tracking
export const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
  if (typeof window !== "undefined") {
    // Google Analytics 4
    if (window.gtag) {
      window.gtag("event", eventName, properties)
    }

    // Custom analytics
    console.log("Event:", eventName, properties)
  }
}

export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    })
  }
}

// Usage in components
export const useAnalytics = () => {
  return {
    trackProjectView: (projectId: string) => trackEvent("project_viewed", { project_id: projectId }),
    trackContactForm: (source: string) => trackEvent("contact_form_opened", { source }),
    trackResumeDownload: () => trackEvent("resume_downloaded"),
  }
}
