import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsNew from "./WhatsNew";
import Testi from "./Testi";

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
      <Testi />
      <Footer />
    </main>
  );
}
