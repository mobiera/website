
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

// `site` is the origin and domain the email speaks for (entity.ts); `lang` the
// BCP 47 tag of the body (default "en"); `footer` the footer line naming the
// legal entity, translated by the caller (email namespace, layout.footer) so
// this module stays free of next-intl.
export function emailLayout(opts: { heading?: string; bodyHtml: string; site: { url: string; domain: string }; footer: string; lang?: string }): string {
  const logo = `${opts.site.url}/images/favicon/android-chrome-192x192.png`;
  const lang = opts.lang ?? "en";
  const footer = opts.footer;
  const heading = opts.heading
    ? `<h1 style="margin:0 0 14px;font-family:${FONT};font-size:20px;line-height:1.3;font-weight:600;color:${INK};">${opts.heading}</h1>`
    : "";
  return `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
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
          ${footer}<br>
          <a href="${opts.site.url}" style="color:${VIOLET_DEEP};text-decoration:none;">${opts.site.domain}</a>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}

export const EMAIL_ACCENT = VIOLET;
