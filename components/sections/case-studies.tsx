"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "@/hooks/use-scroll-animation"
import { Phone, Brain, Clock, X as CloseIcon, ArrowRight } from "lucide-react"

const caseStudies = [
  {
    icon: Phone,
    title: "The Owner Who Couldn't Leave",
    category: "Founder Dependency",
    summary: "A 50-person agency where every decision funneled through one person. Vacations were work from a different chair.",
    problem: "Every client escalation, hiring decision, and project pivot required the founder's direct input. The team had grown but the decision architecture hadn't.",
    diagnosis: "We identified 23 distinct decision types being routed to one person. 19 of them had clear, repeatable criteria that could be encoded into operational frameworks.",
    solution: "We built a decision taxonomy, installed escalation protocols, and created a self-service framework for the 19 routine decisions. Three team leads were given authored authority.",
    outcome: "The founder took a 10-day vacation. Nothing broke. Revenue increased 12% in the following quarter as the team moved faster without bottlenecks.",
    accentColor: "bg-blue-500/10 text-blue-600 border-blue-200",
  },
  {
    icon: Brain,
    title: "When Follow-Up Lives in Someone's Head",
    category: "Process Dependency",
    summary: "An operations team of 12 where tribal knowledge ran everything. When two key people were sick the same week, three projects stalled.",
    problem: "Critical follow-ups, client preferences, and project nuances lived exclusively in individual memories. No documentation, no systems, just experienced people doing their best.",
    diagnosis: "We mapped the invisible knowledge network and found that 68% of operational continuity depended on three people's personal recall.",
    solution: "We authored operational continuity documents, built handoff protocols, and installed lightweight systems that captured decisions as they happened, not after.",
    outcome: "Team onboarding dropped from 6 weeks to 10 days. Cross-coverage became standard. The three key people reported 40% reduction in interruptions.",
    accentColor: "bg-amber-500/10 text-amber-600 border-amber-200",
  },
  {
    icon: Clock,
    title: "Discovering Where 40 Hours Was Going",
    category: "Capacity Recovery",
    summary: "A leadership team spending 40+ hours per week on coordination that felt productive but wasn't moving anything forward.",
    problem: "The leadership team was working 60-hour weeks and still felt behind. Every week ended with a list of things that didn't get done, despite constant effort.",
    diagnosis: "We tracked operational flow for two weeks and found 40 hours of collective leadership time spent on status updates, context-switching, and re-explaining decisions already made.",
    solution: "We installed async decision logs, eliminated 60% of status meetings, and created automated progress surfaces that removed the need for verbal updates.",
    outcome: "15-20 hours per week returned to strategic work. Meeting load dropped by 60%. The team described it as 'getting their brains back.'",
    accentColor: "bg-emerald-500/10 text-emerald-600 border-emerald-200",
  },
]

export function CaseStudies() {
  const [ref, inView] = useInView(0.05)
  const [expandedCase, setExpandedCase] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="work" className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            What Business Cognitive Dissonance Looks Like
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground lg:text-lg">
            Real patterns from real organizations. Names and details changed, structural truths preserved.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div ref={scrollRef} className="mt-16 grid gap-8 md:grid-cols-3">
          {caseStudies.map((cs, i) => {
            const Icon = cs.icon
            return (
              <motion.div
                key={cs.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
                onClick={() => setExpandedCase(i)}
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg"
                  style={{ transform: "translateY(0)", transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-6px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <div className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${cs.accentColor}`}>
                    {cs.category}
                  </div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground lg:text-2xl">{cs.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cs.summary}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
                    Read Story <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Expanded Case Study Modal */}
      <AnimatePresence>
        {expandedCase !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-foreground/40 backdrop-blur-sm p-4"
            onClick={() => setExpandedCase(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-background p-8 shadow-2xl lg:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setExpandedCase(null)}
                className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-card text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                aria-label="Close"
              >
                <CloseIcon className="h-4 w-4" />
              </button>

              <div className={`mb-4 inline-flex rounded-full border px-3 py-1 text-xs font-medium ${caseStudies[expandedCase].accentColor}`}>
                {caseStudies[expandedCase].category}
              </div>
              <h3 className="font-serif text-2xl text-foreground lg:text-3xl">
                {caseStudies[expandedCase].title}
              </h3>

              <div className="mt-8 flex flex-col gap-8">
                {[
                  { label: "The Problem", content: caseStudies[expandedCase].problem, color: "border-destructive/30" },
                  { label: "The Diagnosis", content: caseStudies[expandedCase].diagnosis, color: "border-primary/30" },
                  { label: "The Solution", content: caseStudies[expandedCase].solution, color: "border-blue-400/30" },
                  { label: "The Outcome", content: caseStudies[expandedCase].outcome, color: "border-emerald-400/30" },
                ].map((section, i) => (
                  <motion.div
                    key={section.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className={`border-l-4 pl-5 ${section.color}`}
                  >
                    <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      {section.label}
                    </h4>
                    <p className="mt-2 text-base leading-relaxed text-foreground">{section.content}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                  href="#contact"
                  onClick={() => setExpandedCase(null)}
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all duration-300 hover:shadow-lg"
                >
                  See Your Diagnosis <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
