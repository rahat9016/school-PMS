import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  // distDir: 'out', // optional
  images: {
    unoptimized: true, // disables Next.js image optimization
  },
};

export default nextConfig;
