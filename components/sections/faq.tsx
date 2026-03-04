"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "@/hooks/use-scroll-animation"
import { Plus, Minus } from "lucide-react"

const categories = ["All", "Operations", "AI & Technology", "Investment"]

const faqs = [
  {
    question: "What is 'business cognitive dissonance'?",
    answer: "It's the gap between what an organization says its processes are and what actually happens day-to-day. It's the unspoken knowledge that things only work because specific people are always available, always remembering, always compensating.",
    category: "Operations",
  },
  {
    question: "How is this different from traditional consulting?",
    answer: "Traditional consulting often delivers thick binders and ambitious transformation plans. We diagnose invisible structural issues, give them language, and install minimal systems that work without ongoing consultant dependency. The goal is your independence, not our retention.",
    category: "Operations",
  },
  {
    question: "Do I need to understand AI to work with you?",
    answer: "No. We don't install AI for its own sake. We identify where deterministic and probabilistic AI can reclaim operational capacity. You don't need to understand the technology. You need to understand what it gives you back: time, clarity, and structural independence.",
    category: "AI & Technology",
  },
  {
    question: "What kind of AI do you implement?",
    answer: "Two kinds: deterministic AI (rule-based automations, scheduling, workflows) and probabilistic AI (content generation, classification, conversational tools). We match the tool to the operational problem, not the other way around.",
    category: "AI & Technology",
  },
  {
    question: "How long does a typical engagement last?",
    answer: "The operational diagnosis takes 2 weeks. Full installation typically takes 4-6 weeks. Some organizations see meaningful change within days of the diagnostic phase as invisible patterns become visible.",
    category: "Investment",
  },
  {
    question: "What does it cost?",
    answer: "Diagnostic engagements start at $5,000. Full operational installations are scoped after diagnosis and typically range from $15,000-40,000 depending on organizational complexity. We'll never recommend more than what's structurally necessary.",
    category: "Investment",
  },
  {
    question: "What if we already have a project manager handling operations?",
    answer: "Project managers manage projects. We diagnose and install operational structure. If your PM is spending time on coordination that should be systematic, that's exactly the kind of structural dependency we resolve. Good PMs become even more effective when the underlying structure supports them.",
    category: "Operations",
  },
  {
    question: "Can you work with remote teams?",
    answer: "Yes. In fact, remote and distributed teams often have more invisible structural dependencies because the informal hallway coordination that offices provide doesn't exist. The need for authored operational structure is even greater.",
    category: "Operations",
  },
]

export function FAQSection() {
  const [ref, inView] = useInView(0.05)
  const [activeCategory, setActiveCategory] = useState("All")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredFaqs = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory)

  return (
    <section id="faq" className="relative bg-card py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            {"If You're Recognizing These Patterns"}
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Common questions from leaders who feel it but haven't named it yet.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-2"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground shadow-sm"
                  : "bg-transparent text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="mt-10 flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <motion.div
                  key={faq.question}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="overflow-hidden rounded-xl border border-border bg-background transition-all duration-300 hover:border-primary/20"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 text-base font-medium text-foreground">{faq.question}</span>
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted transition-colors duration-300">
                      {isOpen ? <Minus className="h-3.5 w-3.5 text-foreground" /> : <Plus className="h-3.5 w-3.5 text-muted-foreground" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="border-t border-border px-6 py-5">
                          <p className="text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                          <span className="mt-3 inline-block rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                            {faq.category}
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
