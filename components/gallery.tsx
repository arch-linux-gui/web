"use client";

import { DialogBasicImage } from "./ui/imageviewer";
import Marquee from "./ui/marquee";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = {
  desktop: {
    title: "Desktop Experience",
    images: [
      { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/plasma/terminal.png?raw=true", caption: "KDE Plasma Desktop" },
      { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/gnome-41/program-launcher.png?raw=true", caption: "GNOME Launcher" },
      { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/xfce/xfce4-apps.png?raw=true", caption: "XFCE Application Menu" },
    ],
  },
  apps: {
    title: "Pre-installed Applications",
    images: [
      { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/gnome-41/app-menu.png?raw=true", caption: "Application Grid" },
      { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/plasma/plasma-bluetooth.png?raw=true", caption: "System Settings" },
      { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/plasma/installer.png?raw=true", caption: "Calamares Installer" },
    ],
  },
};

const allImages = [
  { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/plasma/terminal.png?raw=true" },
  { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/gnome-41/app-menu.png?raw=true" },
  { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/plasma/plasma-bluetooth.png?raw=true" },
  { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/gnome-41/program-launcher.png?raw=true" },
  { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/xfce/xfce4-apps.png?raw=true" },
  { img: "https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/ss-with-apps/theme/plasma/installer.png?raw=true" },
];

const firstRow = allImages.slice(0, allImages.length / 2);
const secondRow = allImages.slice(allImages.length / 2);

export function Gallery() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50 dark:from-[#09090B] dark:to-[#0b0b10]"
    >
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPatternGallery" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(249,115,22,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternGallery)" />
        </svg>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mt-5 mb-8 text-3xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300 relative z-10"
      >
        See ALG in Action
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto relative z-10 px-4"
      >
        Take a tour through ALG's beautiful interface and discover what makes it special.
      </motion.p>

      <div className="relative w-full">
        <Marquee pauseOnHover className="[--duration:20s] relative z-10">
          {firstRow.map((item) => (
            <DialogBasicImage key={item.img} img={item.img} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s] relative z-10 mt-4">
          {secondRow.map((item) => (
            <DialogBasicImage key={item.img} img={item.img} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-orange-100/90 to-transparent dark:from-[#09090B]/90 z-20"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-orange-100/90 to-transparent dark:from-[#09090B]/90 z-20"></div>
      </div>
    </section>
  );
}

// Get Started Section
export function GetStartedSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and tutorials",
      link: "/tutorials",
      icon: "📖",
    },
    {
      title: "Community",
      description: "Join our Discord community",
      link: "https://discord.com/invite/NgAFEw9Tkf",
      icon: "💬",
    },
    {
      title: "Source Code",
      description: "View and contribute on GitHub",
      link: "https://github.com/arch-linux-gui",
      icon: "💻",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] overflow-hidden"
    >
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPatternGetStarted" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(249,115,22,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternGetStarted)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Download ALG today and experience Arch Linux like never before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/downloads"
              className="px-10 py-4 bg-orange-500 text-white rounded-full font-semibold text-xl shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105"
            >
              Download Now
            </a>
            <a
              href="/tutorials"
              className="px-10 py-4 bg-white dark:bg-gray-800 text-orange-500 dark:text-orange-400 rounded-full font-semibold text-xl shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 border-2 border-orange-500"
            >
              View Tutorials
            </a>
          </div>

          {/* System Requirements */}
          <div className="max-w-3xl mx-auto mb-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-orange-200/50 dark:border-orange-800/50">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              Minimum System Requirements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div>
                <strong className="text-orange-600 dark:text-orange-400">CPU:</strong> 64-bit x86_64, 2+ cores
              </div>
              <div>
                <strong className="text-orange-600 dark:text-orange-400">RAM:</strong> 2GB minimum, 4GB recommended
              </div>
              <div>
                <strong className="text-orange-600 dark:text-orange-400">Storage:</strong> 10GB minimum, 50GB recommended
              </div>
            </div>
          </div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.link}
              target={resource.link.startsWith("http") ? "_blank" : undefined}
              rel={resource.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-orange-200/50 dark:border-orange-800/50 hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="text-4xl mb-3">{resource.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                {resource.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {resource.description}
              </p>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
