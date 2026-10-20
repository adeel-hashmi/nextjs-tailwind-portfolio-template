"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: "logistics-dashboard",
    title: "Logistics Dashboard",
    description:
      "Interactive dashboard with real-time maps, Gantt timeline charts, drag & drop functionality, and live data updates for logistics management.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React.js", "TypeScript", "Leaflet.js", "DnD Kit", "Redux Toolkit", "Canvas API"],
    featured: true,
  },
  {
    id: "cms-dashboard",
    title: "Self-Service CMS Dashboard",
    description:
      "Server-side rendered CMS with role-based permissions, content management, and user authentication system.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["Next.js", "TypeScript", "SSR", "Auth", "Tailwind CSS", "Zustand"],
    featured: true,
  },
  {
    id: "government-portals",
    title: "Government Portals",
    description:
      "Multiple government portals (PSEB, ASF, OGRA) integrated with Laravel backend, featuring complex forms and data visualization.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React.js", "Laravel Integration", "REST APIs", "Forms", "Charts", "Responsive"],
    featured: true,
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" variant="secondary">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      <Button size="sm" variant="secondary">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      {project.featured && <Badge variant="secondary">Featured</Badge>}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={`/projects/${project.id}`}>
                      <Button className="w-full group">
                        View Case Study
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
