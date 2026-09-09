import type { LucideIcon } from "lucide-react";
import { HeartHandshake, MessageCircleQuestion, Shuffle } from "lucide-react";
import { FadeIn } from "@/animation/index";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: MessageCircleQuestion,
    title: "Ask anonymously",
    description:
      "Start with honest questions instead of awkward introductions. Share what actually matters.",
  },
  {
    icon: Shuffle,
    title: "Meet by chance",
    description:
      "Discover someone outside your usual circle through thoughtful random matching.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Talk in real time",
    description:
      "Once the connection feels right, move from questions into genuine conversation.",
  },
  {
    icon: HeartHandshake,
    title: "Build trust",
    description:
      "The seven-day journey gives a new connection room to become something meaningful.",
  },
];

export function FeatureSection(): React.JSX.Element {
  return (
    <section className="border-y border-white/6 bg-[#090909]">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-24">
        <FadeIn>
          <div className="mb-10 max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f0a247]">
              Four ways to connect
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Less performance.
              <br />
              More conversation.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <FadeIn key={feature.title} delay={index * 0.08}>
                <article className="group h-full rounded-xl border border-white/[0.07] bg-[#111] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f0a247]/20">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-[#f0a247]/10 text-[#f0a247]">
                    <Icon size={17} />
                  </div>

                  <p className="mt-5 text-xs text-white/25">0{index + 1}</p>

                  <h3 className="mt-2 text-base font-semibold">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/40">
                    {feature.description}
                  </p>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
