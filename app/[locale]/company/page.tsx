import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faBullseye, faCode, faLocationDot, faPeopleGroup, faScaleBalanced, faWrench } from "@fortawesome/free-solid-svg-icons";
import LogoWall from "@/app/components/LogoWall";
import { ButtonLink, Card, CardTitle, CtaBand, Feature, MoreLink, PageHero, ProofStrip, Section } from "@/app/components/ui";
import { OPEN_SOURCE, OPERATORS, PARTNERS, type Office, type Stat, type TimelineChapter } from "@/app/lib/content";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LINKS } from "@/app/lib/site";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "company" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/company") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("company");
  const tc = await getTranslations("content");
  const timeline = tc.raw("timeline") as TimelineChapter[];
  const offices = tc.raw("offices") as Office[];
  const numbers = t.raw("numbers.items") as Stat[];
  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} lead={t("hero.lead")} />

      <Section eyebrow={t("who.eyebrow")}>
        <div className="grid-2">
          <p className="text-muted">{t("who.trust")}</p>
          <p className="text-muted">{t("who.telecom")}</p>
        </div>
      </Section>

      <Section eyebrow={t("timeline.eyebrow")}>
        <div className="chapters">
          {timeline.map((c) => (
            <div key={c.year} className={c.verana ? "chapter v" : "chapter"}>
              <div>
                <div className="ch-year">{c.year}</div>
                <div className="ch-span">{c.span}</div>
                <p className="ch-title">{c.title}</p>
              </div>
              <ol className="ch-list">
                {c.items.map((i) => (
                  <li key={i.when + i.text}><span className="when">{i.when}</span><span className="txt">{i.text}</span></li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow={t("numbers.eyebrow")}>
        <ProofStrip items={numbers} />
      </Section>

      <Section eyebrow={t("values.eyebrow")}>
        <div className="grid-4">
          <Feature icon={faBullseye} title={t("values.customer.title")}><p>{t("values.customer.body")}</p></Feature>
          <Feature icon={faScaleBalanced} title={t("values.truth.title")}><p>{t("values.truth.body")}</p></Feature>
          <Feature icon={faWrench} title={t("values.properly.title")}><p>{t("values.properly.body")}</p></Feature>
          <Feature icon={faPeopleGroup} title={t("values.learn.title")}><p>{t("values.learn.body")}</p></Feature>
        </div>
      </Section>

      <Section eyebrow={t("partners.eyebrow")} lead={t("partners.lead")} />

      <Section eyebrow={t("locations.eyebrow")}>
        <div className="grid-3">
          {offices.map((o) => (
            <Card key={o.place}>
              <CardTitle icon={faLocationDot}>{o.place}</CardTitle>
              {o.note && <p className="text-muted text-sm">{o.note}</p>}
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow={t("logos.eyebrow")}>
        <div className="grid-2">
          <LogoWall title={t("logos.operators")} logos={OPERATORS} countries />
          <LogoWall title={t("logos.partners")} logos={PARTNERS} />
        </div>
      </Section>

      <Section id="open-source" eyebrow={t("openSource.eyebrow")} title={t("openSource.title")}>
        <div className="grid-3">
          {OPEN_SOURCE.map((g) => (
            <Card key={g.key}>
              <CardTitle icon={faCode}>{tc(`openSource.${g.key}`)}</CardTitle>
              <ul>
                {g.repos.map((r) => (
                  <li key={r}><a className="font-mono text-sm" href={`${LINKS.github}/${r}`} rel="noopener">{r}</a></li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-6"><MoreLink href={LINKS.github}>{t("openSource.more")}</MoreLink></p>
      </Section>

      <Section eyebrow={t("careers.eyebrow")} lead={t("careers.lead")}>
        <ButtonLink href="/company/careers">{t("careers.button")}</ButtonLink>
      </Section>

      <CtaBand title={t("cta.title")} lead={t("cta.lead")} href="/contact" label={t("cta.label")} />
    </>
  );
}
