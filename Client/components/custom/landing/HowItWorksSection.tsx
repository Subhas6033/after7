import type { LucideIcon } from "lucide-react";
import { MessageCircleQuestion, Search, Sparkles } from "lucide-react";
import { FadeIn } from "@/animation/index";

type Step = {
  number: string;
  icon: LucideIcon;
  title: string;
  text: string;
};

const steps: Step[] = [
  {
    number: "01",
    icon: Sparkles,
    title: "Create your space",
    text: "Start with the basics and choose how much you want to share.",
  },
  {
    number: "02",
    icon: Search,
    title: "Get matched",
    text: "After7 introduces you to someone new through a thoughtful match.",
  },
  {
    number: "03",
    icon: MessageCircleQuestion,
    title: "Start talking",
    text: "Use questions and conversation to discover whether there's a real connection.",
  },
];

export function HowItWorksSection(): React.JSX.Element {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
      <FadeIn>
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f0a247]">
            Simple by design
          </p>

          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            People are complicated.
            <br />
            Meeting them shouldn't be.
          </h2>
        </div>
      </FadeIn>

      <div className="mt-12 grid gap-3 md:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <FadeIn key={step.number} delay={index * 0.1}>
              <article className="relative h-full rounded-xl border border-white/[0.07] bg-[#0d0d0d] p-6 transition-all duration-300 hover:border-[#f0a247]/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/25">{step.number}</span>

                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#f0a247]/10 text-[#f0a247]">
                    <Icon size={17} />
                  </div>
                </div>

                <h3 className="mt-10 text-lg font-semibold">{step.title}</h3>

                <p className="mt-2 text-sm leading-6 text-white/40">
                  {step.text}
                </p>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
