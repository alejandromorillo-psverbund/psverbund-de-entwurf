"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { value: 2059, suffix: "", label: "Ausgeführte Projekte" },
  { value: 12, suffix: " Mio. t", label: "Jahresleistung" },
  { value: 4, suffix: "", label: "Gesellschaften" },
  { value: 40, suffix: "+", label: "Jahre Erfahrung" },
]

const ease = [0.22, 1, 0.36, 1] as const

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1600
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, target])

  return (
    <span ref={ref}>
      {count.toLocaleString("de-DE")}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Zahlen & Fakten</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Substanz, die hält.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <p className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-2">
                <CountUp target={value} suffix={suffix} />
              </p>
              <p className="text-sm text-gray-500 font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
