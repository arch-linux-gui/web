"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Copy, Check, Shield } from "lucide-react";
import { themedIso } from '@/lib/Isodata'

interface DesktopEnvironmentProps {
  name: "kde" | "gnome" | "xfce";
  title: string;
  description: string;
  pureImage: string;
  themedImage: string;
  isReversed?: boolean;
}

// Checksum Component
const ChecksumDisplay: React.FC<{ checksum: string }> = ({ checksum }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(checksum);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600">
      <div className="flex items-center gap-2 mb-2">
        <Shield className="w-4 h-4 text-orange-600 dark:text-orange-400" />
        <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">
          SHA256 Checksum
        </span>
      </div>
      <div className="flex items-center gap-2">
        <code className="flex-1 text-xs bg-white dark:bg-gray-900 px-3 py-2 rounded border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-mono break-all">
          {checksum}
        </code>
        <button
          onClick={handleCopy}
          className="flex-shrink-0 p-2 bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 text-white rounded transition-all duration-200"
          title={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </button>
      </div>
      <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">
        Verify your download using this checksum
      </p>
    </div>
  );
};

const DesktopEnvironment: React.FC<DesktopEnvironmentProps> = ({
  name,
  title,
  description,

  themedImage,
  isReversed,
}) => {
  // Default to Themed variant for visuals and downloads
  const isoLinks = themedIso[name];

  const contentSection = (
    <div className="flex flex-col justify-center p-6 md:p-8">
      <h2 className="mb-4 text-3xl font-bold md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300">
        {title}
      </h2>
      <p className="mb-6 leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
        {description}
      </p>
      <div className="flex items-center text-center rounded-xl md:hidden mb-6">
        <div className="relative w-full rounded-xl overflow-hidden border-2 border-orange-200 dark:border-orange-800/50 shadow-lg">
          <Image
            src={themedImage}
            alt={title}
            width={500}
            height={300}
            priority={true}
            className="mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col items-center mt-6">
        <a
          href={isoLinks.sourceforge}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-12 bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-500 rounded-full transition-all duration-300 hover:scale-105 shadow-lg inline-block font-semibold"
        >
          Download
        </a>
        <div className="w-full max-w-md mt-4">
          <ChecksumDisplay checksum={isoLinks.checksum} />
        </div>
      </div>
    </div>
  );

  const imageSection = (
    <div className="items-center hidden p-6 md:p-8 text-center md:flex">
      <div className="relative w-full rounded-xl overflow-hidden border-2 border-orange-200 dark:border-orange-800/50 shadow-2xl hover:shadow-orange-300/50 dark:hover:shadow-orange-900/50 transition-shadow duration-300">
        <Image
          src={themedImage}
          alt={title}
          width={900}
          height={800}
          priority={true}
          className="mx-auto"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-200/50 dark:border-orange-800/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {isReversed ? (
          <>
            {imageSection}
            {contentSection}
          </>
        ) : (
          <>
            {contentSection}
            {imageSection}
          </>
        )}
      </div>
    </div>
  );
};

export default function Flavours() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] pt-4 md:pt-0 px-4 sm:px-12 md:px-20 md:pb-12 lg:px-28 overflow-hidden">
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPatternFlavours" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(249,115,22,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternFlavours)" />
        </svg>
      </div>

      <div className="flex flex-col space-y-8 relative z-10">
        <DesktopEnvironment
          name="kde"
          title="ALG Plasma"
          description="ALG Plasma is the flagship edition of the ALG project. It is pre-configured and ready to use. It comes with all the necessary software and settings to help users get started quickly, including the welcome app and the app store. It is geared towards users who are familliar with the Windows 7/10/11 desktop user experience."
          themedImage="https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/themed/plasma.png?raw=true"
          pureImage="https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/pure/plasma-pure.png?raw=true"
          isReversed={false}
        />
        <DesktopEnvironment
          name="gnome"
          title="ALG GNOME"
          description="The GNOME Edition of ALG gives you a more modern computing experience. It is pre-configured and ready to use. It comes with all the necessary software and settings to help users get started quickly, including the welcome app and the app store. It is geared towards users who are familliar with the MacOS desktop user experience, or would like to explore it."
          themedImage="https://github.com/arch-linux-gui/artwork/blob/master/desktop-screenshots/desktop-ss/themed/gnome-41.png?raw=true"
          pureImage="https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/pure/gnome.png?raw=true"
          isReversed={true}
        />
        <DesktopEnvironment
          name="xfce"
          title="ALG XFCE"
          description="ALG XFCE is a lightweight edition of the ALG project, that promises a more traditional computing experience. It is geared towards users with older or minimal hardware. It aims to give life to your old laptor or PC, or as a full fledged experience for someone on a lower-end machine."
          themedImage="https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/themed/xfce-themed.png?raw=true"
          pureImage="https://github.com/arch-linux-gui/artwork/blob/dev/desktop-screenshots/desktop-ss/pure/xfce-pure.png?raw=true"
          isReversed={false}
        />
      </div>
    </section>
  );
}
