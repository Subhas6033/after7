"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { mainNavItems, utilityNavItems } from "./config";
import { DesktopNavItem } from "./nav-item";

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopSidebar() {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 hidden md:flex",
        "w-18 flex-col border-r border-sidebar-border",
        "bg-sidebar lg:w-56",
      )}
    >
      <Brand />

      <nav
        aria-label="Main navigation"
        className="flex-1 space-y-1 overflow-y-auto px-2 py-3"
      >
        {mainNavItems.map((item) => (
          <DesktopNavItem
            key={item.href}
            {...item}
            active={isActive(pathname, item.href)}
          />
        ))}
      </nav>

      <SidebarUtilities pathname={pathname} />
    </aside>
  );
}

function Brand() {
  return (
    <div className="flex h-16 items-center border-b border-sidebar-border px-3 lg:px-4">
      <Link
        href="/"
        aria-label="After7 home"
        className="flex items-center gap-2.5"
      >
        <span className="flex size-7 items-center justify-center corner-squircle bg-after7-accent text-after7-accent-foreground">
          <span>7</span>
        </span>

        <span className="hidden text-[15px] font-semibold tracking-tight lg:inline">
          After7
        </span>
      </Link>
    </div>
  );
}

function SidebarUtilities({ pathname }: { pathname: string }) {
  return (
    <div className="border-t border-sidebar-border p-2">
      {utilityNavItems.map((item) => {
        const Icon = item.icon;
        const active = isActive(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group flex h-10 items-center gap-3 rounded-lg px-3",
              "text-sm font-medium transition-colors",
              "text-sidebar-foreground-muted",
              "hover:bg-sidebar-hover hover:text-sidebar-foreground",
              active && "bg-after7-accent-soft text-after7-accent",
            )}
          >
            <Icon className="size-4.25 shrink-0" strokeWidth={1.8} />

            <span className="hidden truncate lg:inline">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
