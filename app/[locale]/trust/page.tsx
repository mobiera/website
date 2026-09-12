import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faCertificate, faDiagramProject, faHandshake } from "@fortawesome/free-solid-svg-icons";
import EcosystemTree from "@/app/components/EcosystemTree";
import HeroMark from "@/app/components/HeroMark";
import WalletPhone from "@/app/components/WalletPhone";
import VeranaLockup from "@/app/components/VeranaLockup";
import { ButtonLink, Card, CardTitle, Chips, CtaBand, Eyebrow, MoreLink, Section, UseCase } from "@/app/components/ui";
import { TRUST_STANDARDS } from "@/app/lib/content";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LINKS } from "@/app/lib/site";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "trust" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/trust") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("trust");
  return (
    <>
      <div className="ground">
        <HeroMark />
        <section className="hero container-x">
          <div className="hero-grid">
            <div>
              <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
              <h1 className="mt-3">{t("hero.title")}</h1>
              <p className="lead">{t("hero.lead")}</p>
              <div className="ctas">
                <ButtonLink href="/trust/services" variant="primary">{t("hero.services")}</ButtonLink>
                <ButtonLink href="/certification">{t("hero.certified")}</ButtonLink>
              </div>
            </div>
            <WalletPhone />
          </div>
        </section>
      </div>

      <Section eyebrow={t("roles.eyebrow")}>
        <div className="grid-3">
          <Card>
            <CardTitle icon={faHandshake}>{t("roles.cards.founder.title")}</CardTitle>
            <p className="text-muted">{t("roles.cards.founder.body")}</p>
            <MoreLink href="/trust/verana">{t("roles.cards.founder.more")}</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faDiagramProject}>{t("roles.cards.builder.title")}</CardTitle>
            <p className="text-muted">{t("roles.cards.builder.body")}</p>
            <MoreLink href="/trust/services">{t("roles.cards.builder.more")}</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faCertificate}>{t("roles.cards.certificator.title")}</CardTitle>
            <p className="text-muted">{t("roles.cards.certificator.body")}</p>
            <MoreLink href="/certification">{t("roles.cards.certificator.more")}</MoreLink>
          </Card>
        </div>
        <div className="illus-block mt-6"><EcosystemTree /></div>
      </Section>

      <Section eyebrow={t("why.eyebrow")} title={t("why.title")} lead={t("why.lead")}>
        <MoreLink href="/telecom">{t("why.more")}</MoreLink>
      </Section>

      <Section eyebrow={t("verana.eyebrow")} lead={t("verana.lead")}>
        <a href={LINKS.verana} className="btn btn-lockup" rel="noopener">
          <VeranaLockup variant="verana" size={22} />
          <span>{t("verana.more")}</span>
          <span className="arrow" aria-hidden="true">→</span>
        </a>
      </Section>

      <Section eyebrow={t("useCases.eyebrow")} lead={t("useCases.lead")}>
        <div className="grid-3">
          <UseCase image="/images/usecases/verandia.webp" alt={t("useCases.cards.verandia.alt")} title={t("useCases.cards.verandia.title")} href={LINKS.playgroundVerandia} cta={t("useCases.cards.verandia.cta")}>
            {t("useCases.cards.verandia.body")}
          </UseCase>
          <UseCase image="/images/usecases/cexa.webp" alt={t("useCases.cards.cexa.alt")} title={t("useCases.cards.cexa.title")} href={LINKS.playgroundCexa} cta={t("useCases.cards.cexa.cta")}>
            {t("useCases.cards.cexa.body")}
          </UseCase>
          <UseCase image="/images/usecases/vesta.webp" alt={t("useCases.cards.vesta.alt")} title={t("useCases.cards.vesta.title")} href={LINKS.playgroundVesta} cta={t("useCases.cards.vesta.cta")}>
            {t("useCases.cards.vesta.body")}
          </UseCase>
        </div>
      </Section>

      <Section eyebrow={t("standards.eyebrow")}>
        <Chips items={TRUST_STANDARDS} />
      </Section>

      <CtaBand title={t("cta.title")} lead={t("cta.lead")} href="/contact?topic=trust" label={t("cta.label")} />
    </>
  );
}
