import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { isSite, setRequestSite } from "@/app/lib/entity";
import { HREFLANG, routing, type Locale } from "@/i18n/routing";

/** Path of `path` in `locale`, honoring the as-needed prefix. */
export function localizedPath(locale: Locale, path: string): string {
  if (locale === routing.defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/** Canonical plus hreflang alternates for one page, for generateMetadata. */
export function alternates(locale: Locale, path: string, extra: NonNullable<Metadata["alternates"]> = {}): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[HREFLANG[l]] = localizedPath(l, path);
  languages["x-default"] = localizedPath(routing.defaultLocale, path);
  return { canonical: localizedPath(locale, path), languages, ...extra };
}

/** Route params of every page under app/[site]/[locale]. */
export type PageParams = { site: string; locale: string };

/**
 * Resolves the locale param and registers the site of the request (the legal
 * entity behind the domain, see entity.ts), 404 for anything unknown. Every
 * page, layout and generateMetadata calls this first.
 */
export async function pageLocale(params: Promise<PageParams>): Promise<Locale> {
  const { site, locale } = await params;
  if (!isSite(site) || !hasLocale(routing.locales, locale)) notFound();
  setRequestSite(site);
  return locale;
}
