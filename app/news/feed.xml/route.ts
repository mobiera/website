import { getAllNews } from "@/app/lib/news";
import { SITE_NAME, SITE_URL } from "@/app/lib/site";

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

export function GET() {
  const items = getAllNews()
    .map((n) => `    <item>
      <title>${esc(n.title)}</title>
      <link>${SITE_URL}/news/${n.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/news/${n.slug}</guid>
      <pubDate>${new Date(n.date).toUTCString()}</pubDate>
      <description>${esc(n.summary)}</description>
    </item>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${SITE_NAME} news</title>
    <link>${SITE_URL}/news</link>
    <description>Announcements and articles from Mobiera.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
