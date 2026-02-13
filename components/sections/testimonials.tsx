"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "@/hooks/use-scroll-animation"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "We didn't know what was broken until they gave it language. Once we could name the pattern, we could fix it. Three months later, I took my first real vacation in four years.",
    author: "CEO",
    company: "50-person creative agency",
    context: "After operational diagnosis and structural installation",
  },
  {
    quote: "They didn't sell us software or a transformation plan. They observed for two weeks, showed us exactly where 40 hours of leadership time was going each week, and installed systems that gave it back.",
    author: "COO",
    company: "Series B SaaS company",
    context: "Capacity recovery engagement",
  },
  {
    quote: "The most valuable thing wasn't the systems they installed. It was the language they gave us. Our team finally had words for what was going wrong, and that changed everything.",
    author: "VP Operations",
    company: "120-person professional services firm",
    context: "Systems-language-orientation project",
  },
  {
    quote: "I was skeptical about 'operational diagnosis' as a concept. Then they showed me that 68% of our continuity depended on three people's memories. That number changed how I thought about everything.",
    author: "Founder",
    company: "Early-stage technology company",
    context: "Dependency audit and structural redesign",
  },
]

export function TestimonialsSection() {
  const [ref, inView] = useInView(0.1)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), [])
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [paused, next])

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            When Invisible Structure Becomes Visible
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mt-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card p-8 lg:p-12">
            <Quote className="mb-6 h-8 w-8 text-primary/30" />
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-serif text-xl italic leading-relaxed text-foreground lg:text-2xl">
                  {`"${testimonials[current].quote}"`}
                </p>
                <div className="mt-8 flex flex-col gap-1">
                  <span className="text-base font-medium text-foreground">{testimonials[current].author}</span>
                  <span className="text-sm text-muted-foreground">{testimonials[current].company}</span>
                  <span className="mt-1 text-xs text-primary">{testimonials[current].context}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-foreground"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-foreground"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
