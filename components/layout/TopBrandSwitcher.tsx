"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { brands } from "@/lib/navigation-data"

export default function TopBrandSwitcher() {
  const pathname = usePathname()

  return (
    <div className="fixed top-0 left-0 right-0 h-10 bg-[#1a1a1a] z-50 flex items-stretch border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-stretch justify-between">
        {brands.map((brand) => {
          const isActive = pathname.startsWith(brand.href)
          return (
            <Link
              key={brand.href}
              href={brand.href}
              style={isActive ? { borderBottomColor: brand.accentColor } : undefined}
              className={[
                "group flex items-center px-6 h-full border-b-2 transition-all duration-200",
                isActive ? "" : "border-transparent",
              ].join(" ")}
            >
              <Image
                src={brand.logo}
                alt={brand.label}
                height={32}
                width={120}
                className="object-contain transition-all duration-200"
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
