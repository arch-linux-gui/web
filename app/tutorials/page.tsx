import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import TutorialPage from "./TutorialPage";

export const metadata = {
  title: "Tutorials | ALG",
  description: "ALG",
};

export default function Downloads() {
  return (
    <section className="relative">
      <Navbar />
      <TutorialPage />
      <Footer />
    </section>
  );
}
