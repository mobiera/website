import { defineRouting } from "next-intl/routing";

// English at the bare paths (unchanged URLs), Latin American Spanish under /es.
export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];

/** BCP 47 tag for <html lang>; the Spanish is Latin American. */
export const HTML_LANG: Record<Locale, string> = { en: "en", es: "es-419" };

/** hreflang keys used in alternates and the sitemap. */
export const HREFLANG: Record<Locale, string> = { en: "en", es: "es-419" };

/** Open Graph locale codes. */
export const OG_LOCALE: Record<Locale, string> = { en: "en_US", es: "es_LA" };
