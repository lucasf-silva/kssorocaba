import { create } from "zustand";
import { MenuAside } from "@/types/Menu";

// Definição dos Tipos
export type MenuState = {
    menu: MenuAside;
};

export type MenuActions = {
    setMenu: (menu: MenuAside) => void;
};

export type MenuStore = MenuState & MenuActions;

export const useMenuStore = create<MenuStore>((set) => ({
    menu: "close",
    setMenu: (newState) => set({ menu: newState }),
}));
