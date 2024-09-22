"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Flavours() {
  const [isThemedKDE, setIsThemedKDE] = useState(false);
  const [isThemedGnome, setIsThemedGnome] = useState(false);
  const [isThemedXfce, setIsThemedXfce] = useState(false);
  const [dropdownVisibleKDE, setdropdownVisibleKDE] = useState(false);
  const [dropdownVisibleGNOME, setdropdownVisibleGNOME] = useState(false);
  const [dropdownVisibleXFCE, setdropdownVisibleXFCE] = useState(false);

  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setdropdownVisibleKDE(false);
        setdropdownVisibleGNOME(false);
        setdropdownVisibleXFCE(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const pureIso = {
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

  const themedIso = {
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

  const toggleDropdownKDE = () => {
    setdropdownVisibleKDE(!dropdownVisibleKDE);
  };

  const toggleDropdownGNOME = () => {
    setdropdownVisibleGNOME(!dropdownVisibleGNOME);
  };

  const toggleDropdownXFCE = () => {
    setdropdownVisibleXFCE(!dropdownVisibleXFCE);
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] pt-4 md:pt-0 px-4 sm:px-12 md:px-20 md:pb-12 lg:px-28">
      <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-40-60">
        <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">KDE Plasma</h2>
          <p className="mb-4 leading-relaxed md:text-lg">
            The Plasma Themed Edition (also known as the Flagship) of Arka Linux
            GUI helps you install Vanilla Arch Linux with the KDE Plasma Desktop
            Environment. It is pre-configured and ready to use. It comes with
            all the necessary software and settings to help users get started
            quickly.
          </p>
          <div className="flex items-center text-center rounded-lg md:hidden">
            <Image
              src={isThemedKDE ? "/plasma-pure.png" : "/plasma.png"}
              alt="KDE Plasma"
              width={500}
              height={300}
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center mt-6 mb-4 space-x-2 md:">
            <span className="font-bold">Pure</span>
            <button
              onClick={() => setIsThemedKDE(!isThemedKDE)}
              className={`${
                !isThemedKDE ? "bg-[#6a45d1]" : "bg-gray-400"
              } w-14 h-8 rounded-full relative`}
            >
              <span
                className={`${
                  !isThemedKDE ? "translate-x-3" : "-translate-x-3"
                } inline-block w-6 mt-1 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300`}
              />
            </button>
            <span className="font-bold">Themed</span>
          </div>
          <div className="relative flex justify-center mt-6">
            <button
              onClick={toggleDropdownKDE}
              className="py-3 px-12 bg-[#6a45d1] text-white opacity-90 hover:opacity-100 rounded-full transition-all"
            >
              Download
            </button>
            {dropdownVisibleKDE && (
              <div
                className="absolute mt-2 rounded shadow-lg top-full"
                ref={ref}
              >
                <a
                  href={
                    isThemedKDE
                      ? pureIso.kde.sourceforge
                      : themedIso.kde.sourceforge
                  }
                  target="_blank"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Sourceforge
                </a>
                <a
                  href={isThemedKDE ? pureIso.kde.osdn : themedIso.kde.osdn}
                  target="_blank"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  OSDN
                </a>
                <a
                  href={
                    isThemedKDE ? pureIso.kde.torrent : themedIso.kde.torrent
                  }
                  target="_blank"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Torrent
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="items-center hidden p-6 text-center rounded-lg md:flex">
          <Image
            src={isThemedKDE ? "/plasma-pure.png" : "/plasma.png"}
            alt="KDE Plasma"
            width={900}
            height={800}
            className="mx-auto rounded-lg "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-7 md:grid-cols-60-40">
        <div className="hidden p-6 text-center rounded-lg md:block">
          <Image
            src={isThemedGnome ? "/gnome-pure.png" : "/gnome.jpg"}
            alt="GNOME"
            width={900}
            height={800}
            className="mx-auto mb-4 rounded-lg w-[99%]"
          />
        </div>
        <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">GNOME</h2>
          <p className="mb-4 leading-relaxed md:text-lg">
            The GNOME Edition of Arka Linux GUI helps you install Vanilla Arch
            Linux with the GNOME Desktop Environment. It is pre-configured and
            ready to use. It comes with all the necessary software and settings
            to help users get started quickly.
          </p>
          <div className="text-center rounded-lg">
            <Image
              src={isThemedGnome ? "/gnome-pure.png" : "/gnome.jpg"}
              alt="GNOME"
              width={500}
              height={300}
              className="mx-auto mb-4 rounded-lg md:hidden"
            />
          </div>
          <div className="flex items-center justify-center mt-6 mb-4 space-x-2 md:">
            <span className="font-bold">Pure</span>
            <button
              onClick={() => setIsThemedGnome(!isThemedGnome)}
              className={`${
                !isThemedGnome ? "bg-[#6a45d1]" : "bg-gray-400"
              } w-14 h-8 rounded-full relative`}
            >
              <span
                className={`${
                  !isThemedGnome ? "translate-x-3" : "-translate-x-3"
                } inline-block w-6 mt-1 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300`}
              />
            </button>
            <span className="font-bold">Themed</span>
          </div>
          <div className="relative flex justify-center mt-6">
            <button
              onClick={toggleDropdownGNOME}
              className="py-3 px-12 bg-[#6a45d1] text-white opacity-90 hover:opacity-100 rounded-full transition-all"
            >
              Download
            </button>
            {dropdownVisibleGNOME && (
              <div
                className="absolute mt-2 rounded shadow-lg top-full"
                ref={ref}
              >
                <a
                  href={
                    isThemedGnome
                      ? pureIso.gnome.sourceforge
                      : themedIso.gnome.sourceforge
                  }
                  target="_blank"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Sourceforge
                </a>
                <a
                  href={
                    isThemedGnome ? pureIso.gnome.osdn : themedIso.gnome.osdn
                  }
                  target="_blank"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  OSDN
                </a>
                <a
                  href={
                    isThemedGnome
                      ? pureIso.gnome.torrent
                      : themedIso.gnome.torrent
                  }
                  target="_blank"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Torrent
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-40-60">
        <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
          <h2 className="mb-3 text-3xl font-bold md:text-5xl">XFCE</h2>
          <p className="mb-3 leading-relaxed md:text-lg">
            The XFCE Edition of Arka Linux GUI helps you install Vanilla Arch
            Linux with the XFCE Desktop Environment. It is pre-configured and
            ready to use. It comes with all the necessary software and settings
            to help users get started quickly.
          </p>
          <div className="flex items-center text-center rounded-lg md:hidden">
            <Image
              src={isThemedXfce ? "/xfce-pure.png" : "/xfce.png"}
              alt="XFCE"
              width={500}
              height={300}
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <span className="font-bold ">Pure</span>
            <button
              onClick={() => setIsThemedXfce(!isThemedXfce)}
              className={`${
                !isThemedXfce ? "bg-[#6a45d1]" : "bg-gray-400"
              } w-14 h-8 rounded-full relative`}
            >
              <span
                className={`${
                  !isThemedXfce ? "translate-x-3" : "-translate-x-3"
                } inline-block w-6 mt-1 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300`}
              />
            </button>
            <span className="font-bold">Themed</span>
          </div>
          <div className="relative flex justify-center mt-6 mb-5">
            <button
              onClick={toggleDropdownXFCE}
              className="flex text-white py-3 px-12 bg-[#6a45d1] opacity-90 hover:opacity-100 rounded-full transition-all"
            >
              Download
            </button>
            {dropdownVisibleXFCE && (
              <div
                className="absolute mt-2 bg-white rounded shadow-lg top-full"
                ref={ref}
              >
                <a
                  href={
                    isThemedXfce
                      ? pureIso.xfce.sourceforge
                      : themedIso.xfce.sourceforge
                  }
                  target="_blank"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Sourceforge
                </a>
                <a
                  href={isThemedXfce ? pureIso.xfce.osdn : themedIso.xfce.osdn}
                  target="_blank"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  OSDN
                </a>
                <a
                  href={
                    isThemedXfce ? pureIso.xfce.torrent : themedIso.xfce.torrent
                  }
                  target="_blank"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                >
                  Torrent
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="items-center hidden p-6 text-center rounded-lg md:flex">
          <Image
            src={isThemedXfce ? "/xfce-pure.png" : "/xfce.png"}
            alt="XFCE"
            width={900}
            height={800}
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
      {/* <div className="flex justify-center pb-5 mt-12">
        <button className="py-2 px-8 border-4 border-[#6a45d1] rounded-full transition-all hover:bg-[#6a45d1] hover:text-white">
          <a
            href="https://sourceforge.net/projects/arch-linux-gui/files/experimental-editions"
            target="_blank"
          >
            Experimental Editions
          </a>
        </button>
      </div> */}
    </section>
  );
}
