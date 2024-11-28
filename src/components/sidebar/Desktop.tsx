'use client';

import SidebarContent from "@/components/sidebar/SidebarContent";

function DesktopSidebar() {
  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white lg:block">
      <SidebarContent />
    </aside>
  )
}

export default DesktopSidebar