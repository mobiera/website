// Single source of truth for site-wide identity: metadata, JSON-LD, footer,
// contact routing. Facts come from spec/facts.yaml.

export const SITE_URL = process.env.SITE_URL ?? "https://mobiera.io";
export const SITE_NAME = "Mobiera";
export const SITE_TAGLINE = "Trust networks and Verifiable Credentials, built on Verana.";
export const SITE_DESCRIPTION =
  "Mobiera co-founded the Verana Foundation, designs and runs trust ecosystems on Verana, and certifies the integrators who build on it in Latin America. The same team has run software inside 25+ mobile networks since 2012.";

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
  playgroundVerandia: "https://playground.testnet.verana.network/usecases/verandia",
  playgroundCexa: "https://playground.testnet.verana.network/usecases/cexa",
  playgroundVesta: "https://playground.testnet.verana.network/usecases/vesta",
  foundation: "https://veranafoundation.org",
  council: "https://veranacouncil.org",
  roadmap: "https://github.com/verana-labs/verana-spec/blob/main/ROADMAP.md",
  hologram: "https://hologram.zone",
  company2060: "https://2060.io",
} as const;

export const NAV = [
  { href: "/trust", label: "Verifiable Credentials" },
  { href: "/certification", label: "Certification" },
  { href: "/telecom", label: "Telecom" },
  { href: "/company", label: "Company" },
  { href: "/news", label: "News" },
] as const;

export const CONTACT_TOPICS = [
  { value: "trust", label: "Trust services" },
  { value: "certification", label: "Certification" },
  { value: "aircast", label: "Aircast and STK push" },
  { value: "ai-agents", label: "AI agents" },
  { value: "partnership", label: "Partnership" },
  { value: "careers", label: "Careers" },
  { value: "press", label: "Press" },
  { value: "general", label: "General" },
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number]["value"];

export function topicLabel(value: string): string {
  return CONTACT_TOPICS.find((t) => t.value === value)?.label ?? value;
}
