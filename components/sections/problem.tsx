"use client"

import { motion } from "framer-motion"

export function ProblemSection() {
  return (
    <section id="problem" className="bg-[#EDE8DC] px-6 py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-[#1A1814]/15 pt-12 mb-20">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/45">
            The Problem
          </span>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-serif text-4xl leading-tight text-[#1A1814] lg:text-5xl">
              Most organisations are eroding from the inside — and no one has the language to say so.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 justify-center"
          >
            <p className="text-base text-[#1A1814]/65 leading-relaxed">
              The symptoms are everywhere: high performers leaving without explanation, decisions that feel right but produce nothing, meetings that drain rather than direct. The cause is structural — but invisible to those inside it.
            </p>
            <p className="text-base text-[#1A1814]/65 leading-relaxed">
              Conventional consulting maps what is visible. We work on what isn't: the misalignment between stated intent and actual operation, the gap between what people say and what they mean, the quiet extraction of time and autonomy that no dashboard measures.
            </p>
            <div className="border-l-2 border-[#8B7355] pl-6">
              <p className="font-serif italic text-lg text-[#1A1814]/70 leading-relaxed">
                "The problem is never the problem people present. It is always the structure that made that problem invisible for so long."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}