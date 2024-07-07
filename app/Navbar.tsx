"use client";
import React from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import Modal from "./lib/Modal";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const burgerClick = () => {
    setNavOpen(!navOpen);
  };

  return (
    <section className="absolute w-full mt-8 text-black text-lg">
      {navOpen && (
        <Modal onClose={burgerClick}>
          <div className="flex flex-col items-center justify-center gap-4 font-bold">
            <Link href="/docs" target="_blank" className="hover:text-[#6a45d1]">
              Docs
            </Link>
            <Link
              href="/blogs"
              target="_blank"
              className="hover:text-[#6a45d1]"
            >
              Blogs
            </Link>
            <Link href="/tutorials" className="hover:text-[#6a45d1]">
              Tutorials
            </Link>
            <a
              href="https://discord.com/invite/NgAFEw9Tkf"
              className="hover:text-[#6a45d1]"
              target="_blank"
            >
              Support
            </a>
            <a
              href="https://sourceforge.net/projects/arch-linux-gui/"
              className="hover:text-[#6a45d1]"
              target="_blank"
            >
              Sourceforge
            </a>
            <a
              href="https://osdn.net/projects/arch-linux-gui/"
              className="hover:text-[#6a45d1]"
              target="_blank"
            >
              OSDN
            </a>
            <Link
              href="/downloads"
              className="px-4 py-2 bg-[#161a1e] rounded-3xl text-white"
            >
              Downloads
            </Link>
          </div>
        </Modal>
      )}
      <div className="flex justify-center">
        <div className="flex justify-between items-center px-8 py-4 rounded-full w-[80%] bg-white">
          <Link href="/">
            <div className="items-center hidden gap-1 md:flex">
              <Image
                src="/alg-logo.png"
                width={50}
                height={50}
                alt="ALG Logo"
                className="bg-gray-900 rounded-full"
              />
            </div>
            <div className="flex items-center gap-1 md:hidden">
              <Image
                src="/alg-logo.png"
                width={45}
                height={45}
                alt="ALG Logo"
                className="bg-gray-900 rounded-full"
              />
            </div>
          </Link>
          <button
            onClick={burgerClick}
            className={`md:hidden ${navOpen ? "rotate-180" : "rotate-0"}`}
          >
            <Image src="/hamburger.svg" height={30} width={30} alt="Nothing" />
          </button>
          <div className="items-center hidden gap-4 text-lg font-bold md:flex">
            <Link href="/docs" target="_blank" className="hover:text-[#6a45d1]">
              Docs
            </Link>
            <Link
              href="/blogs"
              target="_blank"
              className="hover:text-[#6a45d1]"
            >
              Blogs
            </Link>
            <Link href="/tutorials" className="hover:text-[#6a45d1]">
              Tutorials
            </Link>
            <a
              href="https://discord.com/invite/NgAFEw9Tkf"
              className="hover:text-[#6a45d1]"
              target="_blank"
            >
              Support
            </a>
            <a
              href="https://sourceforge.net/projects/arch-linux-gui/"
              className="hover:text-[#6a45d1]"
              target="_blank"
            >
              Sourceforge
            </a>
            <a
              href="https://osdn.net/projects/arch-linux-gui/"
              className="hover:text-[#6a45d1]"
              target="_blank"
            >
              OSDN
            </a>
            <Link
              href="/downloads"
              className="px-4 py-2 bg-[#161a1e] rounded-3xl text-white"
            >
              Downloads
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
