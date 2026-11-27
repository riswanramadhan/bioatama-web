import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache hasil optimasi 31 hari (sebelumnya 1 hari) supaya gambar yang sama
    // tidak ditransformasi ulang dan menghabiskan kuota Vercel Image Optimization.
    minimumCacheTTL: 2678400,
    // Hemat kuota Vercel Image Optimization: 7 ukuran saja di srcset
    // (default 16 ukuran per gambar). Semuanya subset dari ukuran default,
    // jadi cache yang sudah ada tetap terpakai.
    deviceSizes: [640, 828, 1200, 1920],
    imageSizes: [128, 256, 384],
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
