"use client"

import { motion } from "framer-motion"

const steps = [
  { num: "01", label: "Gewinnen" },
  { num: "02", label: "Liefern" },
  { num: "03", label: "Bauen" },
  { num: "04", label: "Zurückbauen" },
  { num: "05", label: "Aufbereiten" },
  { num: "06", label: "Endbeseitigen" },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function ValueChain() {
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
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Wertschöpfung</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 max-w-2xl">
            Von der Lagerstätte bis zur Deponie — alles aus einer Hand.
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:block relative">
          {/* Background line */}
          <div className="absolute top-5 left-[calc(100%/12)] right-[calc(100%/12)] h-px bg-gray-200" />
          {/* Animated foreground line */}
          <div className="absolute top-5 left-[calc(100%/12)] right-[calc(100%/12)] h-px overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gray-900 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
            />
          </div>

          <div className="grid grid-cols-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="flex flex-col items-center text-center px-2"
              >
                <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center mb-4 relative z-10">
                  <span className="text-xs font-bold text-gray-900">{step.num}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gray-200">
            <motion.div
              className="absolute inset-0 bg-gray-900 origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
            />
          </div>
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease }}
                className="flex items-center gap-4"
              >
                <div className="absolute left-0 w-6 h-6 rounded-full bg-white border-2 border-gray-900 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-gray-900">{step.num}</span>
                </div>
                <span className="text-sm font-semibold text-gray-900">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
