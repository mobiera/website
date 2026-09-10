import { describe, expect, it } from "vitest";
import { mapHit, verifyUrl } from "./trust-graph";

describe("trust graph directory mapping", () => {
  it("maps a hit with dotted facet names", () => {
    const e = mapHit({ did: "did:webvh:abc:org.example", "OrganizationCredential.name": "Acme SAS", "OrganizationCredential.countryCode": "CO" });
    expect(e).toEqual({ did: "did:webvh:abc:org.example", name: "Acme SAS", country: "CO", website: undefined, verifyUrl: verifyUrl("did:webvh:abc:org.example") });
  });

  it("maps a hit with nested objects", () => {
    const e = mapHit({ id: "did:web:acme.example", OrganizationCredential: { name: "Acme", countryCode: "PE" } });
    expect(e?.name).toBe("Acme");
    expect(e?.country).toBe("PE");
  });

  it("drops hits without a DID or a name", () => {
    expect(mapHit({ name: "No DID" })).toBeNull();
    expect(mapHit({ did: "did:web:x" })).toBeNull();
  });
});
