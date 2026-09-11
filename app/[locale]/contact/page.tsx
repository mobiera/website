import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faBuilding, faLink, faRoute } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "@/app/components/ContactForm";
import { Card, CardTitle, PageHero, Section } from "@/app/components/ui";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LEGAL, LINKS } from "@/app/lib/site";

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/contact") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("contact");
  const bullets = t.raw("routed.bullets") as string[];
  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} lead={t("hero.lead")} ground={false} />

      <Section>
        <div className="grid-2 gap-10 items-start">
          <div className="max-w-[720px]">
            <ContactForm />
          </div>
          <div className="grid gap-5">
            <Card>
              <CardTitle icon={faRoute}>{t("routed.title")}</CardTitle>
              <ul>
                {bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </Card>
            <Card>
              <CardTitle icon={faLink}>{t("other.title")}</CardTitle>
              <ul>
                <li><a className="text-link" href={LINKS.github} rel="noopener">github.com/mobiera</a></li>
                <li><a className="text-link" href={LINKS.docs} rel="noopener">docs.mobiera.io</a></li>
                <li><a className="text-link" href={LINKS.linkedin} rel="noopener">linkedin.com/company/mobiera-sas</a></li>
                <li>{t("other.inPerson")}</li>
              </ul>
            </Card>
            <Card>
              <CardTitle icon={faBuilding}>{t("who.title")}</CardTitle>
              <address className="not-italic text-muted">
                <strong className="text-ink block">{LEGAL.name}, NIT {LEGAL.nit}</strong>
                {LEGAL.address}
              </address>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}
