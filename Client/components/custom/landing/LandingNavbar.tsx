import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/animation/index";
import { Button } from "@/components/ui/button";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
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
];

export function LandingNavbar(): React.JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6">
        <FadeIn>
          <Link
            href="/"
            className="group flex items-center gap-2"
            aria-label="After7 home"
          >
            <span className="text-lg font-semibold tracking-[-0.04em]">
              after<span className="text-[#f0a247]">7</span>
            </span>
          </Link>
        </FadeIn>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Landing navigation"
        >
          {navItems.map((item, index) => (
            <FadeIn key={item.href} delay={index * 0.05}>
              <Link
                href={item.href}
                className="text-sm text-white/55 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            </FadeIn>
          ))}
        </nav>

        <FadeIn delay={0.15}>
          <Button
            asChild
            className="group h-auto rounded-md bg-[#f0a247] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#f5ad57]"
          >
            <Link href="/signup">
              Get started
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </header>
  );
}
