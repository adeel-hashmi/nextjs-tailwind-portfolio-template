"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { SkillsSection } from "@/components/skills-section"
import { ProjectCard } from "@/components/project-card"
import { FAQSection } from "@/components/faq-section"
import { Github, Download, ArrowRight } from "lucide-react"
import { getAllProjects } from "@/data/projects"
import { siteConfig } from "@/lib/config"

const workExperience = [
  {
    company: "Tech Solutions Inc",
    role: "SWE II - Frontend Developer",
    duration: "2022 - Present",
    logo: "💼",
    description: "Leading frontend development for enterprise applications",
  },
  {
    company: "Digital Agency",
    role: "Frontend Developer",
    duration: "2021 - 2022",
    logo: "🎨",
    description: "Built responsive web applications and CMS solutions",
  },
  {
    company: "Government Contractor",
    role: "Frontend Developer",
    duration: "2020 - 2021",
    logo: "🏛️",
    description: "Developed government portals and public-facing applications",
  },
  {
    company: "Startup Inc",
    role: "Junior Frontend Developer",
    duration: "2019 - 2020",
    logo: "🚀",
    description: "Built logistics dashboards and data visualization tools",
  },
]

const projects = getAllProjects()

const blogPosts = [
  {
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt: "Learn advanced techniques for optimizing React applications, including memoization and code splitting.",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    slug: "optimizing-react-performance",
  },
  {
    title: "Complete Guide to Next.js App Router",
    excerpt: "Everything you need to know about the new App Router in Next.js 13+, including server components.",
    date: "Jan 10, 2024",
    readTime: "12 min read",
    slug: "nextjs-app-router-guide",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Glass Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              PT
            </motion.div>

            <div className="flex flex-wrap items-center justify-end gap-3 sm:gap-6">
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
              >
                Projects
              </a>
              <a
                href="#faq"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
              >
                FAQ
              </a>
              <a
                href="#blog"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
              >
                Blog
              </a>
              <a
                href="#contact"
                className="px-4 py-2 bg-muted/50 hover:bg-muted text-foreground rounded-full text-sm transition-all duration-200 border border-border/50 hover:border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                Setup
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-8">
        {/* Hero Section */}
        <section className="min-h-[calc(100svh-9rem)] py-12 flex items-center justify-center relative overflow-hidden">
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-purple-600/30 dark:from-blue-500/20 dark:to-purple-600/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-500/20 to-blue-500/20 dark:from-green-500/10 dark:to-blue-500/10 rounded-full blur-3xl"
            />
          </div>

          <div className="max-w-2xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Main Hero Content */}
              <div className="text-center space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full blur-sm opacity-75"
                    />
                    <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold border border-border/20">
                      YN
                    </div>
                  </div>
                  <div className="text-left">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                      Your Name
                    </h1>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1 }}
                      className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"
                    />
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                >
                  Example developer profile using a portfolio built with <span className="text-blue-500">React</span>,{" "}
                  <span className="text-foreground bg-muted px-2 py-1 rounded">Next.js</span>, and{" "}
                  <span className="text-blue-600">TypeScript</span>.
                  <br />
                  <span className="text-sm text-muted-foreground/70 mt-2 block">
                    Replace this profile and the sample content with your own verified experience.
                  </span>
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col gap-4 justify-center items-center"
                >
                  <Button asChild className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/25 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                    <a href="#projects">
                      Explore sample projects
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>

                  <div className="flex flex-wrap justify-center gap-2">
                    <Button
                      disabled
                      aria-describedby="resume-note"
                      variant="outline"
                      className="bg-muted/50 hover:bg-muted border border-border/50 hover:border-border px-6 py-3 rounded-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Resume unavailable
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      className="bg-muted/50 hover:bg-muted border border-border/50 hover:border-border px-6 py-3 rounded-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <a href={siteConfig.repository} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Template source
                      </a>
                    </Button>
                  </div>
                </motion.div>

                <p id="resume-note" className="text-sm text-muted-foreground">No resume is included in this template demo.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-6 space-y-16">
          {/* About Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold">About this template</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>Explore a portfolio layout with project pages, a filterable skills section, sample articles and a theme switcher.</p>
              <p>The employers, roles, dates, proficiency levels and project results are fictional examples. Replace them with your own supported content before publishing.</p>
              <p>Setup instructions and integration limitations are documented in the repository README.</p>
            </div>
          </motion.section>

          {/* Work Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Sample work experience</h2>
            <div className="space-y-4">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-muted/50 hover:bg-muted border border-border/50 hover:border-border flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300">
                    <span role="img" aria-label={`${job.company} logo`}>
                      {job.logo}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-foreground">{job.company}</h3>
                      <span className="text-sm text-muted-foreground flex-shrink-0">{job.duration}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{job.role}</p>
                    <p className="text-muted-foreground/70 text-sm mt-1">{job.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <SkillsSection />

          {/* Projects */}
          <motion.section
            id="projects"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Sample projects</h2>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
              >
                View all →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </motion.section>

          {/* FAQ Section */}
          <section id="faq">
            <FAQSection />
          </section>

          {/* Blog */}
          <motion.section
            id="blog"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Sample articles</h2>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
              >
                View all →
              </Link>
            </div>
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-2xl"
                  >
                    <Card className="p-6 bg-card hover:bg-card/80 border border-border hover:border-border/60 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/5 dark:group-hover:shadow-white/5">
                      <h3 className="font-medium text-foreground group-hover:text-primary mb-2 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground/70">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">Use this template</h2>
            <p className="text-muted-foreground">Start with the repository instructions, replace the sample content and verify your links before publishing. Contact and feedback delivery are not configured in this demo.</p>
            <Button asChild>
              <a href={`${siteConfig.repository}#readme`} target="_blank" rel="noopener noreferrer">
                Read setup instructions <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.section>

          {/* Footer with Analytics */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 border-t border-border/50 space-y-6"
          >
            <p className="text-center text-sm text-muted-foreground">
              Template by <a href="https://github.com/adeel-hashmi" className="underline underline-offset-4">Adeel Hashmi</a>. Built with Next.js and Tailwind CSS.
            </p>
          </motion.footer>
        </div>
      </main>
    </div>
  )
}
