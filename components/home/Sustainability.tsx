"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

export default function Sustainability() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="relative w-full aspect-[16/7] bg-gray-200 rounded-br-[3.5rem]"
        >
          <div className="absolute bottom-8 left-8 bg-white p-8 shadow-lg max-w-sm">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
              Bauen mit Verantwortung
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4 leading-snug">
              Bauen für heute, planen über Generationen.
            </h2>
            <Link
              href="/gruppe/nachhaltigkeit"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:gap-3 transition-all"
            >
              Mehr zu unserer Haltung
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
