import type { Metadata } from "next";
import NewsList from "@/app/components/NewsList";
import { PageHero, Section } from "@/app/components/ui";
import { getAllNews } from "@/app/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "Announcements and articles from Mobiera: products, the Verana trust network, certification, and the company.",
  alternates: { canonical: "/news", types: { "application/rss+xml": "/news/feed.xml" } },
};

export default function Page() {
  const items = getAllNews();
  return (
    <>
      <PageHero eyebrow="News" title="News" lead="Announcements first, articles second. Every item is dated and signed Mobiera." ground={false} />
      <Section>
        <NewsList items={items} summaries />
        <p className="mt-6 text-sm text-muted"><a className="text-link" href="/news/feed.xml">RSS feed</a></p>
      </Section>
    </>
  );
}
