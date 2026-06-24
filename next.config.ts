import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "bioatama.vercel.app",
          },
        ],
        destination: "https://bioatama.dekatlokal.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
