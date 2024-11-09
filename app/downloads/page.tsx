import React from "react";
import Requirements from "./Requirements";
import Flavours from "./Flavours";

export const metadata = {
  title: "Downloads | ALG",
  description: "ALG",
};

export default function Downloads() {
  return (
    <section className="relative">
      <Requirements />
      <Flavours />
    </section>
  );
}
