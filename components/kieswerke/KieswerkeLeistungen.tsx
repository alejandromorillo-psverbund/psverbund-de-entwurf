"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

export default function KieswerkeLeistungen() {
  return (
    <section data-theme="light" className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="py-20"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-6">
            ▲&nbsp;&nbsp;KERNPRODUKTE
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none uppercase text-gray-900 max-w-3xl">
            WIR LIEFERN,
            <br />
            WAS DEUTSCHLAND BAUT.
          </h2>
        </motion.div>

        {/* Row 1: Text left / Foto right */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200"
        >
          <div className="py-12 md:py-16 md:pr-16 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-3">01</p>
            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-900 mb-4 leading-snug">
              Gewinnung & Produktion
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Bausande, Betonkiese, Frostschutzkiese und Mineralgemische. Garantiert durch unsere zertifizierte werkseigene Produktionskontrolle (DIN EN 12620). Ergänzt durch unsere genehmigte Mischanlage für maßgeschneiderte Anforderungen.
            </p>
          </div>
          <div className="relative h-72 md:h-auto min-h-[320px] overflow-hidden rounded-br-[3.5rem]">
            <Image
              src="/kieswerke-abbau.png"
              alt="Abbau Groß Buchholz"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-wider text-white/60">
              Foto: Abbau Groß Buchholz
            </span>
          </div>
        </motion.div>

        {/* Row 2: Foto left / Text right (alternating) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.08, ease }}
          className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200"
        >
          <div className="relative h-72 md:h-auto min-h-[320px] overflow-hidden rounded-br-[3.5rem] order-last md:order-first">
            <Image
              src="/kieswerke-transport.png"
              alt="Transport & Logistik"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-wider text-white/60">
              Foto: Transport & Logistik
            </span>
          </div>
          <div className="py-12 md:py-16 md:pl-16 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-3">02</p>
            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-900 mb-4 leading-snug">
              Transport & Logistik
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Mit einem hochmodernen Fuhrpark von über 40 LKW und schweren Baumaschinen bringen wir das Material genau dorthin, wo es gebraucht wird. Pünktlich, zuverlässig, direkt.
            </p>
          </div>
        </motion.div>

        {/* Row 3: 03 + 04 side by side, no photo */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
          className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-gray-200 mb-0"
        >
          <div className="py-12 md:py-16 md:pr-16 md:border-r border-gray-200">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-3">03</p>
            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-900 mb-4 leading-snug">
              Recycling & Entsorgung
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Baustoffe sind wertvoll. Wir übernehmen das Recycling von Beton- und Bauschutt, bewirtschaften mineralische Reststoffe und bieten passgenaue Entsorgungskonzepte — inklusive eines flexiblen Containerdienstes.
            </p>
          </div>
          <div className="py-12 md:py-16 md:pl-16 border-t md:border-t-0 border-gray-200">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a8c200] mb-3">04</p>
            <h3 className="text-xl md:text-2xl font-black uppercase text-gray-900 mb-4 leading-snug">
              Erdbau & Abbruch
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Wir bereiten den Boden für Neues. Mit unserem Team und schwerem Gerät lösen wir Erdbau- und Abbrucharbeiten effizient und sicher.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-gray-100"
        >
          <p className="text-sm text-gray-400 max-w-xs">
            Interesse an unseren Leistungen? Wir beraten Sie gerne persönlich.
          </p>
          <a
            href="#kontakt"
            className="inline-flex items-center gap-3 bg-[#a8c200] text-black text-xs font-black uppercase tracking-[0.2em] px-8 py-4 hover:bg-[#96af00] transition-colors duration-200 shrink-0"
          >
            Jetzt anfragen ▲
          </a>
        </motion.div>

      </div>
    </section>
  )
}
