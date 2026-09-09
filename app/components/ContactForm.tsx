"use client";

import { useEffect, useRef, useState } from "react";
import { CONTACT_TOPICS } from "@/app/lib/site";

const MIN_MESSAGE = 50;
const MAX_MESSAGE = 4000;
const MAX_CV_BYTES = 10 * 1024 * 1024;

const VALIDATION_MSG = `Please complete the required fields, a valid email and a message of at least ${MIN_MESSAGE} characters, then try again.`;
const SUBMIT_MSG = "We could not send your message just now. Please try again in a moment.";

export default function ContactForm({ defaultTopic = "", careers = false }: { defaultTopic?: string; careers?: boolean }) {
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
      setErrorMsg(VALIDATION_MSG);
      setStatus("error");
      return;
    }
    const cvInput = form.elements.namedItem("cv") as HTMLInputElement | null;
    const cv = cvInput?.files?.[0];
    if (cv && cv.size > MAX_CV_BYTES) {
      setErrorMsg("The CV must be a PDF of 10 MB or less.");
      setStatus("error");
      return;
    }

    const fd = new FormData(form);
    fd.set("rendered_at", renderedAt);
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
      setErrorMsg(SUBMIT_MSG);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div ref={bannerRef} role="status" aria-live="polite" className="card banner-ok">
        <h3>Message sent</h3>
        <p className="text-muted mt-2">Thanks. Your message is on its way to the right person; expect an answer within two business days.</p>
        <button type="button" className="btn btn-primary mt-4" onClick={() => setStatus("idle")}>Send another message</button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form className="form" onSubmit={handleSubmit} noValidate encType="multipart/form-data">
      {status === "error" && (
        <div ref={bannerRef} role="alert" aria-live="assertive" className="card banner-err">
          <h3>Could not send your message</h3>
          <p className="text-muted mt-2 text-sm">{errorMsg}</p>
        </div>
      )}

      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "auto", width: 1, height: 1, overflow: "hidden" }}>
        <label>Leave this field empty: <input name="website_hp" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <input type="hidden" name="rendered_at" value={renderedAt} readOnly />

      <div>
        <label htmlFor="topic">Topic <span className="req" aria-hidden="true">*</span></label>
        <select id="topic" name="topic" required className="field" value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="">Select one</option>
          {CONTACT_TOPICS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
        </select>
      </div>

      <div className="grid-2">
        <div>
          <label htmlFor="name">Name <span className="req" aria-hidden="true">*</span></label>
          <input id="name" name="name" type="text" required autoComplete="name" className="field" />
        </div>
        <div>
          <label htmlFor="email">Email <span className="req" aria-hidden="true">*</span></label>
          <input id="email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
      </div>

      <div className="grid-2">
        <div>
          <label htmlFor="organization">Organization <span className="text-muted text-xs">(optional)</span></label>
          <input id="organization" name="organization" type="text" autoComplete="organization" className="field" />
        </div>
        <div>
          <label htmlFor="profile">LinkedIn or GitHub profile <span className="text-muted text-xs">(optional)</span></label>
          <input id="profile" name="profile" type="url" autoComplete="url" className="field" placeholder="https://" />
        </div>
      </div>

      <div>
        <label htmlFor="message">Message <span className="req" aria-hidden="true">*</span></label>
        <textarea id="message" name="message" rows={6} required minLength={MIN_MESSAGE} maxLength={MAX_MESSAGE} className="field" value={message} onChange={(e) => setMessage(e.target.value)} placeholder={isCareers ? "What have you shipped, and what would you like to work on?" : "What are you building or evaluating, and what is the question?"} />
        <p className="text-xs text-muted mt-2">{message.length} / {MAX_MESSAGE} (min {MIN_MESSAGE})</p>
      </div>

      {isCareers && (
        <div>
          <label htmlFor="cv">CV <span className="text-muted text-xs">(PDF, 10 MB max)</span></label>
          <input id="cv" name="cv" type="file" accept="application/pdf" className="field" />
        </div>
      )}

      <div className="flex items-start gap-3 pt-1">
        <input id="consent" name="consent" type="checkbox" required className="mt-1" />
        <label htmlFor="consent" className="text-sm text-muted">
          I consent to Mobiera SAS storing this message to answer me. See the <a href="/privacy" className="text-link">privacy policy</a>. <span className="req" aria-hidden="true">*</span>
        </label>
      </div>

      <div className="pt-2 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={submitting}>{submitting ? "Sending" : "Send"}</button>
        <span className="text-xs text-muted">Every message is routed to the right person. We answer within two business days.</span>
      </div>
    </form>
  );
}
