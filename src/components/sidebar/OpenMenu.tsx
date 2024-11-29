'use client';

import { useMenuStore } from "@/store/menuStore";
import { MenuOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const OpenMenu = () => {
    const { setMenu } = useMenuStore();

    return (
        <Button
            className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
            onClick={() => setMenu("open")}
            aria-label="Menu"
        >
            <MenuOutlined className="text-white" />
        </Button>
    )
}