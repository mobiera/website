// Single source of truth for site-wide identity: metadata, JSON-LD, footer,
// contact routing. Facts come from spec/facts.yaml.

export const SITE_URL = process.env.SITE_URL ?? "https://mobiera.io";
export const SITE_NAME = "Mobiera";
export const SITE_TAGLINE = "Operator-grade software. Verifiable trust.";
export const SITE_DESCRIPTION =
  "Mobiera builds and runs the platforms behind SIM toolkit push, messaging and AI agents in 25+ mobile networks. Co-founder of the Verana Foundation and the official certificator for Verana integrators in Latin America.";

export const LEGAL = {
  name: "Mobiera SAS",
  nit: "900662462-4",
  address: "Cra 13A 86A-42, Bogotá D.C., Colombia",
  city: "Bogotá D.C., Colombia",
  founded: 2012,
  privacyEmail: "privacy@mobiera.com",
};

export const LINKS = {
  docs: "https://docs.mobiera.io",
  github: "https://github.com/mobiera",
  linkedin: "https://www.linkedin.com/company/mobiera-sas",
  verana: "https://verana.io",
  veranaIdentity: "https://verana.io/identity",
  veranaDocs: "https://docs.verana.io",
  playground: "https://playground.testnet.verana.network",
  foundation: "https://veranafoundation.org",
  council: "https://veranacouncil.org",
  roadmap: "https://github.com/verana-labs/verana-spec/blob/main/ROADMAP.md",
  hologram: "https://hologram.zone",
  company2060: "https://2060.io",
} as const;

export const NAV = [
  { href: "/telecom", label: "Telecom" },
  { href: "/trust", label: "Trust" },
  { href: "/certification", label: "Certification" },
  { href: "/services", label: "Services" },
  { href: "/company", label: "Company" },
  { href: "/news", label: "News" },
] as const;

export const CONTACT_TOPICS = [
  { value: "aircast", label: "Aircast and STK push" },
  { value: "ai-agents", label: "AI agents" },
  { value: "trust", label: "Trust services" },
  { value: "certification", label: "Certification" },
  { value: "partnership", label: "Partnership" },
  { value: "careers", label: "Careers" },
  { value: "press", label: "Press" },
  { value: "general", label: "General" },
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number]["value"];

export function topicLabel(value: string): string {
  return CONTACT_TOPICS.find((t) => t.value === value)?.label ?? value;
}
