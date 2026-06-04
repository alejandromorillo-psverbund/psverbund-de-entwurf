"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export default function Geography() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Standorte & Märkte</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Mitten in Norddeutschlands wichtigstem Bau-Korridor.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Hamburg. Hannover. Wolfsburg. Braunschweig. Lüneburg.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Das sind unsere Märkte — und unser Zuhause. Kurze Wege, lokales Wissen und jahrzehntelange Beziehungen machen uns zum verlässlichsten Baupartner in der Region.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="relative aspect-[4/3] bg-gray-200 rounded-br-[3.5rem] flex items-center justify-center"
          >
            <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">Karte folgt</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
