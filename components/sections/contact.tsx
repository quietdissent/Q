"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-scroll-animation"
import { Mail, Copy, Check, Clock } from "lucide-react"

export function ContactSection() {
  const [ref, inView] = useInView(0.1)
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("hello@quietdissent.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Ready to See What's Invisible?
          </h2>
          <p className="mt-4 text-base text-muted-foreground lg:text-lg">
            Start with a conversation. No commitment, no pitch deck, just honest observation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-12 flex max-w-lg flex-col items-center gap-6"
        >
          <div className="flex w-full items-center justify-between rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span className="text-base text-foreground">hello@quietdissent.com</span>
            </div>
            <button
              onClick={copyEmail}
              className="flex items-center gap-1.5 rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4 text-primary" />
            <span>Typical response time: within 24 hours</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
