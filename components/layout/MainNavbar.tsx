"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { mainNavItems } from "@/lib/navigation-data"
import MegaMenu from "./MegaMenu"
import MobileMenu from "./MobileMenu"

export default function MainNavbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenMenu(label)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 100)
  }

  const activeItem = mainNavItems.find((item) => item.label === openMenu)

  return (
    <>
      <nav
        className="fixed top-10 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40"
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image src="/logo.png" alt="PS Verbund" height={30} width={90} className="object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-stretch h-full">
            {mainNavItems.map((item) => (
              <div
                key={item.label}
                className="flex items-stretch"
                onMouseEnter={() => handleMouseEnter(item.label)}
              >
                <Link
                  href={item.href ?? "#"}
                  className={[
                    "flex items-center px-4 text-sm font-medium tracking-wide transition-colors h-full border-b-2",
                    openMenu === item.label
                      ? "text-gray-900 border-gray-900"
                      : "text-gray-500 border-transparent hover:text-gray-900 hover:border-gray-300",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Menü öffnen"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* Mega Menu – absolute inside fixed nav, spans full viewport width */}
        <AnimatePresence>
          {activeItem?.children && (
            <MegaMenu key={openMenu} items={activeItem.children} teasers={activeItem.teasers} />
          )}
        </AnimatePresence>
      </nav>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
