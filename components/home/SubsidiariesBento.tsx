"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { brands } from "@/lib/navigation-data"

const descriptions: Record<string, string> = {
  Kieswerke: "Gewinnung und Lieferung hochwertiger mineralischer Rohstoffe.",
  "Straßen & Tiefbau": "Straßen-, Erd- und Tiefbauarbeiten für öffentliche und private Auftraggeber.",
  Infrabau: "Infrastrukturprojekte im Kanal-, Leitungs- und Sonderbau.",
  Bauschutt: "Professionelle Entsorgung, Aufbereitung und Endlagerung von Bauabfällen.",
}

const ease = [0.22, 1, 0.36, 1] as const

export default function SubsidiariesBento() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Unsere Gesellschaften</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Vier Spezialisten. Eine Gruppe.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link
                href={brand.href}
                className="flex flex-col h-full bg-white shadow-sm rounded-br-[3.5rem] overflow-hidden"
              >
                <div className="h-1 w-full" style={{ backgroundColor: brand.accentColor }} />
                <div className="p-8 flex flex-col flex-1 gap-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {brand.shortLabel}
                  </p>
                  <h3 className="font-bold text-gray-900 leading-snug">{brand.label}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {descriptions[brand.shortLabel] ?? ""}
                  </p>
                  <div
                    className="flex items-center gap-1.5 text-sm font-medium mt-2 transition-colors"
                    style={{ color: brand.accentColor }}
                  >
                    <span>Mehr erfahren</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
