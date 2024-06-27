import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import AboutPage from "./aboutus";

export const metadata = {
  title: "About Us | ALG",
  description: "ALG",
};

export default function Downloads() {
  return (
    <section className="relative">
      <Navbar />
      <AboutPage />
      <Footer />
    </section>
  );
}
