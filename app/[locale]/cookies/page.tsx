import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import CookiePreferences from "./CookiePreferences";
import { PageHero } from "@/app/components/ui";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "cookies" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/cookies") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("cookies");
  return (
    <>
      <PageHero eyebrow={t("eyebrow")} title={t("title")} lead={t("lead")} ground={false} />
      <div className="container-x prose pb-20">
        <h2>{t("essential.title")}</h2>
        <p>{t("essential.body")}</p>
        <h2>{t("analytics.title")}</h2>
        <p>{t("analytics.body")}</p>
        <h2>{t("change.title")}</h2>
        <CookiePreferences />
      </div>
    </>
  );
}
