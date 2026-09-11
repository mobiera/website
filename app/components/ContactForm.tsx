"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { CONTACT_TOPICS } from "@/app/lib/site";

const MIN_MESSAGE = 50;
const MAX_MESSAGE = 4000;
const MAX_CV_BYTES = 10 * 1024 * 1024;

export default function ContactForm({ defaultTopic = "", careers = false }: { defaultTopic?: string; careers?: boolean }) {
  const t = useTranslations("contact");
  const locale = useLocale();
  const [topic, setTopic] = useState(defaultTopic);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [renderedAt, setRenderedAt] = useState("");
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setRenderedAt(String(Date.now()));
    const params = new URLSearchParams(window.location.search);
    const t = params.get("topic");
    if (t && CONTACT_TOPICS.some((o) => o.value === t)) setTopic(t);
  }, []);

  useEffect(() => {
    if (status === "success" || status === "error") {
      bannerRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [status]);

  const isCareers = careers || topic === "careers";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    const honeypot = (form.elements.namedItem("website_hp") as HTMLInputElement)?.value;
    if (honeypot) {
      setStatus("success");
      return;
    }
    if (!form.checkValidity() || message.trim().length < MIN_MESSAGE) {
      form.reportValidity();
      setErrorMsg(t("form.validation", { min: MIN_MESSAGE }));
      setStatus("error");
      return;
    }
    const cvInput = form.elements.namedItem("cv") as HTMLInputElement | null;
    const cv = cvInput?.files?.[0];
    if (cv && cv.size > MAX_CV_BYTES) {
      setErrorMsg(t("form.cvTooLarge"));
      setStatus("error");
      return;
    }

    const fd = new FormData(form);
    fd.set("rendered_at", renderedAt);
    fd.set("locale", locale);
    fd.set("consent", (form.elements.namedItem("consent") as HTMLInputElement)?.checked ? "true" : "false");

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
      setTopic(defaultTopic);
      setMessage("");
    } catch {
      setErrorMsg(t("form.submitError"));
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={bannerRef} role="status" aria-live="polite" className="card banner-ok">
        <h3>{t("form.success.title")}</h3>
        <p className="text-muted mt-2">{t("form.success.body")}</p>
        <button type="button" className="btn btn-primary mt-4" onClick={() => setStatus("idle")}>{t("form.success.again")}</button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form className="form" onSubmit={handleSubmit} noValidate encType="multipart/form-data">
      {status === "error" && (
        <div ref={bannerRef} role="alert" aria-live="assertive" className="card banner-err">
          <h3>{t("form.error.title")}</h3>
          <p className="text-muted mt-2 text-sm">{errorMsg}</p>
        </div>
      )}

      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label>{t("form.honeypot")} <input name="website_hp" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <input type="hidden" name="rendered_at" value={renderedAt} readOnly />
      <input type="hidden" name="locale" value={locale} readOnly />

      <div>
        <label htmlFor="topic">{t("form.topic")} <span className="req" aria-hidden="true">*</span></label>
        <select id="topic" name="topic" required className="field" value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="">{t("form.selectOne")}</option>
          {CONTACT_TOPICS.map((o) => <option key={o.value} value={o.value}>{t(`topics.${o.value}`)}</option>)}
        </select>
      </div>

      <div className="grid-2">
        <div>
          <label htmlFor="name">{t("form.name")} <span className="req" aria-hidden="true">*</span></label>
          <input id="name" name="name" type="text" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="email">{t("form.email")} <span className="req" aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
      </div>

      <div className="grid-2">
        <div>
          <label htmlFor="organization">{t("form.organization")} <span className="text-muted text-xs">{t("form.optional")}</span></label>
          <input id="organization" name="organization" type="text" autoComplete="organization" className="field" />
        </div>
        <div>
          <label htmlFor="profile">{t("form.profile")} <span className="text-muted text-xs">{t("form.optional")}</span></label>
          <input id="profile" name="profile" type="url" autoComplete="url" className="field" placeholder="https://" />
        </div>
      </div>

      <div>
        <label htmlFor="message">{t("form.message")} <span className="req" aria-hidden="true">*</span></label>
        <textarea id="message" name="message" rows={6} required minLength={MIN_MESSAGE} maxLength={MAX_MESSAGE} className="field" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={isCareers ? t("form.placeholderCareers") : t("form.placeholderDefault")} />
        <p className="text-xs text-muted mt-2">{t("form.counter", { count: message.length, max: MAX_MESSAGE, min: MIN_MESSAGE })}</p>
      </div>

      {isCareers && (
        <div>
          <label htmlFor="cv">{t("form.cv")} <span className="text-muted text-xs">{t("form.cvHint")}</span></label>
          <input id="cv" name="cv" type="file" accept="application/pdf" className="field" />
        </div>
      )}

      <div className="flex items-start gap-3 pt-1">
        <input id="consent" name="consent" type="checkbox" required className="mt-1" />
        <label htmlFor="consent" className="text-sm text-muted">
          {t.rich("form.consent", { link: (chunks) => <Link href="/privacy" className="text-link">{chunks}</Link> })} <span className="req" aria-hidden="true">*</span>
        </label>
      </div>

      <div className="pt-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={submitting}>{submitting ? t("form.sending") : t("form.send")}</button>
        <span className="text-xs text-muted">{t("form.footnote")}</span>
      </div>
    </form>
  );
}
