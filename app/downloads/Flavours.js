"use client";
import { useState } from "react";
import Image from "next/image";

export default function Flavours() {
  const [isThemedKDE, setIsThemedKDE] = useState(true);
  const [isThemedGnome, setIsThemedGnome] = useState(true);
  const [isThemedXfce, setIsThemedXfce] = useState(true);
  const pureIso = {
    kde: "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-plasma-pure-2022.07-x86_64.iso/download",
    gnome:
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-gnome-pure-2022.07-x86_64.iso/download",
    xfce: "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-xfce-pure-2022.07-x86_64.iso/download",
  };

  const themedIso = {
    kde: "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-plasma-2022.07-x86_64.iso/download",
    gnome:
      "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-gnome-2022.07-x86_64.iso/download",
    xfce: "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-xfce-2022.07-x86_64.iso/download",
  };
  return (
    <section className="bg-[#161a1e] pt-4 md:pt-0 px-4 sm:px-12 md:px-20 md:pb-12 lg:px-28">
      <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-40-60">
        <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            KDE Plasma
          </h2>
          <p className="mb-4 leading-relaxed text-gray-400 md:text-lg">
            The Plasma Themed Edition (also known as the Flagship) of Arka Linux
            GUI helps you install Vanilla Arch Linux with the KDE Plasma Desktop
            Environment. It is pre-configured and ready to use. It comes with
            all the necessary software and settings to help users get started
            quickly.
          </p>
          <div className="flex items-center text-center rounded-lg md:hidden">
            <Image
              src={isThemedKDE ? "plasma-pure.png" : "plasma.png"}
              alt="KDE Plasma"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center mt-6 mb-4 space-x-2 md:">
            <span className="font-bold text-white">Pure</span>
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
            <span className="font-bold text-white">Themed</span>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href={isThemedKDE ? pureIso["kde"] : themedIso["kde"]}
              target="_blank"
              download
              className="text-white py-3 px-12 bg-[#6a45d1] opacity-90 hover:opacity-100 rounded-full transition-all"
            >
              Download
            </a>
          </div>
        </div>
        <div className="items-center hidden p-6 text-center rounded-lg md:flex">
          <Image
            src={isThemedKDE ? "plasma-pure.png" : "plasma.png"}
            alt="KDE Plasma"
            className="mx-auto rounded-lg "
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-60-40">
        <div className="hidden p-6 text-center rounded-lg md:block">
          <Image
            src={isThemedGnome ? "gnome-pure.png" : "gnome.jpg"}
            alt="GNOME"
            className="mx-auto mb-4 rounded-lg w-[99%]"
          />
        </div>
        <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            GNOME
          </h2>
          <p className="mb-4 leading-relaxed text-gray-400 md:text-lg">
            The GNOME Edition of Arka Linux GUI helps you install Vanilla Arch
            Linux with the GNOME Desktop Environment. It is pre-configured and
            ready to use. It comes with all the necessary software and settings
            to help users get started quickly.
          </p>
          <div className="text-center rounded-lg">
            <Image
              src={isThemedGnome ? "gnome-pure.png" : "gnome.jpg"}
              alt="GNOME"
              className="mx-auto mb-4 rounded-lg md:hidden"
            />
          </div>
          <div className="flex items-center justify-center mt-6 mb-4 space-x-2 md:">
            <span className="font-bold text-white">Pure</span>
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
            <span className="font-bold text-white">Themed</span>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href={isThemedGnome ? pureIso["gnome"] : themedIso["gnome"]}
              download
              className="text-white py-3 px-12 bg-[#6a45d1] opacity-90 transition-all hover:opacity-100 rounded-full"
            >
              Download
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-40-60">
        <div className="flex flex-col justify-center p-3 rounded-lg md:p-6">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            XFCE
          </h2>
          <p className="mb-4 leading-relaxed text-gray-400 md:text-lg">
            The XFCE Edition of Arka Linux GUI helps you install Vanilla Arch
            Linux with the XFCE Desktop Environment. It is pre-configured and
            ready to use. It comes with all the necessary software and settings
            to help users get started quickly.
          </p>
          <div className="flex items-center text-center rounded-lg md:hidden">
            <Image
              src={isThemedXfce ? "xfce-pure.png" : "xfce.png"}
              alt="XFCE"
              className="mx-auto rounded-lg"
            />
          </div>
          <div className="flex items-center justify-center mt-6 mb-4 space-x-2 md:">
            <span className="font-bold text-white">Pure</span>
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
            <span className="font-bold text-white">Themed</span>
          </div>
          <div className="flex justify-center mt-6">
            <a
              href={isThemedXfce ? pureIso["xfce"] : themedIso["xfce"]}
              download
              className="text-white py-3 px-12 bg-[#6a45d1] opacity-90 transition-all hover:opacity-100 rounded-full"
            >
              Download
            </a>
          </div>
        </div>
        <div className="items-center hidden p-6 text-center rounded-lg md:flex">
          <Image
            src={isThemedXfce ? "xfce-pure.png" : "xfce.png"}
            alt="XFCE"
            className="mx-auto rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <button className="py-2 px-8 text-white border-4 border-[#6a45d1] rounded-full transition-all hover:bg-[#6a45d1] hover:text-white">
          <a
            href="https://sourceforge.net/projects/arch-linux-gui/files/experimental-editions"
            target="_blank"
          >
            Experimental Editions
          </a>
        </button>
      </div>
    </section>
  );
}
