import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Requirements from "./Requirements";
import Flavours from "./Flavours";

export const metadata = {
  title: "Downloads | ALG",
  description: "ALG",
};

export default function Downloads() {
  return (
    <section className="relative">
      <Navbar />
      <Requirements />
      <Flavours />
      <Footer />
    </section>
  );
}
