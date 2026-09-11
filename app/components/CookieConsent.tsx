"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ConsentValue, EVENT_NAME, STORAGE_KEY, readStoredConsent } from "@/app/lib/consent";

/** First-visit consent dialog. Nothing analytic loads before a choice. */
export default function CookieConsent() {
  const t = useTranslations("common.cookieBanner");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      if (readStoredConsent() === null) setVisible(true);
    });
    return () => window.cancelAnimationFrame(id);
  }, []);

  function record(value: ConsentValue) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* cannot remember, still honor the session */
    }
    window.dispatchEvent(new CustomEvent<ConsentValue>(EVENT_NAME, { detail: value }));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div role="dialog" aria-modal="false" aria-labelledby="cookie-title" aria-describedby="cookie-body" className="cookie-banner">
      <div className="container-x flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <div className="flex-1 text-sm leading-relaxed">
          <p id="cookie-title" className="font-display font-semibold text-ink">{t("title")}</p>
          <p id="cookie-body" className="text-muted">
            {t.rich("body", { link: (chunks) => <Link href="/cookies" className="text-link">{chunks}</Link> })}
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button type="button" className="btn" onClick={() => record("declined")}>{t("essential")}</button>
          <button type="button" className="btn btn-primary" onClick={() => record("accepted")} autoFocus>{t("accept")}</button>
        </div>
      </div>
    </div>
  );
}
