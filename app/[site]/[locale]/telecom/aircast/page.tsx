import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faArrowUpWideShort, faBullhorn, faBullseye, faCalendarDays, faChartLine, faClock, faCommentSms, faFeather, faFileArrowUp, faGauge, faListCheck, faMicrochip, faPuzzlePiece, faRecycle, faSatelliteDish } from "@fortawesome/free-solid-svg-icons";
import AircastFlow from "@/app/components/AircastFlow";
import { ButtonLink, Card, CardTitle, Chips, CtaBand, Feature, PageHero, Section } from "@/app/components/ui";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LINKS } from "@/app/lib/site";

const ENGINE_ICONS = [faCalendarDays, faBullseye, faListCheck, faFileArrowUp, faChartLine];
const THROUGHPUT_ICONS = [faClock, faArrowUpWideShort, faGauge, faRecycle];

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "aircast" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/telecom/aircast") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("aircast");
  const pushBullets = t.raw("jobs.push.bullets") as string[];
  const engineFeatures = t.raw("engine.features") as { title: string; body: string }[];
  const throughputFeatures = t.raw("throughput.features") as { title: string; body: string }[];
  const integrateBullets = t.raw("integrate.bullets") as string[];
  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} lead={t("hero.lead")}>
        <ButtonLink href={LINKS.docs} variant="primary">{t("hero.docs")}</ButtonLink>
        <ButtonLink href="/contact?topic=aircast">{t("hero.talk")}</ButtonLink>
      </PageHero>

      <Section eyebrow={t("jobs.eyebrow")}>
        <div className="grid-3">
          <Card>
            <span className="eyebrow tag">01</span>
            <CardTitle icon={faBullhorn}>{t("jobs.push.title")}</CardTitle>
            <p className="text-muted">{t("jobs.push.body")}</p>
            <ul>
              {pushBullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            <p className="text-sm text-muted">{t("jobs.push.useCases")}</p>
          </Card>
          <Card>
            <span className="eyebrow tag">02</span>
            <CardTitle icon={faCommentSms}>{t("jobs.messaging.title")}</CardTitle>
            <p className="text-muted">{t("jobs.messaging.body")}</p>
            <p className="text-sm text-muted">{t("jobs.messaging.useCases")}</p>
          </Card>
          <Card>
            <span className="eyebrow tag">03</span>
            <CardTitle icon={faSatelliteDish}>{t("jobs.ota.title")}</CardTitle>
            <p className="text-muted">{t("jobs.ota.body")}</p>
            <p className="text-sm text-muted">{t("jobs.ota.useCases")}</p>
          </Card>
        </div>
        <div className="illus-block mt-6"><AircastFlow /></div>
      </Section>

      <Section eyebrow={t("engine.eyebrow")} title={t("engine.title")}>
        <div className="grid-2">
          {engineFeatures.map((f, i) => (
            <Feature key={f.title} icon={ENGINE_ICONS[i]} title={f.title}><p>{f.body}</p></Feature>
          ))}
        </div>
      </Section>

      <Section eyebrow={t("throughput.eyebrow")} title={t("throughput.title")} lead={t("throughput.lead")}>
        <div className="grid-2">
          {throughputFeatures.map((f, i) => (
            <Feature key={f.title} icon={THROUGHPUT_ICONS[i]} title={f.title}><p>{f.body}</p></Feature>
          ))}
        </div>
      </Section>

      <Section eyebrow={t("applets.eyebrow")} title={t("applets.title")} lead={t("applets.lead")}>
        <div className="grid-3">
          <Card>
            <CardTitle icon={faMicrochip}>{t("applets.sleepy.title")}</CardTitle>
            <p className="text-muted">{t("applets.sleepy.body")}</p>
            <Chips items={["Full · Lite", "SIM · UICC", "Java Card 2.1.1"]} />
          </Card>
          <Card>
            <CardTitle icon={faFeather}>{t("applets.micro.title")}</CardTitle>
            <p className="text-muted">{t("applets.micro.body")}</p>
            <Chips items={["~1.3 KB", "DISPLAY TEXT", "GSM-7 · UCS-2"]} />
          </Card>
          <Card>
            <CardTitle icon={faPuzzlePiece}>{t("applets.thirdParty.title")}</CardTitle>
            <p className="text-muted">{t("applets.thirdParty.body")}</p>
            <Chips items={["SAT", "Pico", "USTK"]} />
          </Card>
        </div>
      </Section>

      <Section eyebrow={t("integrate.eyebrow")} title={t("integrate.title")}>
        <ul className="grid-2 text-muted list-disc pl-5">
          {integrateBullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <p className="mt-6"><ButtonLink href={LINKS.docs}>{t("integrate.cta")}</ButtonLink></p>
      </Section>

      <Section eyebrow={t("deploy.eyebrow")} title={t("deploy.title")} lead={t("deploy.lead")}>
        <ButtonLink href={LINKS.docs}>{t("deploy.cta")}</ButtonLink>
      </Section>

      <Section eyebrow={t("operators.eyebrow")} title={t("operators.title")} />

      <CtaBand title={t("cta.title")} lead={t("cta.lead")} href="/contact?topic=aircast" label={t("cta.label")} />
    </>
  );
}
