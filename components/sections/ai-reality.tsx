"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-scroll-animation"
import { Cpu, Brain } from "lucide-react"

const deterministic = [
  "Trigger-based automations",
  "Scheduling and routing",
  "Conditional workflows",
  "Data transformation",
]

const probabilistic = [
  "Content generation",
  "Classification and summarization",
  "Conversational interfaces",
  "Pattern recognition",
]

export function AIRealitySection() {
  const [ref, inView] = useInView(0.1)
  const [quoteRef, quoteInView] = useInView(0.2)

  return (
    <section id="ai" className="relative overflow-hidden bg-card py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            AI Is Teaching Us to Be More Human Again
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            {"AI doesn't mean technical. It means operational. And it's no longer optional."}{" "}
            Understanding the two modes of AI is the first step toward reclaiming operational capacity.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Deterministic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-md"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/80">
                <Cpu className="h-6 w-6 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Deterministic AI</h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Rule-based, predictable, and repeatable. These are the systems that replace
              manual processes with reliable automation.
            </p>
            <div className="flex flex-col gap-3">
              {deterministic.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground transition-colors duration-300 hover:bg-card"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Probabilistic */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group rounded-2xl border border-border bg-background p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-md"
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl text-foreground">Probabilistic AI</h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
              Adaptive, contextual, and generative. These systems augment human judgment
              and create capacity where none existed.
            </p>
            <div className="flex flex-col gap-3">
              {probabilistic.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground transition-colors duration-300 hover:bg-card"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pull Quote */}
        <motion.blockquote
          ref={quoteRef}
          initial={{ opacity: 0, y: 30 }}
          animate={quoteInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative mx-auto mt-20 max-w-2xl text-center"
        >
          <div className="absolute -left-4 -top-4 font-serif text-6xl text-primary/20">{'"'}</div>
          <p className="font-serif text-2xl italic leading-relaxed text-foreground lg:text-3xl">
            {"AI doesn't mean technical. It means operational. And it's no longer optional."}
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
