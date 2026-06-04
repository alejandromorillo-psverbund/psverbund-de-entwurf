"use client"

import { motion } from "framer-motion"

const contacts = [
  { role: "Vertrieb", email: "vertrieb@psverbund.de" },
  { role: "Karriere", email: "karriere@psverbund.de" },
  { role: "Presse", email: "presse@psverbund.de" },
]

const ease = [0.22, 1, 0.36, 1] as const

export default function ContactTeaser() {
  return (
    <section className="bg-white py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
              Sprechen wir.
            </h2>
            <address className="not-italic text-gray-500 leading-relaxed text-sm">
              <p className="font-semibold text-gray-900">PS Verbund GmbH</p>
              <p>Musterstraße 1</p>
              <p>21000 Hamburg</p>
            </address>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="flex flex-col justify-center gap-2"
          >
            {contacts.map(({ role, email }, i) => (
              <motion.div
                key={role}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="border-t border-gray-100 pt-4 pb-2"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{role}</p>
                <a
                  href={`mailto:${email}`}
                  className="text-xl md:text-2xl font-bold text-gray-900 hover:underline break-all"
                >
                  {email}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
