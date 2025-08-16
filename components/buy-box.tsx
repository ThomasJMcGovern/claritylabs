"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Minus, Plus, Leaf, Wheat, Dna } from "lucide-react"
import { useCart } from "@/lib/cart"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function BuyBox() {
  const [quantity, setQuantity] = useState(1)
  const { addToCart, isSubscription, toggleSubscription } = useCart()

  const basePrice = 49
  const subscriptionPrice = 41.65
  const currentPrice = isSubscription ? subscriptionPrice : basePrice

  const handleAddToCart = () => {
    addToCart({
      id: "methyl-15",
      name: "Methyl•15™ — L-Methylfolate 15 mg",
      price: basePrice,
      subscriptionPrice: subscriptionPrice,
      isSubscription,
    })
  }

  return (
    <div id="buy-box" className="lg:sticky lg:top-24">
      <Card className="border-2 border-stone-200 shadow-lg">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="font-serif font-semibold text-xl text-stone-900 mb-2">Methyl•15™ — L-Methylfolate 15 mg</h3>
            <p className="text-sm text-stone-600">30 capsules • 1 month supply</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Switch
                  checked={isSubscription}
                  onCheckedChange={toggleSubscription}
                  className="data-[state=checked]:bg-teal-600"
                />
                <span className="text-sm font-medium">Subscribe & Save</span>
              </div>
              {isSubscription && <Badge className="bg-teal-600 text-white">Save 15%</Badge>}
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-stone-900">${currentPrice.toFixed(2)}</span>
                {isSubscription && <span className="text-lg text-stone-500 line-through">${basePrice.toFixed(2)}</span>}
              </div>
              {isSubscription && <p className="text-sm text-stone-600">Cancel anytime • Skip or pause deliveries</p>}
              <p className="text-sm text-teal-600 font-medium">Free shipping on orders $45+</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Quantity</span>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  data-testid="quantity-decrease"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-8 text-center font-medium" data-testid="quantity-display">
                  {quantity}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  data-testid="quantity-increase"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <Button
              onClick={handleAddToCart}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 text-lg font-semibold"
              data-testid="add-to-cart"
            >
              Add to Cart • ${(currentPrice * quantity).toFixed(2)}
            </Button>
          </div>

          <TooltipProvider>
            <div className="flex justify-center gap-4 pt-4 border-t border-stone-200">
              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Leaf className="w-3 h-3" />
                    Vegan
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Made with plant-based ingredients</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Wheat className="w-3 h-3" />
                    Gluten-Free
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>No gluten-containing ingredients</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Dna className="w-3 h-3" />
                    Non-GMO
                  </Badge>
                </TooltipTrigger>
                <TooltipContent>
                  <p>No genetically modified organisms</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>

          <div className="text-xs text-stone-600 space-y-1">
            <p>⚠️ Ensure adequate vitamin B12; see FAQ.</p>
            <p>Ships in 24–48h • Free shipping $45+ • Secure checkout (Shop Pay / Apple Pay)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
