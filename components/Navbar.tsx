"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const navItems = {
  Tutorials: "/tutorials",
  Support: "https://discord.com/invite/NgAFEw9Tkf",
  Sourceforge: "https://sourceforge.net/projects/arch-linux-gui/",
  Downloads: "/downloads",
};

export default function CenteredDockToStickyNavbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = (e: any) => {
      if (e.key === "theme") {
        setIsDarkMode(e.newValue === "dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  });

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.div
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isSticky ? "top-0" : "top-4"
      }`}
      initial={false}
      animate={isSticky ? { width: "100%" } : { width: "100%" }}
    >
      <div className={`flex justify-center ${isSticky ? "w-full" : ""}`}>
        <motion.nav
          className={`${
            isSticky
              ? "w-full bg-white dark:bg-[#1f1f24e4] shadow-md"
              : "bg-white/80 dark:bg-[#1f1f24e4] backdrop-blur-md rounded-full shadow-lg"
          } transition-all duration-300 ease-in-out ${isSticky ? "" : "w-3/4"}`}
          initial={false}
          animate={
            isSticky ? { borderRadius: "0px" } : { borderRadius: "9999px" }
          }
        >
          <div
            className={`flex items-center justify-between ${
              isSticky
                ? "px-4 md:px-6 py-2 max-w-7xl mx-auto"
                : "px-4 md:px-6 py-3"
            }`}
          >
            <a
              href="/"
              className="text-xl font-bold pr-5 text-gray-900 dark:text-white"
            >
              <Image
                src="https://github.com/arch-linux-gui/artwork/blob/dev/logo.png?raw=true"
                width={45}
                height={45}
                alt="ALG Logo"
                className="bg-gray-900 rounded-full"
              />
            </a>
            <div className="hidden md:flex space-x-1">
              {Object.entries(navItems).map(([key, value]) => (
                <motion.a
                  key={key}
                  href={value}
                  target={
                    key.includes("Support") ||
                    key.includes("Sourceforge") ||
                    key.includes("OSDN")
                      ? "_blank"
                      : ""
                  }
                  className={`text-gray-600 dark:text-white hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                    isSticky ? "hover:bg-gray-100 dark:hover:bg-gray-800" : ""
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {key}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-[#1f1f24e4] text-gray-900 dark:text-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </Button>
              </div>
            </div>
          </div>
        </motion.nav>
      </div>
      {/* Mobile menu */}
      <motion.div
        className={`md:hidden overflow-hidden ${
          isSticky ? "w-full" : "flex justify-center"
        }`}
        initial={false}
        animate={
          isMobileMenuOpen
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`${
            isSticky
              ? "bg-white dark:bg-[#1f1f24e4] w-full"
              : "bg-white/80 w-3/4 max-w-md dark:bg-[#1f1f24e4] backdrop-blur-md"
          } ${isSticky ? "" : "rounded-2xl"} shadow-lg mx-auto`}
        >
          {Object.entries(navItems).map(([key, value]) => (
            <a
              key={key}
              href={value}
              target={
                key.includes("Support") ||
                key.includes("Sourceforge") ||
                key.includes("OSDN")
                  ? "_blank"
                  : ""
              }
              className="block text-gray-600 hover:rounded-full dark:text-gray-300 hover:bg-[#e2e2e7e4] dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#303037e4] px-4 py-2 text-sm font-medium"
            >
              {key}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
