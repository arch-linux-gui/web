import React from "react";
export default function Requirements() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] px-6 pt-36 sm:px-12 md:px-20 md:pb-12 lg:px-28">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="bg-[#FFFFFF] p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl">
            Requirements
          </h2>
          <p className="mb-1 font-semibold text-gray-600">Minimum:</p>
          <ul className="mb-4 text-gray-600 list-disc list-inside">
            <li>
              64 bit x86_64 processor (Intel/AMD), with at least 2 CPU cores.
              (32-bit not supported)
            </li>
            <li>Any GPU/IGP with OpenGL 3.3+ support.</li>
            <li>At least 2GB DDR3/DDR4 RAM.</li>
            <li>At least 10GB HDD/SSD storage.</li>
            <li>
              Basic WPA/WPA2 compatible wifi card or ethernet supported
              motherboard.
            </li>
          </ul>
          <p className="mb-1 font-semibold text-gray-600">
            Recommended (Themed Edition):
          </p>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              64 bit x86_64 processor (Intel/AMD), with at least 4 CPU cores.
              (32-bit not supported)
            </li>
            <li>Any GPU/IGP with OpenGL 3.3+ support.</li>
            <li>4-8GB DDR3/DDR4 RAM.</li>
            <li>50GB HDD/SSD space (more the better).</li>
            <li>WiFi and Ethernet Card.</li>
          </ul>
        </div>
        <div className="bg-[#9c89d1] p-6 rounded-lg">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            General Instructions
          </h2>
          <p className="mb-1 font-semibold text-white">Make Bootable USB:</p>
          <ul className="mb-4 text-white list-disc list-inside">
            <li>
              Linux: Watch this video for Command Line DD method or watch the
              video with Balena Etcher.
            </li>
            <li>
              Windows: Watch either one of these videos: With Rufus or With
              Balena Etcher
            </li>
            <li>MacOS: Watch this video.</li>
            <li>
              Watch tutorials on the Tutorials page for installation guide.
            </li>
            <li>Dual/Multi Boot: Watch these videos.</li>
            <li>Don&#39;t forget to verify your download.</li>
            <li>Optionally, view full changelog.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
