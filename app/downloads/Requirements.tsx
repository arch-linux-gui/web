import React from "react";
import Link from "next/link";
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
            Installation Instructions
          </h2>
          <h2 className="mb-1 font-semibold text-white">Make Bootable USB:</h2>
          <ul className="mb-4 text-white list-disc list-inside">
            <li>
              To create a bootable USB. You can follow the step-by-step guides on
              the <Link href="/tutorials" className="underline underline-offset-2 font-semibold text-white">Tutorials page</Link>.
            </li>
          <h2 className="mb-1 font-semibold text-white">Getting Started with ALG installation:</h2>
            <li>
              Insert the USB into your computer and open the BIOS/Boot Menu. The
              key to open it depends on your device.
            </li>
            <li> Common keys are F8, F11,
              F12, or Esc plus a Function key. Press the key repeatedly right
              after turning on your PC.</li>
            <li>
              Use the arrow keys to highlight your USB drive, then press Enter
              to boot from it.
            </li>
            <h2 className="mb-1 font-semibold text-white">Selecting the correct graphics driver:</h2>
            <li>
              When the ALG boot options appear, choose the right option:
              <ul className="list-disc list-inside ml-5">
                <li>
                  If you have an NVIDIA GPU (Kepler or newer), select Option 2
                  (press the Down Arrow once, then Enter).
                </li>
                <li>
                  For all other systems, select Option 1 (just press Enter).
                </li>
              </ul>
            </li>
            <li>
              ALG will start based on your choice. For NVIDIA users, the
              necessary drivers are enabled automatically.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
