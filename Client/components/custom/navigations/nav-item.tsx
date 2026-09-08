"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { NavBadge } from "./nav-badge";

type NavItemProps = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number;
  active?: boolean;
};

function NavIcon({
  icon: Icon,
  active,
}: {
  icon: LucideIcon;
  active: boolean;
}) {
  return (
    <Icon
      className={cn(
        "size-4.25 shrink-0 transition-colors",
        active
          ? "text-after7-accent"
          : "text-sidebar-icon group-hover:text-sidebar-foreground",
      )}
      strokeWidth={active ? 2 : 1.8}
    />
  );
}

export function DesktopNavItem({
  label,
  href,
  icon,
  badge,
  active = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group relative flex h-10 w-full items-center gap-3 rounded-lg px-3",
        "text-sm font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-after7-accent/60",
        active
          ? "bg-after7-accent-soft text-after7-accent"
          : "text-sidebar-foreground-muted hover:bg-sidebar-hover hover:text-sidebar-foreground",
      )}
    >
      <NavIcon icon={icon} active={active} />

      <span className="hidden truncate lg:inline">{label}</span>

      {badge && (
        <>
          <span className="hidden lg:inline">
            <NavBadge count={badge} />
          </span>

          <span className="lg:hidden">
            <NavBadge count={badge} compact />
          </span>
        </>
      )}
    </Link>
  );
}

export function MobileNavItem({
  label,
  href,
  icon: Icon,
  badge,
  active = false,
}: NavItemProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative flex min-w-0 flex-1 flex-col items-center",
        "justify-center gap-1 py-1.5 text-[10px] font-medium",
        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-after7-accent/60",
        active
          ? "text-after7-accent"
          : "text-sidebar-icon hover:text-sidebar-foreground",
      )}
    >
      <span
        className={cn(
          "relative flex size-7 items-center justify-center rounded-lg",
          active && "bg-after7-accent-soft",
        )}
      >
        <Icon size={17} strokeWidth={active ? 2 : 1.8} />

        {badge && <NavBadge count={badge} compact />}
      </span>

      <span className="truncate">{label}</span>
    </Link>
  );
}
