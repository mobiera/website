import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { shortDate, type NewsItem } from "@/app/lib/news";

export default async function NewsList({ items, summaries = false }: { items: NewsItem[]; summaries?: boolean }) {
  const locale = await getLocale();
  return (
    <div className="news">
      {items.map((n) => (
        <Link key={n.slug} href={`/news/${n.slug}`}>
          <span className="eyebrow">{shortDate(n.date, locale)}</span>
          <span>
            <b>{n.title}</b>
            {summaries && <span className="block text-muted text-sm mt-1">{n.summary}</span>}
            {summaries && n.tags.length > 0 && <span className="block eyebrow mt-2">{n.tags.join(" · ")}</span>}
          </span>
        </Link>
      ))}
    </div>
  );
}
