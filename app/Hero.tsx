"use client";

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TextEffect } from "./components/ui/text-effect";
import { useScroll } from "./scrollContext";

gsap.registerPlugin(ScrollTrigger);

const assetsToPreload = ["/arch-linux-gui.png"];

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const { whatsNewRef } = useScroll();

  const handleKnowMoreClick = () => {
    if (whatsNewRef.current) {
      whatsNewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const preloadAsset = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const preloadAllAssets = async () => {
      try {
        await Promise.all(assetsToPreload.map(preloadAsset));
        setAssetsLoaded(true);
      } catch (error) {
        console.error("Failed to load all assets:", error);
        // Optionally set assetsLoaded to true even if some assets fail to load
        setAssetsLoaded(true);
      }
    };

    preloadAllAssets();
  }, []);

  useEffect(() => {
    if (assetsLoaded) {
      const ctx = gsap.context(() => {
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          delay: 0.2,
        });

        gsap.from(descriptionRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.5,
        });

        gsap.from(buttonsRef.current, {
          opacity: 0,
          y: 20,
          duration: 1,
          delay: 0.8,
        });

        gsap.from(imageRef.current, {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          delay: 1,
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [assetsLoaded]);

  const isDarkTheme = resolvedTheme === "dark";

  const getRandomOrangeColor = () => {
    const orangeShades = [
      "#F97316", // orange-500
      "#EA580C", // orange-600
      "#C2410C", // orange-700
      "#FB923C", // dark:orange-400
      "#FDBA74", // dark:orange-300
    ];

    const randomIndex = Math.floor(Math.random() * orangeShades.length);
    return orangeShades[randomIndex];
  };

  const fancyVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
      },
    },
    item: {
      hidden: () => ({
        opacity: 0,
        y: Math.random() * 100 - 50,
        rotate: Math.random() * 90 - 45,
        scale: 0.3,
        color: getRandomOrangeColor(),
      }),
      visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        scale: 1,
        color: getRandomOrangeColor(),
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 200,
        },
      },
    },
  };

  return (
    <AnimatePresence>
      {assetsLoaded ? (
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
            <div className="flex flex-col items-center justify-between pt-[8rem]">
              <div className="w-full text-center mb-8 lg:mb-0 lg:w-3/4">
                <div ref={headingRef}>
                  <TextEffect
                    per="word"
                    variants={fancyVariants}
                    className="text-4xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300"
                  >
                    Experience the Future of Linux Arka Linux GUI
                  </TextEffect>
                </div>
                <div ref={descriptionRef}>
                  <TextEffect
                    per="word"
                    as="h3"
                    preset="blur"
                    delay={1.0}
                    className="mb-4"
                  >
                    Seamless. Intuitive. Powerful. Discover a new era of Linux
                    desktop environments with Arka Linux GUI.
                  </TextEffect>
                </div>
                <div
                  ref={buttonsRef}
                  className="flex flex-row justify-center space-y-0 space-x-4 mb-7"
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
                </div>
              </div>

              <div ref={imageRef} className="w-full mt-8 lg:mt-0">
                <div className="relative w-full aspect-video max-w-7xl mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-orange-500/20 dark:from-orange-400/10 dark:to-orange-600/10 rounded-lg shadow-2xl">
                    <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                      <img
                        src="/arch-linux-gui.png"
                        alt="Arka Linux GUI Desktop"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-orange-50 dark:bg-[#0b0b10]">
          <div className="text-2xl font-bold text-orange-500 dark:text-orange-400">
            Loading...
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
