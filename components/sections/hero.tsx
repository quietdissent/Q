"use client"

import { useRef, useEffect, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import { ChevronDown } from "lucide-react"

/* ─── Word-by-word kinetic headline ─── */
function AnimatedHeadline({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const words = text.split(" ")
  return (
    <span className="inline" style={{ perspective: "600px" }}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)", rotateX: 30 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", rotateX: 0 }}
          transition={{
            delay: (i + startDelay) * 0.12 + 0.3,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mr-[0.3em] inline-block origin-bottom"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

/* ─── Aurora Borealis Canvas ─── */
function AuroraBorealis() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef(0)
  const timeRef = useRef(0)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  const draw = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const w = canvas.width / (Math.min(window.devicePixelRatio || 1, 2))
    const h = canvas.height / (Math.min(window.devicePixelRatio || 1, 2))

    timeRef.current += 0.003
    const t = timeRef.current
    const mx = mouseRef.current.x
    const my = mouseRef.current.y

    ctx.clearRect(0, 0, w, h)

    // Dark base gradient
    const baseGrad = ctx.createLinearGradient(0, 0, 0, h)
    baseGrad.addColorStop(0, "rgba(10, 12, 18, 0.3)")
    baseGrad.addColorStop(0.5, "rgba(8, 10, 15, 0.1)")
    baseGrad.addColorStop(1, "transparent")
    ctx.fillStyle = baseGrad
    ctx.fillRect(0, 0, w, h)

    // Aurora bands - each band is a flowing wave of color
    const bands = [
      {
        color1: "rgba(40, 180, 140, 0.12)",
        color2: "rgba(30, 200, 160, 0.06)",
        yBase: h * 0.22,
        amplitude: h * 0.12,
        frequency: 0.0015,
        speed: 0.7,
        width: h * 0.28,
        mouseInfluence: 0.3,
      },
      {
        color1: "rgba(100, 210, 180, 0.10)",
        color2: "rgba(60, 220, 170, 0.04)",
        yBase: h * 0.30,
        amplitude: h * 0.10,
        frequency: 0.002,
        speed: -0.5,
        width: h * 0.22,
        mouseInfluence: 0.5,
      },
      {
        color1: "rgba(189, 161, 121, 0.14)",
        color2: "rgba(200, 170, 100, 0.05)",
        yBase: h * 0.35,
        amplitude: h * 0.08,
        frequency: 0.0018,
        speed: 0.9,
        width: h * 0.18,
        mouseInfluence: 0.4,
      },
      {
        color1: "rgba(80, 140, 200, 0.10)",
        color2: "rgba(100, 160, 220, 0.04)",
        yBase: h * 0.25,
        amplitude: h * 0.14,
        frequency: 0.0012,
        speed: -0.6,
        width: h * 0.25,
        mouseInfluence: 0.35,
      },
      {
        color1: "rgba(150, 100, 200, 0.06)",
        color2: "rgba(120, 80, 180, 0.03)",
        yBase: h * 0.18,
        amplitude: h * 0.10,
        frequency: 0.0025,
        speed: 0.4,
        width: h * 0.15,
        mouseInfluence: 0.25,
      },
    ]

    for (const band of bands) {
      // Mouse offset
      const mouseOffsetX = (mx - 0.5) * w * band.mouseInfluence
      const mouseOffsetY = (my - 0.5) * h * band.mouseInfluence * 0.3

      ctx.save()
      ctx.globalCompositeOperation = "screen"

      // Draw vertical curtain-like strips
      const stripCount = 80
      const stripW = w / stripCount + 2

      for (let i = 0; i <= stripCount; i++) {
        const x = (i / stripCount) * w

        // Layered sine waves for the flowing curtain shape
        const wave1 = Math.sin((x + mouseOffsetX) * band.frequency + t * band.speed) * band.amplitude
        const wave2 = Math.sin((x + mouseOffsetX) * band.frequency * 1.7 + t * band.speed * 1.3 + 2.0) * band.amplitude * 0.5
        const wave3 = Math.sin((x + mouseOffsetX) * band.frequency * 0.5 + t * band.speed * 0.7 - 1.5) * band.amplitude * 0.3

        const yCenter = band.yBase + wave1 + wave2 + wave3 + mouseOffsetY

        // Intensity varies along the band
        const intensity = (Math.sin(x * 0.005 + t * 0.5) * 0.5 + 0.5) *
                          (Math.sin(x * 0.003 - t * 0.3) * 0.3 + 0.7)

        // Vertical gradient strip (aurora curtain effect)
        const grad = ctx.createLinearGradient(x, yCenter - band.width, x, yCenter + band.width)
        grad.addColorStop(0, "transparent")
        grad.addColorStop(0.2, band.color2)
        grad.addColorStop(0.4, band.color1)
        grad.addColorStop(0.5, band.color1)
        grad.addColorStop(0.6, band.color1)
        grad.addColorStop(0.8, band.color2)
        grad.addColorStop(1, "transparent")

        ctx.fillStyle = grad
        ctx.globalAlpha = intensity
        ctx.fillRect(x - stripW / 2, yCenter - band.width, stripW, band.width * 2)
      }

      ctx.restore()
    }

    // Shimmer layer - small bright patches that pulse
    ctx.save()
    ctx.globalCompositeOperation = "screen"
    const shimmerCount = 12
    for (let i = 0; i < shimmerCount; i++) {
      const sx = (Math.sin(t * 0.3 + i * 1.7) * 0.5 + 0.5) * w
      const sy = (Math.sin(t * 0.2 + i * 2.3) * 0.15 + 0.25) * h
      const sr = 60 + Math.sin(t * 0.8 + i * 3) * 30
      const sa = (Math.sin(t * 0.6 + i * 1.1) * 0.5 + 0.5) * 0.08

      const shimGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr)
      shimGrad.addColorStop(0, `rgba(180, 230, 210, ${sa})`)
      shimGrad.addColorStop(1, "transparent")
      ctx.fillStyle = shimGrad
      ctx.fillRect(sx - sr, sy - sr, sr * 2, sr * 2)
    }
    ctx.restore()

    // Stars scattered in the upper portion
    ctx.save()
    for (let i = 0; i < 40; i++) {
      const seed = i * 7919
      const starX = ((seed * 13) % 10000) / 10000 * w
      const starY = ((seed * 17) % 10000) / 10000 * h * 0.6
      const starR = ((seed * 23) % 100) / 100 * 1.2 + 0.3
      const twinkle = (Math.sin(t * 2 + i * 2.7) * 0.5 + 0.5) * 0.4 + 0.1

      ctx.beginPath()
      ctx.arc(starX, starY, starR, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(230, 230, 240, ${twinkle})`
      ctx.fill()
    }
    ctx.restore()

    rafRef.current = requestAnimationFrame(draw)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = canvas.parentElement?.clientWidth || window.innerWidth
      const h = canvas.parentElement?.clientHeight || window.innerHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = w + "px"
      canvas.style.height = h + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resize()
    window.addEventListener("resize", resize)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [draw])

  // Mouse tracking
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      aria-hidden="true"
    />
  )
}

/* ─── Main Hero ─── */
export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setProgress(v)
  })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.6], [1, 0.88])
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, -100])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-foreground px-6"
    >
      {/* Aurora canvas */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{ opacity: Math.max(0, 1 - progress * 2) }}
      >
        <AuroraBorealis />
      </div>

      {/* Subtle bottom vignette to blend into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64"
        style={{
          background: "linear-gradient(to top, hsl(var(--background)) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero content with scroll parallax */}
      <motion.div
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-xs font-medium tracking-widest uppercase text-primary">
            Quiet Dissent
          </span>
        </motion.div>

        {/* Main headline */}
        <h1 className="font-serif text-4xl leading-tight tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl">
          <AnimatedHeadline text="Non-consensus decisions" />
          <br className="hidden sm:block" />
          <AnimatedHeadline text="for high impact bets" startDelay={3} />
        </h1>

        {/* Animated center divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.0, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 h-px max-w-[120px] origin-center bg-gradient-to-r from-transparent via-primary/60 to-transparent"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl font-serif text-xl italic leading-relaxed text-background/70 sm:text-2xl"
        >
          {"Business cognitive dissonance doesn't resolve itself."}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 max-w-2xl font-serif text-lg italic leading-relaxed text-background/60 sm:text-xl"
        >
          {"It compounds quietly until operations break."}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-background/50 lg:text-lg"
        >
          We perceive invisible structural misalignment, give it language,
          and return agency to people whose time and autonomy have been quietly extracted.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="mt-12"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Request Operational Diagnosis
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        style={{ opacity: Math.max(0, 1 - progress * 6) }}
      >
        <motion.a
          href="#problem"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-background/40 transition-colors hover:text-background/70"
          aria-label="Scroll to explore"
        >
          <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
