"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { X, ChevronDown } from "lucide-react"
import { brands, mainNavItems } from "@/lib/navigation-data"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const toggle = (label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-[55]"
            onClick={onClose}
          />

          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed top-0 right-0 h-full w-80 bg-white z-[60] flex flex-col overflow-y-auto shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <span className="font-bold text-gray-900 text-sm uppercase tracking-widest">Menü</span>
              <button
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-gray-900 transition-colors rounded"
                aria-label="Menü schließen"
              >
                <X size={20} />
              </button>
            </div>

            {/* Brand Links */}
            <div className="px-5 py-4 bg-gray-900">
              <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-3 font-semibold">
                Gesellschaften
              </p>
              <div className="space-y-2">
                {brands.map((brand) => (
                  <Link
                    key={brand.href}
                    href={brand.href}
                    onClick={onClose}
                    className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors py-0.5"
                  >
                    <span
                      className="w-1 h-4 rounded-full flex-shrink-0"
                      style={{ backgroundColor: brand.accentColor }}
                    />
                    {brand.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Nav Items */}
            <nav className="flex-1 py-1">
              {mainNavItems.map((item) => (
                <div key={item.label} className="border-b border-gray-50 last:border-0">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggle(item.label)}
                        className="w-full flex items-center justify-between px-5 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors text-left"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={[
                            "text-gray-400 transition-transform duration-200",
                            expandedItem === item.label ? "rotate-180" : "",
                          ].join(" ")}
                        />
                      </button>

                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="bg-gray-50 px-5 py-3 space-y-0.5">
                              {item.children.map((child) => (
                                <div key={child.href}>
                                  <Link
                                    href={child.href}
                                    onClick={onClose}
                                    className="block text-sm text-gray-700 hover:text-gray-900 py-1.5 transition-colors font-medium"
                                  >
                                    {child.label}
                                  </Link>
                                  {child.children && (
                                    <div className="pl-4 pb-1 space-y-1">
                                      {child.children.map((sub) => (
                                        <Link
                                          key={sub.href}
                                          href={sub.href}
                                          onClick={onClose}
                                          className="block text-xs text-gray-500 hover:text-gray-800 py-1 transition-colors"
                                        >
                                          {sub.label}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href ?? "#"}
                      onClick={onClose}
                      className="block px-5 py-3.5 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
