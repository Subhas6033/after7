import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import React from "react";

type FooterLink = {
  label: string;
  href: string;
};

type FooterLinks = {
  product: FooterLink[];
  company: FooterLink[];
  legal: FooterLink[];
};

const footerLinks: FooterLinks = {
  product: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
  ],

  company: [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  legal: [
    {
      label: "Privacy",
      href: "/privacy",
    },
    {
      label: "Terms",
      href: "/terms",
    },
  ],
};

export function Footer(): React.JSX.Element {
  return (
    <footer className="mt-auto w-full border-t bg-background">
      <div className="container mx-auto px-4 py-10">
        {/* Footer Links */}
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <Link href="/" className="text-2xl font-bold tracking-tight">
              After7
            </Link>

            <p className="max-w-xs text-sm text-muted-foreground">
              Build meaningful connections, one conversation at a time.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Product</h3>

            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Company</h3>

            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold">Legal</h3>

            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} After7. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
