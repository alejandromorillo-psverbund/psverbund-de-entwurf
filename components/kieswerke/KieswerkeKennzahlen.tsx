"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
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

  return <span ref={ref}>{count.toLocaleString("de-DE")}</span>
}

const kennzahlen = [
  {
    display: null,
    countTarget: 2059,
    einheit: "GENEHMIGUNGSHORIZONT",
    description: "Planungssicherheit für Generationen",
  },
  {
    display: "~12 Mio. t",
    countTarget: null,
    einheit: "GESICHERTE VORRÄTE",
    description: "Gewinnbare Vorräte aus eigenem Abbaugebiet",
  },
  {
    display: null,
    countTarget: 96,
    einheit: "EIGENTUMSFLÄCHE (HA)",
    description: "Vollständig im Eigentum der PS Kieswerke GmbH",
  },
  {
    display: "~40",
    countTarget: null,
    einheit: "MITARBEITER & SPEZIALISTEN",
    description: "Eingespieltes Stammteam mit Expertise vor Ort",
  },
  {
    display: ">40",
    countTarget: null,
    einheit: "LKW & MASCHINEN",
    description: "Eigenfinanzierter Fuhrpark für direkte Lieferung",
  },
]

export default function KieswerkeKennzahlen() {
  return (
    <section className="bg-[#0f0f0f] py-24 border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex items-start justify-between mb-2"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-6">
              ▲&nbsp;&nbsp;ZAHLEN & SUBSTANZ
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
              WIR LIEFERN
              <br />
              DIE ZAHLEN.
            </h2>
          </div>
          <div
            className="w-0 h-0 hidden md:block mt-2"
            style={{
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: "32px solid #a8c200",
            }}
          />
        </motion.div>

        <div className="mt-12">
          {kennzahlen.map(({ display, countTarget, einheit, description }, i) => (
            <motion.div
              key={einheit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="border-t border-[#2a2a2a] py-8 flex flex-col md:flex-row md:items-baseline gap-6 md:gap-16"
            >
              <div className="flex items-baseline gap-2 shrink-0 min-w-[180px]">
                <span className="text-base text-[#a8c200] font-bold">▲</span>
                <p className="text-6xl md:text-8xl font-black text-[#a8c200] leading-none tracking-tight">
                  {countTarget !== null ? <CountUp target={countTarget} /> : display}
                </p>
              </div>
              <div className="md:text-right md:ml-auto">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-1">
                  {einheit}
                </p>
                <p className="text-sm text-gray-400 max-w-lg leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
