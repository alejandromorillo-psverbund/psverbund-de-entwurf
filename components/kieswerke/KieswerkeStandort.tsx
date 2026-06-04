"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

// ■ as lime square marker — matches PDF style
const lieferradius = [
  { ort: "HAMBURG", km: "~135 km" },
  { ort: "MAGDEBURG", km: "~45 km" },
  { ort: "WITTENBERGE", km: "~25 km" },
  { ort: "KANSTORF", km: "~7,7 km" },
  { ort: "GROß BUCHHOLZ / GOLMER BERG", km: "UNSER STANDORT", highlight: true },
]

const genehmigungen = [
  { label: "Rahmenbetriebsplan", value: "31.12.2059" },
  { label: "Wasserrecht", value: "31.12.2059" },
  { label: "Hauptbetriebsplan", value: "DERZEIT" },
  { label: "Mischplatz", value: "DERZEIT" },
  { label: "Gewerbe", value: "AKTIV" },
  { label: "Handelsregistereintrag", value: "AKTIV" },
]

export default function KieswerkeStandort() {
  return (
    <section className="bg-[#1a1a1a] py-24 border-t border-[#333]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Headline — full width on top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="flex items-start justify-between mb-12"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-6">
              ▲&nbsp;&nbsp;STANDORT & GENEHMIGUNG
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-none uppercase text-white">
              WIR STEHEN
              <br />
              AUF GEPRÜFTEM
              <br />
              BODEN.
            </h2>
          </div>
          {/* Triangle accent top-right */}
          <div
            className="w-0 h-0 hidden md:block mt-2"
            style={{
              borderLeft: "20px solid transparent",
              borderRight: "20px solid transparent",
              borderBottom: "32px solid #a8c200",
            }}
          />
        </motion.div>

        {/* Two-column: Lieferradius left, Genehmigungen right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Left — delivery radius with ■ markers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              LIEFERRADIUS
            </p>
            <ul className="space-y-0">
              {lieferradius.map(({ ort, km, highlight }) => (
                <li
                  key={ort}
                  className="flex items-center justify-between border-b border-[#2a2a2a] py-3"
                >
                  <span className={`text-sm font-bold flex items-center gap-3 ${highlight ? "text-[#a8c200]" : "text-white"}`}>
                    <span className="text-[#a8c200] text-xs">■</span>
                    {ort}
                  </span>
                  <span className={`text-sm ${highlight ? "text-[#a8c200] font-bold" : "text-gray-400"}`}>
                    {km}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — permissions table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18, ease }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-5">
              GENEHMIGUNGEN
            </p>
            <ul className="space-y-0">
              {genehmigungen.map(({ label, value }) => (
                <li
                  key={label}
                  className="flex items-center justify-between border-b border-[#2a2a2a] py-3"
                >
                  <span className="text-sm text-gray-400">{label}</span>
                  <span className="text-sm font-bold text-[#a8c200]">{value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Full-width aerial image placeholder at bottom — like PDF */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="relative h-[380px] w-full rounded-br-[3.5rem] overflow-hidden flex flex-col justify-end p-8"
        >
          <Image
            src="/kieswerke-luftbild.png"
            alt="Luftbild Tagebau Groß Buchholz"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <p className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8c200]">
            LUFTBILD: TAGEBAU GROß BUCHHOLZ
          </p>
          <p className="relative text-xs text-gray-400 mt-1">
            Standort Golmer Berg · 19348 Perleberg
          </p>
        </motion.div>

      </div>
    </section>
  )
}
