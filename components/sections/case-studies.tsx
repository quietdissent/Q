"use client"

import { motion } from "framer-motion"

const cases = [
  {
    index: "001",
    sector: "Professional Services",
    title: "The Firm That Could Not Retain",
    problem:
      "A mid-size consultancy was losing senior talent at a rate their exit interviews could not explain. Engagement scores were average. Compensation was competitive.",
    insight:
      "The actual condition was a systematic extraction of authorship — junior staff were producing insight that was being attributed upward without remainder. The condition had no name inside the firm.",
    outcome:
      "A diagnostic document was produced and deployed into a leadership offsite. Three structural changes followed. Attrition dropped by 60% over two quarters.",
  },
  {
    index: "002",
    sector: "Technology",
    title: "The Product That Would Not Ship",
    problem:
      "A scaling technology company had missed four consecutive launch dates. Post-mortems identified different causes each time. Leadership was losing confidence in the team.",
    insight:
      "The team was operating under a decision architecture that made no decision final. Every decision remained implicitly reversible, which meant no decision was ever fully made.",
    outcome:
      "A new decision protocol was authored and embedded. The next release shipped on schedule. The one after that shipped early.",
  },
  {
    index: "003",
    sector: "Healthcare Administration",
    title: "The Meeting That Never Ended",
    problem:
      "A regional health authority had been running a transformation programme for three years. The programme had produced extensive documentation and no operational change.",
    insight:
      "The programme was designed to produce the appearance of transformation without requiring anyone to absorb the cost of actual change. This was not malicious — it was structural.",
    outcome:
      "The programme was restructured around three specific operational outcomes with named owners. Two of the three outcomes were achieved within six months.",
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-[#F5F0E8] border-t border-[#1A1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        {/* Header */}
        <div className="flex items-end justify-between border-b border-[#1A1814]/10 pb-10 mb-16">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/40">Selected Work</span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl text-[#1A1814] lg:text-4xl max-w-xs text-right"
          >
            Three cases. Three conditions.
          </motion.h2>
        </div>

        {/* Cases */}
        <div className="flex flex-col">
          {cases.map((c, i) => (
            <motion.div
              key={c.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-8 border-t border-[#1A1814]/10 py-12 lg:grid-cols-12"
            >
              <div className="lg:col-span-2 flex flex-col gap-1">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355]">{c.index}</span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-[#1A1814]/35">{c.sector}</span>
              </div>
              <div className="lg:col-span-10 flex flex-col gap-6">
                <h3 className="font-serif text-2xl text-[#1A1814] lg:text-3xl">{c.title}</h3>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#1A1814]/35">The Problem</span>
                    <p className="text-sm text-[#1A1814]/60 leading-relaxed">{c.problem}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#1A1814]/35">The Insight</span>
                    <p className="text-sm text-[#1A1814]/60 leading-relaxed">{c.insight}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#1A1814]/35">The Outcome</span>
                    <p className="text-sm text-[#1A1814]/60 leading-relaxed">{c.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#1A1814]/10" />
        </div>
      </div>
    </section>
  )
}