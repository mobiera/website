import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faBuilding, faBuildingShield, faUser, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import CertifiedIntegrators from "./CertifiedIntegrators";
import CertificationPath from "@/app/components/CertificationPath";
import CertifiedProof from "@/app/components/CertifiedProof";
import HeroMark from "@/app/components/HeroMark";
import { ButtonLink, Card, CardTitle, CtaBand, Eyebrow, Feature, Section, Steps } from "@/app/components/ui";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LINKS } from "@/app/lib/site";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "certification" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/certification") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("certification");
  const tracks = t.raw("curriculum.tracks") as { title: string; body: string }[];
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
                <ButtonLink href="/contact?topic=certification" variant="primary">{t("hero.cta")}</ButtonLink>
              </div>
            </div>
            <CertifiedProof />
          </div>
        </section>
      </div>

      <Section eyebrow={t("why.eyebrow")} lead={t("why.lead")} />

      <Section eyebrow={t("path.eyebrow")} title={t("path.title")}>
        <CertificationPath />
      </Section>

      <Section eyebrow={t("curriculum.eyebrow")} title={t("curriculum.title")}>
        <Steps items={tracks} />
      </Section>

      <Section eyebrow={t("exams.eyebrow")} lead={t("exams.lead")} />

      <Section eyebrow={t("training.eyebrow")} lead={t("training.lead")} />

      <Section eyebrow={t("prerequisites.eyebrow")}>
        <div className="grid-2">
          <Feature icon={faUser} title={t("prerequisites.professionals.title")}><p>{t("prerequisites.professionals.body")}</p></Feature>
          <Feature icon={faBuilding} title={t("prerequisites.companies.title")}><p>{t("prerequisites.companies.body")}</p></Feature>
        </div>
        <p className="mt-6"><ButtonLink href={`${LINKS.foundation}/join`}>{t("prerequisites.join")}</ButtonLink></p>
      </Section>

      <Section eyebrow={t("levels.eyebrow")}>
        <div className="grid-2">
          <Card>
            <CardTitle icon={faUserGraduate}>{t("levels.professional.title")}</CardTitle>
            <p className="text-muted">{t("levels.professional.body")}</p>
          </Card>
          <Card>
            <CardTitle icon={faBuildingShield}>{t("levels.integrator.title")}</CardTitle>
            <p className="text-muted">{t("levels.integrator.body")}</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow={t("integrators.eyebrow")} lead={t("integrators.lead")}>
        <CertifiedIntegrators />
      </Section>

      <Section eyebrow={t("audience.eyebrow")} lead={t("audience.lead")} />

      <Section eyebrow={t("designation.eyebrow")}>
        <div className="cert max-w-[60ch]">
          <span className="pot"><i />{t("designation.badge")}</span>
          <h3 className="text-[1.4rem]">{t("designation.title")}</h3>
          <p className="muted">{t("designation.validity")}</p>
        </div>
      </Section>

      <Section eyebrow={t("pricing.eyebrow")} lead={t("pricing.lead")} />

      <CtaBand title={t("cta.title")} lead={t("cta.lead")} href="/contact?topic=certification" label={t("cta.label")} />
    </>
  );
}
