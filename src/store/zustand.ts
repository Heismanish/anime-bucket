import { create } from "zustand";

type UserStore = {
  userInfo: { name: string; email: string; image: string };
  updateUserInfo: (user: {
    name: string;
    email: string;
    image: string;
  }) => void;
  removeUserInfo: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  userInfo: { name: "", email: "", image: "" },
  updateUserInfo: (user) => set({ userInfo: user }),
  removeUserInfo: () => set({ userInfo: { name: "", email: "", image: "" } }),
}));
