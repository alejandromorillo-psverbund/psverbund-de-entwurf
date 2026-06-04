"use client"

import { motion } from "framer-motion"
import { Building2, MapPin, TreePine } from "lucide-react"

const pillars = [
  {
    Icon: Building2,
    title: "Eigentümergeführt",
    text: "Entscheidungen fallen dort, wo das Wissen sitzt — in der Unternehmensführung, nicht in einem Boardroom.",
  },
  {
    Icon: MapPin,
    title: "Regional verwurzelt",
    text: "Unsere Lieferketten sind kurz, unsere Beziehungen lang. Das ist kein Zufall, sondern Strategie.",
  },
  {
    Icon: TreePine,
    title: "Langfristig gedacht",
    text: "Wir denken in Generationen. Unsere Investitionen heute sind die Grundlage für die nächsten dreißig Jahre.",
  },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function Philosophy() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Unsere Haltung</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Mittelstand mit Industrie-Anspruch.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pillars.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
            >
              <div className="mb-5">
                <Icon size={32} strokeWidth={1.5} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
