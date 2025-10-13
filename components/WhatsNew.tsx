"use client";

import { useScroll } from "@/context/scrollContext";
import { motion, useInView } from "framer-motion";
import { HoverEffect } from "./ui/card-hover-effect";

export default function WhatIsALGSection() {
  const { whatsNewRef } = useScroll();
  const isInView = useInView(whatsNewRef, { once: true, amount: 0.2 });

  const features = [
    {
      title: "Offline Installation",
      description:
        "Get your system installed within minutes without an internet connection.",
      link: "#",
      image: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/ss-with-apps/theme/plasma/installer.png?raw=true",
    },
    // {
    //   title: "Minimalist & Clean System",
    //   description: "Experience a bare-minimum, efficient Linux environment.",
    //   link: "#",
    //   image: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/pure/plasma-pure.png?raw=true",
    // },
    // {
    //   title: "Custom Themed Environments",
    //   description:
    //     "Enjoy a beautifully themed interface without unnecessary extras.",
    //   link: "#",
    //   image: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/themed/xfce-themed.png?raw=true",
    // },
    {
      title: "Intuitive Welcome Application",
      description: "Get started quickly with our user-friendly welcome app.",
      link: "#",
      image: "https://github.com/arch-linux-gui/artwork/blob/dev/other/welcome.png?raw=true",
    },
    {
      title: "New App Store (In Development)",
      description:
        "Manage your software effortlessly with our new GUI package manager.",
      link: "#",
      image: "https://github.com/arch-linux-gui/artwork/blob/dev/other/app-store.png?raw=true",
    },
    // {
    //   title: "Community-Driven Development",
    //   description:
    //     "Built and continuously improved by our passionate community.",
    //   link: "#",
    //   image: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/themed/gnome.png?raw=true",
    // },
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
