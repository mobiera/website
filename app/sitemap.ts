import type { MetadataRoute } from "next";
import { getAllNews } from "./lib/news";
import { SITE_URL } from "./lib/site";

const ROUTES = [
  "/", "/telecom", "/telecom/aircast", "/telecom/ai-agents", "/trust", "/trust/services", "/trust/verana",
  "/certification", "/services", "/company", "/company/careers", "/news", "/contact", "/privacy", "/cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ROUTES.map((p) => ({ url: `${SITE_URL}${p}`, changeFrequency: "monthly" as const, priority: p === "/" ? 1 : 0.7 }));
  const news = getAllNews().map((n) => ({ url: `${SITE_URL}/news/${n.slug}`, lastModified: new Date(n.date), changeFrequency: "yearly" as const, priority: 0.5 }));
  return [...pages, ...news];
}
