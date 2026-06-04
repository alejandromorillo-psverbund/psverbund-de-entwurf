"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const newsItems = [
  { date: "Mai 2026", title: "PS Infrabau gewinnt Großauftrag im Raum Hannover" },
  { date: "Apr. 2026", title: "Neue Recyclinganlage in Betrieb genommen" },
  { date: "Mär. 2026", title: "PS Verbund begrüßt 15 neue Auszubildende" },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function CareerNews() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16">
          {/* Karriere */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Karriere im PS Verbund</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
              Wachse mit einer Gruppe, die wächst.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 max-w-lg">
              Ob Berufseinsteiger, Fachkraft oder Führungskraft — bei uns findest du einen sicheren Arbeitsplatz mit echten Entwicklungsperspektiven in einem wachsenden Unternehmen.
            </p>
            <Link
              href="/karriere"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-gray-700 transition-colors"
            >
              Offene Stellen ansehen
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          {/* News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Neuigkeiten aus dem Verbund</p>
            <div>
              {newsItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease }}
                >
                  <Link href="/news" className="group flex items-start justify-between gap-4 border-t border-gray-200 py-5 hover:border-gray-400 transition-colors">
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{item.date}</p>
                      <p className="text-sm font-medium text-gray-900 leading-snug">{item.title}</p>
                    </div>
                    <ArrowRight size={15} className="text-gray-400 shrink-0 mt-1 group-hover:text-gray-900 transition-colors" />
                  </Link>
                </motion.div>
              ))}
              <div className="border-t border-gray-200 pt-5">
                <Link href="/news" className="text-sm font-semibold text-gray-900 hover:underline inline-flex items-center gap-1.5">
                  Alle Neuigkeiten <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
