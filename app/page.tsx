import Hero from "@/components/Hero";
import { WhyALGSection, FeaturesDeepDiveSection } from "@/components/WhatsNew";
import { Gallery, GetStartedSection } from "@/components/gallery";

export const metadata = {
  title: "Arka Linux GUI",
  description: "Arka Linux GUI",
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <WhyALGSection />
      <FeaturesDeepDiveSection />
      <Gallery />
      <GetStartedSection />
    </main>
  );
}
