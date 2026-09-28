import { Link } from "@/i18n/navigation";
import { faCertificate, faDiagramProject, faGraduationCap, faHandshake, faHeadset, faMobileScreen, faRobot, faShieldHalved, faSimCard, faSitemap, faTowerCell } from "@fortawesome/free-solid-svg-icons";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import JsonLd from "@/app/components/JsonLd";
import HeroMark from "@/app/components/HeroMark";
import CredentialCards from "@/app/components/CredentialCards";
import LogoWall from "@/app/components/LogoWall";
import NewsList from "@/app/components/NewsList";
import { ButtonLink, Card, CardTitle, Chips, Eyebrow, Feature, MoreLink, ProofStrip, Section } from "@/app/components/ui";
import { OPERATORS, PARTNERS, type Stat } from "@/app/lib/content";
import { getAllNews } from "@/app/lib/news";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LINKS, SITE_NAME } from "@/app/lib/site";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "common" });
  return {
    title: { absolute: `${SITE_NAME}: ${t("meta.tagline")}` },
    description: t("meta.description"),
    alternates: alternates(locale, "/"),
  };
}

export default async function Home({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tc = await getTranslations("content");
  const numbers = tc.raw("numbers") as Stat[];
  const trustBullets = t.raw("lines.trust.bullets") as string[];
  const telecomBullets = t.raw("lines.telecom.bullets") as string[];
  const news = getAllNews(locale).slice(0, 3);
  return (
    <>
      <JsonLd />
      <div className="ground">
        <HeroMark />
        <section className="hero container-x">
          <div className="hero-grid">
            <div>
              <Eyebrow>{t("hero.eyebrow")}</Eyebrow>
              <h1 className="mt-3">{t("hero.title")}</h1>
              <p className="lead">{t("hero.lead")}</p>
              <div className="ctas">
                <ButtonLink href="/trust" variant="primary">{t("hero.ctaTrust")}</ButtonLink>
                <ButtonLink href="/certification">{t("hero.ctaCertification")}</ButtonLink>
              </div>
            </div>
            <CredentialCards />
          </div>
        </section>
      </div>

      <Section eyebrow={t("lines.eyebrow")} title={t("lines.title")}>
        <div className="grid-2">
          <Card>
            <span className="eyebrow tag">01</span>
            <CardTitle icon={faShieldHalved}>{t("lines.trust.title")}</CardTitle>
            <p className="text-muted">{t.rich("lines.trust.lead", { link: (chunks) => <a href={LINKS.verana} className="text-link" rel="noopener">{chunks}</a> })}</p>
            <ul>
              {trustBullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <MoreLink href="/trust">{t("lines.trust.more")}</MoreLink>
          </Card>
          <Card>
            <span className="eyebrow tag">02</span>
            <CardTitle icon={faTowerCell}>{t("lines.telecom.title")}</CardTitle>
            <p className="text-muted">{t("lines.telecom.lead")}</p>
            <ul>
              {telecomBullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <MoreLink href="/telecom">{t("lines.telecom.more")}</MoreLink>
          </Card>
        </div>
      </Section>

      <Section>
        <ProofStrip items={numbers} />
      </Section>

      <Section eyebrow={t("roles.eyebrow")} title={t("roles.title")}>
        <div className="grid-3">
          <Card>
            <CardTitle icon={faHandshake}>{t("roles.founding.title")}</CardTitle>
            <p className="text-muted">{t("roles.founding.body")}</p>
            <MoreLink href="/trust/verana">{t("roles.founding.more")}</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faDiagramProject}>{t("roles.builder.title")}</CardTitle>
            <p className="text-muted">{t("roles.builder.body")}</p>
            <MoreLink href="/trust/services">{t("roles.builder.more")}</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faCertificate}>{t("roles.certificator.title")}</CardTitle>
            <p className="text-muted">{t("roles.certificator.body")}</p>
            <MoreLink href="/certification">{t("roles.certificator.more")}</MoreLink>
          </Card>
        </div>
        <div className="grid-3 mt-8">
          <Feature icon={faMobileScreen} title={t("roles.features.phoneNumbers.title")}><p>{t("roles.features.phoneNumbers.body")}</p></Feature>
          <Feature icon={faHeadset} title={t("roles.features.supportAgents.title")}><p>{t("roles.features.supportAgents.body")}</p></Feature>
          <Feature icon={faSitemap} title={t("roles.features.sectors.title")}><p>{t("roles.features.sectors.body")}</p></Feature>
        </div>
        <div className="cert mt-8">
          <span className="pot"><i />{t("roles.cert.pot")}</span>
          <CardTitle icon={faGraduationCap}>{t("roles.cert.title")}</CardTitle>
          <p className="muted">{t("roles.cert.body")}</p>
          <Link href="/certification" className="btn">{t("roles.cert.cta")} <span className="arrow" aria-hidden="true">→</span></Link>
        </div>
      </Section>

      <Section eyebrow={t("telecom.eyebrow")} title={t("telecom.title")}>
        <div className="grid-2">
          <Card>
            <CardTitle icon={faSimCard}>{t("telecom.aircast.title")}</CardTitle>
            <p className="text-muted">{t("telecom.aircast.body")}</p>
            <Chips items={["STK · SAT · USTK", "SMS · MMS · flash", "OTA RAM · RFM", "3DES-CBC · AES"]} />
            <MoreLink href="/telecom/aircast">{t("telecom.aircast.more")}</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faRobot}>{t("telecom.aiOne.title")}</CardTitle>
            <p className="text-muted">{t("telecom.aiOne.body")}</p>
            <Chips items={["SMS · DIDComm", "MSISDN PIN", "LLM-agnostic · MCP", "Verifiable Service"]} />
            <MoreLink href="/telecom/ai-agents">{t("telecom.aiOne.more")}</MoreLink>
          </Card>
        </div>
        <p className="mt-6"><MoreLink href="/telecom">{t("telecom.more")}</MoreLink></p>
      </Section>

      <Section>
        <div className="grid-2">
          <LogoWall title={t("logos.partners")} logos={PARTNERS} />
          <LogoWall title={t("logos.operators")} logos={OPERATORS} />
        </div>
      </Section>

      <Section>
        <div className="grid-2 gap-10">
          <div>
            <Eyebrow>{t("openSource.eyebrow")}</Eyebrow>
            <h2 className="my-3">{t("openSource.title")}</h2>
            <p className="text-muted max-w-[52ch]">{t("openSource.body")}</p>
            <p className="mt-4"><MoreLink href={LINKS.github}>{t("openSource.more")}</MoreLink></p>
          </div>
          <div>
            <Eyebrow className="mb-3">{t("news.eyebrow")}</Eyebrow>
            <NewsList items={news} />
          </div>
        </div>
      </Section>

      <section className="section">
        <div className="container-x cta-band">
          <div>
            <h2>{t("cta.title")}</h2>
            <p className="text-muted mt-2">{t("cta.body")}</p>
          </div>
          <ButtonLink href="/contact" variant="primary">{t("cta.button")}</ButtonLink>
        </div>
      </section>
    </>
  );
}
