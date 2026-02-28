"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    phase: "Contact",
    title: "Initial Conversation",
    description:
      "A single conversation to determine whether the conditions are right for engagement. We do not pitch. We listen for what is not being said.",
  },
  {
    number: "02",
    phase: "Entry",
    title: "Structural Immersion",
    description:
      "We spend time inside the organisation — attending meetings, reading documents, speaking with people at every level. Not as auditors, but as careful observers.",
  },
  {
    number: "03",
    phase: "Language",
    title: "Naming What Is Present",
    description:
      "We author a precise account of what we found. Not a report full of recommendations — a document that names the actual conditions with accuracy.",
  },
  {
    number: "04",
    phase: "Design",
    title: "Structural Intervention",
    description:
      "Where appropriate, we design the structural changes that would address what we named — new meeting architectures, decision frameworks, role definitions, communication protocols.",
  },
  {
    number: "05",
    phase: "Continuity",
    title: "Authored Handover",
    description:
      "Every engagement ends with artefacts that carry the work forward — readable by future leaders who were not present, robust to the passage of time.",
  },
]

export function ApproachTimeline() {
  return (
    <section id="approach" className="bg-[#F5F0E8] px-6 py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="border-t border-[#1A1814]/15 pt-12 mb-20 flex items-baseline justify-between">
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/45">
            Our Approach
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/25 hidden md:block">
            Five phases
          </span>
        </div>

        <div className="grid grid-cols-1 gap-0 lg*

# --- 4. footer.tsx ---
Push-GHFile "components/footer.tsx" @'
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