import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  const isDonatePage =
    pathname.startsWith("/donate") ||
    pathname.startsWith("/careers") ||
    pathname.startsWith("/apply");
  return (
    <div className="min-h-screen flex flex-col relative">
      <main className="flex-grow">{children}</main>
      {!isDonatePage && (
        <Link
          href="/donate"
          className="fixed w-[3.5rem] h-[3.5rem] bg-[#6a45d1] rounded-full flex items-center justify-center shadow-lg hover:bg-[#7554d1] transition duration-300 bottom-20 right-4 md:bottom-24 md:right-6 lg:w-[3.5rem] lg:h-[3.5rem] lg:bottom-6"
        >
          <Image
            src="/donate.png"
            alt="icon"
            width={24}
            height={24}
            className="lg:w-6 lg:h-6"
          />
        </Link>
      )}
    </div>
  );
};

export default Layout;
