import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, Glow } from "@/animation/index";

export function CtaSection(): React.JSX.Element {
  return (
    <section className="px-5 pb-24 sm:px-6">
      <FadeIn>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-[#f0a247]/10 bg-[#17110b]">
          <div className="relative px-6 py-16 text-center sm:px-10 lg:py-20">
            {/* Animated ambient glow */}
            <Glow className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0a247]/10 blur-[100px]" />

            <div className="relative z-10">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f0a247]">
                Your next seven days
              </p>

              <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.045em] sm:text-5xl">
                One good conversation can change everything.
              </h2>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/40">
                Stop scrolling past people. Start getting to know them.
              </p>

              <Button
                asChild
                className="mt-8 h-auto rounded-lg bg-[#f0a247] px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#f5ad57]"
              >
                <Link href="/home">
                  Meet someone new
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
