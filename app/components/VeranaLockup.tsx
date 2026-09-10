/**
 * The three Verana lockups, reproduced from the sister sites' own Nav
 * components so the marks, wordmark typefaces and colors match:
 *  - verana.io: gradient tile with a white bull-horn V, "Verana" in Space
 *    Grotesk 700 (letter-spacing -0.03em).
 *  - Verana Foundation: purple V with the green triangle, "Verana" +
 *    "Foundation" in Inter 600 (-0.02em), "Foundation" in the Foundation's
 *    purple.
 *  - Verana Council: the V and both words in the ink color, Inter 600.
 * The official mark files are kept in public/assets/logos/ for reference.
 */
const V_OUTER = "M26.9932 51.6972L5.805 11.0977L2.91263 16.2161L0 10.6048L5.98725 0L26.9932 40.2483L47.9993 0L54 10.6217L51.0773 16.2161L48.1849 11.0977L26.9932 51.6972Z";
const V_INNER = "M13.696 0L26.9935 25.4637L39.9367 0H13.696Z";

export type LockupVariant = "verana" | "foundation" | "council";

const LABEL: Record<LockupVariant, string> = { verana: "Verana", foundation: "Verana Foundation", council: "Verana Council" };

export default function VeranaLockup({ variant, size = 24 }: { variant: LockupVariant; size?: number }) {
  return (
    <span className={`lockup lockup-${variant}`} role="img" aria-label={LABEL[variant]}>
      {variant === "verana" ? (
        <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="verana-mark-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#763EF0" />
              <stop offset="100%" stopColor="#9F7AEA" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" rx="12" fill="url(#verana-mark-gradient)" />
          <g transform="translate(12.3 13.1) scale(0.7407)">
            <path d={V_OUTER} fill="#fff" />
            <path d={V_INNER} fill="#fff" />
          </g>
        </svg>
      ) : (
        <svg width={size} height={Math.round((size * 52) / 54)} viewBox="0 0 54 52" aria-hidden="true">
          <path d={V_OUTER} fill={variant === "foundation" ? "#763EF0" : "currentColor"} />
          <path d={V_INNER} fill={variant === "foundation" ? "#1FB57A" : "currentColor"} />
        </svg>
      )}
      {variant === "verana" && <span className="lockup-grotesk" aria-hidden="true">Verana</span>}
      {variant === "foundation" && <span className="lockup-inter" aria-hidden="true">Verana<span className="dot">Foundation</span></span>}
      {variant === "council" && <span className="lockup-inter" aria-hidden="true">Verana<span>Council</span></span>}
    </span>
  );
}
