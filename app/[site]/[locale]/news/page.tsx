import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import NewsList from "@/app/components/NewsList";
import { PageHero, Section } from "@/app/components/ui";
import { getAllNews } from "@/app/lib/news";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "news" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/news", { types: { "application/rss+xml": "/news/feed.xml" } }) };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("news");
  const items = getAllNews(locale);
  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} ground={false} />
      <Section>
        <NewsList items={items} summaries />
        <p className="mt-6 text-sm text-muted"><a className="text-link" href="/news/feed.xml">{t("rss")}</a></p>
      </Section>
    </>
  );
}
