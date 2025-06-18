"use client";
import DonationBubble from "@/components/donationBubble";
import { ScrollProvider } from "@/context/scrollContext";
import Loader from "@/lib/loader";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ThemeProvider } from "next-themes";
import { ViewTransitions } from "next-view-transitions";
import { Poppins } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: false,
});

gsap.registerPlugin(ScrollTrigger);

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [loading, setLoading] = useState<boolean>(false);

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
    <ViewTransitions>
      <html lang="en">
        <head>
          <title>Arka Linux GUI</title>
          <meta name="description" content="Arka Linux GUI" />
          <meta property="og:url" content="https://arkalinuxgui.org/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Arka Linux GUI" />
          <meta property="og:description" content="Arka Linux GUI" />
          <meta
            property="og:image"
            content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/arkalinuxgui.org/Arka%20Linux%20GUI/Arka%20Linux%20GUI%20(formerly%20Arch%20Linux%20GUI)%2C%20is%20a%20fast%2C%20offline%2C%20graphical%20installer%20for%20Arch%20Linux./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F4ec37f9d-1c03-4b40-96fe-d6ccf8a14667.png%3Ftoken%3DTCHWDYus5O15KyLn5Om9XlrKzLZHWcHNp8zv2pS-9Jg%26height%3D552%26width%3D1200%26expires%3D33266952728/og.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="arkalinuxgui.org" />
          <meta property="twitter:url" content="https://arkalinuxgui.org/" />
          <meta name="twitter:title" content="Arka Linux GUI" />
          <meta name="twitter:description" content="Arka Linux GUI" />
          <meta
            name="twitter:image"
            content="https://ogcdn.net/2c2c6737-47d4-4459-9969-e711eb48394c/v1/arkalinuxgui.org/Arka%20Linux%20GUI/Arka%20Linux%20GUI%20(formerly%20Arch%20Linux%20GUI)%2C%20is%20a%20fast%2C%20offline%2C%20graphical%20installer%20for%20Arch%20Linux./https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F4ec37f9d-1c03-4b40-96fe-d6ccf8a14667.png%3Ftoken%3DTCHWDYus5O15KyLn5Om9XlrKzLZHWcHNp8zv2pS-9Jg%26height%3D552%26width%3D1200%26expires%3D33266952728/og.png"
          />
        </head>
        <body className={poppins.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <TooltipProvider>
              <ScrollProvider>
                {loading && <Loader />}
                <DonationBubble>{children}</DonationBubble>
              </ScrollProvider>
            </TooltipProvider>
          </ThemeProvider>
          <div id="modal-root"></div>
        </body>
      </html>
    </ViewTransitions>
  );
}
