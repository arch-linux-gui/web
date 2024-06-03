import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#161a1e] text-white py-8">
      <div className="container flex items-center justify-between px-4 mx-auto">
        <div className="text-[12px] md:text-sm">Copyright &copy; ALG Team</div>

        <div className="flex items-center justify-center space-x-4 md:space-x-8">
          <a href="https://github.com/arch-linux-gui" target="_blank">
            <Image
              src="/github.svg"
              width={24}
              height={24}
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              alt="Github"
            />
          </a>
          <a href="https://discord.gg/NgAFEw9Tkf" target="_blank">
            <Image
              src="/discord.svg"
              width={24}
              height={24}
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              alt="Discord"
            />
          </a>
          <a href="https://t.me/archlinuxgui" target="_blank">
            <Image
              src="/telegram.svg"
              width={24}
              height={24}
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              alt="Telegram"
            />
          </a>
          <a href="https://www.instagram.com/archlinuxgui" target="_blank">
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
              alt="Instagram"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
