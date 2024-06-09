import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#161a1e] text-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0">
            <div className="text-[12px] md:text-sm">
              &copy; {new Date().getFullYear()} ALG Team
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <a
                href="/careers"
                className="text-[12px] md:text-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                Careers
              </a>
              <a
                href="/about"
                className="text-[12px] md:text-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
              >
                About Us
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4 md:space-x-8">
            <a
              href="https://github.com/arch-linux-gui"
              target="_blank"
              aria-label="GitHub"
            >
              <Image
                src="/github.svg"
                width={24}
                height={24}
                className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6"
                alt="GitHub"
              />
            </a>
            <a
              href="https://discord.gg/NgAFEw9Tkf"
              target="_blank"
              aria-label="Discord"
            >
              <Image
                src="/discord.svg"
                width={24}
                height={24}
                className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6"
                alt="Discord"
              />
            </a>
            <a
              href="https://t.me/archlinuxgui"
              target="_blank"
              aria-label="Telegram"
            >
              <Image
                src="/telegram.svg"
                width={24}
                height={24}
                className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6"
                alt="Telegram"
              />
            </a>
            <a
              href="https://www.instagram.com/archlinuxgui"
              target="_blank"
              aria-label="Instagram"
            >
              <Image
                src="/instagram.svg"
                width={24}
                height={24}
                className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6"
                alt="Instagram"
              />
            </a>
            <a
              href="https://x.com/arkalinuxgui"
              target="_blank"
              aria-label="Twitter"
            >
              <Image
                src="/X.svg"
                width={24}
                height={24}
                className="w-6 h-6 md:w-6 md:h-6 lg:w-6 lg:h-6"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
