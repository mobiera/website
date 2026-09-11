import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

// Paths from the Hugo site that no longer exist and must not redirect
// anywhere: the mock login and the PHP form handlers (spec/redirects.txt).
const GONE = new Set(["/login", "/send_email.php", "/apply.php", "/newsletter.php"]);

// Locale routing: English stays at the bare paths, Spanish lives under /es.
// A first visit whose Accept-Language prefers any Spanish variant (es, es-419,
// es-CO, es-MX...) is redirected to /es; the NEXT_LOCALE cookie, set when a
// visitor switches language, wins over the header afterwards.
const intl = createMiddleware(routing);

export default function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname.replace(/\/+$/, "") || "/";
  if (GONE.has(path)) {
    return new NextResponse("Gone", { status: 410, headers: { "Cache-Control": "public, max-age=86400" } });
  }
  return intl(req);
}

export const config = {
  // Everything except API routes, Next internals and files with an extension
  // (sitemap.xml, feed.xml, images), plus the PHP paths that must answer 410.
  matcher: ["/", "/(en|es)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)", "/send_email.php", "/apply.php", "/newsletter.php"],
};
