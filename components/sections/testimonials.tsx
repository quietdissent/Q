"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "For the first time in three years, we had a document that said what was actually happening. Not what we wished was happening, not what the data suggested was happening — what was actually happening.",
    author: "Chief Operating Officer",
    context: "Global professional services firm",
  },
  {
    quote:
      "The diagnosis was uncomfortable to read. It was also completely accurate. That combination — precise discomfort — is rare. It is what made action possible.",
    author: "Founder",
    context: "Series B technology company",
  },
  {
    quote:
      "We had run every kind of engagement programme available. Nothing held. What Quiet Dissent gave us was not a programme. It was a way of seeing. The holding came from that.",
    author: "Director of People",
    context: "Regional health authority",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#EDE8DC] border-t border-[#1A1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="flex items-center justify-between border-b border-[#1A1814]/10 pb-10 mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/40">In Their Words</span>
        </div>

        <div className="flex flex-col gap-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-8 border-t border-[#1A1814]/10 py-12 lg:grid-cols-12"
            >
              <div className="lg:col-span-1 pt-1">
                <span className="font-serif text-4xl text-[#8B7355] leading-none">&ldquo;</span>
              </div>
              <div className="lg:col-span-8">
                <p className="font-serif italic text-xl text-[#1A1814] leading-relaxed lg:text-2xl">
                  {t.quote}
                </p>
              </div>
              <div className="lg:col-span-3 flex flex-col gap-1 lg:items-end lg:justify-end">
                <span className="text-xs text-[#1A1814]/70 font-medium">{t.author}</span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#1A1814]/35">{t.context}</span>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#1A1814]/10" />
        </div>
      </div>
    </section>
  )
}