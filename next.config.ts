import type { NextConfig } from "next";
import { REDIRECTS } from "./app/lib/redirects";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,

  // Old Hugo URLs (spec/redirects.txt). The 410s live in proxy.ts.
  async redirects() {
    return REDIRECTS;
  },

  // Next serves public/ with max-age=0 by default, forcing a revalidation on
  // every navigation. Logos and legacy images change only across releases.
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
      {
        // /images/* keeps the paths of the old site: the mark-only logos and
        // the hosted t0k3nr images are linked from outside mobiera.com.
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" }],
      },
    ];
  },
};

export default nextConfig;
