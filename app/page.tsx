import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Testi from "./Testi";
import WhatsNew from "./WhatsNew";
import { Gallery } from "./components/gallery";

export const metadata = {
  title: "Arka Linux GUI",
  description: "Arka Linux GUI",
};

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <WhatsNew />
      <Gallery />
      <Testi />
      <Footer />
    </main>
  );
}
