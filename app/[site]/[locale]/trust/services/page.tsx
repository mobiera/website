import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faIdCard, faServer, faSitemap, faWallet } from "@fortawesome/free-solid-svg-icons";
import TrustTriangle from "@/app/components/TrustTriangle";
import { ButtonLink, CtaBand, Feature, PageHero, Section, Steps } from "@/app/components/ui";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LINKS } from "@/app/lib/site";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "trustServices" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/trust/services") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("trustServices");
  const steps = t.raw("engagement.steps") as { title: string; body: string }[];
  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} lead={t("hero.lead")}>
        <ButtonLink href="/contact?topic=trust" variant="primary">{t("hero.talk")}</ButtonLink>
        <ButtonLink href={LINKS.playground}>{t("hero.playground")}</ButtonLink>
      </PageHero>

      <Section eyebrow={t("how.eyebrow")} title={t("how.title")} lead={t("how.lead")}>
        <TrustTriangle />
      </Section>

      <Section>
        <div className="grid-2">
          <Feature icon={faSitemap} title={t("features.ecosystem.title")}><p>{t("features.ecosystem.body")}</p></Feature>
          <Feature icon={faIdCard} title={t("features.issuer.title")}><p>{t("features.issuer.body")}</p></Feature>
          <Feature icon={faWallet} title={t("features.wallet.title")}><p>{t("features.wallet.body")}</p></Feature>
          <Feature icon={faServer} title={t("features.run.title")}><p>{t("features.run.body")}</p></Feature>
        </div>
      </Section>

      <Section eyebrow={t("engagement.eyebrow")}>
        <Steps items={steps} />
      </Section>

      <CtaBand title={t("cta.title")} lead={t("cta.lead")} href="/contact?topic=trust" label={t("cta.label")} />
    </>
  );
}
