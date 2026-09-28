import { cache } from "react";

// The site is served under two domains by two companies of the group. The
// domain decides which legal entity a visitor deals with: its name, its
// registration, its address, its data-protection law. Everything else on the
// site is shared. Facts: spec/facts.yaml (entities).
export const SITES = ["com", "io"] as const;
export type Site = (typeof SITES)[number];

/** Used when the host is unknown (local development, health checks). */
export const DEFAULT_SITE: Site = process.env.DEFAULT_SITE === "com" ? "com" : "io";

/** Response header naming the site the proxy chose, for checks with curl. */
export const SITE_HEADER = "x-mobiera-site";

type Localized = { en: string; es: string };

type EntityDef = {
  domain: string;
  name: string;
  /** How the group's origin is named in history copy. */
  historyName: string;
  registration: Localized;
  address: Localized;
  city: Localized;
  postal: { streetAddress: string; addressLocality: string; addressCountry: string };
  dataLaw: Localized;
  rightsDays: string;
  /** Notes under two of the office cards on the company page; "" hides one. */
  noteBogota: Localized;
  notePanama: Localized;
};

const ENTITIES: Record<Site, EntityDef> = {
  com: {
    domain: "mobiera.com",
    name: "Mobiera SAS",
    historyName: "Mobiera SAS",
    registration: { en: "NIT 900662462-4", es: "NIT 900662462-4" },
    address: { en: "Cra 13A 86A-42, Bogotá D.C., Colombia", es: "Cra 13A 86A-42, Bogotá D.C., Colombia" },
    city: { en: "Bogotá D.C., Colombia", es: "Bogotá D.C., Colombia" },
    postal: { streetAddress: "Cra 13A 86A-42", addressLocality: "Bogotá D.C.", addressCountry: "CO" },
    dataLaw: { en: "Colombian Law 1581 of 2012", es: "la Ley 1581 de 2012 de Colombia" },
    rightsDays: "15",
    noteBogota: { en: "headquarters and registered address, Cra 13A 86A-42, Bogotá D.C.", es: "sede y domicilio registrado, Cra 13A 86A-42, Bogotá D.C." },
    notePanama: { en: "", es: "" },
  },
  io: {
    domain: "mobiera.io",
    name: "Mobiera Norte SA",
    historyName: "Mobiera",
    registration: { en: "Mercantile Registry of Panama, folio no. 812363", es: "Registro Mercantil, folio número 812363" },
    address: {
      en: "World Trade Center 200-B, Suite 214, Calle 53 Este, Marbella, Panama City, Panama",
      es: "World Trade Center 200-B, Suite 214, Calle 53 Este, Marbella, Ciudad de Panamá, Panamá",
    },
    city: { en: "Panama City, Panama", es: "Ciudad de Panamá, Panamá" },
    postal: { streetAddress: "World Trade Center 200-B, Suite 214, Calle 53 Este, Marbella", addressLocality: "Panamá", addressCountry: "PA" },
    dataLaw: { en: "Panamanian Law 81 of 2019", es: "la Ley 81 de 2019 de Panamá" },
    rightsDays: "10",
    noteBogota: { en: "", es: "" },
    notePanama: {
      en: "registered address of Mobiera Norte SA, World Trade Center 200-B, Suite 214, Calle 53 Este, Marbella",
      es: "domicilio registrado de Mobiera Norte SA, World Trade Center 200-B, Suite 214, Calle 53 Este, Marbella",
    },
  },
};

/** Shared by both entities. */
export const FOUNDED = 2012;
export const PRIVACY_EMAIL = "privacy@mobiera.com";

export type Entity = {
  site: Site;
  domain: string;
  url: string;
  name: string;
  historyName: string;
  registration: string;
  address: string;
  city: string;
  postal: EntityDef["postal"];
  dataLaw: string;
  rightsDays: string;
  noteBogota: string;
  notePanama: string;
};

export function isSite(v: unknown): v is Site {
  return typeof v === "string" && (SITES as readonly string[]).includes(v);
}

export function entityFor(site: Site, locale: string): Entity {
  const e = ENTITIES[site];
  const l = locale === "es" ? "es" : "en";
  return {
    site,
    domain: e.domain,
    url: `https://${e.domain}`,
    name: e.name,
    historyName: e.historyName,
    registration: e.registration[l],
    address: e.address[l],
    city: e.city[l],
    postal: e.postal,
    dataLaw: e.dataLaw[l],
    rightsDays: e.rightsDays,
    noteBogota: e.noteBogota[l],
    notePanama: e.notePanama[l],
  };
}

/**
 * The site a request is for. mobiera.com reaches the app through a reverse
 * proxy that connects to mobiera.io, and the ingress may overwrite
 * X-Forwarded-Host with its own name, so any header naming mobiera.com wins
 * over one naming mobiera.io. An explicit x-mobiera-site header set by that
 * proxy wins over everything.
 */
export function siteFromHeaders(headers: { get(name: string): string | null }): Site {
  const explicit = (headers.get(SITE_HEADER) ?? "").trim().toLowerCase();
  if (isSite(explicit)) return explicit;
  const hosts = ["x-forwarded-host", "x-original-host", "x-forwarded-server", "host"]
    .flatMap((name) => (headers.get(name) ?? "").split(","))
    .map((raw) => raw.trim().toLowerCase().replace(/:\d+$/, ""));
  const names = (domain: string) => hosts.some((host) => host === domain || host.endsWith(`.${domain}`));
  if (names("mobiera.com")) return "com";
  if (names("mobiera.io")) return "io";
  return DEFAULT_SITE;
}

// Per-request store, the same pattern next-intl uses for the locale: pages
// and layouts register the site from their route params (pageLocale in
// seo.ts does it), server components and the message loader read it.
const store = cache(() => ({ site: undefined as Site | undefined }));

export function setRequestSite(site: Site): void {
  store().site = site;
}

export function getRequestSite(): Site {
  return store().site ?? DEFAULT_SITE;
}

/** The legal entity of the current request, in `locale`. Server only. */
export function getEntity(locale: string): Entity {
  return entityFor(getRequestSite(), locale);
}

/** Values behind the [[token]] placeholders of the message files. */
export function entityTokens(e: Entity): Record<string, string> {
  return {
    legalName: e.name,
    legalRegistration: e.registration,
    legalAddress: e.address,
    legalCity: e.city,
    siteDomain: e.domain,
    historyName: e.historyName,
    dataLaw: e.dataLaw,
    rightsDays: e.rightsDays,
    noteBogota: e.noteBogota,
    notePanama: e.notePanama,
  };
}

/** Deep copy of `messages` with every [[token]] replaced. Unknown tokens stay. */
export function applyTokens<T>(messages: T, tokens: Record<string, string>): T {
  const walk = (v: unknown): unknown => {
    if (typeof v === "string") return v.includes("[[") ? v.replace(/\[\[(\w+)\]\]/g, (m, k: string) => (k in tokens ? tokens[k] : m)) : v;
    if (Array.isArray(v)) return v.map(walk);
    if (typeof v === "object" && v !== null) return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, walk(x)]));
    return v;
  };
  return walk(messages) as T;
}
