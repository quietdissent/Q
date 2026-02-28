"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What kinds of organisations do you work with?",
    answer:
      "We work with organisations where the presenting problem has resisted conventional diagnosis. This includes professional services firms, technology companies, healthcare bodies, cultural institutions, and founder-led businesses at inflection points. The common factor is not sector — it is the presence of a condition that standard frameworks have failed to locate.",
  },
  {
    question: "How is this different from management consulting?",
    answer:
      "Management consulting typically begins with a framework and fits the organisation to it. We begin with the organisation and develop language specific to its actual condition. We do not bring solutions. We develop the diagnostic clarity from which the organisation's own solutions become possible.",
  },
  {
    question: "What does an engagement actually produce?",
    answer:
      "The primary output is a written diagnosis — a document of sufficient precision that it can be used as an operational instrument. Depending on the engagement, this may be accompanied by a structural redesign, a decision protocol, a facilitated deployment process, or an ongoing advisory relationship.",
  },
  {
    question: "How long does an engagement take?",
    answer:
      "A diagnostic engagement typically runs four to eight weeks. Operational integration work runs longer — usually three to six months. We do not offer day-rate consulting or retainer arrangements that are not tied to specific diagnostic work.",
  },
  {
    question: "What does it cost?",
    answer:
      "Engagements are priced by scope, not by time. A diagnostic engagement begins at a fixed project fee discussed at intake. We do not publish rates because the scope of diagnosis cannot be determined before the initial conversation.",
  },
  {
    question: "How do we begin?",
    answer:
      "You request a diagnosis. We conduct a brief intake conversation — typically 45 minutes — to determine whether the condition you are facing is one we can usefully address. If it is, we propose a scope. If it is not, we will say so directly.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-[#F9F6F0] border-t border-[#1A1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/40">Questions</span>
          </div>
          <div className="lg:col-span-9">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-4xl text-[#1A1814] mb-14 lg:text-5xl"
            >
              What people ask before they begin.
            </motion.h2>

            <div className="flex flex-col">
              {faqs.map((faq, i) => (
                <div key={i} className="border-t border-[#1A1814]/10">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="flex w-full items-start justify-between gap-8 py-8 text-left"
                  >
                    <span className="font-serif text-lg text-[#1A1814] leading-snug">{faq.question}</span>
                    <span className="mt-1 shrink-0 text-[#8B7355]">
                      {openIndex === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 text-sm text-[#1A1814]/60 leading-relaxed max-w-2xl">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="border-t border-[#1A1814]/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}