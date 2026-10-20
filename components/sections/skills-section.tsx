"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
  { name: "React.js", icon: "⚛️", category: "Frontend" },
  { name: "Next.js", icon: "▲", category: "Frontend" },
  { name: "TypeScript", icon: "📘", category: "Language" },
  { name: "Redux Toolkit", icon: "🔄", category: "State Management" },
  { name: "Zustand", icon: "🐻", category: "State Management" },
  { name: "Tailwind CSS", icon: "🎨", category: "Styling" },
  { name: "Shadcn UI", icon: "🎯", category: "UI Library" },
  { name: "Magic UI", icon: "✨", category: "UI Library" },
  { name: "Framer Motion", icon: "🎬", category: "Animation" },
  { name: "REST APIs", icon: "🌐", category: "Integration" },
  { name: "Leaflet.js", icon: "🗺️", category: "Maps" },
  { name: "Canvas API", icon: "🎨", category: "Graphics" },
  { name: "DnD Kit", icon: "🤏", category: "Interaction" },
  { name: "Git", icon: "📝", category: "Tools" },
  { name: "Jira", icon: "📋", category: "Tools" },
  { name: "CI/CD", icon: "🚀", category: "DevOps" },
]

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Skills & Technologies</h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={itemVariants}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="font-semibold text-sm mb-1">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground">{skill.category}</p>
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
