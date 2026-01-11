import { CartItem, Product } from "@/types/general-types";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartState {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  updateQuantity: (id: number, type: "inc" | "dec") => void;
  removeItem: (id: number) => void;
  clearCart: () => void
}
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product, quantity) => {
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id
          );
          if (existingItem) {
            const updateCart = state.cart.map((item) => {
              if (item.id === product.id) {
                return {
                  ...item,
                  quantity: item.quantity + quantity,
                };
              }
              return item;
            });
            return { cart: updateCart };
          }
          const newCartItem = { ...product, quantity };
          return { cart: [...state.cart, newCartItem] };
        });
      },
      updateQuantity: (id, type) => {
        set((state) => ({
          cart: state.cart.map((item) => {
            if (item.id !== id) return item;
            const newQuantity =
              type === "inc" ? item.quantity + 1 : item.quantity - 1;
            return {
              ...item,
              quantity: Math.max(1, newQuantity),
            };
          }),
        }));
      },
      removeItem: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id)
        }));
      },
      clearCart: () => set({cart: []})
    }),
    {
      name: "cart", // name of the item in the storage (must be unique)
    }
  )
);
