import React from "react";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex m-2 items-center">
      <Image
        src="/alg-logo.png"
        width={45}
        height={45}
        alt="ALG Logo"
        className="bg-gray-900 rounded-full mr-2"
      />
      <p className="text-lg font-bold">Arka Linux GUI</p>
    </div>
  );
}

export default Logo;
