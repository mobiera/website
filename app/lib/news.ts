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
  /** False when the requested locale has no translation and English is shown. */
  translated: boolean;
};

const MONTHS: Record<string, string[]> = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  es: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
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

/** `2026-04-15-name.md` and `2026-04-15-name.es.md` share the slug `name`. */
export function slugFromFilename(file: string): string {
  return file.replace(/(\.[a-z]{2})?\.md$/, "").replace(/^\d{4}-\d{2}-\d{2}-/, "");
}

/**
 * News in `locale`: the `<name>.<locale>.md` file when it exists, else the
 * English `<name>.md` marked as untranslated. English never falls back.
 */
export function getAllNews(locale = "en"): NewsItem[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  const files = fs.readdirSync(NEWS_DIR).filter((f) => f.endsWith(".md"));
  const base = files.filter((f) => !/\.[a-z]{2}\.md$/.test(f));
  const items = base.map((en) => {
    const localized = locale === "en" ? undefined : files.find((f) => f === en.replace(/\.md$/, `.${locale}.md`));
    const file = localized ?? en;
    const raw = fs.readFileSync(path.join(NEWS_DIR, file), "utf8");
    const { data, body } = parseFrontMatter(raw);
    return {
        slug: slugFromFilename(en),
        translated: locale === "en" || Boolean(localized),
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

export function getNewsBySlug(slug: string, locale = "en"): NewsItem | undefined {
  return getAllNews(locale).find((n) => n.slug === slug);
}

export function formatDate(iso: string, locale = "en"): string {
  const months = MONTHS[locale] ?? MONTHS.en;
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m) return iso;
  if (locale === "es") return d ? `${d} de ${months[m - 1]} de ${y}` : `${months[m - 1]} de ${y}`;
  return d ? `${d} ${months[m - 1]} ${y}` : `${months[m - 1]} ${y}`;
}

export function shortDate(iso: string, locale = "en"): string {
  const months = MONTHS[locale] ?? MONTHS.en;
  const [y, m] = iso.split("-").map(Number);
  if (!y || !m) return iso;
  return `${months[m - 1].slice(0, 3)} ${y}`;
}
