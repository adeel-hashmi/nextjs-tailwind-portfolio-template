/**
 * Application Constants
 *
 * Centralized constants used throughout the application.
 * Helps maintain consistency and makes updates easier.
 */

export const APP_CONSTANTS = {
  // Animation durations (in seconds)
  ANIMATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.6,
    VERY_SLOW: 0.8,
  },

  // Breakpoints (matches Tailwind defaults)
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    "2XL": 1536,
  },

  // API endpoints
  API: {
    VISITS: "/api/visits",
    FEEDBACK: "/api/feedback",
    CONTACT: "/api/contact",
  },

  // External services
  SERVICES: {
    GITHUB_API: "https://api.github.com",
    LINKEDIN_SHARE: "https://www.linkedin.com/sharing/share-offsite/",
    TWITTER_SHARE: "https://twitter.com/intent/tweet",
  },

  // SEO
  SEO: {
    DEFAULT_TITLE: "Portfolio template demo",
    TITLE_TEMPLATE: "%s | Portfolio template",
    DEFAULT_DESCRIPTION:
      "Next.js, TypeScript and Tailwind CSS portfolio starter with illustrative sample content.",
  },
} as const

export type AppConstants = typeof APP_CONSTANTS
