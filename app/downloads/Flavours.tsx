"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface IsoLinks {
  sourceforge: string;
  osdn: string;
  torrent: string;
}

interface IsoData {
  kde: IsoLinks;
  gnome: IsoLinks;
  xfce: IsoLinks;
}

const pureIso: IsoData = {
  kde: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-plasma-pure-2022.07-x86_64.iso/download",
    osdn: "https://osdn.net/dl/arch-linux-gui/archlinux-gui-plasma-pure-2022.07-x86_64.iso",
    torrent: "https://some-torrent-link/kde-pure.torrent",
  },
  gnome: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-gnome-pure-2022.07-x86_64.iso/download",
    osdn: "https://osdn.net/dl/arch-linux-gui/archlinux-gui-gnome-pure-2022.07-x86_64.iso",
    torrent: "https://some-torrent-link/gnome-pure.torrent",
  },
  xfce: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-xfce-pure-2022.07-x86_64.iso/download",
    osdn: "https://osdn.net/dl/arch-linux-gui/archlinux-gui-xfce-pure-2022.07-x86_64.iso",
    torrent: "https://some-torrent-link/xfce-pure.torrent",
  },
};

const themedIso: IsoData = {
  kde: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-plasma-2022.07-x86_64.iso/download",
    osdn: "https://osdn.net/dl/arch-linux-gui/archlinux-gui-plasma-2022.07-x86_64.iso",
    torrent: "https://some-torrent-link/kde-themed.torrent",
  },
  gnome: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-gnome-2022.07-x86_64.iso/download",
    osdn: "https://osdn.net/dl/arch-linux-gui/archlinux-gui-gnome-2022.07-x86_64.iso",
    torrent: "https://some-torrent-link/gnome-themed.torrent",
  },
  xfce: {
    sourceforge:
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-xfce-2022.07-x86_64.iso/download",
    osdn: "https://osdn.net/dl/arch-linux-gui/archlinux-gui-xfce-2022.07-x86_64.iso",
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
  pureImage,
  themedImage,
  isReversed,
}) => {
  const [isThemed, setIsThemed] = useState(false);
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

  const isoLinks = !isThemed ? themedIso[name] : pureIso[name];

  const contentSection = (
    <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
      <h2 className="mb-4 text-3xl font-bold md:text-5xl">{title}</h2>
      <p className="mb-4 leading-relaxed md:text-lg">{description}</p>
      <div className="flex items-center text-center rounded-lg md:hidden">
        <Image
          src={isThemed ? themedImage : pureImage}
          alt={title}
          width={500}
          height={300}
          className="mx-auto rounded-lg"
        />
      </div>
      <div className="flex items-center justify-center mt-6 mb-4 space-x-2">
        <span className="font-bold">Pure</span>
        <button
          onClick={() => setIsThemed(!isThemed)}
          className={`${
            !isThemed ? "bg-[#F97316]" : "bg-gray-400"
          } w-14 h-8 rounded-full relative`}
        >
          <span
            className={`${
              !isThemed ? "translate-x-3" : "-translate-x-3"
            } inline-block w-6 mt-1 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300`}
          />
        </button>
        <span className="font-bold">Themed</span>
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
        src={isThemed ? themedImage : pureImage}
        alt={title}
        width={900}
        height={800}
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
      <DesktopEnvironment
        name="kde"
        title="KDE Plasma"
        description="The Plasma Themed Edition (also known as the Flagship) of Arka Linux GUI helps you install Vanilla Arch Linux with the KDE Plasma Desktop Environment. It is pre-configured and ready to use. It comes with all the necessary software and settings to help users get started quickly."
        pureImage="/plasma.png"
        themedImage="/plasma-pure.png"
        isReversed={false}
      />
      <DesktopEnvironment
        name="gnome"
        title="GNOME"
        description="The GNOME Edition of Arka Linux GUI helps you install Vanilla Arch Linux with the GNOME Desktop Environment. It is pre-configured and ready to use. It comes with all the necessary software and settings to help users get started quickly."
        pureImage="/gnome.jpg"
        themedImage="/gnome-pure.png"
        isReversed={true}
      />
      <DesktopEnvironment
        name="xfce"
        title="XFCE"
        description="The XFCE Edition of Arka Linux GUI helps you install Vanilla Arch Linux with the XFCE Desktop Environment. It is pre-configured and ready to use. It comes with all the necessary software and settings to help users get started quickly."
        pureImage="/xfce.png"
        themedImage="/xfce-pure.png"
        isReversed={false}
      />
    </section>
  );
}
