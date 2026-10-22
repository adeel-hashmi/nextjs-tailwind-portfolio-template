"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteConfig } from "@/lib/config"

const faqs = [
  {
    id: "sample-content",
    question: "Are these real projects and results?",
    answer: "No. The profiles, employers, dates, projects, metrics and proficiency values are fictional examples for the layouts. Replace them with your own supported experience before publishing.",
  },
  {
    id: "customize",
    question: "Where do I change the content?",
    answer: "Follow the README content-source table. The homepage, project data, skills, articles and metadata have separate sources; changing the shared configuration alone does not update everything.",
  },
  {
    id: "integrations",
    question: "Can visitors send messages or download a resume?",
    answer: "This demo has no resume download or configured message delivery. The unfinished feedback, visitor-counter and WhatsApp widgets are not displayed. Add and verify your own integrations before enabling them.",
  },
  {
    id: "setup",
    question: "How do I run and check the template?",
    answer: "Use the Node.js version and locked npm install documented in the README, then run the type, lint, test and build checks. Review the integration limitations before deployment.",
  },
]

export function FAQSection() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
      <h2 className="text-2xl font-bold">Template questions</h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="rounded-xl border border-border bg-card px-4">
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      <p className="text-sm text-muted-foreground">
        <a href={`${siteConfig.repository}#readme`} className="underline underline-offset-4">Read the setup and customization guide</a>.
      </p>
    </motion.div>
  )
}
