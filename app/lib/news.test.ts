import { describe, expect, it } from "vitest";
import { parseFrontMatter, slugFromFilename } from "./news";

describe("news front matter", () => {
  it("parses scalars, lists and quoted strings", () => {
    const { data, body } = parseFrontMatter(
      '---\ntitle: "AI One: verifiable AI agents"\ndate: 2025-01-15\ntags: [Telecom, Trust]\nsummary: One line.\n---\n\nBody text\n',
    );
    expect(data.title).toBe("AI One: verifiable AI agents");
    expect(data.date).toBe("2025-01-15");
    expect(data.tags).toEqual(["Telecom", "Trust"]);
    expect(body.trim()).toBe("Body text");
  });

  it("derives the slug from the dated filename", () => {
    expect(slugFromFilename("2026-04-15-official-certificator-latin-america.md")).toBe("official-certificator-latin-america");
    expect(slugFromFilename("no-date.md")).toBe("no-date");
    expect(slugFromFilename("2026-04-15-official-certificator-latin-america.es.md")).toBe("official-certificator-latin-america");
  });
});
