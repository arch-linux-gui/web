"use client";

import { Calendar, Download, Package, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

interface Release {
  version: string;
  date: string;
  codename?: string;
  type: "major" | "minor" | "patch";
  isLatest?: boolean;
  highlights: string[];
  changes: {
    added?: string[];
    updated?: string[];
    fixed?: string[];
    removed?: string[];
  };
  downloads: {
    kde?: string;
    gnome?: string;
    xfce?: string;
  };
}

const releases: Release[] = [
  {
    version: "2025.10",
    date: "October 2025",
    type: "major",
    isLatest: true,
    highlights: [
      "Updated to latest kernel and software packages",
      "Improved hardware compatibility",
      "Enhanced user interface refinements",
      "Performance optimizations across all editions",
    ],
    changes: {
      added: [
        "New welcome screen with improved onboarding",
        "Additional system utilities and tools",
        "Enhanced driver support for modern hardware",
      ],
      updated: [
        "KDE Plasma to latest version",
        "GNOME to latest version",
        "XFCE to latest stable release",
        "All core system packages updated",
      ],
      fixed: [
        "Boot issues on certain hardware configurations",
        "Display scaling on HiDPI monitors",
        "Audio configuration improvements",
      ],
    },
    downloads: {
      kde: "https://sourceforge.net/projects/arch-linux-gui/files/alg-plasma-2025.10-x86_64.iso/download",
      gnome: "https://sourceforge.net/projects/arch-linux-gui/files/alg-gnome-2025.10-x86_64.iso/download",
      xfce: "https://sourceforge.net/projects/arch-linux-gui/files/alg-xfce-2025.10-x86_64.iso/download",
    },
  },
  {
    version: "2022.07",
    date: "July 2022",
    type: "major",
    highlights: [
      "Complete rebuild with modern architecture",
      "Introduction of themed editions",
      "Calamares installer improvements",
      "Better Arch User Repository (AUR) integration",
    ],
    changes: {
      added: [
        "Themed variants for KDE, GNOME, and XFCE",
        "Improved package management tools",
        "Enhanced system configuration utilities",
      ],
      updated: [
        "Base system updated to latest Arch packages",
        "Desktop environments updated to stable releases",
        "Installer framework improvements",
      ],
      fixed: [
        "Installation issues on UEFI systems",
        "Network configuration bugs",
        "Partition management improvements",
      ],
    },
    downloads: {
      kde: "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-plasma-themed-2022.07-x86_64.iso/download",
      gnome: "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-gnome-themed-2022.07-x86_64.iso/download",
      xfce: "https://sourceforge.net/projects/arch-linux-gui/files/archlinux-gui-xfce-themed-2022.07-x86_64.iso/download",
    },
  },
];

export default function ReleasePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 dark:from-[#0b0b10] dark:to-[#09090B] px-4 sm:px-12 md:px-20 py-12 lg:px-28">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 mt-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-700 dark:from-orange-400 dark:to-orange-300">
            Release History
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Track the evolution of Arka Linux GUI with detailed release notes, changelogs, and download links for all versions.
          </p>
        </div>

        {/* Quick Download Section for Latest Release */}
        <div className="mb-12 p-6 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700 rounded-2xl shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-white" />
            <h2 className="text-2xl font-bold text-white">Current Release</h2>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-white">
              <div className="text-3xl font-bold mb-2">Version {releases[0].version}</div>
              <div className="flex items-center gap-2 text-orange-100">
                <Calendar className="w-4 h-4" />
                <span>{releases[0].date}</span>
              </div>
            </div>
            <Link
              href="/downloads"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 rounded-full font-semibold text-lg shadow-lg hover:bg-orange-50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              Download Now
            </Link>
          </div>
        </div>

        {/* Release Timeline */}
        <div className="space-y-8">
          {releases.map((release, index) => (
            <div
              key={release.version}
              className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border-2 border-orange-200 dark:border-orange-800/50 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Latest Badge */}
              {release.isLatest && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-orange-500 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Latest
                  </div>
                </div>
              )}

              <div className="p-6 md:p-8">
                {/* Release Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                        Version {release.version}
                        {release.codename && (
                          <span className="text-xl text-orange-600 dark:text-orange-400 ml-3">
                            "{release.codename}"
                          </span>
                        )}
                      </h3>
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{release.date}</span>
                        <span className="ml-2 px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full capitalize">
                          {release.type} Release
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    Highlights
                  </h4>
                  <ul className="space-y-2">
                    {release.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detailed Changes */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {release.changes.added && release.changes.added.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-green-700 dark:text-green-400 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4" />
                        Added
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {release.changes.added.map((item, idx) => (
                          <li key={idx} className="pl-4 border-l-2 border-green-200 dark:border-green-800">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {release.changes.updated && release.changes.updated.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-blue-700 dark:text-blue-400 mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4" />
                        Updated
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {release.changes.updated.map((item, idx) => (
                          <li key={idx} className="pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {release.changes.fixed && release.changes.fixed.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-orange-700 dark:text-orange-400 mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Fixed
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {release.changes.fixed.map((item, idx) => (
                          <li key={idx} className="pl-4 border-l-2 border-orange-200 dark:border-orange-800">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {release.changes.removed && release.changes.removed.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-red-700 dark:text-red-400 mb-2 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4" />
                        Removed
                      </h5>
                      <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {release.changes.removed.map((item, idx) => (
                          <li key={idx} className="pl-4 border-l-2 border-red-200 dark:border-red-800">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Download Links */}
                {release.downloads && (
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-3 flex items-center gap-2">
                      <Download className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                      Download Options
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {release.downloads.kde && (
                        <a
                          href={release.downloads.kde}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors font-medium"
                        >
                          KDE Plasma
                        </a>
                      )}
                      {release.downloads.gnome && (
                        <a
                          href={release.downloads.gnome}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors font-medium"
                        >
                          GNOME
                        </a>
                      )}
                      {release.downloads.xfce && (
                        <a
                          href={release.downloads.xfce}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-lg hover:bg-orange-200 dark:hover:bg-orange-900/50 transition-colors font-medium"
                        >
                          XFCE
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="mb-2">
            For checksums and verification details, visit our{" "}
            <Link href="/downloads" className="text-orange-600 dark:text-orange-400 hover:underline font-semibold">
              downloads page
            </Link>
            .
          </p>
          <p className="text-sm">
            Stay updated with the latest releases by joining our community or following our social channels.
          </p>
        </div>
      </div>
    </div>
  );
}
