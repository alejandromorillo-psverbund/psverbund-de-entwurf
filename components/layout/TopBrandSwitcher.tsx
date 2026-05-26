"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { brands } from "@/lib/navigation-data"

export default function TopBrandSwitcher() {
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-gray-900 z-50 flex items-stretch">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-stretch justify-end">
        {/* Brand Switcher Links */}
        <div className="flex items-stretch">
          {brands.map((brand) => {
            const isActive = pathname.startsWith(brand.href)
            return (
              <Link
                key={brand.href}
                href={brand.href}
                style={isActive ? { borderBottomColor: brand.accentColor } : undefined}
                className={[
                  "flex items-center px-4 text-xs font-medium tracking-wide transition-all h-full border-b-2",
                  isActive
                    ? "text-white"
                    : "text-gray-400 border-transparent hover:text-gray-200 hover:border-gray-600",
                ].join(" ")}
              >
                {brand.shortLabel}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
