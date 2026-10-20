/**
 * Global Type Definitions
 *
 * Centralized type definitions used across the application.
 * Helps maintain type safety and consistency.
 */

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  problem: string
  solution: string
  role: string
  duration: string
  team: string
  image: string
  heroImage: string
  tags: string[]
  icon: string
  featured: boolean
  liveUrl?: string
  githubUrl?: string
  metrics: ProjectMetrics
  features: string[]
  challenges: string[]
  technologies: Record<string, string[]>
  gallery?: string[]
}

export interface ProjectMetrics {
  users: string
  performance: string
  impact: string
}

export interface Skill {
  name: string
  icon: string
  experience: string
  category: SkillCategory
  proficiency: number
  color: string
  description?: string
}

export type SkillCategory =
  | "Frontend"
  | "Framework"
  | "Language"
  | "State"
  | "Styling"
  | "Animation"
  | "Integration"
  | "Maps"
  | "Graphics"
  | "Tools"
  | "DevOps"

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  readTime: string
  tags: string[]
  featured: boolean
  views?: number
  likes?: number
}

export interface WorkExperience {
  company: string
  role: string
  duration: string
  logo: string
  description: string
  achievements?: string[]
  technologies?: string[]
}

export interface ContactForm {
  name: string
  email: string
  company?: string
  message: string
  budget?: string
  timeline?: string
}

export interface FeedbackForm {
  name?: string
  email?: string
  message: string
}

export interface VisitData {
  total: number
  today: number
  thisWeek: number
  lastUpdated: string
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  hidden: {
    opacity: number
    y?: number
    x?: number
    scale?: number
  }
  visible: {
    opacity: number
    y?: number
    x?: number
    scale?: number
    transition?: {
      duration?: number
      delay?: number
      ease?: string
      staggerChildren?: number
    }
  }
}

// Theme types
export type Theme = "light" | "dark" | "system"

// Status types
export type LoadingStatus = "idle" | "loading" | "success" | "error"
