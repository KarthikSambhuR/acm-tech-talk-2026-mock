import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Static HTML export — no server needed
  images: {
    unoptimized: true,     // Required for static export (no Image Optimization API)
    formats: ["image/webp", "image/avif"],
  },
  trailingSlash: true,     // Generates /about/index.html style paths
};

export default nextConfig;
