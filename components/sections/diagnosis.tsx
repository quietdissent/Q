"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "@/hooks/use-scroll-animation"
import { Search, FileText, Blocks, CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react"

const processSteps = [
  { icon: Search, label: "Operational Diagnosis", description: "2-week deep observation of how your operations actually function." },
  { icon: FileText, label: "Language & Framework", description: "We author the operational language and frameworks your team needs." },
  { icon: Blocks, label: "Minimal Installation", description: "Lightweight structures installed into your existing workflows." },
  { icon: CheckCircle2, label: "Continuity Confirmation", description: "We verify the systems work without us. Independence is the goal." },
]

export function DiagnosisSection() {
  const [ref, inView] = useInView(0.05)
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const isValid = formData.name.length > 1 && formData.email.includes("@") && formData.message.length > 5

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValid) return

    setSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.")
        setSubmitting(false)
        return
      }

      setSubmitted(true)
    } catch {
      setError("Failed to send. Please email hello@quietdissent.com directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="diagnosis" className="relative overflow-hidden bg-card py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Request Diagnosis
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground lg:text-lg">
            Start with clarity. Everything else follows.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          {/* Process Overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-foreground">The Process</h3>
            <div className="relative mt-8 flex flex-col gap-8">
              <div className="absolute bottom-4 left-5 top-4 w-[1px] bg-border" aria-hidden="true" />
              {processSteps.map((step, i) => {
                const Icon = step.icon
                return (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                    className="relative flex items-start gap-5"
                  >
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background transition-colors duration-300 hover:border-primary">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{step.label}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-10 rounded-xl border border-border bg-background p-6">
              <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">Investment</h4>
              <p className="mt-2 font-serif text-3xl text-foreground">{"Starting at $5,000"}</p>
              <p className="mt-2 text-sm text-muted-foreground">
                {"Full operational diagnosis with written deliverables. Scope defined after initial conversation."}
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-background p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100"
                  >
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </motion.div>
                  <h3 className="font-serif text-2xl text-foreground">Message Received</h3>
                  <p className="mt-3 text-base text-muted-foreground">
                    {"We'll review your situation and respond within 24 hours with next steps."}
                  </p>
                  <div className="mt-6 flex flex-col gap-3 text-left">
                    {["Initial review of your submission", "Follow-up call to scope the diagnosis", "Proposal delivered within 48 hours"].map((step, i) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {step}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div key="form" className="rounded-2xl border border-border bg-background p-8">
                  <h3 className="font-serif text-xl text-foreground">Request a Diagnosis</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Tell us what you are experiencing. We will respond within 24 hours.
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium text-foreground">
                          Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium text-foreground">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="text-sm font-medium text-foreground">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium text-foreground">
                        Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        className="mt-2 w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="Tell us about the operational patterns you're noticing. What keeps breaking? What depends on you being available?"
                      />
                    </div>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive"
                      >
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        {error}
                      </motion.div>
                    )}

                    <motion.button
                      type="submit"
                      disabled={submitting || !isValid}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-md disabled:opacity-50 disabled:hover:shadow-none"
                    >
                      {submitting ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                      ) : (
                        <>Request Diagnosis <ArrowRight className="h-4 w-4" /></>
                      )}
                    </motion.button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
