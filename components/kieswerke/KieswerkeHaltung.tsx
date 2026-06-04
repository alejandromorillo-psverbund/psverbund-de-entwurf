"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

// 8 items matching PDF page 4
const staerken = [
  {
    nr: "01",
    titel: "DIENSTLEISTUNGEN",
    text: "Rohstoffgewinnung, Schüttguttransport, Recycling, Entsorgung",
  },
  {
    nr: "02",
    titel: "MITARBEITER",
    text: "Über 40: 8 Maschinisten, 18 Berufskraftfahrer, 4 Büroangestellte, 1 Meister, 6 Handwerker, 5 kaufmännische Angestellte",
  },
  {
    nr: "03",
    titel: "GRUNDSTÜCK",
    text: "96 ha im Eigentum. Davon 77 ha im aktiven Abbau. Baurecht 43 ha; davon noch 35 ha abzubauen.",
  },
  {
    nr: "04",
    titel: "WERKSTATT",
    text: "600 qm mit Arbeitsbühne, Kränen und Bremsenprüfstand.",
  },
  {
    nr: "05",
    titel: "BÜROGEBÄUDE",
    text: "Vollwertiges Bürogebäude auf 3 Etagen mit 8 Büros, 3 Küchen sowie Diesel-Diesel und Waage.",
  },
  {
    nr: "06",
    titel: "GENEHMIGUNGEN",
    text: "Alle aktiven Genehmigungen vollständig übertragbar.",
  },
  {
    nr: "07",
    titel: "MASCHINEN",
    text: "Eigenfinanzierter Fuhrpark, Bagger, Radlader, LKW.",
  },
  {
    nr: "08",
    titel: "NIEDRIGE LEASING- UND FINANZIERUNGSQUOTE",
    text: "Niedrige Kapitalkosten durch eigenfinanzierte Anlagen.",
  },
]

export default function KieswerkeHaltung() {
  return (
    <section data-theme="light" className="bg-white py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Left — headline block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="md:sticky md:top-32 self-start"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-6">
              ▲&nbsp;&nbsp;UNTERNEHMENSPROFIL
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-gray-900 mb-8">
              DIE KULTUR DES
              <br />
              „FERTIGMACHENS"
            </h2>
            <p className="text-gray-500 leading-relaxed max-w-sm">
              Seit unserer Gründung 2011 stehen wir für eine Kultur der klaren Worte und schnellen Taten. Flache Hierarchien, direkte Kommunikation, Fairness und Effizienz sind bei uns keine Buzzwords, sondern das Fundament unserer täglichen Arbeit.
            </p>
          </motion.div>

          {/* Right — 8 strengths, clean list layout (no card borders) */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-8"
            >
              UNSERE STÄRKEN
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              {staerken.map(({ nr, titel, text }, i) => (
                <motion.div
                  key={nr}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease }}
                  className="border-t border-gray-100 py-5"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-lg font-black text-[#a8c200] leading-none shrink-0">
                      {nr}
                    </span>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-900">
                      {titel}
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed pl-8">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
