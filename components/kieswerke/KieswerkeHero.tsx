"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const


export default function KieswerkeHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between -mt-[104px] pt-[104px]">

      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="/kieswerke-hero-bg.jpg"
          alt="Tagebau Groß Buchholz"
          fill
          className="object-cover"
          priority
        />
        {/* Subtle gradient: light at top, stronger only at bottom for stats */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/65" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-between max-w-7xl mx-auto px-6 py-10 w-full">

        {/* Top bar: brand */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="flex justify-end"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200]">
            ▲&nbsp;&nbsp;PS KIESWERKE GMBH
          </p>
        </motion.div>

        {/* Left-aligned headline block */}
        <div className="flex flex-col items-end max-w-2xl ml-auto text-right">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="text-5xl md:text-7xl font-black leading-none uppercase tracking-tight text-white mb-6"
          >
            ROHSTOFF.
            <br />
            RECYCLING.
            <br />
            LOGISTIK.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease }}
            className="text-base md:text-lg text-white mb-4 font-medium"
          >
            Versorgungssicherheit für Norddeutschlands Bauprojekte. Aus eigener Hand.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="text-sm text-white/90 max-w-xl leading-relaxed"
          >
            Die PS Kieswerke GmbH betreibt den Kiessandtagebau Groß Buchholz / Golmer Berg in der Prignitz — eine der wenigen Lagerstätten Norddeutschlands mit einem Genehmigungshorizont bis 2059. Aus eigener Gewinnung liefern wir die Substanz für Hoch-, Tief- und Straßenbau. Wir denken in Generationen, nicht in Quartalen.
          </motion.p>
        </div>

        {/* Triangle pyramid motif — bottom right */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="flex items-end justify-end gap-1"
        >
          <div
            className="w-0 h-0"
            style={{
              borderLeft: "40px solid transparent",
              borderRight: "40px solid transparent",
              borderBottom: "64px solid rgba(255,255,255,0.12)",
              transform: "translateX(20px)",
            }}
          />
          <div
            className="w-0 h-0"
            style={{
              borderLeft: "60px solid transparent",
              borderRight: "60px solid transparent",
              borderBottom: "100px solid #a8c200",
            }}
          />
        </motion.div>

      </div>

    </section>
  )
}
