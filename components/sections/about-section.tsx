"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">About Me</h2>

          <Card className="p-8">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-muted rounded-full flex items-center justify-center text-6xl font-bold text-primary">
                      AH
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    👋 Hi, I&apos;m Adeel — a frontend developer with 4+ years experience building scalable,
                    performance-driven web apps. I specialize in React.js, Next.js, TypeScript, Redux Toolkit, Zustand,
                    Tailwind CSS.
                  </p>

                  <p className="text-lg leading-relaxed">
                    I&apos;ve built logistics dashboards with maps & Gantt charts, CMS dashboards, and government portals. I
                    focus on SSR, lazy loading, responsive design, and clean, maintainable code.
                  </p>

                  <p className="text-lg leading-relaxed">
                    I&apos;m open to remote or relocation opportunities in Germany/EU/UK/Canada.
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {["4+ Years Experience", "Remote Ready", "EU Relocation", "Performance Focused"].map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
