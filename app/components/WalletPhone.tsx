import { getTranslations } from "next-intl/server";

const MARK = "M85 42.6 69.5 27A9.7 9.7 0 0 0 55 27l-5.5 5.4L44 27a9.7 9.7 0 0 0-14.5 0L14 42.6a9.7 9.7 0 0 0 0 14.5L29.6 72.7a9.7 9.7 0 0 0 14.5 0l5.4-5.4 5.4 5.4a9.7 9.7 0 0 0 14.6 0L85 57.1a9.7 9.7 0 0 0 0-14.5ZM38.9 67.4a2.9 2.9 0 0 1-4 0L19.3 51.9a2.9 2.9 0 0 1 0-4l15.6-15.6a2.9 2.9 0 0 1 4 0l5.4 5.4-4.9 4.9a10.3 10.3 0 0 0 0 14.6l4.9 4.9-5.4 5.4Zm15.5-19.6a2.9 2.9 0 0 1 0 4l-4.9 4.9-4.9-4.9a2.9 2.9 0 0 1 0-4l4.9-4.9 4.9 4.9Zm5.2-5.3-4.8-4.8 5.4-5.4a2.9 2.9 0 0 1 4 0l15.6 15.6a2.9 2.9 0 0 1 0 4L64.2 67.4a2.9 2.9 0 0 1-4 0l-5.4-5.4 4.9-4.9a10.3 10.3 0 0 0 0-14.6";

/**
 * Verifiable Credentials hero: a phone running a fictional wallet at rest.
 * The home screen with the three example credentials stacked as cards, the
 * recent activity and a tab bar. Pure markup and CSS (.wp-* in globals.css),
 * so it follows the theme; the phone is drawn at 296x612 and scaled to the
 * hero height. Text in trust.phone (messages/*). Design A of 12 September
 * 2026.
 */
export default async function WalletPhone() {
  const t = await getTranslations("trust.phone");
  const cards = ["id", "business", "cert"] as const;
  const activity = t.raw("activity") as { text: string; when: string }[];
  const tabs = t.raw("tabs") as string[];
  return (
    <div className="wp-stage" role="img" aria-label={t("ariaLabel")}>
      <div className="wp-ring" aria-hidden="true" />
      <div className="wp-scale" aria-hidden="true">
        <div className="wp-phone">
          <div className="wp-screen">
            <div className="wp-status"><span>9:41</span><span>●●● ▮</span></div>
            <div className="wp-apphead"><b>{t("app")}</b><span className="wp-avatar" /></div>
            <p className="wp-sub">{t("sub")}</p>
            <div className="wp-list">
              {cards.map((c) => (
                <div key={c} className={`wp-vc wp-${c}`}>
                  <span className="wp-tab">{t(`cards.${c}.tab`)}</span>
                  <b>{t(`cards.${c}.holder`)}</b>
                  <span>{t(`cards.${c}.type`)}</span>
                  <span>{t(`cards.${c}.issuer`)}</span>
                  {c === "cert" && <svg className="wp-mark" viewBox="11 24 78 52"><path d={MARK} fill="currentColor" /></svg>}
                </div>
              ))}
            </div>
            <div className="wp-act">
              <span className="wp-act-h">{t("activityTitle")}</span>
              {activity.map((a) => (
                <div key={a.text} className="wp-act-i"><i />{a.text}<small>{a.when}</small></div>
              ))}
            </div>
            <div className="wp-tabbar">
              {tabs.map((label, i) => (
                <span key={label} className={i === 0 ? "on" : undefined}><i />{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
