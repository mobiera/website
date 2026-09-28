import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faGraduationCap, faTowerCell, faUsers } from "@fortawesome/free-solid-svg-icons";
import VeranaLockup from "@/app/components/VeranaLockup";
import { ButtonLink, Card, CtaBand, Feature, PageHero, Section } from "@/app/components/ui";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LINKS } from "@/app/lib/site";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "trustVerana" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/trust/verana") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("trustVerana");
  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} lead={t("hero.lead")} />

      <Section eyebrow={t("founding.eyebrow")} lead={t("founding.lead")}>
        <ButtonLink href={LINKS.foundation}>{t("founding.button")}</ButtonLink>
      </Section>

      <Section eyebrow={t("bodies.eyebrow")} lead={t("bodies.lead")}>
        <div className="grid-3">
          <Card>
            <h3 className="card-title"><VeranaLockup variant="foundation" /></h3>
            <p className="text-muted">{t("bodies.cards.foundation")}</p>
            <a className="more" href={LINKS.foundation} rel="noopener">veranafoundation.org ↗</a>
          </Card>
          <Card>
            <h3 className="card-title"><VeranaLockup variant="council" /></h3>
            <p className="text-muted">{t("bodies.cards.council")}</p>
            <a className="more" href={LINKS.council} rel="noopener">veranacouncil.org ↗</a>
          </Card>
          <Card>
            <h3 className="card-title"><VeranaLockup variant="verana" /></h3>
            <p className="text-muted">{t("bodies.cards.verana")}</p>
            <a className="more" href={LINKS.verana} rel="noopener">verana.io ↗</a>
          </Card>
        </div>
      </Section>

      <Section eyebrow={t("contribute.eyebrow")}>
        <div className="grid-3">
          <Feature icon={faTowerCell} title={t("contribute.cards.telecom.title")}><p>{t("contribute.cards.telecom.body")}</p></Feature>
          <Feature icon={faGraduationCap} title={t("contribute.cards.training.title")}><p>{t("contribute.cards.training.body")}</p></Feature>
          <Feature icon={faUsers} title={t("contribute.cards.groups.title")}><p>{t("contribute.cards.groups.body")}</p></Feature>
        </div>
      </Section>

      <Section eyebrow={t("council.eyebrow")} lead={t("council.lead")}>
        <ButtonLink href={LINKS.council}>{t("council.button")}</ButtonLink>
      </Section>

      <Section eyebrow={t("roadmap.eyebrow")} lead={t("roadmap.lead")}>
        <ButtonLink href={LINKS.roadmap}>{t("roadmap.button")}</ButtonLink>
      </Section>

      <CtaBand title={t("cta.title")} lead={t("cta.lead")} href="/contact?topic=trust" label={t("cta.label")} />
    </>
  );
}
