"use client";

import { useEffect, useState } from "react";
import { ConsentValue, EVENT_NAME, STORAGE_KEY, readStoredConsent } from "@/app/lib/consent";

export default function CookiePreferences() {
  const [value, setValue] = useState<ConsentValue | null>(null);

  useEffect(() => {
    setValue(readStoredConsent());
  }, []);

  function record(v: ConsentValue) {
    try {
      window.localStorage.setItem(STORAGE_KEY, v);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent<ConsentValue>(EVENT_NAME, { detail: v }));
    setValue(v);
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" className="btn" onClick={() => record("declined")}>Essential only</button>
      <button type="button" className="btn btn-primary" onClick={() => record("accepted")}>Accept analytics</button>
      <span className="text-sm text-muted">Current choice: {value === "accepted" ? "analytics accepted" : value === "declined" ? "essential only" : "not made yet"}.</span>
    </div>
  );
}
