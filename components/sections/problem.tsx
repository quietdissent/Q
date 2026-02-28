"use client"

import { motion } from "framer-motion"

export function ProblemSection() {
  return (
    <section id="problem" className="bg-[#EDE8DC] border-t border-[#1A1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Eyebrow column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/40">
              The Problem
            </span>
            <div className="h-[1px] w-12 bg-[#8B7355]" />
          </div>

          {/* Content column */}
          <div className="lg:col-span-9 flex flex-col gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl leading-[1.1] text-[#1A1814] lg:text-5xl"
            >
              Most organisations are optimised for the appearance of function, not function itself.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6 text-base text-[#1A1814]/65 leading-relaxed max-w-2xl"
            >
              <p>
                The language available to describe what is wrong is borrowed from the wrong disciplines. HR frames it as engagement. Finance frames it as efficiency. Strategy frames it as alignment.
              </p>
              <p>
                None of these framings locate the actual problem. They locate the symptom in the wrong layer — and so the interventions they generate produce no durable change.
              </p>
              <p>
                What is needed is the capacity to perceive structural misalignment directly, give it precise language, and act from that language with authority.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}