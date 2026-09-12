import { NextRequest, NextResponse } from "next/server";
import { hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { sendEmail, escapeHtml } from "@/app/lib/email";
import { emailLayout } from "@/app/lib/email-layout";
import { alertOps } from "@/app/lib/ops-alert";
import { contactRecipients, smtpServer } from "@/app/lib/smtp";
import { CONTACT_TOPICS, topicLabel, type ContactTopic } from "@/app/lib/site";
import { HTML_LANG, routing, type Locale } from "@/i18n/routing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MIN_MESSAGE = 50;
const MAX_MESSAGE = 4000;
const MAX_CV_BYTES = 10 * 1024 * 1024;
const MIN_ELAPSED_MS = 2500;

// Naive in-memory rate limit: the deployment runs a single replica, so a
// per-process map is a sufficient best-effort guard (same as 2060.io-website).
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function inquiryHtml(rows: [string, string][], message: string): string {
  const table = rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0;color:#5A6285;white-space:nowrap;">${k}</td><td style="padding:2px 0;">${escapeHtml(v)}</td></tr>`)
    .join("");
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="font-size:14px;margin:0 0 16px;">${table}</table>
    <p style="margin:0 0 6px;color:#5A6285;">Message</p>
    <div style="border-left:2px solid #8353F2;padding:2px 0 2px 12px;white-space:pre-wrap;">${escapeHtml(message)}</div>
    <p style="margin:16px 0 0;color:#5A6285;font-size:12px;">Reply to this email to answer directly.</p>`;
}

type Cv = { filename: string; content: Buffer; contentType: string };

/** Acknowledgement to the visitor, in the visitor's language. */
async function acknowledgementEmail(locale: Locale, name: string, topic: ContactTopic): Promise<{ subject: string; html: string }> {
  const t = await getTranslations({ locale, namespace: "email" });
  const tc = await getTranslations({ locale, namespace: "contact" });
  const bodyHtml = `
    <p style="margin:0 0 12px;">${t("ack.body", { topic: tc(`topics.${topic}`) })}</p>
    <p style="margin:0 0 12px;color:#5A6285;font-size:12px;">${t("ack.auto")}</p>
    <p style="margin:0;">${t("ack.signoff")}</p>`;
  return {
    subject: t("ack.subject"),
    html: emailLayout({ heading: t("ack.heading", { name: escapeHtml(name) }), bodyHtml, lang: HTML_LANG[locale], footer: t("layout.footer") }),
  };
}

export async function POST(req: NextRequest) {
  let data: Record<string, string> = {};
  let cv: Cv | undefined;
  const contentType = req.headers.get("content-type") ?? "";
  try {
    if (contentType.includes("multipart/form-data")) {
      const fd = await req.formData();
      for (const [key, value] of fd.entries()) {
        if (typeof value === "string") {
          data[key] = value;
        } else if (key === "cv" && value.size > 0) {
          if (value.size > MAX_CV_BYTES) return NextResponse.json({ ok: false, error: "validation", fields: ["cv"] }, { status: 413 });
          if (value.type !== "application/pdf") return NextResponse.json({ ok: false, error: "validation", fields: ["cv"] }, { status: 422 });
          cv = { filename: value.name || "cv.pdf", content: Buffer.from(await value.arrayBuffer()), contentType: "application/pdf" };
        }
      }
    } else {
      const json = (await req.json()) as Record<string, unknown>;
      for (const [k, v] of Object.entries(json)) data[k] = String(v ?? "");
    }
  } catch {
    return NextResponse.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Honeypot: a filled hidden field means a bot. Pretend success, do nothing,
  // but say so in the log: a silent drop once hid a real problem.
  if ((data.hp_check ?? "").trim() !== "") {
    console.info("[contact] dropped: honeypot filled");
    return NextResponse.json({ ok: true });
  }

  // Time-to-submit: human submissions take more than a couple of seconds. The
  // browser reports its own elapsed time; comparing a browser timestamp with
  // this server's clock dropped every visitor whose clock ran ahead.
  const elapsed = Number(data.elapsed_ms);
  if (Number.isFinite(elapsed) && elapsed >= 0 && elapsed < MIN_ELAPSED_MS) {
    console.info(`[contact] dropped: submitted after ${Math.round(elapsed)} ms`);
    return NextResponse.json({ ok: true });
  }

  const topic = (data.topic ?? "").trim();
  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();
  const consent = data.consent === "true" || data.consent === "on";

  const fields: string[] = [];
  if (!CONTACT_TOPICS.some((t) => t.value === topic)) fields.push("topic");
  if (!name) fields.push("name");
  if (!EMAIL_RE.test(email)) fields.push("email");
  if (message.length < MIN_MESSAGE || message.length > MAX_MESSAGE) fields.push("message");
  if (!consent) fields.push("consent");
  if (fields.length > 0) return NextResponse.json({ ok: false, error: "validation", fields }, { status: 422 });

  const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });

  const organization = (data.organization ?? "").trim();
  const profile = (data.profile ?? "").trim();
  // Validated above against CONTACT_TOPICS.
  const topicValue = topic as ContactTopic;
  const label = topicLabel(topic);
  // Language of the form the visitor used; only known locales, default English.
  const locale: Locale = hasLocale(routing.locales, data.locale) ? data.locale : routing.defaultLocale;

  // Without SMTP (local dev) do not fail the user: log and report success.
  if (!smtpServer()) {
    console.warn("[contact] SMTP not configured; inquiry not delivered:", { topic, name, email, organization, locale, cv: cv?.filename });
    return NextResponse.json({ ok: true });
  }

  try {
    const to = contactRecipients(topic);
    if (to.length === 0) throw new Error("no recipients configured (CONTACT_TO)");
    await sendEmail({
      to,
      replyTo: `${name} <${email}>`,
      subject: `[mobiera.io contact] ${label}: ${name}`,
      html: emailLayout({
        heading: `New inquiry: ${label}`,
        bodyHtml: inquiryHtml(
          [["Topic", label], ["Name", name], ["Email", email], ["Organization", organization], ["Profile", profile], ["Language", HTML_LANG[locale]], ["CV", cv ? cv.filename : ""], ["Consent", new Date().toISOString()]],
          message,
        ),
      }),
      attachments: cv ? [cv] : undefined,
    });
    console.info(`[contact] ${label} inquiry emailed to ${to.length} recipient(s)`);
  } catch (err) {
    console.error("[contact] delivery failed", err, { topic, name, email, organization });
    await alertOps(`Contact form (mobiera.io): email delivery failed for ${name} <${email}> (${label}). ${String(err).slice(0, 300)}`);
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }

  // Acknowledgement to the visitor. Best effort: the inquiry is already
  // delivered, so a failure here is logged and does not fail the request.
  try {
    const ack = await acknowledgementEmail(locale, name, topicValue);
    await sendEmail({ to: email, subject: ack.subject, html: ack.html });
  } catch (err) {
    console.error("[contact] acknowledgement failed", err, { email, locale });
  }

  return NextResponse.json({ ok: true });
}
