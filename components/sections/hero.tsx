"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between bg-[#F5F0E8] px-6 pt-32 pb-16 lg:px-8"
    >
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#1A1814]/10" />

      <div className="mx-auto w-full max-w-6xl flex flex-col justify-between flex-1 gap-24">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between border-b border-[#1A1814]/10 pb-6"
        >
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/45">
            Quiet Dissent — Operational Continuity
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/45 hidden md:block">
            Est. Now
          </span>
        </motion.div>

        {/* Main headline */}
        <div className="flex flex-col gap-8 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-6xl leading-[1.05] tracking-tight text-[#1A1814] lg:text-8xl"
          >
            We perceive what<br />
            organisations<br />
            <em className="not-italic text-[#8B7355]">cannot name.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif italic text-xl text-[#1A1814]/60 max-w-xl leading-relaxed lg:text-2xl"
          >
            Invisible structural misalignment, given language. Agency returned to people whose time and autonomy have been quietly extracted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex items-center gap-8 pt-4"
          >
            <a
              href="#contact"
              className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814] underline underline-offset-4 decoration-[#8B7355] hover:opacity-60 transition-opacity"
            >
              Request a Diagnosis
            </a>
            <a
              href="#approach"
              className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/45 hover:text-[#1A1814] transition-colors"
            >
              Our Approach →
            </a>
          </motion.div>
        </div>

        {/* Bottom rule with descriptor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex items-end justify-between border-t border-[#1A1814]/10 pt-6"
        >
          <p className="text-xs text-[#1A1814]/40 max-w-sm leading-relaxed">
            We work with founders, executives, and teams navigating conditions where conventional consulting produces no useful signal.
          </p>
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#1A1814]/30 hidden md:block">
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  )
}