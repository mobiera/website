import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { getEntity } from "@/app/lib/entity";
import { pageLocale, type PageParams } from "@/app/lib/seo";

// Social preview image, per site and language. A route instead of the
// opengraph-image file convention: that one publishes the internal
// /<site>/<locale>/ path, which does not exist for visitors. The layout
// links it as /og-image (or /es/og-image).
const size = { width: 1200, height: 630 };

export async function GET(_req: Request, { params }: { params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "common" });
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0B1024", color: "#EEF0FA", fontFamily: "sans-serif", backgroundImage: "linear-gradient(rgba(131,83,242,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(131,83,242,0.14) 1px, transparent 1px)", backgroundSize: "48px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", width: 44, height: 44, borderRadius: 10, background: "#8353F2" }} />
          <div style={{ fontSize: 34, fontWeight: 700 }}>Mobiera</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>{t("meta.tagline")}</div>
          <div style={{ fontSize: 28, color: "#9AA3C2" }}>{t("og.sub")}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#50E2AA", letterSpacing: 2 }}>
          <span>{t("og.since")}</span>
          <span>{getEntity(locale).domain}</span>
        </div>
      </div>
    ),
    size,
  );
}
