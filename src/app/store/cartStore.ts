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

      // Adiciona ao carrinho ou aumenta a quantidade se já existir
      addToCart: (product) => {
        const { cart } = get()
        const existingProduct = cart.find((p) => p.id === product.id)

        if (existingProduct) {
          set({
            cart: cart.map((p) =>
              p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
            ),
          })
        } else {
          set({
            cart: [...cart, { ...product, quantity: 1 }],
          })
        }
      },

      // Remove o item completamente
      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((p) => p.id !== id),
        })
      },

      // Diminui a quantidade (mínimo 1)
      decreaseQuantity: (id) => {
        const updatedCart = get().cart.map((p) =>
          p.id === id && p.quantity > 1 
            ? { ...p, quantity: p.quantity - 1 } 
            : p
        )
        set({ cart: updatedCart })
      },

      // Aumenta a quantidade
      increaseQuantity: (id) => {
        const updatedCart = get().cart.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + 1 } : p
        )
        set({ cart: updatedCart })
      },

      // Limpa todo o estado (útil no logout)
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage", // Nome da chave no LocalStorage
    }
  )
)