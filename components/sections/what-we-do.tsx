"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    title: "Structural Diagnosis",
    description:
      "We identify the invisible architecture of dysfunction — the patterns of extraction, misalignment, and lost agency that standard assessments cannot reach.",
  },
  {
    number: "02",
    title: "Language Authoring",
    description:
      "We give precise, usable language to conditions that have resisted naming. This language becomes the instrument of change — not the change itself.",
  },
  {
    number: "03",
    title: "Operational Continuity",
    description:
      "We design the conditions under which people can work well across time — not just perform well under observation.",
  },
  {
    number: "04",
    title: "Insight Deployment",
    description:
      "We work alongside leadership to deploy authored insight into live operational conditions, where it can actually hold.",
  },
]

export function WhatWeDoSection() {
  return (
    <section id="work" className="bg-[#F9F6F0] border-t border-[#1A1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-[#1A1814]/10 pb-10 mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/40">What We Do</span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl text-[#1A1814] lg:text-4xl max-w-sm text-right"
          >
            Four disciplines. One coherent practice.
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 border-b border-[#1A1814]/10 py-10 lg:odd:border-r lg:odd:pr-16 lg:even:pl-16"
            >
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355]">
                {service.number}
              </span>
              <h3 className="font-serif text-2xl text-[#1A1814]">{service.title}</h3>
              <p className="text-sm text-[#1A1814]/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}