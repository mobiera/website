import { describe, expect, it } from "vitest";
import { applyTokens, entityFor, entityTokens, siteFromHeaders } from "./entity";

const h = (o: Record<string, string>) => ({ get: (n: string) => o[n] ?? null });

describe("site detection", () => {
  it("reads the host", () => {
    expect(siteFromHeaders(h({ host: "mobiera.com" }))).toBe("com");
    expect(siteFromHeaders(h({ host: "www.mobiera.com:443" }))).toBe("com");
    expect(siteFromHeaders(h({ host: "mobiera.io" }))).toBe("io");
  });
  it("sees mobiera.com behind the reverse proxy", () => {
    expect(siteFromHeaders(h({ host: "mobiera.io", "x-forwarded-host": "www.mobiera.com" }))).toBe("com");
    // The ingress rewrote X-Forwarded-Host; the proxy still names itself.
    expect(siteFromHeaders(h({ host: "mobiera.io", "x-forwarded-host": "mobiera.io", "x-forwarded-server": "mobiera.com" }))).toBe("com");
    expect(siteFromHeaders(h({ host: "10.0.0.1", "x-forwarded-server": "www.mobiera.com" }))).toBe("com");
  });
  it("obeys the explicit header", () => {
    expect(siteFromHeaders(h({ host: "mobiera.io", "x-mobiera-site": "com" }))).toBe("com");
  });
  it("does not match lookalike domains", () => {
    expect(siteFromHeaders(h({ host: "notmobiera.com" }))).toBe("io");
  });
});

describe("entity tokens", () => {
  it("replaces tokens in nested messages and leaves ICU arguments alone", () => {
    const out = applyTokens({ a: "I consent to [[legalName]] storing {count} items", b: [{ c: "[[legalCity]]" }], d: "[[unknown]]" }, entityTokens(entityFor("io", "es")));
    expect(out.a).toBe("I consent to Mobiera Norte SA storing {count} items");
    expect(out.b[0].c).toBe("Ciudad de Panamá, Panamá");
    expect(out.d).toBe("[[unknown]]");
  });
  it("keeps the Colombian company on mobiera.com", () => {
    const e = entityFor("com", "en");
    expect(e.name).toBe("Mobiera SAS");
    expect(e.registration).toBe("NIT 900662462-4");
    expect(e.url).toBe("https://mobiera.com");
  });
});
