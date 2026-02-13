"use client"

import { motion } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 lg:flex-row lg:justify-between lg:px-8">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <span className="font-serif text-lg text-foreground">Quiet Dissent</span>
          <p className="text-sm text-muted-foreground">
            Operational continuity through authored insight.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {["Approach", "Work", "Diagnosis", "FAQ", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative transition-colors hover:text-foreground"
            >
              {link}
              <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
          Back to top
        </motion.button>
      </div>
      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted-foreground">
        {"Quiet Dissent. All rights reserved."}
      </div>
    </footer>
  )
}
