"use client";

import { DesktopSidebar } from "./desktop-sidebar";
import { MobileNav } from "./mobile-nav";

export function Navbar() {
  return (
    <>
      <DesktopSidebar />
      <MobileNav />
    </>
  );
}
