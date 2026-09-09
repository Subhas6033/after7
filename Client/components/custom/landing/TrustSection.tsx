import type { LucideIcon } from "lucide-react";
import { EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/animation/index";

type TrustItem = {
  icon: LucideIcon;
  title: string;
  text: string;
};

const items: TrustItem[] = [
  {
    icon: EyeOff,
    title: "Privacy first",
    text: "You control what you share and when you share it.",
  },
  {
    icon: LockKeyhole,
    title: "Private conversations",
    text: "Your conversations are designed to stay between the people having them.",
  },
  {
    icon: ShieldCheck,
    title: "Built for respect",
    text: "Tools and reporting should make it easier to protect your experience.",
  },
];

export function TrustSection(): React.JSX.Element {
  return (
    <section id="safety" className="px-5 sm:px-6">
      <FadeIn>
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#f0a247]/10 bg-[#17110b] px-6 py-14 sm:px-10 lg:py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f0a247]">
              Privacy you can feel
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Connection works better
              <br />
              when you feel safe.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/40">
              After7 puts control and privacy at the center of the experience.
            </p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <FadeIn key={item.title} delay={index * 0.08}>
                  <article className="h-full rounded-xl border border-white/[0.07] bg-black/20 p-5 transition-all duration-300 hover:border-[#f0a247]/20">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-[#f0a247]/10">
                      <Icon size={19} className="text-[#f0a247]" />
                    </div>

                    <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-white/40">
                      {item.text}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
