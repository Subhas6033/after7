import Link from "next/link";
import { FadeIn } from "@/animation/index";

type FooterLink = {
  label: string;
  href: string;
};

type FooterLinks = {
  product: FooterLink[];
  company: FooterLink[];
  legal: FooterLink[];
};

const links: FooterLinks = {
  product: [
    {
      label: "How it works",
      href: "#how-it-works",
    },
    {
      label: "The journey",
      href: "#journey",
    },
    {
      label: "Safety",
      href: "#safety",
    },
    {
      label: "Get started",
      href: "/signup",
    },
  ],

  company: [
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "Careers",
      href: "/careers",
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
    {
      label: "Community guidelines",
      href: "/community-guidelines",
    },
  ],
};

export function LandingFooter(): React.JSX.Element {
  return (
    <footer className="border-t border-white/6">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <FadeIn>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
            <div>
              <Link
                href="/"
                className="text-lg font-semibold tracking-[-0.04em]"
              >
                after<span className="text-[#f0a247]">7</span>
              </Link>

              <p className="mt-3 max-w-xs text-sm leading-6 text-white/35">
                A social experience built around genuine conversation,
                connection and trust.
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/25">
                Product
              </p>

              <div className="mt-4 space-y-3">
                {links.product.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/45 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/25">
                Company
              </p>

              <div className="mt-4 space-y-3">
                {links.company.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-white/45 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/6 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} After7. All rights reserved.</p>

          <p>Made for better conversations.</p>
        </div>
      </div>
    </footer>
  );
}
