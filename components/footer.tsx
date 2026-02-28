"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-[#1A1814]/15 bg-[#EDE8DC]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="flex flex-col gap-3">
          <span className="font-serif text-xl text-[#1A1814]">Quiet Dissent</span>
          <p className="text-sm text-[#1A1814]/50 max-w-xs leading-relaxed">
            Operational continuity through authored insight.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-10 gap-y-4">
          {["Approach", "Work", "Diagnosis", "FAQ", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[10px] tracking-[0.2em] uppercase text-[#1A1814]/50 transition-colors hover:text-[#1A1814]"
            >
              {link}
            </a>
          ))}
        </nav>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#1A1814]/50 transition-colors hover:text-[#1A1814]"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-3 w-3" />
          Top
        </motion.button>
      </div>
      <div className="border-t border-[#1A1814]/10 px-6 py-5 text-center">
        <span className="text-[10px] tracking-[0.15em] uppercase text-[#1A1814]/35">
          Quiet Dissent. All rights reserved.
        </span>
      </div>
    </footer>
  )
}