import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { PageHero } from "@/app/components/ui";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LEGAL } from "@/app/lib/site";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "privacy" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/privacy") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("privacy");
  const mail = (chunks: React.ReactNode) => <a href={`mailto:${LEGAL.privacyEmail}`}>{chunks}</a>;
  const b = (chunks: React.ReactNode) => <strong>{chunks}</strong>;
  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} ground={false} />
      <div className="container-x prose pb-20">
        <h2>{t("who.title")}</h2>
        <p>{t.rich("who.body", { name: LEGAL.name, nit: LEGAL.nit, address: LEGAL.address, email: LEGAL.privacyEmail, mail })}</p>
        <h2>{t("collect.title")}</h2>
        <p>{t.rich("collect.form", { b })}</p>
        <p>{t.rich("collect.analytics", { b, link: (chunks) => <Link href="/cookies">{chunks}</Link> })}</p>
        <p>{t.rich("collect.logs", { b })}</p>
        <p>{t("collect.noSale")}</p>
        <h2>{t("basis.title")}</h2>
        <p>{t("basis.body")}</p>
        <h2>{t("processors.title")}</h2>
        <p>{t("processors.body")}</p>
        <h2>{t("rights.title")}</h2>
        <p>{t.rich("rights.body", { email: LEGAL.privacyEmail, mail })}</p>
        <h2>{t("changes.title")}</h2>
        <p>{t("changes.body")}</p>
      </div>
    </>
  );
}
