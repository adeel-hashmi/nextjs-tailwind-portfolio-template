"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, AlertCircle, MessageSquare, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface FeedbackForm {
  name: string
  email: string
  message: string
}

export function FeedbackSection() {
  const [formData, setFormData] = useState<FeedbackForm>({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.message.trim()) {
      toast({
        title: "Message required",
        description: "Please share your feedback before submitting.",
        variant: "destructive",
      })
      return
    }

    setStatus("loading")

    try {
      // Replace with your actual API endpoint or form handler
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", message: "" })
        toast({
          title: "Thank you for your feedback! 🎉",
          description: "Your thoughts help me improve this portfolio.",
        })
      } else {
        throw new Error("Failed to submit feedback")
      }
    } catch {
      setStatus("error")
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out directly via email.",
        variant: "destructive",
      })
    }

    // Reset status after 3 seconds
    setTimeout(() => setStatus("idle"), 3000)
  }

  const handleInputChange = (field: keyof FeedbackForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
      aria-labelledby="feedback-heading"
    >
      <div className="text-center space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="text-4xl"
            >
              💬
            </motion.div>
          </div>
        </motion.div>

        <h2
          id="feedback-heading"
          className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          Honest Feedback
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Help me improve this portfolio — share your thoughts! Your feedback is invaluable for making this site better
          for future visitors.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 hover:bg-card/80 transition-all duration-300">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 pointer-events-none" />

          <CardHeader className="relative">
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 bg-primary/10 rounded-lg">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              Share Your Thoughts
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              What do you think about the design, content, or user experience? All feedback is welcome!
            </p>
          </CardHeader>

          <CardContent className="relative space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Optional Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="feedback-name" className="text-sm font-medium">
                    Name <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="feedback-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name"
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background transition-all duration-200"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="feedback-email" className="text-sm font-medium">
                    Email <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="feedback-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background transition-all duration-200"
                  />
                </div>
              </div>

              {/* Required Message Field */}
              <div className="space-y-2">
                <Label htmlFor="feedback-message" className="text-sm font-medium">
                  Your Feedback <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="feedback-message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="What do you think about this portfolio? Any suggestions for improvement? What caught your attention?"
                  className="bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background transition-all duration-200 min-h-[120px] resize-none"
                  required
                />
                <p className="text-xs text-muted-foreground">
                  Feel free to be honest — constructive feedback helps me grow!
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>Your feedback matters</span>
                </div>

                <Button
                  type="submit"
                  disabled={status === "loading" || !formData.message.trim()}
                  className={`
                    px-6 py-2 font-medium transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background
                    ${
                      status === "success"
                        ? "bg-green-600 hover:bg-green-700 text-white"
                        : status === "error"
                          ? "bg-red-600 hover:bg-red-700 text-white"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                    }
                  `}
                >
                  {status === "loading" ? (
                    <>
                      <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Sent! Thank you
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Try Again
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Feedback
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Success Message */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg"
              >
                <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                  <CheckCircle className="w-5 h-5" />
                  <p className="font-medium">Feedback received!</p>
                </div>
                <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                  Thank you for taking the time to share your thoughts. It really helps me improve!
                </p>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </motion.div>

      {/* Encouragement Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted/30 border border-border/50 rounded-full text-sm text-muted-foreground">
          <span>💡</span>
          <span>All feedback is anonymous unless you provide your email</span>
        </div>
      </motion.div>
    </motion.section>
  )
}
