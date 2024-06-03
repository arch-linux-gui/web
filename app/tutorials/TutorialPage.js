import React from "react";

const TutorialPage = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-[#161a1e] text-white">
      <h1 className="text-4xl font-bold mb-10 mt-[10rem] text-center">
        Installation Videos
      </h1>

      <div className="flex flex-col md:flex-row items-center w-full mb-12">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            Verify your Arch Linux GUI Download
          </h1>
          <p className="text-lg">
            In this video, we take a look at how to verify that you have
            downloaded exactly what I uploaded using the Secure Hash Algorithm
            (SHA). The Secure Hash Algorithms are a family of cryptographic hash
            functions. A cryptographic hash is like a signature for a data set.
            If you would like to compare two sets of raw data (source of the
            file, text or similar) it is always better to hash it and compare
            SHA256 values. This is why I provide the SHA256 checksums in a file
            named sha256sum.txt. This makes it suitable for checking integrity
            of your download. <br />
            <br />
            In this video, I will show you how to get a SHA256 checksum and
            compare with the strings I have provided, to ensure the legitimacy
            of the download. I will cover how you can do this on Windows and
            Linux. I have explained on Windows 11, however, the steps are
            applicable to Windows 10 and Windows 7. Simillarly, the steps show
            for Linux are done on Arch, but can be done on any Linux
            Distribution. You can find the checksums here as well.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/wtZjRXOny7Q"
            title="Verify Your Arch Linux GUI Downloads with Secure Hash Algorithm"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center w-full">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            ALG Automatic Installation
          </h1>
          <p className="text-lg">
            In this video, we take a look at how to install Arch Linux using a
            GUI installer (Calamares). In this video we install Arch Linux on
            UEFI/GPT setup with automatic partining. ALG developers do not
            encourage automatic partitoning. The primary reason is the creation
            of the boot and home partitions, within the root parition.
            <br />
            <br />
            In this video we use the ALG Minimal ISO. The automatic
            installation, can be performed with the help of all 10 ALG ISOs, for
            both the UEFI/GPT setup, as well as BIOS/MBR setup.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/0gAjgxGGzjw"
            title="Easy Way to install Arch Linux in 2021"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full mb-12">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            ALG Installation on Legacy BIOS using MBR partitioning scheme
          </h1>
          <p className="text-lg">
            In this video, we take a look at how to install Arch Linux, with a
            GUI installer, on a Legacy/MBR setup. In this video, emphasis has
            been given on partitioning, and a whole 10 minute session is
            dedicated to explaining the partitioning.
            <br />
            <br />
            In this video we use the ALG Pure ISO. The manual installation we
            did here, can be performed with the help of all 10 ALG editions, for
            the Legacy/MBR setup.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/smdZdPLHjWc"
            title="Install Arch Linux on Legacy BIOS with MBR"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-10 mt-[5rem] text-center">
        Multi-Boot with other OS
      </h1>

      <div className="flex flex-col md:flex-row items-center w-full mb-12">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            Dual Boot with Windows 10 Legacy/MBR
          </h1>
          <p className="text-lg">
            In this video, we take a look at how to use the ALG ISOs, to dual
            boot Arch Linux with Windows 10 on Legacy BIOS boot mode, using the
            MBR (Master Boot Record) partitioning scheme.
            <br />
            <br />
            In this video, we use the Manjaro KDE edition. The steps to dual
            boot Arch with Windows is same as shown here. I have done this in
            500GB HDD installed on a desktop.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/Ltiup47QIMU"
            title="Dual Boot Windows 10 &amp; Manjaro 20 - Legacy BIOS"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center w-full">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            Dual Boot with Windows 10 UEFI/GPT
          </h1>
          <p className="text-lg">
            In this video, we take a look at how to use the ALG ISOs, to dual
            boot Arch Linux with Windows 10 on UEFI BIOS boot mode, using the
            GPT paritioning scheme.
            <br />
            <br />
            In this video, we use the ALG Flagship Edition (Plasma Themed). The
            steps performed in this video can be done with all 10 ALG editions.
            <br />
            <br />
            This dual-boot have been done on an ASUS laptop, with 256GB NVMe
            SSD. 50 GB space was unallocated for Arch, from the existing 100GB
            of the D: Drive. Swap of 4GB was created to accomodate for the
            lesser physical memory installed on the hardware.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/zGvGkuVEx0M"
            title="Dual Boot Windows 10 &amp; Arch Linux | UEFI/GPT | GUI Method | 2022"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-10 mt-[5rem] text-center">
        Arch Linux Specific Videos
      </h1>

      <div className="flex flex-col md:flex-row items-center w-full mb-12">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            Install Software from AUR (pamac as example)
          </h1>
          <p className="text-lg text-wrap">
            In this video, we take a look at how to install software from the
            Arch User Repository (AUR). The AUR exposes the Arch Linux user to
            the largest software database in the entire Linux community.
            <br />
            <br />
            Software in the AUR is not compiled, most of the time and has to be
            done locally. In this video we discuss two methods:
            <br />
            <br />
            <span className="text-wrap">
              &ensp; 1. Manual Method with makepkg (paru is the example)
              <br />
              &ensp; 2. With help of an AUR helper (that was just installed in
              the step above), and pamac-all is the example.
            </span>
            <br />
            <br />
            Alternate title to this video can also be How to install Pamac. The
            reason pamac is not included in the ALG ISOs is because pamac is
            Manjaro's project. It has nothing to do with Arch directly, apart
            from the fact the many people actually like it.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/BwvQUtv1eM0"
            title="How to Install Software from the Arch User Repository?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center w-full">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            Install Google Chrome On Arch Linux
          </h1>
          <p className="text-lg">
            This video is simillar to the above video. We take a look at how to
            install Google's Chrome Browser from AUR.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/f2lY3k5o84w"
            title="Install Google Chrome in Arch Linux or Manjaro 20 via AUR"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full mb-12">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            Install Zoom On Arch Linux
          </h1>
          <p className="text-lg text-wrap">
            This video is simillar to the above two videos. We take a look at
            how to install Zoom video conferencing tool. We see two methods, one
            from official ZOOM download center and second from the AUR.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/hR97lCdizmk"
            title="Install Zoom in Arch Linux or Manjaro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-10 mt-[5rem] text-center">
        Miscallaneous Topics
      </h1>

      <div className="flex flex-col md:flex-row items-center w-full mb-12">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            Make Bootable USB in Windows (7, 8, 10, 11)
          </h1>
          <p className="text-lg text-wrap">
            In this video, we take a look at how to make a bootable USB of a
            Linux distribution, on Windows. In this video, as an example, I will
            make the Arch Linux GUI Gnome Edition.
            <br />
            <br />I am doing this on Windows 11, however, the steps can be
            performed on Windows 7, 8 or 10.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/7ND2fiaFfic"
            title="How to Make bootable Linux USB in Windows 11 | Rufus | Legacy/UEFI"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center w-full">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            Make Bootable USB with dd on any Linux Distro
          </h1>
          <p className="text-lg">
            In this video, we take a look at how to make a bootable USB of a
            Linux distribution, on another Linux distribution. In this video, as
            an example, I will make the Manjaro bootable USB on Ubuntu.
            <br />
            <br />
            The method show here can be used to make Arch Linux GUI's bootable
            USB from any Linux distribution.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/KQGedNCA1E4"
            title="Make Bootable Linux USB in any Linux Distro | dd command"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full mb-12">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            Install and Setup VirtualBox in Arch Linux
          </h1>
          <p className="text-lg text-wrap">
            In this video, we take a look at how to install and setup VirtualBox
            in Arch Linux.
            <br />
            <br />
            Although I have done this on Vanilla Arch Linux with the stock
            kernel, you can do this on all Arch based distributions, with
            different kernels. For the stock kernel, you must select the
            <span className="text-pink-400">
              &nbsp;virtualbox-host-modules-arch
            </span>{" "}
            and if you are using the
            <br />
            <br />
            &emsp;∘ LTS Kernel
            <br />
            &emsp;∘ Zen Kernel
            <br />
            &emsp;∘ Hardened Kernel
            <br />
            &emsp;∘ any other unofficiall kernel
            <br />
            <br />
            then you should install the{" "}
            <span className="text-pink-400">virtualbox-host-dkms</span>.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/m6ZeH1L2734"
            title="How to USE VirtualBox to try Linux | Beginners Guide"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center w-full">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            How to use VirtualBox to try Arch Linux GUI or any Linux
          </h1>
          <p className="text-lg">
            In this video, we take a look at how to use VirtualBox.
            <br />
            <br />I will show you how to setup a template which you can use to
            try out all Arch Linux, and all other Arch Linux based Distributions
            like Manjaro, ArcoLinux, etc.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/RJs70jQi7Wk"
            title="How to Install &amp; Setup VirtualBox in Arch Linux"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center w-full mb-12">
        <div className="md:w-1/2 p-4">
          <h1 className="text-4xl font-semibold mb-4">
            Fixing broken bootloader
          </h1>
          <p className="text-lg text-wrap">
            In this video, we take a look at how to use the ALG ISOs, to fix
            broken GRUB bootloader. This method works if you have partitioned,
            according to the recommended way of partitioning. Please have a look
            of the installation section.
            <br />
            <br />
            In this video, we are using the ALG Pure ISO. ALG developers
            recommend you to use the ALG ISO you used to install Arch Linux.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <iframe
            className="w-full md:w-[800px] h-[225px] md:h-[450px] m-1"
            src="https://www.youtube.com/embed/XsE34MdHTqI"
            title="Fix GRUB Rescue Error in Arch Linux"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;
