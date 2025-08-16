"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function EmailCapture() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Email capture:", email)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
    setEmail("")
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto bg-teal/5 border-teal/20">
          <CardContent className="p-8 text-center">
            <h3 className="font-serif font-bold text-2xl text-stone-900 mb-2">Get 10% Off Your First Order</h3>
            <p className="text-stone-600 mb-6">
              Join our community and receive exclusive health insights and special offers.
            </p>

            {isSubmitted ? (
              <div className="text-teal font-medium">Thank you! Check your email for your discount code.</div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" className="bg-teal hover:bg-teal/90 text-white px-6">
                  Get 10% Off
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
