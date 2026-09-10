/**
 * Certified integrators directory, generated from the Verana Trust Graph.
 *
 * A company holds its "Verana Certified Integrator" credential in its business
 * wallet and publishes it as a Linked Verifiable Presentation; the Trust Graph
 * indexes it as a Vtc tied to the credential schema. We ask the graph's
 * faceted search (verana-spec v4, verana-graph, `POST /v4/graph/search`) for
 * every DID on the `Did` surface presenting a credential of that schema. The
 * graph never returns expired credentials, so validity is enforced upstream.
 *
 * Dormant until both TRUST_GRAPH_URL and CERTIFIED_INTEGRATOR_SCHEMA_ID are
 * set; the field mapping below follows the spec's dotted facet names and is
 * aligned with the graph's published response schema when it ships.
 */

export type CertifiedIntegrator = {
  did: string;
  name: string;
  country?: string;
  website?: string;
  verifyUrl: string;
};

const GRAPH_URL = process.env.TRUST_GRAPH_URL ?? "";
const SCHEMA_ID = process.env.CERTIFIED_INTEGRATOR_SCHEMA_ID ?? "";
const VERIFY_URL_TEMPLATE = process.env.VERIFY_URL_TEMPLATE ?? "https://verana.io/identity?did={did}";

type Hit = Record<string, unknown>;

function str(v: unknown): string | undefined {
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}

function pick(hit: Hit, ...keys: string[]): string | undefined {
  for (const key of keys) {
    const direct = str(hit[key]);
    if (direct) return direct;
    // dotted facet name, e.g. "OrganizationCredential.name" nested as an object
    const [head, ...rest] = key.split(".");
    let cur: unknown = hit[head];
    for (const k of rest) cur = cur && typeof cur === "object" ? (cur as Hit)[k] : undefined;
    const nested = str(cur);
    if (nested) return nested;
  }
  return undefined;
}

export function verifyUrl(did: string): string {
  return VERIFY_URL_TEMPLATE.replace("{did}", encodeURIComponent(did));
}

/** Maps one search hit to a directory entry, or null when it has no DID or name. */
export function mapHit(hit: Hit): CertifiedIntegrator | null {
  const did = pick(hit, "did", "id", "Did.did");
  const name = pick(hit, "OrganizationCredential.name", "organizationCredential.name", "name");
  if (!did || !name) return null;
  const country = pick(hit, "OrganizationCredential.countryCode", "organizationCredential.countryCode", "countryCode");
  const website = pick(hit, "website", "OrganizationCredential.website");
  return { did, name, country, website, verifyUrl: verifyUrl(did) };
}

export function isDirectoryConfigured(): boolean {
  return Boolean(GRAPH_URL && SCHEMA_ID);
}

export async function getCertifiedIntegrators(): Promise<CertifiedIntegrator[]> {
  if (!isDirectoryConfigured()) return [];
  try {
    const res = await fetch(`${GRAPH_URL.replace(/\/$/, "")}/v4/graph/search`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ surface: "Did", filters: { "Vtc.credentialSchemaId": Number(SCHEMA_ID) }, limit: 100 }),
      next: { revalidate: 3600 },
    });
    if (!res.ok) {
      console.warn(`[trust-graph] search returned ${res.status}`);
      return [];
    }
    const data = (await res.json()) as { hits?: Hit[] };
    const hits = Array.isArray(data.hits) ? data.hits : [];
    const entries = hits.map(mapHit).filter((e): e is CertifiedIntegrator => e !== null);
    const seen = new Set<string>();
    return entries
      .filter((e) => (seen.has(e.did) ? false : (seen.add(e.did), true)))
      .sort((a, b) => a.name.localeCompare(b.name));
  } catch (err) {
    console.warn("[trust-graph] search failed", err);
    return [];
  }
}
