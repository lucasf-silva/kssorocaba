import { useMenuStore } from "@/store/menuStore";

export const openMenu = () => {
    const { menu, setMenu } = useMenuStore();

    const open = () => setMenu("open");
    const close = () => setMenu("close");

    return { menu, open, close };
};