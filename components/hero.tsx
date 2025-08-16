"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badges } from "./badges"

export function Hero() {
  const scrollToBuyBox = () => {
    document.getElementById("buy-box")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-stone-900">
              Activated Folate That Works With Your Genes
            </h1>
            <p className="text-lg md:text-xl text-stone-600 leading-relaxed">
              Clinically-dosed L-Methylfolate (5-MTHF) to support neurotransmitter synthesis and homocysteine balance.
            </p>
          </div>

          <Badges />

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToBuyBox}
              size="lg"
              className="bg-teal hover:bg-teal/90 text-white px-8 py-3 text-lg"
            >
              Start 30-Day Supply
            </Button>
            <Button
              onClick={scrollToBuyBox}
              variant="outline"
              size="lg"
              className="border-teal text-teal hover:bg-teal hover:text-white px-8 py-3 text-lg bg-transparent"
            >
              Subscribe & Save 15%
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <Image
              src="/clarity-product-hero.png"
              alt="ClarityLabs L-Methylfolate Dietary Supplement"
              width={600}
              height={600}
              className="w-full max-w-md h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
