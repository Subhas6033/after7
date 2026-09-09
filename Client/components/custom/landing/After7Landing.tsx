import { CtaSection } from "./CtaSection";
import { FeatureSection } from "./FeatureSection";
import { HeroSection } from "./HeroSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { JourneySection } from "./JourneySection";
import { TrustSection } from "./TrustSection";

function After7Landing(): React.JSX.Element {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-[#f5f3ef]">
      <HeroSection />
      <FeatureSection />
      <JourneySection />
      <TrustSection />
      <HowItWorksSection />
      <CtaSection />
    </main>
  );
}

export { After7Landing };
