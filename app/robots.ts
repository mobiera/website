import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { entityFor, siteFromHeaders } from "./lib/entity";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const { url } = entityFor(siteFromHeaders(await headers()), "en");
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${url}/sitemap.xml`,
  };
}
