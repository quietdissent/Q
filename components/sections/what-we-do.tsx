"use client"

import { motion } from "framer-motion"

const services = [
  {
    number: "01",
    title: "Structural Diagnosis",
    description:
      "We enter an organisation and perceive what it cannot see about itself. Misaligned incentives, eroded trust, extracted agency — named precisely, without euphemism.",
  },
  {
    number: "02",
    title: "Language Architecture",
    description:
      "We author the internal vocabulary that allows an organisation to discuss its actual conditions. Without precise language, no real change is possible.",
  },
  {
    number: "03",
    title: "Continuity Design",
    description:
      "We design operational structures that persist through leadership transitions, team changes, and strategic pivots — continuity authored into the fabric of how work happens.",
  },
  {
    number: "04",
    title: "Authored Insight",
    description:
      "We produce documents, frameworks, and artefacts that carry institutional knowledge forward — readable by future people who were not present at the origin.",
  },
]

export function WhatWeDoSection() {
  return (
    <section id="services" className="bg-[#F9F6F0] px-6 py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-[#1A1814]/15 pt-12 mb-20 flex items-baseline justify-between">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/45">
            What We Do
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/25 hidden md:block">
            Four disciplines
          </span>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-t border-[#1A1814]/12 p-10 hover:bg-[#EDE8DC]/40 transition-colors duration-300"
            >
              <div className="flex flex-col gap-5">
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8B7355]">
                  {service.number}
                </span>
                <h3 className="font-serif text-2xl text-[#1A1814]">{service.title}</h3>
                <p className="text-sm text-[#1A1814]/60 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}