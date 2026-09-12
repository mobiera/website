import { getTranslations } from "next-intl/server";

/**
 * Verifiable Credentials hero: a phone running a fictional wallet, caught at
 * the moment of trust. A demo bank asks to connect, the wallet shows the
 * bank's Proof-of-Trust (credentials checked against the Verana registry) and
 * the credential it asks for, with Share and Decline; a "credential received"
 * notification overlaps the top. Pure markup and CSS (.wp-* in globals.css),
 * so it follows the theme. Text in trust.phone (messages/*). Design C of
 * 12 September 2026.
 */
export default async function WalletPhone() {
  const t = await getTranslations("trust.phone");
  return (
    <div className="wp-stage" role="img" aria-label={t("ariaLabel")}>
      <div className="wp-ring" aria-hidden="true" />
      <div className="wp-scale">
      <div className="wp-notif" aria-hidden="true">
        <i />
        <div><b>{t("notif.title")}</b><small>{t("notif.body")}</small></div>
        <em>{t("notif.when")}</em>
      </div>
      <div className="wp-phone" aria-hidden="true">
        <div className="wp-screen">
          <div className="wp-status"><span>9:41</span><span>●●● ▮</span></div>
          <div className="wp-apphead"><b>{t("app")}</b><span className="wp-avatar" /></div>
          <div className="wp-list">
            <div className="wp-vc"><span className="wp-tab">{t("card.tab")}</span><b>{t("card.holder")}</b><span>{t("card.type")}</span></div>
          </div>
          <div className="wp-dim" />
          <div className="wp-sheet">
            <div className="wp-grab" />
            <div className="wp-who"><i /><div><b>{t("request.title")}</b><small>did:webvh:…:novara.example</small></div></div>
            <div className="wp-pot">
              <div className="wp-pot-h"><span>Proof-of-Trust</span><span className="wp-score"><i /><i /><i /><i /><i className="off" /></span></div>
              <div className="wp-pot-l"><i>✓</i>{t("request.org")}</div>
              <div className="wp-pot-l"><i>✓</i>{t("request.service")}</div>
            </div>
            <p className="wp-ask">{t("request.asks")} <b>{t("request.claims")}</b></p>
            <div className="wp-mini"><i /><div><b>{t("card.type")}</b><small>{t("card.issuer")}</small></div></div>
            <div className="wp-two"><span className="wp-cta ghost">{t("request.decline")}</span><span className="wp-cta">{t("request.share")}</span></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
