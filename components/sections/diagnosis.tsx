"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const symptoms = [
  "We keep having the same conversations without resolution",
  "We cannot describe what is wrong in terms that feel accurate",
  "Our interventions produce short-term change that does not hold",
  "We are losing people we cannot afford to lose",
  "Something is extracting time and energy without producing value",
  "We know something is structurally wrong but cannot locate it",
]

export function DiagnosisSection() {
  const [selected, setSelected] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)

  const toggle = (i: number) =>
    setSelected((prev) => prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i])

  return (
    <section id="diagnosis" className="bg-[#F5F0E8] border-t border-[#1A1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/40">
              Self-Diagnosis
            </span>
            <div className="h-[1px] w-12 bg-[#8B7355]" />
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-3xl text-[#1A1814] leading-snug lg:text-4xl"
            >
              Which of these conditions are present in your organisation?
            </motion.h2>
            <p className="text-sm text-[#1A1814]/55 leading-relaxed">
              Select all that apply. This is not a form — it is an instrument of initial perception.
            </p>
          </div>

          {/* Right column */}
          <div className="lg:col-span-8">
            {!submitted ? (
              <div className="flex flex-col gap-0">
                {symptoms.map((symptom, i) => (
                  <motion.button
                    key={i}
                    onClick={() => toggle(i)}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className={`flex items-start gap-5 border-t border-[#1A1814]/10 py-6 text-left transition-colors ${
                      selected.includes(i) ? "text-[#1A1814]" : "text-[#1A1814]/45"
                    }`}
                  >
                    <span className={`mt-1 h-3 w-3 shrink-0 border transition-colors ${
                      selected.includes(i)
                        ? "border-[#8B7355] bg-[#8B7355]"
                        : "border-[#1A1814]/25 bg-transparent"
                    }`} />
                    <span className="text-sm leading-relaxed">{symptom}</span>
                  </motion.button>
                ))}
                <div className="border-t border-[#1A1814]/10" />

                {selected.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col gap-4 pt-10"
                  >
                    <p className="text-sm text-[#1A1814]/60 leading-relaxed">
                      You have identified {selected.length} condition{selected.length > 1 ? "s" : ""}.
                      {selected.length >= 3
                        ? " The presence of three or more suggests a structural condition, not a symptomatic one."
                        : " Even one of these, if persistent, warrants precise diagnosis."}
                    </p>
                    <button
                      onClick={() => setSubmitted(true)}
                      className="self-start text-[10px] tracking-[0.25em] uppercase text-[#1A1814] underline underline-offset-4 decoration-[#8B7355] hover:opacity-60 transition-opacity"
                    >
                      Request a Diagnosis →
                    </button>
                  </motion.div>
                )}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6 border-t border-[#1A1814]/10 pt-10"
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355]">Received</span>
                <p className="font-serif text-2xl text-[#1A1814] leading-snug">
                  We will be in touch within one business day to schedule an intake conversation.
                </p>
                <p className="text-sm text-[#1A1814]/55 leading-relaxed max-w-lg">
                  In the meantime, you may find it useful to note — in your own words — what the condition feels like from inside it. That language will be useful to us.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}