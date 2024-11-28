'use client'

import { Button, Drawer } from "antd";
import SidebarContent from "./SidebarContent";
import { useState } from "react";
import { openMenu } from "@/hooks/openMenu";

function MobileSidebar() {
    const { menu, open, close } = openMenu();

    return (
        <Drawer onClose={close} open={menu === 'open'} className="lg:hidden bg-[#123972] p-0" placement="left">
            <SidebarContent />
        </Drawer>
    );
}

export default MobileSidebar;