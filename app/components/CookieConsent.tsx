"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ConsentValue, EVENT_NAME, STORAGE_KEY, readStoredConsent } from "@/app/lib/consent";

/** First-visit consent dialog. Nothing analytic loads before a choice. */
export default function CookieConsent() {
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
          <p id="cookie-title" className="font-display font-semibold text-ink">Cookies</p>
          <p id="cookie-body" className="text-muted">
            We use essential cookies to run this site and, with your consent, analytics cookies to improve it. We do not sell data. See the{" "}
            <Link href="/cookies" className="text-link">cookie policy</Link>.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button type="button" className="btn" onClick={() => record("declined")}>Essential only</button>
          <button type="button" className="btn btn-primary" onClick={() => record("accepted")} autoFocus>Accept all</button>
        </div>
      </div>
    </div>
  );
}
