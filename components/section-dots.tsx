"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const sections = [
  { id: "hero", label: "Home" },
  { id: "problem", label: "Problem" },
  { id: "approach", label: "What We Do" },
  { id: "ai", label: "AI" },
  { id: "work", label: "Work" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
]

export function SectionDots() {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex" aria-label="Page sections">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="group relative flex items-center justify-end"
          aria-label={`Jump to ${label}`}
        >
          <span className="mr-3 text-xs text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {label}
          </span>
          <motion.span
            className={`block rounded-full transition-all duration-300 ${
              active === id
                ? "h-3 w-3 bg-primary shadow-lg shadow-primary/30"
                : "h-2 w-2 bg-border group-hover:bg-muted-foreground"
            }`}
            layout
          />
          {active === id && (
            <motion.span
              layoutId="dot-ring"
              className="absolute right-[-3px] h-[18px] w-[18px] rounded-full border border-primary/40"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </a>
      ))}
    </nav>
  )
}
