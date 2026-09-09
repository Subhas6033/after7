"use client";
import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/custom/navigations/nav";
import { LandingFooter } from "@/components/custom/landing/LandingFooter";
import { LandingNavbar } from "@/components/custom/landing/LandingNavbar";

type SiteChromeProps = {
  children: ReactNode;
};

/*
  Authentication routes.
  These pages intentionally have:
  - No application navbar
  - No landing navbar
  - No footer
 */
const AUTH_ROUTES = [
  "/login",
  "/signup",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

/*
  Application routes.
  These pages use the authenticated application navbar.
 */
const APP_ROUTES = [
  "/home",
  "/discover",
  "/messages",
  "/questions",
  "/connections",
  "/notifications",
  "/profile",
  "/settings",
];

/*
  Check whether the current pathname belongs to
  an authentication route.
 */
function isAuthRoute(pathname: string): boolean {
  return AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

/*
  Check whether the current pathname belongs to
  an application route.
 */
function isAppRoute(pathname: string): boolean {
  return APP_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`),
  );
}

export function SiteChrome({ children }: SiteChromeProps): React.JSX.Element {
  const pathname = usePathname();

  /*
    Login / Signup / Auth pages
    No navbar.
    No footer.
   */
  if (isAuthRoute(pathname)) {
    return <main className="flex-1">{children}</main>;
  }

  /*
    Authenticated application pages
    Uses the real After7 application navbar.
   */
  if (isAppRoute(pathname)) {
    return (
      <>
        <Navbar />
        <main className="flex-1">{children}</main>
      </>
    );
  }

  /*
    Public / marketing pages
    Uses the landing navbar and public footer.
    IMPORTANT:
    Landing pages themselves should NOT render
    LandingNavbar or Footer.
   */
  return (
    <>
      <LandingNavbar />
      <main className="flex-1">{children}</main>
      <LandingFooter />
    </>
  );
}
