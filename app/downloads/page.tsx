import React from "react";
import Requirements from "./Requirements";
import Flavours from "./Flavours";
import Metadata from "@/components/metadata";

export const metadata = {
  title: "Downloads | ALG",
  description: "ALG",
};

export default function Downloads() {
  return (
    <section className="relative">
      <Metadata params="Downloads" />
      <Requirements />
      <Flavours />
    </section>
  );
}
