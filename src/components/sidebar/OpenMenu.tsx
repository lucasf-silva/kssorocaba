'use client';

import { useMenuStore } from "@/store/menuStore";
import { MenuOutlined } from "@ant-design/icons";

export const OpenMenu = () => {
    const { setMenu } = useMenuStore();

    return (
        <button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
            onClick={() => setMenu("open")}
            aria-label="Menu"
        >
            <MenuOutlined className="text-white" />
        </button>
    )
}