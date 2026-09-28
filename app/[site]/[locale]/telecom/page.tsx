import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faGauge, faHeartPulse, faLayerGroup, faPlug, faRobot, faServer, faSimCard } from "@fortawesome/free-solid-svg-icons";
import LogoWall from "@/app/components/LogoWall";
import HeroMark from "@/app/components/HeroMark";
import TpsChart from "@/app/components/TpsChart";
import DeployStack from "@/app/components/DeployStack";
import { ButtonLink, Card, CardTitle, Chips, CtaBand, Eyebrow, Feature, MoreLink, Section } from "@/app/components/ui";
import { OPERATORS, TELECOM_STANDARDS } from "@/app/lib/content";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LINKS } from "@/app/lib/site";

const DEPLOY_ICONS = [faServer, faLayerGroup, faGauge, faHeartPulse, faPlug];

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "telecom" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/telecom") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("telecom");
  const aiOneChips = t.raw("platforms.aiOne.chips") as string[];
  const deployFeatures = t.raw("deploy.features") as { title: string; body: string }[];
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
                <ButtonLink href={LINKS.docs} variant="primary">{t("hero.docs")}</ButtonLink>
                <ButtonLink href="/contact?topic=aircast">{t("hero.talk")}</ButtonLink>
              </div>
            </div>
            <TpsChart />
          </div>
        </section>
      </div>

      <Section eyebrow={t("platforms.eyebrow")}>
        <div className="grid-2">
          <Card>
            <CardTitle icon={faSimCard}>{t("platforms.aircast.title")}</CardTitle>
            <p className="text-muted">{t("platforms.aircast.body")}</p>
            <Chips items={["STK · SAT · USTK", "SMS · MMS · flash", "OTA RAM · RFM"]} />
            <MoreLink href="/telecom/aircast">{t("platforms.aircast.more")}</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faRobot}>{t("platforms.aiOne.title")}</CardTitle>
            <p className="text-muted">{t("platforms.aiOne.body")}</p>
            <Chips items={aiOneChips} />
            <MoreLink href="/telecom/ai-agents">{t("platforms.aiOne.more")}</MoreLink>
          </Card>
        </div>
      </Section>

      <Section eyebrow={t("deploy.eyebrow")} title={t("deploy.title")}>
        <div className="illus-block"><DeployStack /></div>
        <div className="grid-2">
          {deployFeatures.map((f, i) => (
            <Feature key={f.title} icon={DEPLOY_ICONS[i]} title={f.title}><p>{f.body}</p></Feature>
          ))}
        </div>
      </Section>

      <Section eyebrow={t("standards.eyebrow")} lead={t("standards.lead")}>
        <Chips items={TELECOM_STANDARDS} />
      </Section>

      <Section eyebrow={t("services.eyebrow")} title={t("services.title")} lead={t("services.lead")}>
        <MoreLink href="/contact?topic=aircast">{t("services.cta")}</MoreLink>
      </Section>

      <Section eyebrow={t("operators.eyebrow")}>
        <LogoWall title={t("operators.title")} logos={OPERATORS} countries />
      </Section>

      <Section eyebrow={t("docs.eyebrow")} title={t("docs.title")} lead={t("docs.lead")}>
        <div className="ctas mt-0">
          <ButtonLink href={LINKS.docs} variant="primary">{t("docs.docs")}</ButtonLink>
          <ButtonLink href="/contact?topic=aircast">{t("docs.talk")}</ButtonLink>
        </div>
      </Section>
      <CtaBand title={t("cta.title")} lead={t("cta.lead")} href="/contact?topic=aircast" label={t("cta.label")} />
    </>
  );
}
