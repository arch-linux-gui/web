import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default withMDX(nextConfig);
