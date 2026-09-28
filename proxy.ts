import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { SITE_HEADER, siteFromHeaders } from "./app/lib/entity";
import { routing } from "./i18n/routing";

// Paths from the Hugo site that no longer exist and must not redirect
// anywhere: the mock login and the PHP form handlers (spec/redirects.txt).
const GONE = new Set(["/login", "/send_email.php", "/apply.php", "/newsletter.php"]);

// Locale routing: English stays at the bare paths, Spanish lives under /es.
// A first visit whose Accept-Language prefers any Spanish variant (es, es-419,
// es-CO, es-MX...) is redirected to /es; the NEXT_LOCALE cookie, set when a
// visitor switches language, wins over the header afterwards.
const intl = createMiddleware(routing);

const LOCALES: readonly string[] = routing.locales;

// Site routing: the domain decides the legal entity (app/lib/entity.ts). Pages
// are prerendered under /<site>/<locale>/...; the visitor never sees the site
// segment, this proxy adds it to the internal path after the locale is known.
export default function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname.replace(/\/+$/, "") || "/";
  if (GONE.has(path)) {
    return new NextResponse("Gone", { status: 410, headers: { "Cache-Control": "public, max-age=86400" } });
  }
  const site = siteFromHeaders(req.headers);
  const res = intl(req);
  if (res.headers.has("location")) {
    res.headers.set(SITE_HEADER, site);
    return res;
  }

  // Where next-intl would send the request: /<locale>/... either rewritten
  // (default locale, no prefix in the URL) or as requested (/es/...).
  const rewritten = res.headers.get("x-middleware-rewrite");
  const localized = rewritten ? new URL(rewritten).pathname : req.nextUrl.pathname;
  const first = localized.split("/")[1] ?? "";
  const target = req.nextUrl.clone();
  target.pathname = `/${site}${LOCALES.includes(first) ? localized : `/${routing.defaultLocale}${localized === "/" ? "" : localized}`}`;

  const out = NextResponse.rewrite(target);
  res.headers.forEach((value, key) => {
    if (key !== "x-middleware-rewrite" && key !== "x-middleware-next" && key !== "set-cookie") out.headers.set(key, value);
  });
  for (const cookie of res.cookies.getAll()) out.cookies.set(cookie);
  out.headers.set(SITE_HEADER, site);
  return out;
}

export const config = {
  // Everything except API routes, Next internals and files with an extension
  // (sitemap.xml, feed.xml, images), plus the PHP paths that must answer 410.
  matcher: ["/", "/(en|es)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)", "/send_email.php", "/apply.php", "/newsletter.php"],
};
