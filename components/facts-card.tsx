"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import { useState } from "react"
import { COAModal } from "./coa-modal"

export function FactsCard() {
  const [showCOA, setShowCOA] = useState(false)

  const freeFromList = ["Gluten", "Dairy", "Soy", "Eggs", "Fish", "Shellfish", "Tree nuts", "Peanuts"]

  return (
    <section id="coa" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-stone-900 mb-4">Dose Transparency</h2>
            <p className="text-lg text-stone-600">Every ingredient clearly listed with third-party verification.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-2 border-stone-200">
              <CardHeader className="bg-stone-50">
                <CardTitle className="text-center font-serif text-xl">Supplement Facts</CardTitle>
                <p className="text-center text-sm text-stone-600">Serving Size: 1 capsule</p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="font-medium">L-Methylfolate (as 5-MTHF)</span>
                    <span className="font-bold">15 mg</span>
                  </div>

                  <div className="pt-4 space-y-2">
                    <p className="text-sm font-medium text-stone-900">Other Ingredients:</p>
                    <p className="text-sm text-stone-600">Cellulose (capsule), Rice flour</p>
                  </div>

                  <div className="pt-4">
                    <p className="text-xs text-stone-500">* Daily Value not established</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Free From</h3>
                  <div className="flex flex-wrap gap-2">
                    {freeFromList.map((item, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Third-Party Tested</h3>
                  <p className="text-stone-600 mb-4 text-sm leading-relaxed">
                    Every batch is independently tested for potency, purity, heavy metals, and microbial contamination
                    to ensure the highest quality standards.
                  </p>
                  <Button
                    onClick={() => setShowCOA(true)}
                    variant="outline"
                    className="w-full border-teal text-teal hover:bg-teal hover:text-white"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View Certificate of Analysis
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <COAModal open={showCOA} onOpenChange={setShowCOA} />
    </section>
  )
}
