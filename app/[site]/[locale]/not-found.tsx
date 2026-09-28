import { useTranslations } from "next-intl";
import { ButtonLink, PageHero } from "@/app/components/ui";

export default function NotFound() {
  const t = useTranslations("common.notFound");
  return (
    <PageHero eyebrow="404" title={t("title")} lead={t("lead")}>
      <ButtonLink href="/" variant="primary">{t("home")}</ButtonLink>
      <ButtonLink href="/contact">{t("contact")}</ButtonLink>
    </PageHero>
  );
}
