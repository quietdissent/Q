"use client"

import { motion } from "framer-motion"
import { useInView, useCountUp } from "@/hooks/use-scroll-animation"
import { Clock, TrendingUp, Zap } from "lucide-react"

const stats = [
  { icon: Clock, value: 20, suffix: " min/day", label: "Average time lost to micro-coordination per employee" },
  { icon: TrendingUp, value: 40, suffix: "% of time", label: "Spent on tasks that feel productive but aren't" },
  { icon: Zap, value: 15, suffix: "+ hours", label: "Returned weekly through structural clarity" },
]

export function DiscoverySection() {
  const [ref, inView] = useInView(0.1)

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Discovering Where Innovation Lives Within Your Company
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Most operational waste is invisible. It hides in handoffs, follow-ups, and the gap between
            what people say processes are and what they actually do.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return <StatCard key={stat.label} stat={stat} Icon={Icon} inView={inView} index={i} />
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
            We don't guess where capacity lives. We observe, map, and reveal the structural
            gaps that eat your team's time, then we give you language and systems to reclaim it.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function StatCard({
  stat,
  Icon,
  inView,
  index,
}: {
  stat: (typeof stats)[number]
  Icon: typeof Clock
  inView: boolean
  index: number
}) {
  const count = useCountUp(stat.value, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.3 + index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center transition-all duration-500 hover:border-primary/30 hover:shadow-md"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div className="font-serif text-4xl text-foreground lg:text-5xl">
        {count}
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stat.label}</p>

      {/* Progress bar */}
      <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-border">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          animate={inView ? { width: `${(stat.value / 50) * 100}%` } : {}}
          transition={{ delay: 0.6 + index * 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}
