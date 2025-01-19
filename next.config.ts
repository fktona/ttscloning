import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // This wildcard allows images from any hostname
      },
      {
        protocol: "http",
        hostname: "**", // Optional: Add this if you want to support HTTP as well
      },
    ],
  },
};

export default nextConfig;
