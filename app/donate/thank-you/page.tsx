import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import ThankYouPage from "./thank";

export const metadata = {
  title: "Thank You",
  description: "ALG",
};

export default function Donate() {
  return (
    <section className="relative">
      <Navbar />
      <ThankYouPage />
      <Footer />
    </section>
  );
}
