"use client"

import { motion } from "framer-motion"

export function DiscoverySection() {
  return (
    <section id="discovery" className="bg-[#EDE8DC] border-t border-[#1A1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/40">
              Discovery
            </span>
            <div className="h-[1px] w-12 bg-[#8B7355]" />
          </div>
          <div className="lg:col-span-9 flex flex-col gap-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl text-[#1A1814] leading-[1.1] lg:text-5xl"
            >
              Before diagnosis, there is discovery.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-6 text-sm text-[#1A1814]/60 leading-relaxed max-w-2xl"
            >
              <p>
                Discovery is the process by which we orient ourselves to the specific conditions of your organisation. It is not an audit. It is not a survey. It is a structured form of attention.
              </p>
              <p>
                We conduct discovery through conversation — direct, unhurried, and oriented toward what is present rather than what is reported. The output of discovery is a preliminary orientation document that frames the diagnostic work to follow.
              </p>
              <p>
                Discovery engagements run two to three weeks. They are available as standalone work or as the first phase of a full diagnostic engagement.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#contact"
                className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814] underline underline-offset-4 decoration-[#8B7355] hover:opacity-60 transition-opacity"
              >
                Begin with Discovery →
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}