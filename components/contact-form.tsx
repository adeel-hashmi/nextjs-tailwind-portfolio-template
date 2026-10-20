"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Replace with your form handler
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", company: "", budget: "", timeline: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  return (
    <section className="py-20">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-gray-400">
            Let&apos;s discuss how I can help bring your vision to life.
            <br />
            <span className="text-sm">Usually respond within 2 hours</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  className="bg-white/5 border-white/20 focus:border-white/40 backdrop-blur-xl"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  className="bg-white/5 border-white/20 focus:border-white/40 backdrop-blur-xl"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  className="bg-white/5 border-white/20 focus:border-white/40 backdrop-blur-xl"
                  placeholder="Acme Corp"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Budget Range</label>
                <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, budget: value }))}>
                  <SelectTrigger className="bg-white/5 border-white/20 focus:border-white/40 backdrop-blur-xl">
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20 backdrop-blur-xl">
                    <SelectItem value="5k-10k">€5K - €10K</SelectItem>
                    <SelectItem value="10k-25k">€10K - €25K</SelectItem>
                    <SelectItem value="25k-50k">€25K - €50K</SelectItem>
                    <SelectItem value="50k+">€50K+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Timeline</label>
              <Select onValueChange={(value) => setFormData((prev) => ({ ...prev, timeline: value }))}>
                <SelectTrigger className="bg-white/5 border-white/20 focus:border-white/40 backdrop-blur-xl">
                  <SelectValue placeholder="When do you need this?" />
                </SelectTrigger>
                <SelectContent className="bg-gray-900 border-white/20 backdrop-blur-xl">
                  <SelectItem value="asap">ASAP</SelectItem>
                  <SelectItem value="1-2months">1-2 months</SelectItem>
                  <SelectItem value="3-6months">3-6 months</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Project Details *</label>
              <Textarea
                required
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                className="bg-white/5 border-white/20 focus:border-white/40 backdrop-blur-xl min-h-[120px]"
                placeholder="Tell me about your project, goals, and any specific requirements..."
              />
            </div>

            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-white text-black hover:bg-gray-200 py-3 font-semibold transition-all duration-300"
            >
              {status === "loading" ? (
                <div className="animate-spin w-4 h-4 border-2 border-black border-t-transparent rounded-full mr-2" />
              ) : status === "success" ? (
                <CheckCircle className="w-4 h-4 mr-2" />
              ) : status === "error" ? (
                <AlertCircle className="w-4 h-4 mr-2" />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}

              {status === "loading"
                ? "Sending..."
                : status === "success"
                  ? "Message Sent!"
                  : status === "error"
                    ? "Try Again"
                    : "Send Message"}
            </Button>

            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-400 text-sm"
              >
                Thanks! I&apos;ll get back to you within 2 hours.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}
