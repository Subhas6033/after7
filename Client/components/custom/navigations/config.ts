import {
  Bell,
  Compass,
  HelpCircle,
  House,
  MessageCircle,
  Settings,
  UserRound,
  UsersRound,
} from "lucide-react";

import type { NavItem } from "./types";

export const mainNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Discover",
    href: "/discover",
    icon: Compass,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: MessageCircle,
    badge: 3,
  },
  {
    label: "Questions",
    href: "/questions",
    icon: HelpCircle,
  },
  {
    label: "Connections",
    href: "/connections",
    icon: UsersRound,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: Bell,
    badge: 5,
  },
];

export const mobileNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    icon: House,
  },
  {
    label: "Discover",
    href: "/discover",
    icon: Compass,
  },
  {
    label: "Messages",
    href: "/messages",
    icon: MessageCircle,
    badge: 3,
  },
  {
    label: "Connections",
    href: "/connections",
    icon: UsersRound,
  },
  {
    label: "Profile",
    href: "/profile",
    icon: UserRound,
  },
];

export const utilityNavItems: NavItem[] = [
  {
    label: "Profile",
    href: "/profile",
    icon: UserRound,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
