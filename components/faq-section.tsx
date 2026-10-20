"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Mail, MapPin, Code, Briefcase } from "lucide-react"

const faqs = [
  {
    id: "technologies",
    question: "What technologies do you specialize in?",
    answer: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          I specialize in modern frontend technologies with a focus on React ecosystem and TypeScript. My core stack
          includes:
        </p>
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-foreground">Frontend</h4>
            <div className="flex flex-wrap gap-1">
              {["React.js", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-foreground">Tools & More</h4>
            <div className="flex flex-wrap gap-1">
              {["Redux Toolkit", "Framer Motion", "REST APIs", "Git"].map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          I have 4+ years of experience building scalable applications that serve 100K+ users daily.
        </p>
      </div>
    ),
    icon: <Code className="w-5 h-5" />,
  },
  {
    id: "remote-work",
    question: "Are you open to remote work or relocation?",
    answer: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          Yes! I&apos;m actively seeking both remote opportunities and relocation positions. Here&apos;s my availability:
             </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span className="font-semibold text-sm">Remote Work</span>
            </div>
            <p className="text-sm text-muted-foreground pl-4">
              Fully equipped for remote collaboration with 4+ years of distributed team experience.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="font-semibold text-sm">Relocation Ready</span>
            </div>
            <p className="text-sm text-muted-foreground pl-6">Open to Germany, EU, UK, and Canada opportunities.</p>
          </div>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 border border-border/30">
          <p className="text-sm text-muted-foreground">
            💡 <strong>Currently available</strong> for immediate start or planned transitions.
          </p>
        </div>
      </div>
    ),
    icon: <MapPin className="w-5 h-5" />,
  },
  {
    id: "code-samples",
    question: "Can I see code samples of your projects?",
    answer: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          I believe in transparent development and open-source contributions. Here&apos;s how you can explore my work:
        </p>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Github className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-sm">GitHub Portfolio</p>
              <p className="text-sm text-muted-foreground">
                Public repositories showcasing React, Next.js, and TypeScript projects with detailed README files.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ExternalLink className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Live Demos</p>
              <p className="text-sm text-muted-foreground">
                Interactive demos of logistics dashboards, CMS platforms, and other production applications.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Code className="w-4 h-4 text-primary mt-0.5" />
            <div>
              <p className="font-semibold text-sm">Code Reviews</p>
              <p className="text-sm text-muted-foreground">
                Happy to walk through architecture decisions and implementation details during interviews.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            📝 <strong>Note:</strong> Some enterprise projects are under NDA, but I can discuss architecture and
            challenges in detail.
          </p>
        </div>
      </div>
    ),
    icon: <Github className="w-5 h-5" />,
  },
  {
    id: "contact",
    question: "How can I contact you?",
    answer: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m always excited to discuss new opportunities! Here are the best ways to reach me:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary" />
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-sm text-muted-foreground">adeel.hashmi@example.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-[#0077B5] rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">in</span>
              </div>
              <div>
                <p className="font-semibold text-sm">LinkedIn</p>
                <p className="text-sm text-muted-foreground">Professional networking</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-[#25D366] rounded-sm flex items-center justify-center">
                <span className="text-white text-xs">💬</span>
              </div>
              <div>
                <p className="font-semibold text-sm">WhatsApp</p>
                <p className="text-sm text-muted-foreground">Quick chat (see bottom right)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground text-xs">📅</span>
              </div>
              <div>
                <p className="font-semibold text-sm">Schedule Call</p>
                <p className="text-sm text-muted-foreground">15-30 min discovery call</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 border border-green-200 dark:border-green-800">
          <p className="text-sm text-green-800 dark:text-green-200">
            ⚡ <strong>Response time:</strong> Usually within 2 hours during business hours (CET/EST).
          </p>
        </div>
      </div>
    ),
    icon: <Mail className="w-5 h-5" />,
  },
  {
    id: "experience",
    question: "What's your experience with enterprise applications?",
    answer: (
      <div className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          I have extensive experience building and maintaining enterprise-grade applications across multiple industries:
        </p>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 bg-muted/30 rounded-lg border border-border/30">
              <div className="text-2xl font-bold text-primary">10K+</div>
              <div className="text-xs text-muted-foreground">Daily Active Users</div>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg border border-border/30">
              <div className="text-2xl font-bold text-primary">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center p-3 bg-muted/30 rounded-lg border border-border/30">
              <div className="text-2xl font-bold text-primary">€2M+</div>
              <div className="text-xs text-muted-foreground">Cost Savings</div>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Key Enterprise Experience:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Logistics Platform:</strong> Real-time tracking for 50K+ shipments monthly with WebSocket
                  integration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>Government Portals:</strong> Processing 100K+ citizen applications with strict security
                  requirements
                </span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span>
                  <strong>CMS Platform:</strong> Content management for 5K+ editors with role-based permissions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: "availability",
    question: "What's your current availability?",
    answer: (
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="font-semibold text-green-600 dark:text-green-400">Available for new opportunities</span>
        </div>
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m actively seeking my next role and can start immediately or work with your preferred timeline.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Immediate Start</h4>
            <p className="text-sm text-muted-foreground">Available for urgent projects or quick turnarounds</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold text-sm">Planned Transition</h4>
            <p className="text-sm text-muted-foreground">Can accommodate 2-4 week notice periods if needed</p>
          </div>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 border border-border/30">
          <p className="text-sm text-muted-foreground">
            🎯 <strong>Looking for:</strong> Senior Frontend Engineer, Lead Developer, or Technical Lead positions in
            React/Next.js focused teams.
          </p>
        </div>
      </div>
    ),
    icon: <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse" />,
  },
]

export function FAQSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
      aria-labelledby="faq-heading"
    >
      <div className="text-center space-y-4">
        <h2
          id="faq-heading"
          className="text-3xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to know about my experience, availability, and how we can work together.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <AccordionItem
                value={faq.id}
                className="border border-border/50 rounded-2xl px-6 bg-card/50 hover:bg-card/80 transition-colors duration-200 data-[state=open]:bg-card"
              >
                <AccordionTrigger className="hover:no-underline group">
                  <div className="flex items-center gap-3 text-left">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                      {faq.icon}
                    </div>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2">
                  <div className="pl-8">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center pt-8"
      >
        <div className="bg-muted/30 rounded-2xl p-8 border border-border/50">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="text-muted-foreground mb-4">
            I&apos;d love to chat about your project and how I can help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
              <Mail className="w-4 h-4 mr-2 inline" />
              Send me an email
            </button>
            <button className="px-6 py-2 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background">
              💬 WhatsApp Chat
            </button>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
