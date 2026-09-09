type SmtpOptions = {
  host: string;
  port: number;
  secure: boolean;
  auth: { user: string; pass: string };
};

/**
 * SMTP transport config for Nodemailer from MAIL_* env (same naming as
 * 2060.io-website). Returns null when not configured so callers can skip
 * sending. No nodemailer import here, just env to options.
 */
export function smtpServer(): SmtpOptions | null {
  const host = process.env.MAIL_HOST;
  const user = process.env.MAIL_USERNAME;
  const pass = process.env.MAIL_PASSWORD;
  if (!host || !user || !pass) return null;

  const port = Number(process.env.MAIL_PORT ?? "587");
  const secure = (process.env.MAIL_ENCRYPTION ?? "").toLowerCase() === "ssl" || port === 465;
  return { host, port, secure, auth: { user, pass } };
}

/** The From header: `MAIL_FROM_NAME <MAIL_FROM_ADDRESS>`, or just the address. */
export function mailFrom(): string {
  const address = process.env.MAIL_FROM_ADDRESS ?? "no-reply@mobiera.com";
  const name = process.env.MAIL_FROM_NAME ?? "Mobiera";
  return name ? `${name} <${address}>` : address;
}

/** Recipients for a contact topic: CONTACT_TO_<TOPIC> then CONTACT_TO. */
export function contactRecipients(topic: string): string[] {
  const key = `CONTACT_TO_${topic.toUpperCase().replace(/-/g, "_")}`;
  const raw = process.env[key] || process.env.CONTACT_TO || "";
  return [...new Set(raw.split(",").map((s) => s.trim()).filter(Boolean))];
}
