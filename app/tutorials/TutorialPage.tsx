"use client";
import { LazyVideo } from "@/components/ui/lazy-video";
import Loader from "@/lib/loader";
import { Suspense, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const install = [
  {
    title: "Verify your Arka Linux GUI Download",
    description: `In this video, we take a look at how to verify that you have downloaded exactly what I uploaded using the Secure Hash Algorithm (SHA). The Secure Hash Algorithms are a family of cryptographic hash functions. A cryptographic hash is like a signature for a data set. If you would like to compare two sets of raw data (source of the file, text or similar) it is always better to hash it and compare SHA256 values. This is why I provide the SHA256 checksums in a file named sha256sum.txt. This makes it suitable for checking integrity of your download. 
    In this video, I will show you how to get a SHA256 checksum and compare with the strings I have provided, to ensure the legitimacy of the download. I will cover how you can do this on Windows and Linux. I have explained on Windows 11, however, the steps are applicable to Windows 10 and Windows 7. Simillarly, the steps show for Linux are done on Arch, but can be done on any Linux Distribution. You can find the checksums here as well.`,
    url: "wtZjRXOny7Q",
  },
  {
    title: "Make Bootable USB in Windows (7, 8, 10, 11)",
    description: `In this video, we take a look at how to make a bootable USB of a Linux distribution, on Windows. In this video, as an example, I will make the Arka Linux GUI Gnome Edition.
    I am doing this on Windows 11, however, the steps can be performed on Windows 7, 8 or 10.`,
    url: "7ND2fiaFfic",
  },
  {
    title: "Make Bootable USB with dd on any Linux Distro",
    description: `In this video, we take a look at how to make a bootable USB of a Linux distribution, on another Linux distribution. In this video, as an example, I will make the Manjaro bootable USB on Ubuntu.
    The method show here can be used to make Arka Linux GUI's bootable USB from any Linux distribution.`,
    url: "KQGedNCA1E4",
  },
  {
    title: "ALG Automatic Installation",
    description: `In this video, we take a look at how to install Arch Linux using a GUI installer (Calamares). In this video we install Arch Linux on UEFI/GPT setup with automatic partining. ALG developers do not encourage automatic partitoning. The primary reason is the creation of the boot and home partitions, within the root parition.
    In this video we use the ALG Minimal ISO. The automatic installation, can be performed with the help of all 10 ALG ISOs, for both the UEFI/GPT setup, as well as BIOS/MBR setup.`,
    url: "0gAjgxGGzjw",
  },
  {
    title: "ALG Installation on Legacy BIOS using MBR partitioning scheme",
    description: `In this video, we take a look at how to install Arch Linux, with a GUI installer, on a Legacy/MBR setup. In this video, emphasis has been given on partitioning, and a whole 10 minute session is dedicated to explaining the partitioning.
    In this video we use the ALG Pure ISO. The manual installation we did here, can be performed with the help of all 10 ALG editions, for the Legacy/MBR setup.`,
    url: "smdZdPLHjWc",
  },
];
const multiboot = [
  {
    title: "Dual Boot with Windows 10 Legacy/MBR",
    description: `In this video, we take a look at how to use the ALG ISOs, to dual boot Arch Linux with Windows 10 on Legacy BIOS boot mode, using the MBR (Master Boot Record) partitioning scheme.
    In this video, we use the Manjaro KDE edition. The steps to dual boot Arch with Windows is same as shown here. I have done this in 500GB HDD installed on a desktop.`,
    url: "Ltiup47QIMU",
  },
  {
    title: "Dual Boot with Windows 10 UEFI/GPT",
    description: `In this video, we take a look at how to use the ALG ISOs, to dual boot Arch Linux with Windows 10 on UEFI BIOS boot mode, using the GPT paritioning scheme.
    In this video, we use the ALG Flagship Edition (Plasma Themed). The steps performed in this video can be done with all 10 ALG editions.
    This dual-boot have been done on an ASUS laptop, with 256GB NVMe SSD. 50 GB space was unallocated for Arch, from the existing 100GB of the D: Drive. Swap of 4GB was created to accomodate for the lesser physical memory installed on the hardware.`,
    url: "zGvGkuVEx0M",
  },
];

const archSpecific = [
  {
    title: "Install Software from AUR (pamac as example)",
    description: `In this video, we take a look at how to install software from the Arch User Repository (AUR). The AUR exposes the Arch Linux user to the largest software database in the entire Linux community.
    Software in the AUR is not compiled, most of the time and has to be done locally. In this video we discuss two methods:
    1. Manual Method with makepkg (paru is the example)
    2. With help of an AUR helper (that was just installed in the step above), and pamac-all is the example.
    Alternate title to this video can also be How to install Pamac. The reason pamac is not included in the ALG ISOs is because pamac is Manjaro's project. It has nothing to do with Arch directly, apart from the fact the many people actually like it.`,
    url: "BwvQUtv1eM0",
  },
  {
    title: "Install Google Chrome On Arch Linux",
    description: `This video is simillar to the above video. We take a look at how to install Google's Chrome Browser from AUR.`,
    url: "f2lY3k5o84w",
  },
  {
    title: "Install Zoom On Arch Linux",
    description: `This video is simillar to the above two videos. We take a look at how to install Zoom video conferencing tool. We see two methods, one from official ZOOM download center and second from the AUR.`,
    url: "hR97lCdizmk",
  },
];

const miscellaneous = [
  {
    title: "Install and Setup VirtualBox in Arch Linux",
    description: `In this video, we take a look at how to install and setup VirtualBox in Arch Linux.
    Although I have done this on Vanilla Arch Linux with the stock kernel, you can do this on all Arch based distributions, with different kernels. For the stock kernel, you must select the virtualbox-host-modules-arch and if you are using the
    \n- LTS Kernel
    \n- Zen Kernel
    \n- Hardened Kernel
    \n- Any other unofficiall kernel
    then you should install the virtualbox-host-dkms.`,
    url: "m6ZeH1L2734",
  },
  {
    title: "How to use VirtualBox to try Arka Linux GUI or any Linux",
    description: `In this video, we take a look at how to use VirtualBox.
    I will show you how to setup a template which you can use to try out all Arch Linux, and all other Arch Linux based Distributions like Manjaro, ArcoLinux, etc.`,
    url: "RJs70jQi7Wk",
  },
  {
    title: "Fixing broken bootloader",
    description:
      "In this video, we take a look at how to fix a broken bootloader in Arch Linux. Sometimes, after updates, you may find yourself stuck with the bootloader, and unable to boot into the operating system. This can happen because of:\nRepeated updates over a long period of time.\nHardware issues, like sudden poweroff.\nBugs in new updates.This video covers the steps to fix the bootloader in a majority of cases.",
    url: "XsE34MdHTqI",
  },
];
const TutorialPage = () => {
  return (
    <div className="relative flex flex-col items-center px-4 sm:px-12 md:px-20 md:pb-12 lg:px-28 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] overflow-hidden">
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPatternTutorials" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="rgba(249,115,22,0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPatternTutorials)" />
        </svg>
      </div>

      <div className="relative z-10 w-full">
        <h1 className="mb-8 text-3xl font-bold text-center mt-36 md:text-5xl md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300">
          Installation Videos
        </h1>

        {install.map((video, index) => (
          <div
            key={index}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-200/50 dark:border-orange-800/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mb-8"
          >
            <div className="flex flex-col md:flex-row gap-0">
              <div className="md:w-1/2 p-2">
                <div className="relative rounded-xl overflow-hidden border border-orange-200 dark:border-orange-800/50 shadow-lg h-full">
                  <Suspense fallback={<Loader />}>
                    <LazyVideo videoId={video.url} width="100%" height="450px" />
                  </Suspense>
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="mb-4 text-xl font-bold md:text-3xl text-gray-800 dark:text-gray-100">
                  {video.title}
                </h2>
                {video.description.split("\n").map((line, idx) => (
                  <p key={idx} className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <h1 className="mt-8 mb-8 text-3xl font-bold text-center md:text-5xl md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300">
          Multi-Boot with other OS
        </h1>

        {multiboot.map((video, index) => (
          <div
            key={index}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-200/50 dark:border-orange-800/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mb-8"
          >
            <div className="flex flex-col md:flex-row gap-0">
              <div className="md:w-1/2 p-2">
                <div className="relative rounded-xl overflow-hidden border border-orange-200 dark:border-orange-800/50 shadow-lg h-full">
                  <Suspense fallback={<Loader />}>
                    <LazyVideo videoId={video.url} width="100%" height="450px" />
                  </Suspense>
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="mb-4 text-xl font-bold md:text-3xl text-gray-800 dark:text-gray-100">
                  {video.title}
                </h2>
                {video.description.split("\n").map((line, idx) => (
                  <p key={idx} className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <h1 className="mt-8 mb-8 text-3xl font-bold text-center md:text-5xl md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300">
          Arch Linux Specific Videos
        </h1>

        {archSpecific.map((video, index) => (
          <div
            key={index}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-200/50 dark:border-orange-800/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mb-8"
          >
            <div className="flex flex-col md:flex-row gap-0">
              <div className="md:w-1/2 p-2">
                <div className="relative rounded-xl overflow-hidden border border-orange-200 dark:border-orange-800/50 shadow-lg h-full">
                  <Suspense fallback={<Loader />}>
                    <LazyVideo videoId={video.url} width="100%" height="450px" />
                  </Suspense>
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="mb-4 text-xl font-bold md:text-3xl text-gray-800 dark:text-gray-100">
                  {video.title}
                </h2>
                {video.description.split("\n").map((line, idx) => (
                  <p key={idx} className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        <h1 className="mt-8 mb-8 text-3xl font-bold text-center md:text-5xl md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300">
          Miscellaneous Topics
        </h1>

        {miscellaneous.map((video, index) => (
          <div
            key={index}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-200/50 dark:border-orange-800/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden mb-8"
          >
            <div className="flex flex-col md:flex-row gap-0">
              <div className="md:w-1/2 p-2">
                <div className="relative rounded-xl overflow-hidden border border-orange-200 dark:border-orange-800/50 shadow-lg h-full">
                  <Suspense fallback={<Loader />}>
                    <LazyVideo videoId={video.url} width="100%" height="450px" />
                  </Suspense>
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="mb-4 text-xl font-bold md:text-3xl text-gray-800 dark:text-gray-100">
                  {video.title}
                </h2>
                {video.description.split("\n").map((line, idx) => (
                  <p key={idx} className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Videos from Other Creators Section */}
        <div className="mt-16 mb-8">
          <h1 className="mb-8 text-3xl font-bold text-center md:text-5xl md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300">
            Videos from Other Creators
          </h1>
          <CommunityVideos />
        </div>
      </div>
    </div>
  );
};

// Community Videos Carousel Component
const CommunityVideos = () => {
  const videos = [
    "SN-rvjQxpgs",
    "VEWI5EFbhtc",
    "oPzSUczBT3I",
    "cxj1SPJihpA",
    "zQLknMv4sOs",
    "sBgbEVbAT2g",
    "e0U7VY5CkwQ",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-orange-200/50 dark:border-orange-800/50 shadow-lg overflow-hidden p-4 md:p-8 max-w-5xl mx-auto">
      <div className="relative">
        <div className="relative rounded-xl overflow-hidden border-2 border-orange-200 dark:border-orange-800/50 shadow-lg aspect-video">
          <Suspense fallback={<Loader />}>
            <LazyVideo videoId={videos[currentIndex]} width="100%" height="100%" />
          </Suspense>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={handlePrevious}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-700 border-2 border-orange-200 dark:border-orange-800/50 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-orange-600 dark:text-orange-400"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 dark:bg-orange-400 w-8"
                    : "bg-orange-200 dark:bg-orange-800/50 hover:bg-orange-300 dark:hover:bg-orange-700"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-700 border-2 border-orange-200 dark:border-orange-800/50 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-orange-600 dark:text-orange-400"
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Video Counter */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Video {currentIndex + 1} of {videos.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
