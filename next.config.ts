import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Ignore type errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore linting errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
