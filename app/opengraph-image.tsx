import { ImageResponse } from "next/og";

export const alt = "Mobiera: Operator-grade software. Verifiable trust.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#0B1024", color: "#EEF0FA", fontFamily: "sans-serif", backgroundImage: "linear-gradient(rgba(131,83,242,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(131,83,242,0.14) 1px, transparent 1px)", backgroundSize: "48px 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", width: 44, height: 44, borderRadius: 10, background: "#8353F2" }} />
          <div style={{ fontSize: 34, fontWeight: 700 }}>Mobiera</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>Operator-grade software. Verifiable trust.</div>
          <div style={{ fontSize: 28, color: "#9AA3C2" }}>Platforms in 25+ mobile networks. Founding member of the Verana Foundation. Official certificator for Verana integrators in Latin America.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#50E2AA", letterSpacing: 2 }}>
          <span>BOGOTÁ · SINCE 2012</span>
          <span>mobiera.io</span>
        </div>
      </div>
    ),
    size,
  );
}
