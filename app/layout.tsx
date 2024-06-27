"use client";
import React from "react";
import { Poppins } from "next/font/google";
import "./globals.css";
import "../public/alg-logo.png";
import { ScrollProvider } from "./scrollContext";
import { useEffect, useState } from "react";
import Loader from "./lib/loader";
import Layout from "./components/Layout";
import { RootProvider } from "fumadocs-ui/provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: false,
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("load", handleComplete);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("load", handleComplete);
    };
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <RootProvider
          search={{
            links: [
              ["Testing", "/docs/testing/newtest"],
              ["Components", "/docs/test"],
            ],
            hotKey: [
              {
                display: "Ctrl + k",
                key: "k",
              },
            ],
          }}
        >
          <TooltipProvider>
            <ScrollProvider>
              {loading && <Loader />}
              <Layout>{children}</Layout>
            </ScrollProvider>
          </TooltipProvider>
        </RootProvider>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
