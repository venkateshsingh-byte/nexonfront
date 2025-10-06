import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export", // for static export
  basePath: '/nexontest',
  assetPrefix: '/nexontest',
  trailingSlash: true,  
  images: { 
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
