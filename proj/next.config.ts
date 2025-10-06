import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 🔴 Disable server-based image optimization
  },
};

export default nextConfig;
