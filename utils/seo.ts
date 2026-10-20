/**
 * SEO Utilities
 *
 * Helper functions for generating SEO metadata, structured data,
 * and social sharing content.
 */

import type { Metadata } from "next"
import { siteConfig } from "@/lib/config"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article"
  publishedTime?: string
  authors?: string[]
  tags?: string[]
}

/**
 * Generate metadata for Next.js pages
 */
export function generateSEO({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  url = siteConfig.url,
  type = "website",
  publishedTime,
  authors,
  tags,
}: SEOProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.title}`

  return {
    title: fullTitle,
    description,
    keywords: tags?.join(", "),
    authors: authors?.map((name) => ({ name })),
    creator: siteConfig.name,
    openGraph: {
      type,
      locale: "en_US",
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
      creator: "@adeelhashmi", // Replace with actual Twitter handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  }
}

/**
 * Generate structured data for rich snippets
 */
export function generatePersonStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    image: siteConfig.ogImage,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin, siteConfig.links.twitter].filter(Boolean),
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Frontend Development",
      "Web Development",
      "JavaScript",
      "Tailwind CSS",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Your University", // Replace with actual education
    },
    worksFor: {
      "@type": "Organization",
      name: "Freelance", // Replace with current company
    },
  }
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

/**
 * Generate social sharing URLs
 */
export function generateSocialShareUrls(url: string, title: string) {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  return {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    reddit: `https://reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
    hackernews: `https://news.ycombinator.com/submitlink?u=${encodedUrl}&t=${encodedTitle}`,
  }
}
