"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { SkillsSection } from "@/components/skills-section"
import { ProjectCard } from "@/components/project-card"
import { FAQSection } from "@/components/faq-section"
import { FeedbackSection } from "@/components/feedback-section"
import { VisitorCount, VisitorCountCompact, AnalyticsBadge } from "@/components/visitor-count"
import { Github, Linkedin, Mail, Calendar, Download, Globe, ArrowRight, Sparkles } from "lucide-react"

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

const projects = [
  {
    id: "1",
    slug: "logistics-dashboard",
    title: "Logistics Dashboard",
    description: "Reduced delivery times by 35% with real-time tracking dashboard serving 10K+ daily users",
    tags: ["React.js", "TypeScript", "Leaflet.js", "WebSocket", "Redux Toolkit", "Canvas API"],
    icon: "📊",
    featured: true,
    liveUrl: "https://logistics-demo.example.com",
    githubUrl: "https://github.com/adeelhashmi/logistics-dashboard",
    metrics: {
      users: "10K+ daily",
      performance: "60% faster",
      impact: "€2M+ savings",
    },
  },
  {
    id: "2",
    slug: "cms-dashboard",
    title: "CMS Dashboard",
    description: "Server-side rendered CMS with role-based permissions serving 50K+ content pieces",
    tags: ["Next.js", "TypeScript", "SSR", "Auth", "Tailwind CSS", "Zustand"],
    icon: "⚙️",
    featured: true,
    liveUrl: "https://cms-demo.example.com",
    githubUrl: "https://github.com/adeelhashmi/cms-dashboard",
    metrics: {
      users: "5K+ editors",
      performance: "40% faster",
      impact: "80% efficiency",
    },
  },
  {
    id: "3",
    slug: "government-portals",
    title: "Government Portals",
    description: "Multiple government portals processing 100K+ applications with 99.9% uptime",
    tags: [
      "React.js",
      "Laravel Integration",
      "REST APIs",
      "Forms",
      "Charts",
      "Responsive",
      "Accessibility",
      "Security",
    ],
    icon: "🏛️",
    featured: true,
    liveUrl: undefined,
    githubUrl: undefined,
    metrics: {
      users: "100K+ citizens",
      performance: "50% faster",
      impact: "99.9% uptime",
    },
  },
]

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
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
            >
              AH
            </motion.div>

            <div className="flex items-center gap-6">
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
                href="#feedback"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
              >
                Feedback
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
                Contact
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <Badge className="px-4 py-2 bg-green-500/10 hover:bg-green-500/20 border border-green-500/20 text-green-600 dark:text-green-400 transition-all duration-300">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  />
                  Available for hire • Remote & EU Relocation
                </Badge>
              </motion.div>

              {/* Main Hero Content */}
              <div className="text-center space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-6"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full blur-sm opacity-75"
                    />
                    <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold border border-border/20">
                      AH
                    </div>
                  </div>
                  <div className="text-left">
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
                      Adeel Hashmi
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
                  Senior Frontend Engineer crafting <span className="text-foreground font-semibold">pixel-perfect</span>{" "}
                  experiences with <span className="text-blue-500">React</span>,{" "}
                  <span className="text-foreground bg-muted px-2 py-1 rounded">Next.js</span>, and{" "}
                  <span className="text-blue-600">TypeScript</span>.
                  <br />
                  <span className="text-sm text-muted-foreground/70 mt-2 block">
                    4+ years • 50+ projects • Available for EU relocation
                  </span>
                </motion.p>

                {/* Visitor Count in Hero */}
                <div className="flex justify-center">
                  <VisitorCountCompact />
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <Button className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-primary/25 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                    <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Let&apos;s Build Something Amazing
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      className="bg-muted/50 hover:bg-muted border border-border/50 hover:border-border px-6 py-3 rounded-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Resume
                    </Button>

                    <Button
                      variant="outline"
                      asChild
                      className="bg-muted/50 hover:bg-muted border border-border/50 hover:border-border px-6 py-3 rounded-full transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <a href="https://github.com/adeelhashmi" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex justify-center gap-4 pt-8"
                >
                  {[
                    { icon: Github, href: "https://github.com/adeelhashmi", label: "GitHub" },
                    { icon: Linkedin, href: "https://linkedin.com/in/adeelhashmi", label: "LinkedIn" },
                    { icon: Mail, href: "mailto:adeel.hashmi@example.com", label: "Email" },
                  ].map(({ icon: Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-muted/50 hover:bg-muted border border-border/50 hover:border-border rounded-2xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                      aria-label={`Visit my ${label} profile`}
                    >
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </motion.a>
                  ))}
                </motion.div>
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
            <h2 className="text-2xl font-bold">About</h2>
            <div className="text-muted-foreground space-y-4 leading-relaxed">
              <p>
                👋 Hi, I&apos;m Adeel — a senior frontend engineer who transforms complex business requirements into
                intuitive user experiences. My code powers applications used by{" "}
                <span className="text-foreground font-semibold">100K+ users daily</span> across logistics, government,
                and SaaS platforms.
              </p>
              <p>
                I specialize in{" "}
                <Link
                  href="#"
                  className="text-foreground underline hover:text-foreground/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
                >
                  React.js
                </Link>
                ,{" "}
                <Link
                  href="#"
                  className="text-foreground underline hover:text-foreground/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
                >
                  Next.js
                </Link>
                ,{" "}
                <Link
                  href="#"
                  className="text-foreground underline hover:text-foreground/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
                >
                  TypeScript
                </Link>
                , and modern frontend architecture. I focus on performance, scalability, and pixel-perfect
                implementations.
              </p>
              <p>
                Currently open to remote opportunities or relocation to{" "}
                <Link
                  href="#"
                  className="text-foreground underline hover:text-foreground/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
                >
                  Germany/EU/UK/Canada
                </Link>
                . Let&apos;s build something amazing together.
              </p>
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
            <h2 className="text-2xl font-bold">Work Experience</h2>
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
              <h2 className="text-2xl font-bold">Featured Projects</h2>
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

          {/* Feedback Section */}
          <section id="feedback">
            <FeedbackSection />
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
              <h2 className="text-2xl font-bold">Latest Posts</h2>
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
            <h2 className="text-2xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground">
              I&apos;m always open to discussing new opportunities and exciting projects. Let&apos;s build something amazing
              together!
                 </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                asChild
                className="bg-muted/50 hover:bg-muted border border-border/50 hover:border-border focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <a href="https://linkedin.com/in/adeelhashmi" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="bg-muted/50 hover:bg-muted border border-border/50 hover:border-border focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <a href="https://github.com/adeelhashmi" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
            </div>
          </motion.section>

          {/* Footer with Analytics */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 border-t border-border/50 space-y-6"
          >
            {/* Visitor Count */}
            <div className="flex justify-center">
              <VisitorCount />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {[
                  { icon: Globe, href: "https://adeelhashmi.dev", label: "Website" },
                  { icon: Github, href: "https://github.com/adeelhashmi", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com/in/adeelhashmi", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:adeel.hashmi@example.com", label: "Email" },
                  { icon: Calendar, href: "https://cal.com/adeelhashmi", label: "Schedule a call" },
                ].map(({ icon: Icon, href, label }) => (
                  <Button
                    key={label}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="text-muted-foreground hover:text-foreground focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                  >
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                      <Icon className="w-4 h-4" />
                    </a>
                  </Button>
                ))}
              </div>

              <AnalyticsBadge />
            </div>

            <div className="text-center text-sm text-muted-foreground/70">
              © 2024 Adeel Hashmi. Built with Next.js & Tailwind CSS.
            </div>
          </motion.footer>
        </div>
      </main>
    </div>
  )
}
