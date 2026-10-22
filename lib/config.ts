/**
 * Portfolio Configuration
 *
 * Shared defaults for the template. See README for other content sources.
 * Edit this file to personalize the portfolio with your own information.
 */

export const siteConfig = {
  name: "Your Name",
  initials: "YN",
  title: "Portfolio template demo",
  description: "Next.js, TypeScript and Tailwind CSS portfolio starter with sample project pages and documented setup.",
  url: "https://nextjs-tailwind-portfolio-template.vercel.app",
  ogImage: "",
  repository: "https://github.com/adeel-hashmi/nextjs-tailwind-portfolio-template",

  // Personal Information
  personal: {
    email: "",
    location: "Example location",
    timezone: "Example timezone",
    availability: "Template demo",
    experience: "Sample experience",
    projectCount: "Sample projects",
  },

  // Social Links
  links: {
    github: "https://github.com/adeel-hashmi/nextjs-tailwind-portfolio-template",
    linkedin: "",
    twitter: "",
    email: "",
    calendar: "",
    resume: "",
  },

  // Navigation
  navigation: [
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ],

  // Features enabled/disabled
  features: {
    visitorCount: false,
    blog: true,
    feedback: false,
    whatsapp: false,
    analytics: false,
  },
} as const

export type SiteConfig = typeof siteConfig
