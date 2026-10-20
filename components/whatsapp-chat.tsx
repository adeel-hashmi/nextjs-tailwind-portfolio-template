"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  // Show button after page loads
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000)
    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = "923001234567" // Replace with your actual WhatsApp number
  const defaultMessage = "Hi Adeel! I'm interested in discussing a project opportunity with you."

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mb-4 w-80 max-w-[calc(100vw-3rem)]"
            >
              <div className="bg-background/95 dark:bg-background/90 backdrop-blur-xl border border-border/20 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-[#25D366] p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                        AH
                      </div>
                      <div>
                        <h3 className="font-semibold">Adeel Hashmi</h3>
                        <p className="text-xs text-white/80">Senior Frontend Engineer</p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20 h-8 w-8"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Chat Content */}
                <div className="p-4 space-y-4">
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      AH
                    </div>
                    <div className="bg-muted/50 rounded-2xl rounded-tl-md p-3 max-w-[80%]">
                      <p className="text-sm text-foreground">
                        👋 Hi there! I&apos;m available to discuss your project needs.
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Usually responds within an hour</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      AH
                    </div>
                    <div className="bg-muted/50 rounded-2xl rounded-tl-md p-3 max-w-[80%]">
                      <p className="text-sm text-foreground">Let&apos;s chat about:</p>
                      <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                        <li>• Frontend development projects</li>
                        <li>• React/Next.js applications</li>
                        <li>• Remote opportunities</li>
                        <li>• EU relocation positions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="p-4 border-t border-border/20">
                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 rounded-xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Start WhatsApp Chat
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Button */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-2xl hover:shadow-[#25D366]/25 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Ripple Effect */}
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />

            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="message"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Notification Dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
            />
          </Button>
        </motion.div>

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 1 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 hidden md:block"
            >
              <div className="bg-background/95 backdrop-blur-xl border border-border/20 rounded-lg px-3 py-2 shadow-lg whitespace-nowrap">
                <p className="text-sm font-medium text-foreground">Need help with a project?</p>
                <p className="text-xs text-muted-foreground">Click to chat on WhatsApp</p>
                {/* Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                  <div className="w-0 h-0 border-l-[6px] border-l-border/20 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
