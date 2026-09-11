import { getTranslations } from "next-intl/server";

/**
 * Hero panel: what the trust line delivers, shown as a Proof-of-Trust, the
 * card a wallet displays before connecting to a service on Verana. The
 * resolution below is an example, labelled as such; the Verana Certified
 * Integrator line previews the certification directory. Labels live in
 * messages/{en,es}/home.json under proofOfTrust.
 */
export default async function ProofOfTrust() {
  const t = await getTranslations("home.proofOfTrust");
  const rows = t.raw("rows") as { label: string; detail: string }[];
  return (
    <div className="panel" aria-label={t("ariaLabel")}>
      <div className="panel-head">
        <b>{t("title")}</b>
        <span className="eyebrow">{t("tag")}</span>
      </div>
      <div className="pot-did">
        <span className="eyebrow">{t("resolving")}</span>
        <code>did:webvh:…:acme-integrators.example</code>
        <span className="pot-org">{t("org")}</span>
      </div>
      <ul className="pot-rows">
        {rows.map((r) => (
          <li key={r.label}>
            <span className="pot-check" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span className="pot-label">{r.label}</span>
            <span className="pot-detail">{r.detail}</span>
          </li>
        ))}
      </ul>
      <div className="pot-foot">
        <span className="eyebrow">{t("score")}</span>
        <span className="pot-score" aria-label={t("scoreAria")}><i /><i /><i /><i /><i className="off" /></span>
        <span className="pot-verdict">{t("verdict")}</span>
      </div>
    </div>
  );
}
