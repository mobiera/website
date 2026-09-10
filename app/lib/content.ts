// Facts shared by several pages (spec/facts.yaml). Copy that appears on one
// page only lives in that page.

export const NUMBERS = [
  { value: "Founding", label: "member, Verana Foundation", tone: "violet" as const },
  { value: "Official", label: "certificator, Verana integrators, Latin America", tone: "violet" as const },
  { value: "25+", label: "mobile operators run our platforms" },
  { value: "800M", label: "subscribers reachable through messaging services powered by Mobiera" },
  { value: "~60M", label: "subscribers reached per day", tone: "green" as const },
  { value: "2012", label: "founded in Bogotá; every continent served since" },
];

export type Logo = { name: string; file: string; country?: string; width: number; height: number; darkArt?: boolean };

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

export const OFFICES = [
  { place: "Bogotá, Colombia", note: "headquarters and registered address, Cra 13A 86A-42, Bogotá D.C." },
  { place: "Peru" },
  { place: "Bolivia" },
  { place: "Panama" },
  { place: "Spain" },
  { place: "Algeria" },
];

export const TIMELINE = [
  { when: "2012", text: "Mobiera SAS incorporated in Bogotá, Colombia." },
  { when: "2013", text: "Operations start in Mexico." },
  { when: "2014", text: "Operations start in Peru." },
  { when: "2015", text: "Operations start in the United States and Bolivia." },
  { when: "2016", text: "Innovation and IT outsourcing business units launched." },
  { when: "2017", text: "Colciencias tax credit for billing platforms and big data solutions for developing markets." },
  { when: "2018", text: "Commercial operations start in Europe, from Spain, and in Asia Pacific, from Hanoi." },
  { when: "2019", text: "IT outsourcing scales up around digital transformation and DevOps." },
  { when: "2020", text: "Africa and GCC expansion begins." },
  { when: "2021", text: "First biometric KYC solutions delivered." },
  { when: "2022", text: "Verifiable credentials offered as a service for the first time." },
  { when: "2023", text: "Rebranding; strategic partnerships expanded." },
  { when: "January 2025", text: "AI One launched." },
  { when: "June 2025", text: "Verana Foundation co-founded with 2060 OÜ and Orchestrating Identity." },
  { when: "January 2026", text: "Aircast documentation portal launched at docs.mobiera.io." },
  { when: "April 2026", text: "Designated by the Verana Foundation as official certificator for Verana integrators in Latin America, valid until May 2029." },
  { when: "2026", text: "Candidacy filed for a Founding Council seat." },
];

export const OPEN_SOURCE = [
  { group: "SIM and OTA standards", repos: ["etsi102221", "etsi102222", "etsi102225", "etsi102226", "gp-mobiera", "common-sim"] },
  { group: "Aircast integration", repos: ["aircast-api", "aircast-api-javax", "aircast-api-jakarta", "aircast-api-stats", "ustk-api"] },
  { group: "Platform utilities", repos: ["stats", "stats-api", "service-log", "service-log-api", "mobiera-commons"] },
];

export const TELECOM_STANDARDS = [
  "ETSI TS 102.221", "ETSI TS 102.222", "ETSI TS 102.225", "ETSI TS 102.226",
  "3GPP TS 03.19", "3GPP TS 23.038", "3GPP TS 23.048", "GlobalPlatform", "Java Card", "SMPP", "MM7",
];

export const TRUST_STANDARDS = [
  "W3C Verifiable Credentials", "W3C DIDs", "DIDComm", "OpenID4VC", "SD-JWT VC", "AnonCreds", "ToIP TRQP",
];
