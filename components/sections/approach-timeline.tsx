"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    phase: "Intake",
    title: "Initial Perception",
    description:
      "We begin by listening for what is not being said — the structural conditions that produce the presenting symptoms. This is not an intake interview. It is a diagnostic act.",
  },
  {
    number: "02",
    phase: "Analysis",
    title: "Structural Mapping",
    description:
      "We map the architecture of the problem across its actual layers: operational, relational, linguistic, and temporal. We locate where agency has been extracted and why.",
  },
  {
    number: "03",
    phase: "Language",
    title: "Authoring the Diagnosis",
    description:
      "We produce a written diagnosis — not a report, not a deck. A document that names the condition with sufficient precision that action becomes possible.",
  },
  {
    number: "04",
    phase: "Deployment",
    title: "Operational Integration",
    description:
      "We work alongside the team to integrate the diagnosis into live operational conditions — holding the language as conditions evolve.",
  },
  {
    number: "05",
    phase: "Continuity",
    title: "Sustained Authorship",
    description:
      "We remain available as conditions change, ensuring the diagnostic language remains accurate and the interventions remain coherent.",
  },
]

export function ApproachTimeline() {
  return (
    <section id="approach" className="bg-[#EDE8DC] border-t border-[#1A1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        {/* Header */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 mb-20">
          <div className="lg:col-span-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/40">Our Approach</span>
          </div>
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl text-[#1A1814] leading-[1.1] lg:text-5xl"
            >
              A practice built on perception before prescription.
            </motion.h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-6 border-t border-[#1A1814]/10 py-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-3 flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355]">{step.number}</span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#1A1814]/35">{step.phase}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-2xl text-[#1A1814]">{step.title}</h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm text-[#1A1814]/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#1A1814]/10" />
        </div>
      </div>
    </section>
  )
}