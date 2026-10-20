"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface ProjectDetailProps {
  project: {
    title: string
    description: string
    longDescription: string
    image: string
    tags: string[]
    role: string
    duration: string
    team: string
    features: string[]
    challenges: string[]
    technologies: Record<string, string[]>
  }
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Link href="/#projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="group">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                <Button variant="outline" className="group bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </div>

            <div className="mb-12">
              <Image
                  width={1200}
                  height={600}
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Role
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.role}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.duration}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="mr-2 h-5 w-5" />
                    Team Size
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{project.team}</p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-6">Challenges & Solutions</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <p className="text-muted-foreground">{challenge}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              <Separator />

              <section>
                <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(project.technologies).map(([category, techs]) => (
                    <Card key={category}>
                      <CardHeader>
                        <CardTitle className="text-lg">{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech) => (
                            <Badge key={tech} variant="outline">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m always open to discussing new opportunities and exciting projects.
              </p>
              <Link href="/#contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
