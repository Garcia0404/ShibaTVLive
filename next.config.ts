import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimizaciones de imagen
  images: {
    formats: ["image/avif", "image/webp"]
  },

  // Headers para caché
  async headers() {
    return [
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          }
        ],
      },
    ];
  },
};

export default nextConfig;
