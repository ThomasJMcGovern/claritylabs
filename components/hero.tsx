"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badges } from "./badges"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Hero() {
  const scrollToBuyBox = () => {
    document.getElementById("buy-box")?.scrollIntoView({ behavior: "smooth" })
  }

  const productImages = [
    { src: "/CLProduct1.png", alt: "ClarityLabs L-Methylfolate bottle with box" },
    { src: "/CLProduct2.png", alt: "ClarityLabs L-Methylfolate supplement facts" }
  ]

  return (
    <section className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
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
          <Carousel className="w-full max-w-md">
            <CarouselContent>
              {productImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={600}
                      className="w-full h-auto"
                      priority={index === 0}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
