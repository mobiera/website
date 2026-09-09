import { SITE_URL } from "@/app/lib/site";

// Branded HTML shell for transactional email. Table-based with inline styles
// for broad client support. Colors follow the site's light tokens.
const VIOLET = "#8353F2";
const VIOLET_DEEP = "#5E3ABE";
const INK = "#12183A";
const MUTED = "#5A6285";
const RULE = "#DCDFEE";
const SURFACE = "#F4F5FB";
const CARD = "#FFFFFF";
const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

export function emailLayout(opts: { heading?: string; bodyHtml: string }): string {
  const logo = `${SITE_URL}/images/favicon/android-chrome-192x192.png`;
  const heading = opts.heading
    ? `<h1 style="margin:0 0 14px;font-family:${FONT};font-size:20px;line-height:1.3;font-weight:600;color:${INK};">${opts.heading}</h1>`
    : "";
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:24px 12px;background:${SURFACE};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:560px;background:${CARD};border:1px solid ${RULE};border-radius:8px;">
        <tr><td style="padding:20px 28px;border-bottom:1px solid ${RULE};">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
            <td style="vertical-align:middle;"><img src="${logo}" alt="" width="28" height="28" style="display:block;border:0;border-radius:6px;"></td>
            <td style="vertical-align:middle;padding-left:10px;font-family:${FONT};font-size:16px;font-weight:700;color:${INK};">Mobiera</td>
          </tr></table>
        </td></tr>
        <tr><td style="padding:28px;font-family:${FONT};font-size:14px;line-height:1.6;color:${INK};">${heading}${opts.bodyHtml}</td></tr>
        <tr><td style="padding:18px 28px;border-top:1px solid ${RULE};font-family:${FONT};font-size:12px;line-height:1.5;color:${MUTED};">
          Mobiera SAS, Bogotá D.C., Colombia · founding member of the Verana Foundation.<br>
          <a href="${SITE_URL}" style="color:${VIOLET_DEEP};text-decoration:none;">mobiera.io</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export const EMAIL_ACCENT = VIOLET;
