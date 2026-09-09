"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, Stagger, pulse } from "@/animation/index";
import { HeroMockup } from "./HeroMockup";

export function HeroSection(): React.JSX.Element {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-125 w-175 -translate-x-1/2 rounded-full bg-[#f0a247]/5.5 blur-[120px]"
        variants={pulse}
        initial="initial"
        animate="animate"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pb-28 lg:pt-28">
        <Stagger className="max-w-3xl">
          {/* Badge */}
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f0a247]/20 bg-[#f0a247]/6 px-3 py-1.5 text-xs text-[#f0a247]">
              <Sparkles size={13} />

              <span>A different kind of social app</span>
            </div>
          </FadeIn>

          {/* Heading */}
          <FadeIn>
            <h1 className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Meet someone.
              <br />
              <span className="text-[#f0a247]">For real this time.</span>
            </h1>
          </FadeIn>

          {/* Description */}
          <FadeIn>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
              After7 helps you move beyond endless scrolling and surface-level
              chats. Meet someone new, ask better questions, and build trust
              over seven days.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="group h-12 rounded-lg bg-[#f0a247] px-5 font-semibold text-black hover:bg-[#f5ad57]"
              >
                <Link href="/signup">
                  Start your journey
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="group h-12 rounded-lg border-white/10 bg-transparent px-5 text-white/70 hover:border-white/20 hover:bg-white/3 hover:text-white"
              >
                <Link href="#how-it-works">
                  <MessageCircle
                    size={16}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                  See how it works
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Trust line */}
          <FadeIn>
            <div className="mt-9 flex items-center gap-3 text-xs text-white/35">
              <div className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/4">
                7
              </div>

              <span>Seven days. One real connection.</span>
            </div>
          </FadeIn>
        </Stagger>

        <HeroMockup />
      </div>
    </section>
  );
}
