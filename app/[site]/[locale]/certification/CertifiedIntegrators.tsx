import { getTranslations } from "next-intl/server";
import { CardTitle } from "@/app/components/ui";
import { getCertifiedIntegrators, isDirectoryConfigured } from "@/app/lib/trust-graph";
import { faBuilding, faUsers } from "@fortawesome/free-solid-svg-icons";

export default async function CertifiedIntegrators() {
  const t = await getTranslations("certification");
  const entries = await getCertifiedIntegrators();
  if (entries.length === 0) {
    return (
      <div className="card max-w-[70ch]">
        <CardTitle icon={faUsers}>{t("integrators.emptyTitle")}</CardTitle>
        <p className="text-muted">
          {t("integrators.emptyBody")}
          {!isDirectoryConfigured() && ` ${t("integrators.emptyDirectoryOff")}`}
        </p>
      </div>
    );
  }
  return (
    <ul className="grid-3" aria-label={t("integrators.listLabel")}>
      {entries.map((e) => (
        <li key={e.did} className="card">
          <CardTitle icon={faBuilding}>{e.name}</CardTitle>
          {e.country && <span className="eyebrow">{e.country}</span>}
          <p className="font-mono text-xs text-muted break-all">{e.did}</p>
          <p className="flex flex-wrap gap-4">
            <a className="more" href={e.verifyUrl} rel="noopener">{t("integrators.verify")}</a>
            {e.website && <a className="more" href={e.website} rel="noopener">{t("integrators.website")}</a>}
          </p>
        </li>
      ))}
    </ul>
  );
}
