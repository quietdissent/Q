"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useScrollProgress } from "@/hooks/use-scroll-animation"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Diagnosis", href: "#diagnosis" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const progress = useScrollProgress()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-[#F5F0E8]/90 backdrop-blur-sm border-b border-[#1A1814]/10" : "bg-transparent"
        }`}
      >
        <div className="absolute bottom-0 left-0 h-[1px] bg-[#8B7355]" style={{ width: `${progress * 100}%` }} />
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="font-serif text-lg tracking-tight text-[#1A1814] transition-opacity hover:opacity-60">
            Quiet Dissent
          </a>
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="text-[10px] tracking-[0.2em] uppercase text-[#1A1814]/60 transition-colors hover:text-[#1A1814]"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-[10px] tracking-[0.2em] uppercase text-[#1A1814] underline underline-offset-4 decoration-[#8B7355] transition-opacity hover:opacity-60"
            >
              Request Diagnosis
            </motion.a>
          </div>
          <button
            onClick={() => setMobileOpen(true)}
            className="relative z-50 text-[#1A1814] md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-[#F5F0E8]"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute right-6 top-5 text-[#1A1814]"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="font-serif text-4xl text-[#1A1814] transition-opacity hover:opacity-60"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-4 text-[10px] tracking-[0.2em] uppercase text-[#1A1814] underline underline-offset-4 decoration-[#8B7355]"
              >
                Request Diagnosis
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}