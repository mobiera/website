import { NextResponse, type NextRequest } from "next/server";

// Paths from the Hugo site that no longer exist and must not redirect
// anywhere: the mock login and the PHP form handlers (spec/redirects.txt).
const GONE = new Set(["/login", "/send_email.php", "/apply.php", "/newsletter.php"]);

export default function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname.replace(/\/+$/, "") || "/";
  if (GONE.has(path)) {
    return new NextResponse("Gone", { status: 410, headers: { "Cache-Control": "public, max-age=86400" } });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/login/", "/send_email.php", "/apply.php", "/newsletter.php"],
};
