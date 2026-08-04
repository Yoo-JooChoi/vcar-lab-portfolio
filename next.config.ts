import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  typescript: {
    // The unused Cloudflare D1 helper is built by Vinext, not this static export.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
