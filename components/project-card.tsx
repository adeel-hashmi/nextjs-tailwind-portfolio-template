"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink, Github, TrendingUp, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ProjectCardProps {
  project: {
    id: string
    slug: string
    title: string
    description: string
    image?: string
    tags: string[]
    icon: string
    featured?: boolean
    githubUrl?: string
    liveUrl?: string
    metrics?: {
      users: string
      performance: string
      impact: string
    }
  }
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const handleLiveDemo = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer")
    }
  }

  const handleViewCode = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (project.githubUrl) {
      window.open(project.githubUrl, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative"
    >
      {/* Subtle Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-green-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      <Card className="relative p-8 bg-card hover:bg-card/80 border border-border hover:border-border/60 rounded-3xl transition-all duration-200 group-hover:shadow-xl group-hover:shadow-black/5 dark:group-hover:shadow-white/5 h-full">
        {/* Project Icon with Glow */}
        <div className="flex items-start justify-between mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-200" />
            <div className="relative w-16 h-16 bg-muted rounded-2xl flex items-center justify-center text-2xl border border-border/50">
              <span role="img" aria-label={`${project.title} icon`}>
                {project.icon}
              </span>
            </div>
          </div>

          {project.featured && (
            <Badge className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-600 dark:text-yellow-400 border-yellow-500/30">
              ⭐ Featured
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{project.description}</p>
          </div>

          {/* Metrics */}
          {project.metrics && <p className="text-xs text-muted-foreground">Illustrative values</p>}
          {project.metrics && (
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                <TrendingUp className="w-3 h-3" />
                {project.metrics.users}
              </div>
              <div className="text-blue-600 dark:text-blue-400">{project.metrics.performance}</div>
              <div className="text-purple-600 dark:text-purple-400">{project.metrics.impact}</div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="bg-muted/50 border-border/30 text-muted-foreground text-xs hover:bg-muted hover:text-foreground transition-colors duration-200"
              >
                {tag}
              </Badge>
            ))}
            {project.tags.length > 4 && (
              <Badge
                variant="outline"
                className="bg-muted/50 border-border/30 text-muted-foreground text-xs"
                title={`Additional technologies: ${project.tags.slice(4).join(", ")}`}
              >
                +{project.tags.length - 4} more
              </Badge>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            {project.liveUrl && (
              <Button
                onClick={handleLiveDemo}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                onClick={handleViewCode}
                size="sm"
                variant="outline"
                className="bg-muted/50 hover:bg-muted text-foreground border-border/50 hover:border-border transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
                aria-label={`View source code of ${project.title}`}
              >
                <Github className="w-3 h-3 mr-2" />
                Code
              </Button>
            )}
            <Link href={`/projects/${project.slug}`} className="flex-1">
              <Button
                size="sm"
                variant="outline"
                className="w-full bg-muted/50 hover:bg-muted text-foreground border-border/50 hover:border-border transition-all duration-200 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background group/btn"
                aria-label={`View sample case study for ${project.title}`}
              >
                Sample case study
                <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
