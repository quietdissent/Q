"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-scroll-animation"
import { X, AlertTriangle } from "lucide-react"

const problems = [
  "Personal availability",
  "Someone remembering to follow up",
  "Being 'on' at exactly the right time",
  "Manual coordination disguised as process",
]

export function ProblemSection() {
  const [ref, inView] = useInView(0.15)
  const [quoteRef, quoteInView] = useInView(0.2)
  const [calloutRef, calloutInView] = useInView(0.2)

  return (
    <section id="problem" className="relative overflow-hidden bg-card py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            When Operations Depend on Memory
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Problem list */}
          <div className="flex flex-col gap-5">
            {problems.map((problem, i) => (
              <motion.div
                key={problem}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 rounded-lg border border-border bg-background p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                  <X className="h-4 w-4 text-destructive" />
                </div>
                <p className="text-base leading-relaxed text-foreground lg:text-lg">{problem}</p>
              </motion.div>
            ))}
          </div>

          {/* Visual element */}
          <div className="flex flex-col justify-center gap-8">
            <motion.blockquote
              ref={quoteRef}
              initial={{ opacity: 0, y: 30 }}
              animate={quoteInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative border-l-4 border-primary pl-6"
            >
              <p className="font-serif text-2xl italic leading-relaxed text-foreground lg:text-3xl">
                {"The problem isn't people."}
              </p>
              <p className="mt-2 font-serif text-2xl italic leading-relaxed text-foreground lg:text-3xl">
                {"It's structural dependence on heroics."}
              </p>
            </motion.blockquote>

            <motion.div
              ref={calloutRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={calloutInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-xl border border-primary/20 bg-primary/5 p-6 transition-all duration-500 hover:border-primary/40 hover:bg-primary/10"
            >
              <div className="flex items-start gap-3">
                <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="text-lg font-medium text-foreground">
                    What would happen if you disappeared for a week?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    If the answer involves anxiety, frantic Slack messages, and a stack of decisions
                    only you can make, your operations depend on heroics, not structure.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
