"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { mainNavItems } from "@/lib/navigation-data"
import MegaMenu from "./MegaMenu"
import MobileMenu from "./MobileMenu"

export default function MainNavbar() {
  const pathname = usePathname()
  const isKieswerke = pathname.startsWith("/kieswerke")
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

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
        className={[
          "fixed top-10 left-0 right-0 h-16 z-40 transition-all duration-300",
          scrolled
            ? "bg-black/30 backdrop-blur-md border-b border-white/10 shadow-sm"
            : "bg-transparent border-b border-white/10",
        ].join(" ")}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src={isKieswerke ? "/logo-kieswerke.png" : "/logo.png"}
              alt="PS Verbund"
              height={isKieswerke ? 48 : 30}
              width={isKieswerke ? 66 : 90}
              className="object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1 h-full">
            {mainNavItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center"
                onMouseEnter={() => handleMouseEnter(item.label)}
              >
                <Link
                  href={item.href ?? "#"}
                  className={[
                    "flex items-center px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-full",
                    openMenu === item.label
                      ? "bg-white/20 text-white"
                      : "text-white/90 hover:bg-white/10 hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-white/90 hover:text-white transition-colors"
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
