// Facts shared by several pages (spec/facts.yaml). Copy that appears on one
// page only lives in that page. Human-readable labels (numbers, offices,
// timeline, open-source group names, country names) live in
// messages/{en,es}/content.json under the `content` namespace.

/** Country values used by LogoWall; translated via content.countries.<name>. */
export type Country = "Peru" | "Spain" | "Algeria" | "Vietnam" | "Panama" | "Bolivia" | "Tanzania";

export type Logo = { name: string; file: string; country?: Country; width: number; height: number; darkArt?: boolean };

export const OPERATORS: Logo[] = [
  { name: "Claro", file: "claro.svg", country: "Peru", width: 176, height: 102 },
  { name: "Telefónica", file: "telefonica.svg", width: 176, height: 102 },
  { name: "América Móvil", file: "america-movil.png", width: 176, height: 102 },
  { name: "Ooredoo", file: "ooredoo.svg", country: "Algeria", width: 176, height: 102 },
  { name: "Viettel", file: "viettel.svg", country: "Vietnam", width: 176, height: 102 },
  { name: "Digicel", file: "digicel.svg", country: "Panama", width: 176, height: 102 },
  { name: "Bitel", file: "bitel.svg", country: "Peru", width: 176, height: 102 },
  { name: "Viva", file: "viva.svg", country: "Bolivia", width: 176, height: 102 },
  { name: "Halotel", file: "halotel.svg", country: "Tanzania", width: 176, height: 102 },
];

export const PARTNERS: Logo[] = [
  { name: "Verana Foundation", file: "verana-foundation.svg", width: 341, height: 48, darkArt: true },
  { name: "2060", file: "2060.svg", width: 176, height: 102 },
  { name: "Idemia", file: "idemia.svg", width: 176, height: 102 },
  { name: "Bitdefender", file: "bitdefender.svg", width: 176, height: 102 },
  { name: "Amplitudes", file: "amplitudes.svg", width: 176, height: 102 },
];

/** Shape of the arrays in messages/{en,es}/content.json, read with t.raw. */
export type Stat = { value: string; label: string; tone?: "green" | "violet" };
export type Office = { place: string; note?: string };
export type TimelineChapter = { year: string; span: string; title: string; verana: boolean; items: { when: string; text: string }[] };

/** Group names live in content.openSource.<key>; repository names stay here. */
export const OPEN_SOURCE = [
  { key: "sim", repos: ["etsi102221", "etsi102222", "etsi102225", "etsi102226", "gp-mobiera", "common-sim"] },
  { key: "aircast", repos: ["aircast-api", "aircast-api-javax", "aircast-api-jakarta", "aircast-api-stats", "ustk-api"] },
  { key: "platform", repos: ["stats", "stats-api", "service-log", "service-log-api", "mobiera-commons"] },
] as const;

export const TELECOM_STANDARDS = [
  "ETSI TS 102.221", "ETSI TS 102.222", "ETSI TS 102.225", "ETSI TS 102.226",
  "3GPP TS 03.19", "3GPP TS 23.038", "3GPP TS 23.048", "GlobalPlatform", "Java Card", "SMPP", "MM7",
];

export const TRUST_STANDARDS = [
  "W3C Verifiable Credentials", "W3C DIDs", "DIDComm", "OpenID4VC", "SD-JWT VC", "AnonCreds", "ToIP TRQP",
];
