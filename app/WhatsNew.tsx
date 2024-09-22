"use client";

import { motion, useInView } from "framer-motion";
import { useTheme } from "next-themes";
import { useRef } from "react";

export default function WhatIsALGSection() {
  const { resolvedTheme } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      icon: "🎨",
      title: "User-Friendly Interface",
      description:
        "ALG provides an intuitive and visually appealing desktop environment, making Linux accessible to users of all skill levels.",
    },
    {
      icon: "🚀",
      title: "Performance Optimized",
      description:
        "Experience lightning-fast performance with ALG's optimized codebase and efficient resource management.",
    },
    {
      icon: "🔧",
      title: "Customizable",
      description:
        "Tailor your desktop experience with extensive customization options, themes, and plugins.",
    },
    {
      icon: "🔒",
      title: "Enhanced Security",
      description:
        "Benefit from built-in security features and regular updates to keep your system safe and protected.",
    },
    {
      icon: "🔄",
      title: "Seamless Updates",
      description:
        "Enjoy hassle-free system and application updates with ALG's streamlined update process.",
    },
    {
      icon: "🌐",
      title: "Wide Compatibility",
      description:
        "ALG is compatible with a vast array of hardware and software, ensuring a smooth experience across different setups.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-orange-50 dark:bg-[#121215]"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-orange-600 dark:text-orange-400"
        >
          What is Arka Linux GUI?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-orange-600 dark:text-orange-400">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </motion.div>
  );
}
