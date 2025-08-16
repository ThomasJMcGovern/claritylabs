import { Card, CardContent } from "@/components/ui/card"
import { Dna, Brain, Activity } from "lucide-react"

export function WhyWorks() {
  const features = [
    {
      icon: Dna,
      title: "Bioactive form (5-MTHF)",
      description: "Bypasses common MTHFR conversion steps, providing the active form your body can use immediately.",
    },
    {
      icon: Brain,
      title: "Neurotransmitter support",
      description: "Supports serotonin, dopamine, and norepinephrine pathways for mood and cognitive function.",
    },
    {
      icon: Activity,
      title: "Homocysteine balance",
      description: "Supports one-carbon metabolism and healthy homocysteine levels for cardiovascular wellness.",
    },
  ]

  return (
    <section id="why-it-works" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-stone-900 mb-4">Why Methyl•15™ Works</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Unlike synthetic folic acid, our bioactive L-Methylfolate (5-MTHF) is immediately available for your body&apos;s
            methylation processes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm bg-white">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="w-8 h-8 text-teal" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-stone-900">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Methyl•15™ provides the clinically-studied dose of L-Methylfolate to support optimal methylation, especially
            important for individuals with MTHFR genetic variants who may have difficulty converting synthetic folic
            acid to its active form.
          </p>
        </div>
      </div>
    </section>
  )
}
