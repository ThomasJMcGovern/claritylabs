import { Card, CardContent } from "@/components/ui/card"
import { Shield } from "lucide-react"

export function Guarantee() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-teal/20 bg-teal/5">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-teal" />
              </div>

              <h2 className="font-serif font-bold text-2xl md:text-3xl text-stone-900 mb-4">
                30-Day Money-Back Guarantee
              </h2>

              <p className="text-lg text-stone-700 leading-relaxed">
                If you don&apos;t feel a difference, email us for a full refund—no return required. We&apos;re confident in the
                quality and effectiveness of Methyl•15™, and we want you to be too.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
