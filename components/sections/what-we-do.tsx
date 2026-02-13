"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-scroll-animation"
import { Search, PenTool, Blocks, Check, X } from "lucide-react"

const cards = [
  {
    icon: Search,
    title: "Diagnose",
    description: "We observe operations from the outside in. We identify where structure is missing and language fails.",
    detail: "Deep operational audit revealing invisible friction, broken feedback loops, and dependency on individual memory.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "We author operational language your team can actually use. Systems thinking made tangible.",
    detail: "Custom frameworks, process documentation, and decision architectures tailored to how your organization actually works.",
  },
  {
    icon: Blocks,
    title: "Install",
    description: "We embed minimal, durable structures that work when you're not watching.",
    detail: "Lightweight systems installed directly into your workflows. No heavy platforms, no change fatigue.",
  },
]

const weCreate = [
  "Operational language and frameworks",
  "Structural continuity systems",
  "Decision architecture",
  "Diagnostic clarity",
]

const weDont = [
  "Replace your team",
  "Install heavy enterprise tools",
  "Create dependency on consultants",
]

export function WhatWeDoSection() {
  const [ref, inView] = useInView(0.1)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="approach" className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Operational Continuity Through Authored Insight
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            We don't optimize. We diagnose invisible misalignment, design operational language,
            and install minimal structures that survive without you.
          </p>
        </motion.div>

        {/* 3 Approach Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon
            const isHovered = hoveredCard === i
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative cursor-default overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-primary/30 hover:shadow-lg"
                style={{
                  transform: isHovered ? "translateY(-4px)" : "translateY(0)",
                  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <div
                  className="mt-4 overflow-hidden transition-all duration-500"
                  style={{ maxHeight: isHovered ? "120px" : "0", opacity: isHovered ? 1 : 0 }}
                >
                  <p className="border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                    {card.detail}
                  </p>
                </div>
                {/* Connector line */}
                {i < cards.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-[1px] w-6 bg-border md:block" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* What We Create / Don't */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-foreground">What We Create</h3>
            <div className="mt-6 flex flex-col gap-4">
              {weCreate.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors duration-300 hover:bg-card"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/15">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <span className="text-base text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl text-foreground">{"What We Don't Do"}</h3>
            <div className="mt-6 flex flex-col gap-4">
              {weDont.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 rounded-lg p-3 transition-colors duration-300 hover:bg-card"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/10">
                    <X className="h-3.5 w-3.5 text-destructive" />
                  </div>
                  <span className="text-base text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
