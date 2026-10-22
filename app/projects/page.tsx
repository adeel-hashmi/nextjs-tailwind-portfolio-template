"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { getAllProjects } from "@/data/projects"

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="pt-8">
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl font-bold mb-4">Sample projects</h1>
            <p className="text-muted-foreground text-lg mb-8">
              Fictional case studies demonstrating project layouts. The examples are not deployed applications or verified client outcomes.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
