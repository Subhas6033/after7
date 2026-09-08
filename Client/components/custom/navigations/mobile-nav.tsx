"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mobileNavItems } from "./config";
import { MobileNavItem } from "./nav-item";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 md:hidden",
        "h-17 border-t border-sidebar-border",
        "bg-sidebar/95 backdrop-blur-xl",
        "pb-[env(safe-area-inset-bottom)]",
      )}
    >
      <div className="flex h-full w-full items-center px-2">
        {mobileNavItems.map((item) => (
          <MobileNavItem
            key={item.href}
            {...item}
            active={isActive(pathname, item.href)}
          />
        ))}
      </div>
    </nav>
  );
}
