import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { faBrain, faCommentSms, faComments, faCubes, faPlug, faReceipt } from "@fortawesome/free-solid-svg-icons";
import AiOneHub from "@/app/components/AiOneHub";
import { ButtonLink, Card, CardTitle, CtaBand, Feature, PageHero, Section } from "@/app/components/ui";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { LINKS } from "@/app/lib/site";

const STACK_ICONS = [faBrain, faPlug, faCubes, faReceipt];

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "aiAgents" });
  return { title: t("meta.title"), description: t("meta.description"), alternates: alternates(locale, "/telecom/ai-agents") };
}

export default async function Page({ params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("aiAgents");
  const stackFeatures = t.raw("stack.features") as { title: string; body: string }[];
  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} lead={t("hero.lead")}>
        <ButtonLink href="/contact?topic=ai-agents" variant="primary">{t("hero.cta")}</ButtonLink>
      </PageHero>

      <Section eyebrow={t("channels.eyebrow")}>
        <div className="grid-2">
          <Card>
            <CardTitle icon={faCommentSms}>{t("channels.sms.title")}</CardTitle>
            <p className="text-muted">{t("channels.sms.body")}</p>
          </Card>
          <Card>
            <CardTitle icon={faComments}>{t("channels.hologram.title")}</CardTitle>
            <p className="text-muted">{t("channels.hologram.body")}</p>
          </Card>
        </div>
        <div className="illus-block mt-6"><AiOneHub /></div>
        <p className="text-muted">{t("channels.note")}</p>
      </Section>

      <Section eyebrow={t("verifiable.eyebrow")} title={t("verifiable.title")} lead={t("verifiable.lead")}>
        <p className="text-muted max-w-[66ch]">{t("verifiable.pin")}</p>
        <p className="mt-5"><ButtonLink href={LINKS.veranaIdentity}>{t("verifiable.cta")}</ButtonLink></p>
      </Section>

      <Section eyebrow={t("stack.eyebrow")}>
        <div className="grid-2">
          {stackFeatures.map((f, i) => (
            <Feature key={f.title} icon={STACK_ICONS[i]} title={f.title}><p>{f.body}</p></Feature>
          ))}
        </div>
      </Section>

      <Section eyebrow={t("questions.eyebrow")} lead={t("questions.lead")} />

      <Section eyebrow={t("hologram.eyebrow")} lead={t("hologram.lead")}>
        <ButtonLink href={LINKS.hologram}>{t("hologram.cta")}</ButtonLink>
      </Section>

      <Section eyebrow={t("operators.eyebrow")} title={t("operators.title")} />

      <CtaBand title={t("cta.title")} lead={t("cta.lead")} href="/contact?topic=ai-agents" label={t("cta.label")} />
    </>
  );
}
