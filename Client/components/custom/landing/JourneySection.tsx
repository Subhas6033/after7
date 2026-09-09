import { FadeIn } from "@/animation/index";

type JourneyDay = {
  day: string;
  title: string;
  text: string;
};

const days: JourneyDay[] = [
  {
    day: "01",
    title: "Meet",
    text: "Start with a simple question and discover what's underneath the profile.",
  },
  {
    day: "02",
    title: "Get curious",
    text: "Ask something you actually want to know. Skip the small talk.",
  },
  {
    day: "03",
    title: "Talk",
    text: "Share something real and give the other person space to do the same.",
  },
  {
    day: "04",
    title: "Find common ground",
    text: "Discover the interests, stories and little things you have in common.",
  },
  {
    day: "05",
    title: "Go deeper",
    text: "The conversation starts moving beyond the surface.",
  },
  {
    day: "06",
    title: "Build trust",
    text: "Consistency turns a random match into a meaningful connection.",
  },
  {
    day: "07",
    title: "Make it yours",
    text: "Decide where the connection goes next — together.",
  },
];

export function JourneySection(): React.JSX.Element {
  return (
    <section id="journey" className="mx-auto max-w-6xl px-5 py-24 sm:px-6">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <FadeIn>
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#f0a247]">
              The seven-day journey
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Good connections
              <br />
              need a little time.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/40">
              After7 isn&apos;t designed to maximize the number of people you
              meet. It&apos;t designed to give one good conversation enough room
              to grow.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-2">
          {days.map((item, index) => (
            <FadeIn key={item.day} delay={index * 0.06}>
              <article className="group grid gap-4 rounded-xl border border-white/6 bg-[#0c0c0c] p-5 transition-all duration-300 hover:border-[#f0a247]/20 sm:grid-cols-[60px_1fr]">
                <div className="text-sm font-medium text-[#f0a247]">
                  {item.day}
                </div>

                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>

                  <p className="mt-1 max-w-lg text-sm leading-6 text-white/40">
                    {item.text}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
