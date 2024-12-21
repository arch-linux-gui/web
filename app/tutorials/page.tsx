import React from "react";
import TutorialPage from "./TutorialPage";
import Metadata from "@/components/metadata";

export const metadata = {
  title: "Tutorials | ALG",
  description: "ALG",
};

export default function Downloads() {
  return (
    <section className="relative">
      <Metadata />
      <TutorialPage />
    </section>
  );
}
