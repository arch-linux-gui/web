"use client";

import { useScroll } from "@/context/scrollContext";
import { motion, useInView } from "framer-motion";
import { Monitor, Package, Rocket, Shield, Zap, Palette, Download, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// 1. Why ALG / Highlights Section
export function WhyALGSection() {
  const { whatsNewRef } = useScroll();
  const isInView = useInView(whatsNewRef, { once: true, amount: 0.2 });

  const highlights = [
    {
      icon: Palette,
      title: "Beautiful & Pre-themed",
      description: "Ready-to-use desktop environments with custom themes that look great out of the box.",
    },
    {
      icon: Shield,
      title: "Powered by Arch",
      description: "Rolling release model with access to AUR and the latest packages from Arch repositories.",
    },
    {
      icon: Monitor,
      title: "Graphical Installer",
      description: "Install Arch Linux without terminal commands using the intuitive Calamares installer.",
    },
    {
      icon: Rocket,
      title: "Welcome Application",
      description: "Get started easily with our guided setup and post-installation configuration tool.",
    },
    {
      icon: Package,
      title: "GUI Package Manager",
      description: "Browse and install software visually with our user-friendly app store (coming soon).",
    },
    {
      icon: Zap,
      title: "Offline Installation",
      description: "Install your system without internet connection - all essential packages included.",
    },
    {
      icon: Users,
      title: "Beginner-Friendly Arch",
      description: "All the power of Arch Linux with none of the complexity - perfect for newcomers.",
    },
    {
      icon: Download,
      title: "3 Desktop Flavors",
      description: "Choose from KDE Plasma, GNOME, or XFCE based on your preferences and hardware.",
    },
  ];

  return (
    <section
      ref={whatsNewRef}
      className="relative py-16 md:py-24 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] overflow-hidden"
    >
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPatternWhy" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(249,115,22,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternWhy)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300"
        >
          Why Choose ALG?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          ALG combines the power of Arch Linux with user-friendly tools, making it accessible to everyone while maintaining the flexibility and cutting-edge features that Arch is known for.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-orange-200/50 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 mb-4 rounded-lg bg-orange-100 dark:bg-orange-900/50 flex items-center justify-center">
                <highlight.icon className="w-6 h-6 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {highlight.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 2. Desktop Previews Section
export function DesktopPreviewsSection() {
  const [activeDesktop, setActiveDesktop] = useState<"kde" | "gnome" | "xfce">("kde");
  const sectionRef = useScroll().whatsNewRef;
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const desktops = {
    kde: {
      name: "KDE Plasma",
      description: "Feature-rich and highly customizable. Perfect for users familiar with Windows.",
      image: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/themed/plasma.png?raw=true",
    },
    gnome: {
      name: "GNOME",
      description: "Modern and elegant with a focus on simplicity. Ideal for users coming from macOS.",
      image: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/desktop-ss/themed/gnome-41.png?raw=true",
    },
    xfce: {
      name: "XFCE",
      description: "Lightweight and traditional. Great for older hardware or minimal resource usage.",
      image: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/themed/xfce-themed.png?raw=true",
    },
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-100 to-orange-50 dark:from-[#09090B] dark:to-[#0b0b10] overflow-hidden">
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPatternDesktop" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(249,115,22,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternDesktop)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300"
        >
          Choose Your Desktop
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
        >
          ALG offers three beautiful desktop environments, each pre-configured and themed for the best experience.
        </motion.p>

        {/* Desktop Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {Object.entries(desktops).map(([key, desktop]) => (
            <button
              key={key}
              onClick={() => setActiveDesktop(key as "kde" | "gnome" | "xfce")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeDesktop === key
                  ? "bg-orange-500 text-white shadow-lg scale-105"
                  : "bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-orange-100 dark:hover:bg-gray-700"
              }`}
            >
              {desktop.name}
            </button>
          ))}
        </div>

        {/* Desktop Preview */}
        <motion.div
          key={activeDesktop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 p-2">
            <div className="relative aspect-video">
              <Image
                src={desktops[activeDesktop].image}
                alt={desktops[activeDesktop].name}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              {desktops[activeDesktop].name}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {desktops[activeDesktop].description}
            </p>
          </div>
        </motion.div>

        <div className="text-center mt-8">
          <Link
            href="/downloads"
            className="inline-block px-8 py-3 bg-orange-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105"
          >
            Download Your Favorite
          </Link>
        </div>
      </div>
    </section>
  );
}

// 3. Features Deep Dive Section
export function FeaturesDeepDiveSection() {
  const sectionRef = useScroll().whatsNewRef;
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      title: "Graphical Installer",
      description: "Installing Arch Linux has never been easier. Our Calamares-based installer guides you through every step with a clean, intuitive interface. Choose your partitions, set up your system, and customize your installation - all without touching the terminal.",
      image: "https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/ss-with-apps/theme/plasma/installer.png?raw=true",
      highlights: ["Automatic partitioning", "Manual partition control", "Offline installation support", "Multi-boot configuration"],
    },
    {
      title: "Welcome Application",
      description: "First boot? No problem. Our welcome app helps you get started with post-installation tasks, system updates, driver installation, and essential software setup. Everything you need to configure your new system in one place.",
      image: "https://github.com/arch-linux-gui/artwork/blob/dev/other/welcome.png?raw=true",
      highlights: ["System update wizard", "Driver detection", "Essential apps installer", "Quick tips & tutorials"],
    },
    {
      title: "App Store (Coming Soon)",
      description: "Browse and install applications with ease using our upcoming graphical package manager. Search through thousands of packages from official repositories and AUR, read descriptions, view screenshots, and install with a single click.",
      image: "https://github.com/arch-linux-gui/artwork/blob/dev/other/app-store.png?raw=true",
      highlights: ["Visual package browsing", "AUR integration", "One-click installation", "Package ratings & reviews"],
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] overflow-hidden">
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPatternFeatures" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(249,115,22,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternFeatures)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300"
        >
          Powerful Features
        </motion.h2>

        <div className="space-y-24 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 p-2">
                  <div className="relative aspect-video">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
