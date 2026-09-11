import type { MetadataRoute } from "next";
import { getAllNews } from "./lib/news";
import { SITE_URL } from "./lib/site";
import { localizedPath } from "./lib/seo";
import { HREFLANG, routing } from "@/i18n/routing";

const ROUTES = [
  "/", "/telecom", "/telecom/aircast", "/telecom/ai-agents", "/trust", "/trust/services", "/trust/verana",
  "/certification", "/company", "/company/careers", "/news", "/contact", "/privacy", "/cookies",
];

function entry(path: string, rest: Partial<MetadataRoute.Sitemap[number]>): MetadataRoute.Sitemap {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[HREFLANG[l]] = `${SITE_URL}${localizedPath(l, path)}`;
  return routing.locales.map((l) => ({ url: `${SITE_URL}${localizedPath(l, path)}`, alternates: { languages }, ...rest }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ROUTES.flatMap((p) => entry(p, { changeFrequency: "monthly", priority: p === "/" ? 1 : 0.7 }));
  const news = getAllNews().flatMap((n) => entry(`/news/${n.slug}`, { lastModified: new Date(n.date), changeFrequency: "yearly", priority: 0.5 }));
  return [...pages, ...news];
}
