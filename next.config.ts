import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
