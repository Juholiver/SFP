"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

interface Product {
  id: number
  title: string
  description: string
  price: number
  img: string
  quantity: number
}

interface CartStore {
  cart: Product[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  decreaseQuantity: (id: number) => void
  increaseQuantity: (id: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existing = get().cart.find(p => p.id === product.id)

        if (existing) {
          set({
            cart: get().cart.map(p =>
              p.id === product.id
                ? { ...p, quantity: p.quantity + 1 }
                : p
            )
          })
        } else {
          set({
            cart: [...get().cart, { ...product, quantity: 1 }]
          })
        }
      },

      removeFromCart: (id) =>
        set({
          cart: get().cart.filter(p => p.id !== id)
        }),

      decreaseQuantity: (id) => {
        const updated = get().cart.map(p =>
          p.id === id && p.quantity > 1
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        set({ cart: updated })
      },

      increaseQuantity: (id) => {
        const updated = get().cart.map(p =>
          p.id === id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
        set({ cart: updated })
      },

      clearCart: () => set({ cart: [] })
    }),
    {
      name: "cart-storage"
    }
  )
)