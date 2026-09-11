import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faGlobe, faLayerGroup, faServer } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/app/components/ContactForm";
import { Feature, PageHero, Section } from "@/app/components/ui";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "careers" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/company/careers") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("careers");
  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} lead={t("hero.lead")} />

      <Section eyebrow={t("why.eyebrow")}>
        <div className="grid-3">
          <Feature icon={faServer} title={t("why.systems.title")}><p>{t("why.systems.body")}</p></Feature>
          <Feature icon={faLayerGroup} title={t("why.fields.title")}><p>{t("why.fields.body")}</p></Feature>
          <Feature icon={faGlobe} title={t("why.distributed.title")}><p>{t("why.distributed.body")}</p></Feature>
        </div>
      </Section>

      <Section eyebrow={t("roles.eyebrow")} lead={t("roles.lead")} />

      <Section eyebrow={t("apply.eyebrow")} title={t("apply.title")} lead={t("apply.lead")}>
        <div className="max-w-[720px]">
          <ContactForm defaultTopic="careers" careers />
        </div>
      </Section>
    </>
  );
}
