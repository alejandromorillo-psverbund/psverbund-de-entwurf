"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { NavSubItem, TeaserCard } from "@/lib/navigation-data"

interface MegaMenuProps {
  items: NavSubItem[]
  teasers?: TeaserCard[]
}

export default function MegaMenu({ items, teasers }: MegaMenuProps) {
  const sections = items.filter((item) => item.children)
  const directLinks = items.filter((item) => !item.children)

  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8, transition: { duration: 0.12, ease: "easeIn" } }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
      className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-12 py-10">
        <div className={`grid gap-16 ${teasers && teasers.length > 0 ? "grid-cols-[1fr_320px]" : "grid-cols-1"}`}>

          {/* Left: Vertical navigation */}
          <div className="flex flex-col gap-y-8">
            {directLinks.length > 0 && (
              <ul className="flex flex-col space-y-2">
                {directLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                      <ArrowRight size={16} className="text-gray-400 shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {sections.map((section) => (
              <div key={section.href}>
                <Link
                  href={section.href}
                  className="block text-sm font-bold text-gray-900 hover:text-gray-600 transition-colors mb-3"
                >
                  {section.label}
                </Link>
                <ul className="flex flex-col space-y-2">
                  {section.children!.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        <ArrowRight size={16} className="text-gray-400 shrink-0" />
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right: Visual teaser cards */}
          {teasers && teasers.length > 0 && (
            <div className="flex flex-col gap-6">
              {teasers.map((teaser) => (
                <Link key={teaser.href} href={teaser.href} className="group relative block">
                  <div className="w-full aspect-video bg-gray-200 rounded-br-[3.5rem]" />
                  <div className="absolute bottom-4 left-4 bg-white p-4 shadow-md">
                    <p className="text-xs text-gray-400 mb-1">{teaser.subtitle}</p>
                    <p className="text-sm font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {teaser.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
