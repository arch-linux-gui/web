"use client";

import { TextEffect } from "@/components/ui/text-effect";
import { useScroll } from "@/context/scrollContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const sectionRef = useRef(null);
  const { whatsNewRef } = useScroll();

  const handleKnowMoreClick = () => {
    if (whatsNewRef.current) {
      whatsNewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isDarkTheme = resolvedTheme === "dark";

  const fancyVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          duration: 0.5,
        },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: "easeOut",
        },
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] pb-5"
      >
        <div className="absolute inset-0 z-0">
          <svg
            className="absolute inset-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,0 L100,0 L100,100 L0,100 Z"
              fill="none"
              stroke={
                isDarkTheme ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
              }
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            className="flex flex-col items-center justify-between pt-[8rem]"
            variants={fancyVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="w-full text-center mb-8 lg:mb-0 lg:w-3/4"
              variants={fancyVariants.item}
            >
              <TextEffect
                per="word"
                variants={fancyVariants}
                className="text-4xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300"
              >
                Welcome to Arka Linux GUI
              </TextEffect>

              <TextEffect
                per="word"
                as="h3"
                preset="blur"
                delay={0.5}
                className="mb-4"
              >
                Seamless. Intuitive. Powerful. Discover a new era of Linux
                desktop environments with Arka Linux GUI.
              </TextEffect>

              <motion.div
                className="flex flex-row justify-center space-y-0 space-x-4 mb-7"
                variants={fancyVariants.item}
              >
                <button
                  className="w-48 sm:mx-0 px-6 py-3 bg-orange-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-orange-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 dark:bg-orange-600 dark:hover:bg-orange-500"
                  onClick={handleKnowMoreClick}
                >
                  Know More
                </button>
                <button className="w-48 mx-auto sm:mx-0 px-6 py-3 bg-white text-orange-500 rounded-full font-semibold text-lg shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:-translate-y-1 dark:bg-gray-800 dark:text-orange-400 dark:hover:bg-gray-700">
                  <Link href="/downloads">Download</Link>
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="w-full mt-8 lg:mt-0"
              variants={fancyVariants.item}
            >
              <div className="relative w-full aspect-video max-w-7xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-orange-500/20 dark:from-orange-400/10 dark:to-orange-600/10 rounded-lg shadow-2xl">
                  <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                    <Image
                      src="https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/ss-with-apps/theme/plasma/terminal.png?raw=true"
                      alt="Arka Linux GUI Desktop"
                      fill
                      priority={true}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}
