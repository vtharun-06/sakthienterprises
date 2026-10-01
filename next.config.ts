import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/products", destination: "/scaffolding-on-rent-in-chennai", permanent: true },
      { source: "/products/:slug", destination: "/scaffolding-on-rent-in-chennai", permanent: true },
    ];
  },
};

export default nextConfig;
