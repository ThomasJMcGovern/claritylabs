"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/CLFavicon.png"
            alt="ClarityLabs Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-serif font-bold text-xl text-stone-900">ClarityLabs™</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("why-it-works")}
            className="text-stone-600 hover:text-stone-900 transition-colors"
          >
            Why it Works
          </button>
          <button
            onClick={() => scrollToSection("coa")}
            className="text-stone-600 hover:text-stone-900 transition-colors"
          >
            COA
          </button>
          <button
            onClick={() => scrollToSection("reviews")}
            className="text-stone-600 hover:text-stone-900 transition-colors"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-stone-600 hover:text-stone-900 transition-colors"
          >
            FAQ
          </button>
        </nav>

        <Button onClick={() => scrollToSection("buy-box")} className="bg-teal hover:bg-teal text-white px-6">
          Start 30-Day Supply
        </Button>
      </div>
    </header>
  )
}
