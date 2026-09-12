import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost", "terminal.local"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.hku.hk",
        pathname: "/adobe/dynamicmedia/deliver/**",
      },
    ],
  },
};

export default nextConfig;
