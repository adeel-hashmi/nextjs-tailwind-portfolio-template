"use client"

/**
 * Analytics Hook
 *
 * Custom hook for tracking user interactions and events.
 * Integrates with Google Analytics, Plausible, or other analytics services.
 */

import { useCallback } from "react"

interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

export function useAnalytics() {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    // Google Analytics 4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      })
    }

    // Plausible Analytics
    if (typeof window !== "undefined" && window.plausible) {
      window.plausible(event.action, {
        props: {
          category: event.category,
          label: event.label,
          value: event.value,
        },
      })
    }

    // Console log for development
    if (process.env.NODE_ENV === "development") {
      console.log("📊 Analytics Event:", event)
    }
  }, [])

  const trackPageView = useCallback((url: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      })
    }
  }, [])

  // Predefined tracking functions
  const trackProjectView = useCallback(
    (projectId: string) => {
      trackEvent({
        action: "view_project",
        category: "engagement",
        label: projectId,
      })
    },
    [trackEvent],
  )

  const trackContactForm = useCallback(
    (source: string) => {
      trackEvent({
        action: "contact_form_opened",
        category: "conversion",
        label: source,
      })
    },
    [trackEvent],
  )

  const trackResumeDownload = useCallback(() => {
    trackEvent({
      action: "resume_downloaded",
      category: "conversion",
    })
  }, [trackEvent])

  const trackSkillFilter = useCallback(
    (category: string) => {
      trackEvent({
        action: "filter_skills",
        category: "interaction",
        label: category,
      })
    },
    [trackEvent],
  )

  const trackThemeToggle = useCallback(
    (theme: string) => {
      trackEvent({
        action: "toggle_theme",
        category: "interaction",
        label: theme,
      })
    },
    [trackEvent],
  )

  return {
    trackEvent,
    trackPageView,
    trackProjectView,
    trackContactForm,
    trackResumeDownload,
    trackSkillFilter,
    trackThemeToggle,
  }
}

// Global analytics declarations
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    plausible: (event: string, options?: { props?: Record<string, unknown> }) => void
  }
}
