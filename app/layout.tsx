import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { TemplateNotice } from "@/components/template-notice"
import { siteConfig } from "@/lib/config"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Portfolio template demo",
    template: "%s | Portfolio template",
  },
  description: siteConfig.description,
  keywords: ["Next.js", "TypeScript", "Tailwind CSS", "portfolio template"],
  authors: [{ name: "Adeel Hashmi", url: "https://github.com/adeel-hashmi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Portfolio template demo",
    description: siteConfig.description,
    siteName: "Next.js portfolio template",
  },
  twitter: {
    card: "summary",
    title: "Portfolio template demo",
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TemplateNotice />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
