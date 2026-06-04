"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export default function Hero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-end">
      <Image
        src="/hero-placeholder.png"
        alt="PS Verbund"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="text-white text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-tight mb-6"
        >
          Vom Rohstoff über den Straßenbau bis zum Recycling — bei uns liegt der gesamte Bau in einer Hand.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="text-white/80 text-lg max-w-2xl mb-10 leading-relaxed"
        >
          Wir sind ein norddeutscher Verbund aus vier spezialisierten Unternehmen — verwurzelt in der Region, aufgestellt für die nächsten dreißig Jahre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="flex flex-wrap gap-4"
        >
          <Link
            href="/gesellschaften"
            className="px-6 py-3 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-gray-100 transition-colors"
          >
            Unsere Gesellschaften entdecken
          </Link>
          <Link
            href="/karriere"
            className="px-6 py-3 border-2 border-white text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            Karriere im Verbund
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
