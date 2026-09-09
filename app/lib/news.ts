import fs from "node:fs";
import path from "node:path";

export type NewsItem = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  summary: string;
  body: string;
  keptFromOldSite: boolean;
};

const NEWS_DIR = path.join(process.cwd(), "content", "news");

/** Minimal front matter parser: `key: value`, `[a, b]` lists, quoted strings. */
export function parseFrontMatter(raw: string): { data: Record<string, string | string[]>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { data: {}, body: raw };
  const data: Record<string, string | string[]> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx < 1) continue;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      data[key] = value.slice(1, -1).split(",").map((s) => s.trim()).filter(Boolean);
      continue;
    }
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body: m[2] };
}

function str(v: string | string[] | undefined): string {
  return Array.isArray(v) ? v.join(", ") : (v ?? "");
}

export function slugFromFilename(file: string): string {
  return file.replace(/\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

export function getAllNews(): NewsItem[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  const items = fs
    .readdirSync(NEWS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(NEWS_DIR, file), "utf8");
      const { data, body } = parseFrontMatter(raw);
      return {
        slug: slugFromFilename(file),
        title: str(data.title),
        date: str(data.date),
        tags: Array.isArray(data.tags) ? data.tags : str(data.tags).split(",").map((s) => s.trim()).filter(Boolean),
        summary: str(data.summary),
        body: body.replace(/<!--[\s\S]*?-->/g, "").trim(),
        keptFromOldSite: str(data.kept_from_old_site) === "true",
      } satisfies NewsItem;
    });
  return items.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return getAllNews().find((n) => n.slug === slug);
}

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m) return iso;
  return d ? `${d} ${MONTHS[m - 1]} ${y}` : `${MONTHS[m - 1]} ${y}`;
}

export function shortDate(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  if (!y || !m) return iso;
  return `${MONTHS[m - 1].slice(0, 3)} ${y}`;
}
