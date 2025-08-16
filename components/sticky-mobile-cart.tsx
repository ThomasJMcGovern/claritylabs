"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart";

export function StickyMobileCart() {
  const [isVisible, setIsVisible] = useState(false);
  const { addToCart, isSubscription } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const buyBox = document.getElementById("buy-box");
      if (buyBox) {
        const rect = buyBox.getBoundingClientRect();
        setIsVisible(rect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAddToCart = () => {
    addToCart({
      id: "methyl-15",
      name: "Methyl•15™ — L-Methylfolate 15 mg",
      price: 49,
      subscriptionPrice: 41.65,
      isSubscription,
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[10000] bg-white border-t border-stone-200 p-4 md:hidden">
      <Button
        onClick={handleAddToCart}
        className="w-full bg-teal hover:bg-teal/90 text-white py-3 text-lg font-semibold"
      >
        <ShoppingCart className="w-5 h-2 mr-2" />
        Add to Cart • ${isSubscription ? "41.65" : "49.00"}
      </Button>
    </div>
  );
}
