"use client"

import { motion } from "framer-motion"

const realities = [
  {
    number: "01",
    title: "AI does not fix structural problems",
    description:
      "Deploying AI into a structurally misaligned organisation accelerates the misalignment. The technology is neutral — it amplifies whatever architecture it operates within.",
  },
  {
    number: "02",
    title: "AI-generated language obscures structural conditions",
    description:
      "When organisations use AI to produce internal communications, they lose access to the signal that imprecise human language was carrying. The noise was diagnostic.",
  },
  {
    number: "03",
    title: "The organisations that will thrive are those that can see clearly",
    description:
      "Not those with the most advanced tools. The competitive advantage of the next decade is perceptual — the capacity to see what is actually happening and act from that seeing.",
  },
]

export function AIRealitySection() {
  return (
    <section id="ai-reality" className="bg-[#F5F0E8] border-t border-[#1A1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 mb-16">
          <div className="lg:col-span-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/40">
              On AI
            </span>
          </div>
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl text-[#1A1814] leading-[1.1] lg:text-5xl"
            >
              Three things that are true about AI and organisations.
            </motion.h2>
          </div>
        </div>

        <div className="flex flex-col">
          {realities.map((r, i) => (
            <motion.div
              key={r.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="grid grid-cols-1 gap-6 border-t border-[#1A1814]/10 py-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-3">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355]">{r.number}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="font-serif text-xl text-[#1A1814]">{r.title}</h3>
              </div>
              <div className="lg:col-span-5">
                <p className="text-sm text-[#1A1814]/60 leading-relaxed">{r.description}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#1A1814]/10" />
        </div>
      </div>
    </section>
  )
}