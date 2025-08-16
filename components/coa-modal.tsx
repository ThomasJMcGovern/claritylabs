"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Download, Shield, Microscope, Beaker } from "lucide-react"

interface COAModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function COAModal({ open, onOpenChange }: COAModalProps) {
  const handleDownload = () => {
    // In a real app, this would download the actual COA PDF
    console.log("[v0] Downloading COA PDF")
    window.open("/coa/CL-M15-LOT123.pdf", "_blank")
  }

  const testingAreas = [
    {
      icon: Shield,
      title: "Potency Verification",
      description: "Confirms active ingredient concentration matches label claims",
    },
    {
      icon: Beaker,
      title: "Heavy Metals Testing",
      description: "Tests for lead, mercury, cadmium, and arsenic contamination",
    },
    {
      icon: Microscope,
      title: "Microbial Analysis",
      description: "Screens for harmful bacteria, yeast, and mold contamination",
    },
  ]

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Certificate of Analysis</DialogTitle>
          <DialogDescription className="text-base">
            Independent third-party testing results for Methyl•15™
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-stone-600 leading-relaxed">
            Every batch of Methyl•15™ undergoes rigorous third-party testing at an FDA-registered laboratory to ensure
            purity, potency, and safety. Our Certificate of Analysis provides complete transparency about what&apos;s in your
            supplement.
          </p>

          <div className="grid gap-4">
            {testingAreas.map((area, index) => (
              <div key={index} className="flex gap-4 p-4 bg-stone-50 rounded-lg">
                <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <area.icon className="w-5 h-5 text-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-1">{area.title}</h4>
                  <p className="text-sm text-stone-600">{area.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-teal/5 border border-teal/20 rounded-lg p-4">
            <p className="text-sm text-stone-700">
              <strong>Current Batch:</strong> LOT123 • <strong>Test Date:</strong> December 2024 •<strong>Lab:</strong>{" "}
              Eurofins Scientific
            </p>
          </div>

          <Button onClick={handleDownload} className="w-full bg-teal hover:bg-teal/90 text-white">
            <Download className="w-4 h-4 mr-2" />
            Download Full COA (PDF)
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
