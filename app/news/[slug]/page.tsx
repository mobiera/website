import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Eyebrow } from "@/app/components/ui";
import { formatDate, getAllNews, getNewsBySlug } from "@/app/lib/news";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllNews().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return { title: item.title, description: item.summary, alternates: { canonical: `/news/${item.slug}` }, openGraph: { type: "article", title: item.title, description: item.summary, publishedTime: item.date } };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  if (!item) notFound();
  return (
    <article className="container-x py-16">
      <p className="mb-4"><Link href="/news" className="more">← News</Link></p>
      <Eyebrow>{formatDate(item.date)} · {item.tags.join(" · ")}</Eyebrow>
      <h1 className="mt-3 max-w-[24ch]">{item.title}</h1>
      <p className="lead">{item.summary}</p>
      <div className="prose mt-10">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{item.body}</ReactMarkdown>
      </div>
      {item.keptFromOldSite && <p className="mt-10 text-sm text-muted">Article first published on the previous mobiera.com; wording lightly edited.</p>}
    </article>
  );
}
