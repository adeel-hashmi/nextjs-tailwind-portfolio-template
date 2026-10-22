"use client"

import { motion, type Variants } from "framer-motion"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const skills = [
  {
    name: "React.js",
    icon: "⚛️",
    experience: "4+ years",
    category: "Frontend",
    proficiency: 95,
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "Next.js",
    icon: "▲",
    experience: "3+ years",
    category: "Framework",
    proficiency: 90,
    color: "from-gray-700 to-gray-900 dark:from-white dark:to-gray-300",
  },
  {
    name: "TypeScript",
    icon: "📘",
    experience: "4+ years",
    category: "Language",
    proficiency: 88,
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Redux Toolkit",
    icon: "🔄",
    experience: "3+ years",
    category: "State",
    proficiency: 85,
    color: "from-purple-500 to-purple-700",
  },
  {
    name: "Zustand",
    icon: "🐻",
    experience: "2+ years",
    category: "State",
    proficiency: 82,
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    experience: "4+ years",
    category: "Styling",
    proficiency: 92,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Framer Motion",
    icon: "🎬",
    experience: "2+ years",
    category: "Animation",
    proficiency: 80,
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "REST APIs",
    icon: "🌐",
    experience: "4+ years",
    category: "Integration",
    proficiency: 90,
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Leaflet.js",
    icon: "🗺️",
    experience: "2+ years",
    category: "Maps",
    proficiency: 75,
    color: "from-green-600 to-green-800",
  },
  {
    name: "Canvas API",
    icon: "🎯",
    experience: "1+ years",
    category: "Graphics",
    proficiency: 70,
    color: "from-red-500 to-red-700",
  },
  {
    name: "Git",
    icon: "📝",
    experience: "4+ years",
    category: "Tools",
    proficiency: 88,
    color: "from-gray-600 to-gray-800",
  },
  {
    name: "CI/CD",
    icon: "🚀",
    experience: "3+ years",
    category: "DevOps",
    proficiency: 78,
    color: "from-indigo-500 to-indigo-700",
  },
]

const categories = [
  "All",
  "Frontend",
  "Framework",
  "Language",
  "State",
  "Styling",
  "Animation",
  "Integration",
  "Maps",
  "Graphics",
  "Tools",
  "DevOps",
]

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
      aria-labelledby="skills-heading"
    >
      <div className="text-center space-y-4">
        <h2
          id="skills-heading"
          className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          Sample skills & technologies
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Example categories and proficiency values for the layout. Replace them with skills you can demonstrate.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Skill categories">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            role="tab"
            aria-selected={selectedCategory === category}
            aria-controls="skills-grid"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50 hover:border-border"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Simplified Skills Grid - No Tooltips */}
      <motion.div
        id="skills-grid"
        role="tabpanel"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {filteredSkills.map((skill) => (
          <motion.div key={skill.name} variants={itemVariants} className="group">
            <Card
              className="relative p-6 bg-card border border-border rounded-2xl transition-all duration-300 h-full flex flex-col justify-center items-center text-center
              hover:scale-105 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5 
              hover:bg-card/90 hover:border-border/80
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background
              transform-gpu will-change-transform cursor-default"
              tabIndex={0}
              role="button"
              aria-label={`${skill.name} - ${skill.experience} experience`}
            >
              {/* Subtle Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-sm`}
              />

              {/* Icon */}
              <div
                className="text-3xl mb-3 transition-transform duration-300 group-hover:scale-110"
                role="img"
                aria-label={`${skill.name} icon`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300 mb-2 leading-tight">
                {skill.name}
              </h3>

              {/* Experience Badge */}
              <Badge
                variant="secondary"
                className="bg-muted/50 text-muted-foreground border-border/30 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 text-xs"
              >
                {skill.experience}
              </Badge>

              {/* Subtle proficiency indicator */}
              <div className="mt-3 w-full max-w-16 h-1 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-500 group-hover:shadow-sm`}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center pt-8"
      >
        <p className="text-sm text-muted-foreground">These proficiency values are sample data, not an assessment.</p>
      </motion.div>
    </motion.section>
  )
}
