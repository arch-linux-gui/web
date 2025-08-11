import Hero from "@/components/Hero";
import Testi from "@/components/Testi";
import WhatsNew from "@/components/WhatsNew";
import { Gallery } from "@/components/gallery";

export const metadata = {
  title: "Arka Linux GUI",
  description: "Arka Linux GUI",
};

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <WhatsNew />
      <Gallery />
      <Testi />
    </main>
  );
}
