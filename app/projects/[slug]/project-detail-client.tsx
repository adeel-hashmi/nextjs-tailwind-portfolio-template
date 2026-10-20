"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, User, TrendingUp, Zap, Target } from "lucide-react"
import type { Project } from "@/data/projects"

interface ProjectDetailClientProps {
  project: Project
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const handleLiveDemo = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer")
    }
  }

  const handleViewCode = () => {
    if (project.githubUrl) {
      window.open(project.githubUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Project Header */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-md opacity-50" />
                    <div className="relative w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-2xl border border-border/50">
                      <span role="img" aria-label={`${project.title} icon`}>
                        {project.icon}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h1 className="text-4xl font-bold text-foreground">{project.title}</h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="bg-muted/50 border-border/30 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <Button
                      onClick={handleLiveDemo}
                      className="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      onClick={handleViewCode}
                      variant="outline"
                      className="bg-muted/50 hover:bg-muted border border-border/50 hover:border-border focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Source Code
                    </Button>
                  )}
                </div>
              </div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl"
              >
                <Image
                  width={1200}
                  height={600}
                  src={project.heroImage || "/placeholder.svg?height=600&width=1200&text=Project+Hero"}
                  alt={`${project.title} hero image`}
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {/* Project Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-4 gap-6"
            >
              <Card className="text-center">
                <CardHeader className="pb-3">
                  <User className="w-6 h-6 mx-auto text-primary" />
                  <CardTitle className="text-sm font-medium">Role</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{project.role}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-3">
                  <Calendar className="w-6 h-6 mx-auto text-primary" />
                  <CardTitle className="text-sm font-medium">Duration</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{project.duration}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-3">
                  <Users className="w-6 h-6 mx-auto text-primary" />
                  <CardTitle className="text-sm font-medium">Team Size</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{project.team}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader className="pb-3">
                  <TrendingUp className="w-6 h-6 mx-auto text-primary" />
                  <CardTitle className="text-sm font-medium">Impact</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{project.metrics.impact}</p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Target className="mr-3 h-6 w-6 text-primary" />
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
              </div>
            </motion.section>

            <Separator />

            {/* Problem & Solution */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                    The Problem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                    The Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </CardContent>
              </Card>
            </motion.section>

            <Separator />

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Zap className="mr-3 h-6 w-6 text-primary" />
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground leading-relaxed">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <Separator />

            {/* Technical Challenges */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Technical Challenges & Solutions</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            <Separator />

            {/* Technologies Used */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold mb-6">Technologies & Tools</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(project.technologies).map(([category, techs]) => (
                  <Card key={category}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.section>

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <>
                <Separator />
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Project Gallery</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative rounded-lg overflow-hidden border border-border/50 hover:border-border transition-colors"
                      >
                        <Image
                  width={600}
                  height={400}
                          src={image || "/placeholder.svg?height=400&width=600&text=Gallery+Image"}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </>
            )}

            {/* Call to Action */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center py-12 bg-muted/30 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities and exciting projects. Let&apos;s build something amazing
                together.
                   </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get in Touch
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button size="lg" variant="outline">
                    View More Projects
                  </Button>
                </Link>
              </div>
            </motion.section>
          </div>
        </section>
      </main>
    </div>
  )
}
