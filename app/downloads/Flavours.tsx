"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Copy, Check, Shield } from "lucide-react";

interface IsoLinks {
  sourceforge: string;
  checksum: string;
  // torrent: string;
}

interface IsoData {
  kde: IsoLinks;
  gnome: IsoLinks;
  xfce: IsoLinks;
}

// const pureIso: IsoData = {
//   kde: {
//     sourceforge:
//       "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-plasma-pure-2022.07-x86_64.iso/download",
//     osdn: "https://osdn.net/dl/arch-linux-gui/archlinux-gui-plasma-pure-2022.07-x86_64.iso",
//     torrent: "https://some-torrent-link/kde-pure.torrent",
//   },
//   gnome: {
//     sourceforge:
//       "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-gnome-pure-2022.07-x86_64.iso/download",
//     osdn: "https://osdn.net/dl/arch-linux-gui/archlinux-gui-gnome-pure-2022.07-x86_64.iso",
//     torrent: "https://some-torrent-link/gnome-pure.torrent",
//   },
//   xfce: {
//     sourceforge:
//       "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-xfce-pure-2022.07-x86_64.iso/download",
//     osdn: "https://osdn.net/dl/arch-linux-gui/archlinux-gui-xfce-pure-2022.07-x86_64.iso",
//     torrent: "https://some-torrent-link/xfce-pure.torrent",
//   },
// };

const themedIso: IsoData = {
  kde: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/alg-plasma-2025.10-x86_64.iso/download",
    checksum:
      "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    // torrent: "https://some-torrent-link/kde-themed.torrent",
  },
  gnome: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/alg-gnome-2025.10-x86_64.iso/download",
    checksum:
      "a3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b856",
    // torrent: "https://some-torrent-link/gnome-themed.torrent",
  },
  xfce: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/alg-xfce-2025.10-x86_64.iso/download",
    checksum:
      "b3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b857",
    // torrent: "https://some-torrent-link/xfce-themed.torrent",
  },
};

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
    <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
      <h2 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h2>
      <p className="mb-4 leading-relaxed md:text-lg">{description}</p>
      <div className="flex items-center text-center rounded-lg md:hidden">
        <Image
          src={themedImage}
          alt={title}
          width={500}
          height={300}
          priority={true}
          className="mx-auto rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center mt-6">
        <a
          href={isoLinks.sourceforge}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-12 bg-[#F97316] text-white opacity-90 hover:opacity-100 rounded-full transition-all inline-block"
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
    <div className="items-center hidden p-6 text-center rounded-lg md:flex">
      <Image
        src={themedImage}
        alt={title}
        width={900}
        height={800}
        priority={true}
        className="mx-auto rounded-lg"
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-2">
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
  );
};

export default function Flavours() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] pt-4 md:pt-0 px-4 sm:px-12 md:px-20 md:pb-12 lg:px-28">
      {/* Don't know why now its working correctly but when pureImage & themedImage places are changed it works inversely, need to fix! */}
      <div className="flex flex-col space-y-6">
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
