"use client"

import { create } from "zustand"

interface CartItem {
  id: string
  name: string
  price: number
  subscriptionPrice: number
  quantity: number
  isSubscription: boolean
}

interface CartStore {
  items: CartItem[]
  isSubscription: boolean
  addToCart: (item: Omit<CartItem, "quantity">) => void
  updateQuantity: (id: string, quantity: number) => void
  toggleSubscription: () => void
  getTotal: () => number
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  isSubscription: false,
  addToCart: (item) => {
    console.log("[v0] Adding to cart:", item)
    set((state) => ({
      items: [...state.items.filter((i) => i.id !== item.id), { ...item, quantity: 1 }],
    }))
  },
  updateQuantity: (id, quantity) => {
    console.log("[v0] Updating quantity:", id, quantity)
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, quantity } : item)),
    }))
  },
  toggleSubscription: () => {
    console.log("[v0] Toggling subscription")
    set((state) => ({ isSubscription: !state.isSubscription }))
  },
  getTotal: () => {
    const state = get()
    return state.items.reduce((total, item) => {
      const price = state.isSubscription ? item.subscriptionPrice : item.price
      return total + price * item.quantity
    }, 0)
  },
}))
