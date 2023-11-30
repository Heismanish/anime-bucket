import { create } from "zustand";

type UserStore = {
  cart: number;
  add: () => void;
  remove: () => void;
  removeAll: () => void;
};

export const useCartStore = create<UserStore>((set) => ({
  cart: 0,
  add: () => set((state) => ({ cart: state.cart + 1 })),
  remove: () => set((state) => ({ cart: state.cart - 1 })),
  removeAll: () => set({ cart: 0 }),
}));
