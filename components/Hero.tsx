"use client";

import { TextEffect } from "@/components/ui/text-effect";
import { useScroll } from "@/context/scrollContext";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Zap, Shield, Package, Settings, Calendar, Sparkles } from "lucide-react";

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
        {/* Dot Grid Pattern Background */}
        <div className="absolute inset-0 z-0">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle
                  cx="2"
                  cy="2"
                  r="1.5"
                  fill={isDarkTheme ? "rgba(249,115,22,0.15)" : "rgba(249,115,22,0.2)"}
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
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
              {/* Version Badge */}
              <motion.div
                className="flex justify-center mb-4"
                variants={fancyVariants.item}
              >
                <Link
                  href="/releases"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full border border-orange-200 dark:border-orange-800 hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                  <span className="text-sm font-semibold text-orange-700 dark:text-orange-300">
                    Latest Release: v2025.10
                  </span>
                  <span className="text-xs text-orange-600 dark:text-orange-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    October 2025
                  </span>
                </Link>
              </motion.div>

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
                className="mb-6 text-lg lg:text-xl"
              >
                Seamless. Intuitive. Powerful. Discover a new era of Linux
                desktop computing with Arka Linux GUI.
              </TextEffect>

              <motion.div
                className="flex flex-row justify-center space-y-0 space-x-4 mb-10"
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

              {/* Key Features Section */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8"
                variants={fancyVariants.item}
              >
                <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-orange-200/50 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 mb-3 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1 text-gray-800 dark:text-gray-200">
                    Rolling Release
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                    Always up-to-date
                  </p>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-orange-200/50 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 mb-3 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1 text-gray-800 dark:text-gray-200">
                    Arch-Based
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                    Power of pacman
                  </p>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-orange-200/50 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 mb-3 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
                    <Package className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1 text-gray-800 dark:text-gray-200">
                    Pre-Configured
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                    Ready out of box
                  </p>
                </div>

                <div className="flex flex-col items-center p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-orange-200/50 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-12 h-12 mb-3 rounded-full bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
                    <Settings className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h4 className="font-semibold text-sm mb-1 text-gray-800 dark:text-gray-200">
                    User-Friendly
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                    GUI installer
                  </p>
                </div>
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
