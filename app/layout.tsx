"use client";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
import "../public/alg-logo.png";
import Layout from "./components/Layout";
import "./globals.css";
import Loader from "./lib/loader";
import { ScrollProvider } from "./scrollContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: false,
});

gsap.registerPlugin(ScrollTrigger);

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleComplete);
    gsap.registerPlugin(ScrollTrigger);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleComplete);
    };
  }, []);

  return (
    <ViewTransitions>
      <html lang="en">
        <body className={poppins.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TooltipProvider>
              <ScrollProvider>
                {loading && <Loader />}
                <Layout>{children}</Layout>
              </ScrollProvider>
            </TooltipProvider>
          </ThemeProvider>
          <div id="modal-root"></div>
        </body>
      </html>
    </ViewTransitions>
  );
}
