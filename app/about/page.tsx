import React from "react";
import AboutPage from "./aboutus";
import Metadata from "@/components/metadata";

export const metadata = {
  title: "About Us | ALG",
  description: "ALG",
};

export default function Downloads() {
  return (
    <section className="relative">
      <Metadata params="About Us" />
      <AboutPage />
    </section>
  );
}
