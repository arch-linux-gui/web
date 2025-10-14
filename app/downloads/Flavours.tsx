"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface IsoLinks {
  sourceforge: string;
  torrent: string;
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
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-plasma-2022.07-x86_64.iso/download",
    torrent: "https://some-torrent-link/kde-themed.torrent",
  },
  gnome: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-gnome-2022.07-x86_64.iso/download",
    torrent: "https://some-torrent-link/gnome-themed.torrent",
  },
  xfce: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-xfce-2022.07-x86_64.iso/download",
    torrent: "https://some-torrent-link/xfce-themed.torrent",
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

const DesktopEnvironment: React.FC<DesktopEnvironmentProps> = ({
  name,
  title,
  description,

  themedImage,
  isReversed,
}) => {
  // Default to Themed variant for visuals and downloads
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setDropdownVisible(!dropdownVisible);

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
      <div className="relative flex justify-center mt-6">
        <button
          onClick={toggleDropdown}
          className="py-3 px-12 bg-[#F97316] text-white opacity-90 hover:opacity-100 rounded-full transition-all"
        >
          Download
        </button>
        {dropdownVisible && (
          <div
            className="absolute mt-2 rounded shadow-lg top-full bg-white"
            ref={dropdownRef}
          >
            {Object.entries(isoLinks).map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-black hover:bg-gray-200"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </a>
            ))}
          </div>
        )}
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
