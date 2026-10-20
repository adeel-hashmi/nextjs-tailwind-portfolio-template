"use client"

import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAnalytics } from "@/lib/analytics"

export function HeroSection() {
  const { trackResumeDownload, trackContactForm } = useAnalytics()

  return (
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
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Status Badge with Glass Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Badge className="px-4 py-2 bg-green-500/10 hover:bg-green-500/20 backdrop-blur-xl border border-green-500/20 text-green-400 transition-all duration-300">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 bg-green-400 rounded-full mr-2"
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
                <div className="relative w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold backdrop-blur-xl border border-white/20">
                  AH
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
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
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Senior Frontend Engineer crafting <span className="text-white font-semibold">pixel-perfect</span>{" "}
              experiences with <span className="text-blue-400">React</span>,{" "}
              <span className="text-black bg-white px-2 py-1 rounded">Next.js</span>, and{" "}
              <span className="text-blue-500">TypeScript</span>.
              <br />
              <span className="text-sm text-gray-400 mt-2 block">
                4+ years • 50+ projects • Available for EU relocation
              </span>
            </motion.p>

            {/* CTA Buttons with Glass Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={() => trackContactForm("hero")}
                className="group bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-2xl hover:shadow-white/25"
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Let&apos;s Build Something Amazing
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => trackResumeDownload()}
                variant="outline"
                className="bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/20 text-white px-6 py-3 rounded-full transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links with Glass Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex justify-center gap-4 pt-8"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
