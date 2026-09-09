"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { EVENT_NAME, readStoredConsent } from "@/app/lib/consent";

/** Google Analytics 4, loaded only after consent. Empty id disables it. */
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(readStoredConsent() === "accepted");
    function handleChange(e: Event) {
      setConsented((e as CustomEvent<"accepted" | "declined">).detail === "accepted");
    }
    window.addEventListener(EVENT_NAME, handleChange as EventListener);
    return () => window.removeEventListener(EVENT_NAME, handleChange as EventListener);
  }, []);

  if (!GA_MEASUREMENT_ID || !consented) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
