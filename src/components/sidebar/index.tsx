'use client';

import DesktopSidebar from "@/components/sidebar/Desktop";
import MobileSidebar from "./Mobile";

function Sidebar() {
    return (
        <>
            <DesktopSidebar />
            <MobileSidebar />
        </>
    )
}

export default Sidebar