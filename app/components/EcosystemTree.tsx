/**
 * A governed Verana ecosystem as a tree for the Verifiable Credentials page:
 * ecosystem root, grantors, issuers and verifiers, holders, with the branch
 * Mobiera designs, runs and integrates highlighted.
 * Static SVG drawn in the site's tokens so it follows the theme; the source
 * candidates are recorded in spec/design/README.md.
 */
export default function EcosystemTree() {
  return (
    <svg viewBox="0 0 900 520" className="illus" role="img" aria-label="Verana ecosystem tree: ecosystem root, grantors, issuers and verifiers, holders, with the branch Mobiera builds highlighted">
      <defs>
        <marker id="eco-arr-0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--violet-ink)"/></marker>
        <marker id="eco-arr-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker>
        <marker id="eco-arr-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--green-ink)"/></marker>
        <marker id="eco-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6"><circle cx="5" cy="5" r="4" fill="var(--muted)"/></marker>
      </defs>
      <g transform="translate(340 26)"><rect width="220" height="56" rx="10" fill="var(--surface)" stroke="var(--violet)" strokeWidth="1.6"/><rect x="14" y="18" width="20" height="20" rx="5" fill="var(--violet)" opacity=".9"/><text x="46" y="25" className="t-title">Ecosystem</text><text x="46" y="43" className="t-sub">governed list of participants</text></g>
      <g transform="translate(120 128)"><rect width="200" height="56" rx="10" fill="var(--surface)" stroke="var(--violet)" strokeWidth="1.6"/><rect x="14" y="18" width="20" height="20" rx="5" fill="var(--violet)" opacity=".9"/><text x="46" y="25" className="t-title">Issuer grantor</text><text x="46" y="43" className="t-sub">accredits issuers</text></g>
      <g transform="translate(580 128)"><rect width="200" height="56" rx="10" fill="var(--surface)" stroke="var(--rule)" strokeWidth="1"/><rect x="14" y="18" width="20" height="20" rx="5" fill="var(--violet)" opacity=".9"/><text x="46" y="25" className="t-title">Verifier grantor</text><text x="46" y="43" className="t-sub">accredits verifiers</text></g>
      <g transform="translate(30 232)"><rect width="180" height="56" rx="10" fill="var(--surface)" stroke="var(--violet)" strokeWidth="1.6"/><rect x="14" y="18" width="20" height="20" rx="5" fill="var(--violet)" opacity=".9"/><text x="46" y="25" className="t-title">Issuer</text><text x="46" y="43" className="t-sub">operator, ministry</text></g>
      <g transform="translate(230 232)"><rect width="160" height="56" rx="10" fill="var(--surface)" stroke="var(--rule)" strokeWidth="1"/><rect x="14" y="18" width="20" height="20" rx="5" fill="var(--violet)" opacity=".45"/><text x="46" y="25" className="t-title" opacity=".6">Issuer</text><text x="46" y="43" className="t-sub">another issuer</text></g>
      <g transform="translate(470 232)"><rect width="110" height="56" rx="10" fill="var(--surface)" stroke="var(--rule)" strokeWidth="1"/><rect x="14" y="18" width="20" height="20" rx="5" fill="var(--violet)" opacity=".45"/><text x="46" y="33" className="t-title" opacity=".6">Verifier</text></g>
      <g transform="translate(600 232)"><rect width="180" height="56" rx="10" fill="var(--surface)" stroke="var(--rule)" strokeWidth="1"/><rect x="14" y="18" width="20" height="20" rx="5" fill="var(--violet)" opacity=".9"/><text x="46" y="25" className="t-title">Verifier</text><text x="46" y="43" className="t-sub">bank, service, AI agent</text></g>
      <g transform="translate(120 382)"><rect width="150" height="52" rx="10" fill="var(--surface)" stroke="var(--rule)" strokeWidth="1"/><rect x="14" y="17" width="18" height="18" rx="4" fill="var(--green)" opacity=".9"/><text x="44" y="23" className="t-title">Human</text><text x="44" y="41" className="t-sub">person, in a wallet</text></g>
      <g transform="translate(290 382)"><rect width="150" height="52" rx="10" fill="var(--surface)" stroke="var(--rule)" strokeWidth="1"/><rect x="14" y="17" width="18" height="18" rx="4" fill="var(--green)" opacity=".9"/><text x="44" y="23" className="t-title">Service</text><text x="44" y="41" className="t-sub">API, back end</text></g>
      <g transform="translate(460 382)"><rect width="150" height="52" rx="10" fill="var(--surface)" stroke="var(--rule)" strokeWidth="1"/><rect x="14" y="17" width="18" height="18" rx="4" fill="var(--green)" opacity=".9"/><text x="44" y="23" className="t-title">AI agent</text><text x="44" y="41" className="t-sub">acts for a person</text></g>
      <g transform="translate(630 382)"><rect width="170" height="52" rx="10" fill="var(--surface)" stroke="var(--rule)" strokeWidth="1"/><rect x="14" y="17" width="18" height="18" rx="4" fill="var(--green)" opacity=".9"/><text x="44" y="23" className="t-title">Connected object</text><text x="44" y="41" className="t-sub">device, SIM</text></g>
      <path d="M450 82 V104 H220 V128" fill="none" stroke="var(--violet-ink)" strokeWidth="2.2" markerEnd="url(#eco-arr-0)"/>
      <path d="M450 82 V104 H680 V128" fill="none" stroke="var(--muted)" strokeWidth="1.6" markerEnd="url(#eco-arr-1)"/>
      <text x="214" y="100" className="t-edge" textAnchor="end">delegates</text>
      <text x="686" y="100" className="t-edge" textAnchor="start">delegates</text>
      <path d="M220 184 V208 H120 V232" fill="none" stroke="var(--violet-ink)" strokeWidth="2.2" markerEnd="url(#eco-arr-0)"/>
      <path d="M220 184 V208 H310 V232" fill="none" stroke="var(--muted)" strokeWidth="1.6" markerEnd="url(#eco-arr-1)"/>
      <path d="M680 184 V208 H525 V232" fill="none" stroke="var(--muted)" strokeWidth="1.6" markerEnd="url(#eco-arr-1)"/>
      <path d="M680 184 V208 H690 V232" fill="none" stroke="var(--muted)" strokeWidth="1.6" markerEnd="url(#eco-arr-1)"/>
      <text x="114" y="204" className="t-edge" textAnchor="end">accredits</text>
      <text x="696" y="204" className="t-edge" textAnchor="start">accredits</text>
      <path d="M120 288 V340 H715" fill="none" stroke="var(--violet-ink)" strokeWidth="2.2"/>
      <path d="M195 340 V382" fill="none" stroke="var(--violet-ink)" strokeWidth="2.2" markerEnd="url(#eco-arr-0)"/>
      <path d="M365 340 V382" fill="none" stroke="var(--violet-ink)" strokeWidth="2.2" markerEnd="url(#eco-arr-0)"/>
      <path d="M535 340 V382" fill="none" stroke="var(--violet-ink)" strokeWidth="2.2" markerEnd="url(#eco-arr-0)"/>
      <path d="M715 340 V382" fill="none" stroke="var(--violet-ink)" strokeWidth="2.2" markerEnd="url(#eco-arr-0)"/>
      <text x="126" y="334" className="t-edge" textAnchor="start">issues credentials</text>
      <path d="M800 400 H880 V260 H780" fill="none" stroke="var(--green-ink)" strokeWidth="1.6" strokeDasharray="5 5" markerEnd="url(#eco-arr-2)"/>
      <text transform="translate(890 330) rotate(-90)" className="t-edge" textAnchor="middle">presents a proof</text>
      <g transform="translate(166.2 222)"><rect width="43.8" height="22" rx="4" fill="var(--green)"/><text x="9" y="15" className="t-chip" style={{fill: "var(--bg)", fontWeight: "500"}}>you</text></g>
      <g transform="translate(568 44)"><rect width="347.4" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">Mobiera · ecosystem design + governance framework</text></g>
      <g transform="translate(30 296)"><rect width="255" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">Mobiera · issuer service (VS-Agent)</text></g>
      <g transform="translate(600 296)"><rect width="268.2" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">Mobiera · verifier service (VS-Agent)</text></g>
      <g transform="translate(120 446)"><rect width="208.8" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">Mobiera · wallet integration</text></g>
      <text x="30" y="492" className="t-edge" textAnchor="start">highlighted: your branch, from the ecosystem you govern down to the holders you serve</text>
    </svg>
  );
}
