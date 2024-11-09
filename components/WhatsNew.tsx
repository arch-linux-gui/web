"use client";

import { useScroll } from "@/context/scrollContext";
import { motion, useInView } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";

export default function WhatIsALGSection() {
  const { whatsNewRef } = useScroll();
  const isInView = useInView(whatsNewRef, { once: true, amount: 0.2 });

  const features = [
    {
      title: "User-Friendly Interface",
      description:
        "ALG provides an intuitive and visually appealing desktop environment, making Linux accessible to users of all skill levels.",
      link: "#",
      image: "/gnome.jpg",
    },
    {
      title: "Performance Optimized",
      description:
        "Experience lightning-fast performance with ALG's optimized codebase and efficient resource management.",
      link: "#",
      image: "/gnome.jpg",
    },
    {
      title: "Customizable",
      description:
        "Tailor your desktop experience with extensive customization options, themes, and plugins.",
      link: "#",
      image: "/gnome.jpg",
    },
    {
      title: "Enhanced Security",
      description:
        "Benefit from built-in security features and regular updates to keep your system safe and protected.",
      link: "#",
      image: "/gnome.jpg",
    },
    {
      title: "Seamless Updates",
      description:
        "Enjoy hassle-free system and application updates with ALG's streamlined update process.",
      link: "#",
      image: "/gnome.jpg",
    },
    {
      title: "Wide Compatibility",
      description:
        "ALG is compatible with a vast array of hardware and software, ensuring a smooth experience across different setups.",
      link: "#",
      image: "/gnome.jpg",
    },
  ];

  return (
    <section
      ref={whatsNewRef}
      className="py-16 md:py-24 bg-orange-50 dark:bg-[#121215]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl font-bold text-center text-orange-600 dark:text-orange-400"
        >
          What is Arka Linux GUI?
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-center text-orange-600 dark:text-orange-400 opacity-50">
          Know more about ALG
        </motion.p>
        <div>
          <HoverEffect items={features} />
        </div>
      </div>
    </section>
  );
}
