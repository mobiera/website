import { getTranslations } from "next-intl/server";

/**
 * Certification hero: what a customer's wallet shows when it meets a
 * certified integrator. The company's DID resolving, its organization and
 * service credentials, and the Verana Certified Integrator line highlighted,
 * issued by Mobiera and valid; a chip ties it to the directory generated from
 * the Trust Graph. Example data, labelled as such. Reuses the Proof-of-Trust
 * panel styles (.panel, .pot-*) plus .cert-proof in globals.css. Design C of
 * 12 September 2026.
 */
export default async function CertifiedProof() {
  const t = await getTranslations("certification.proof");
  const rows = t.raw("rows") as { label: string; detail: string; hi?: boolean }[];
  return (
    <figure className="proof-stage">
      <div className="panel cert-proof" role="img" aria-label={t("ariaLabel")}>
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
            <li key={r.label} className={r.hi ? "hi" : undefined}>
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
        <div className="pot-dir" aria-hidden="true">
          <i />
          <div><b>{t("dir.title")}</b><small>{t("dir.body")}</small></div>
        </div>
      </div>
      <figcaption className="eyebrow proof-cap">{t("caption")}</figcaption>
    </figure>
  );
}
