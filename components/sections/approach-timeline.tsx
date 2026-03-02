"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-scroll-animation"
import { Search, Network, Blocks, Shield } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Operational Diagnosis",
    subtitle: "Week 1-2",
    description:
      "We observe your operations from the outside in, without assumptions. We map where structure is missing, where language fails, and where people are compensating for systems that don't exist.",
    deliverables: [
      "Operational friction map",
      "Dependency audit report",
      "Capacity leak analysis",
      "Structural recommendation brief",
    ],
  },
  {
    number: "02",
    icon: Network,
    title: "Systems-Language-Orientation",
    subtitle: "Week 2-3",
    description:
      "We translate invisible operational patterns into language your team can use. This shared vocabulary becomes the foundation for structural change.",
    deliverables: [
      "Operational language framework",
      "Process taxonomy",
      "Communication architecture",
      "Decision flow documentation",
    ],
  },
  {
    number: "03",
    icon: Blocks,
    title: "Minimal Installation",
    subtitle: "Week 3-4",
    description:
      "We install the smallest possible set of structures that create the largest operational change. Nothing heavy. Nothing that requires a project manager to maintain.",
    deliverables: [
      "Workflow automation specs",
      "Handoff protocols",
      "Escalation frameworks",
      "Self-sustaining process guides",
    ],
  },
  {
    number: "04",
    icon: Shield,
    title: "Operational Continuity",
    subtitle: "Ongoing",
    description:
      "The structures work without you. Your team operates with clarity, your processes run on logic instead of memory, and your time is returned.",
    deliverables: [
      "Continuity validation",
      "Team capability assessment",
      "90-day operational review",
      "Independence confirmation",
    ],
  },
]

export function ApproachTimeline() {
  const [ref, inView] = useInView(0.05)
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="relative overflow-hidden bg-card py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground lg:text-lg">
            Diagnosis first. Installation second. No heroics required.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="mt-16 hidden lg:block">
          {/* Step indicators */}
          <div className="relative flex items-center justify-between">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-1/2 h-[1px] -translate-y-1/2 bg-border" />
            <motion.div
              className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-primary"
              initial={{ width: 0 }}
              animate={inView ? { width: `${(activeStep / (steps.length - 1)) * 100}%` } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />

            {steps.map((step, i) => {
              const Icon = step.icon
              const isActive = i <= activeStep
              return (
                <motion.button
                  key={step.number}
                  onClick={() => setActiveStep(i)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                    isActive
                      ? "border-primary bg-primary/10 shadow-lg shadow-primary/10"
                      : "border-border bg-background hover:border-muted-foreground"
                  }`}
                  aria-label={`Step ${step.number}: ${step.title}`}
                >
                  <Icon className={`h-6 w-6 transition-colors duration-300 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                </motion.button>
              )
            })}
          </div>

          {/* Step labels */}
          <div className="mt-4 flex justify-between">
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(i)}
                className={`w-16 text-center text-xs transition-colors duration-300 ${
                  i <= activeStep ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {step.number}
              </button>
            ))}
          </div>

          {/* Active content */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 rounded-2xl border border-border bg-background p-10"
          >
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <span className="text-sm font-medium text-primary">{steps[activeStep].subtitle}</span>
                <h3 className="mt-2 font-serif text-3xl text-foreground">{steps[activeStep].title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {steps[activeStep].description}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                  What you receive
                </h4>
                <div className="mt-4 flex flex-col gap-3">
                  {steps[activeStep].deliverables.map((d, i) => (
                    <motion.div
                      key={d}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1, duration: 0.4 }}
                      className="flex items-center gap-3 text-base text-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {d}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Timeline */}
        <div className="mt-12 flex flex-col gap-6 lg:hidden">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
                className="relative rounded-xl border border-border bg-background p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs text-primary">{step.subtitle}</span>
                    <h3 className="font-serif text-xl text-foreground">{step.title}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                <div className="mt-4 flex flex-col gap-2">
                  {step.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {d}
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-medium text-accent-foreground shadow-lg transition-shadow duration-300 hover:shadow-xl"
          >
            Start with Diagnosis
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
