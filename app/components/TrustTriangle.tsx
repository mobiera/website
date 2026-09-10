/**
 * The trust triangle for the Trust services page: the holder on top with its
 * wallet, the issuer and the verifier standing on the Verana public registry
 * band, and Mobiera's services placed where they act.
 * Static SVG drawn in the site's tokens so it follows the theme; the source
 * candidates are recorded in spec/design/README.md.
 */
export default function TrustTriangle() {
  return (
    <svg viewBox="0 0 900 520" className="illus" role="img" aria-label="Trust triangle: the holder on top, the issuer and the verifier standing on the Verana public registry">
      <defs>
        <marker id="tri-arr-0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--violet-ink)"/></marker>
        <marker id="tri-arr-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--green-ink)"/></marker>
        <marker id="tri-arr-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker>
        <marker id="tri-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6"><circle cx="5" cy="5" r="4" fill="var(--muted)"/></marker>
      </defs>
      <rect x="40" y="416" width="820" height="72" rx="10" fill="var(--surface-2)" stroke="var(--violet)" strokeWidth="1.4"/>
      <text x="450" y="446" className="t-title" textAnchor="middle">Verana public registry</text>
      <text x="450" y="466" className="t-sub" textAnchor="middle">ecosystem governance · credential schemas · accredited issuers and verifiers · trust deposits</text>
      <line x1="270" y1="320" x2="395" y2="154" stroke="var(--violet-ink)" strokeWidth="1.6" markerEnd="url(#tri-arr-0)"/>
      <text className="t-edge" transform="translate(332.5 237.0) rotate(-53.02)" textAnchor="middle" y="-10">issues a credential</text>
      <line x1="505" y1="154" x2="630" y2="320" stroke="var(--green-ink)" strokeWidth="1.6" markerEnd="url(#tri-arr-1)"/>
      <text className="t-edge" transform="translate(567.5 237.0) rotate(53.02)" textAnchor="middle" y="-10">presents a proof</text>
      <line x1="620" y1="352" x2="280" y2="352" stroke="var(--muted)" strokeWidth="1.6" strokeDasharray="5 5" markerEnd="url(#tri-arr-2)"/>
      <text x="450" y="342" className="t-edge" textAnchor="middle">trusts the issuer · checked in the registry</text>
      <line x1="170" y1="368" x2="170" y2="416" stroke="var(--rule)" strokeDasharray="2 4" markerEnd="url(#tri-dot)"/>
      <line x1="730" y1="368" x2="730" y2="416" stroke="var(--rule)" strokeDasharray="2 4" markerEnd="url(#tri-dot)"/>
      <text x="178" y="404" className="t-edge">accredited issuer</text>
      <text x="738" y="404" className="t-edge">accredited verifier</text>
      <g transform="translate(350 86)">
        <rect width="200" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--green)" opacity=".9"/>
        <text x="56" y="30" className="t-title">Holder</text>
        <text x="56" y="50" className="t-sub">person, service, agent · in a wallet</text>
      </g>
      <g transform="translate(70 300)">
        <rect width="200" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--violet)" opacity=".9"/>
        <text x="56" y="30" className="t-title">Issuer</text>
        <text x="56" y="50" className="t-sub">ministry, university, operator</text>
      </g>
      <g transform="translate(630 300)">
        <rect width="200" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--violet)" opacity=".9"/>
        <text x="56" y="30" className="t-title">Verifier</text>
        <text x="56" y="50" className="t-sub">bank, service, AI agent</text>
      </g>
      <g transform="translate(350.0 62)"><rect width="202.8" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">Mobiera · wallet integration</text></g>
      <g transform="translate(70.0 276)"><rect width="176.4" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">Mobiera · issuer service</text></g>
      <g transform="translate(640.4 276)"><rect width="189.6" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">Mobiera · verifier service</text></g>
      <g transform="translate(571.4 494)"><rect width="288.6" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">Mobiera · ecosystem design and operations</text></g>
    </svg>
  );
}
