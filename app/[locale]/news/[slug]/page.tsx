import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Eyebrow } from "@/app/components/ui";
import { formatDate, getAllNews, getNewsBySlug } from "@/app/lib/news";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

type Params = PageParams & { slug: string };

// Internal links in article bodies go through the locale-aware Link so a
// Spanish article links to Spanish pages.
const components: Components = {
  a: ({ href = "", children }) => (href.startsWith("/") ? <Link href={href}>{children}</Link> : <a href={href} rel="noopener">{children}</a>),
};

export function generateStaticParams(): { locale: Locale; slug: string }[] {
  return routing.locales.flatMap((locale) => getAllNews().map((n) => ({ locale, slug: n.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const { slug } = await params;
  const item = getNewsBySlug(slug, locale);
  if (!item) return {};
  return { title: item.title, description: item.summary, alternates: alternates(locale, `/news/${item.slug}`), openGraph: { type: "article", title: item.title, description: item.summary, publishedTime: item.date } };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const locale = await pageLocale(params);
  const { slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("news");
  const item = getNewsBySlug(slug, locale);
  if (!item) notFound();
  return (
    <article className="container-x py-16">
      <p className="mb-4"><Link href="/news" className="more">← {t("back")}</Link></p>
      <Eyebrow>{formatDate(item.date, locale)} · {item.tags.join(" · ")}</Eyebrow>
      <h1 className="mt-3 max-w-[24ch]">{item.title}</h1>
      <p className="lead">{item.summary}</p>
      {!item.translated && <p className="mt-4 text-sm text-muted">{t("untranslated")}</p>}
      <div className="prose mt-10">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{item.body}</ReactMarkdown>
      </div>
      {item.keptFromOldSite && <p className="mt-10 text-sm text-muted">{t("keptFromOldSite")}</p>}
    </article>
  );
}
