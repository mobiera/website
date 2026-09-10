/**
 * The certification roadmap for the Certification page: Foundation
 * membership, training, eight exams, the professional credential, the company
 * step, the integrator credential and the directory from the Trust Graph.
 * Static SVG drawn in the site's tokens so it follows the theme; the source
 * candidates are recorded in spec/design/README.md.
 */
export default function CertificationPath() {
  return (
    <svg viewBox="0 0 900 520" className="illus" role="img" aria-label="Certification roadmap: Foundation membership, training, eight exams, professional credential, company step, integrator credential, directory from the Trust Graph">
      <defs>
        <marker id="cert-arr-0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--violet-ink)"/></marker>
        <marker id="cert-arr-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--green-ink)"/></marker>
        <marker id="cert-arr-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker>
        <marker id="cert-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6"><circle cx="5" cy="5" r="4" fill="var(--muted)"/></marker>
      </defs>
      <g transform="translate(25 68)">
        <rect width="218" height="84" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="28" width="28" height="28" rx="7" fill="var(--violet)" opacity=".9"/>
        <text x="56" y="32" className="t-title">Foundation member</text>
        <text x="56" y="52" className="t-sub">Verana Foundation</text>
        <text x="56" y="68" className="t-sub">Contributor or Associate</text>
      </g>
      <g transform="translate(267 68)">
        <rect width="218" height="84" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="28" width="28" height="28" rx="7" fill="var(--violet)" opacity=".9"/>
        <text x="56" y="32" className="t-title">Training</text>
        <text x="56" y="52" className="t-sub">instructor-led · Mobiera</text>
        <text x="56" y="68" className="t-sub">about three weeks</text>
      </g>
      <line x1="243" y1="110" x2="267" y2="110" stroke="var(--violet-ink)" strokeWidth="1.6" markerEnd="url(#cert-arr-0)"/>
      <line x1="485" y1="110" x2="531" y2="110" stroke="var(--violet-ink)" strokeWidth="1.6" markerEnd="url(#cert-arr-0)"/>
      <text x="835" y="46" className="t-edge" textAnchor="end">8 hands-on exams · Verana testnet · 90% each · retakes per track</text>
      <g transform="translate(531 58)"><rect width="74" height="48" rx="6" fill="var(--surface)" stroke="var(--rule)"/><text x="6" y="13" className="t-chip">01</text><text x="37" y="35" className="t-mono" textAnchor="middle">foundations</text></g>
      <g transform="translate(613 58)"><rect width="74" height="48" rx="6" fill="var(--surface)" stroke="var(--rule)"/><text x="6" y="13" className="t-chip">02</text><text x="37" y="30" className="t-mono" textAnchor="middle">business</text><text x="37" y="42" className="t-mono" textAnchor="middle">wallets</text></g>
      <g transform="translate(695 58)"><rect width="74" height="48" rx="6" fill="var(--surface)" stroke="var(--rule)"/><text x="6" y="13" className="t-chip">03</text><text x="37" y="35" className="t-mono" textAnchor="middle">ecosystems</text></g>
      <g transform="translate(777 58)"><rect width="74" height="48" rx="6" fill="var(--surface)" stroke="var(--rule)"/><text x="6" y="13" className="t-chip">04</text><text x="37" y="30" className="t-mono" textAnchor="middle">hosting</text><text x="37" y="42" className="t-mono" textAnchor="middle">services</text></g>
      <g transform="translate(531 114)"><rect width="74" height="48" rx="6" fill="var(--surface)" stroke="var(--rule)"/><text x="6" y="13" className="t-chip">05</text><text x="37" y="30" className="t-mono" textAnchor="middle">personal</text><text x="37" y="42" className="t-mono" textAnchor="middle">wallets</text></g>
      <g transform="translate(613 114)"><rect width="74" height="48" rx="6" fill="var(--surface)" stroke="var(--rule)"/><text x="6" y="13" className="t-chip">06</text><text x="37" y="30" className="t-mono" textAnchor="middle">selling</text><text x="37" y="42" className="t-mono" textAnchor="middle">services</text></g>
      <g transform="translate(695 114)"><rect width="74" height="48" rx="6" fill="var(--surface)" stroke="var(--rule)"/><text x="6" y="13" className="t-chip">07</text><text x="37" y="35" className="t-mono" textAnchor="middle">community</text></g>
      <g transform="translate(777 114)"><rect width="74" height="48" rx="6" fill="var(--surface)" stroke="var(--rule)"/><text x="6" y="13" className="t-chip">08</text><text x="37" y="35" className="t-mono" textAnchor="middle">brand</text></g>
      <path d="M675 162V182A8 8 0 0 1 667 190H164A8 8 0 0 0 156 198V228" fill="none" stroke="var(--green-ink)" strokeWidth="1.6" markerEnd="url(#cert-arr-1)"/>
      <text x="415" y="184" className="t-edge" textAnchor="middle">pass all eight exams</text>
      <g transform="translate(25 228)">
        <rect width="262" height="84" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="28" width="28" height="28" rx="7" fill="var(--green)" opacity=".9"/>
        <text x="56" y="32" className="t-title">Certified Professional</text>
        <text x="56" y="52" className="t-sub">certificate and credential</text>
        <text x="56" y="68" className="t-sub">personal wallet · valid 2 years</text>
      </g>
      <g transform="translate(319 228)">
        <rect width="262" height="84" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="28" width="28" height="28" rx="7" fill="var(--muted)" opacity=".9"/>
        <text x="56" y="32" className="t-title">Company step</text>
        <text x="56" y="52" className="t-sub">two certified professionals</text>
        <text x="56" y="68" className="t-sub">+ one delivered project</text>
      </g>
      <g transform="translate(613 228)">
        <rect width="262" height="84" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="28" width="28" height="28" rx="7" fill="var(--green)" opacity=".9"/>
        <text x="56" y="32" className="t-title">Certified Integrator</text>
        <text x="56" y="52" className="t-sub">verifiable credential</text>
        <text x="56" y="68" className="t-sub">business wallet of the company</text>
      </g>
      <line x1="287" y1="270" x2="319" y2="270" stroke="var(--green-ink)" strokeWidth="1.6" markerEnd="url(#cert-arr-1)"/>
      <text x="303" y="262" className="t-edge" textAnchor="middle">×2</text>
      <line x1="581" y1="270" x2="613" y2="270" stroke="var(--green-ink)" strokeWidth="1.6" markerEnd="url(#cert-arr-1)"/>
      <g transform="translate(25 318)"><rect width="123.6" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">Mobiera · issuer</text></g>
      <g transform="translate(319 318)"><rect width="222.6" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">or a public Playground use case</text></g>
      <g transform="translate(613 318)"><rect width="123.6" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">Mobiera · issuer</text></g>
      <line x1="744" y1="312" x2="744" y2="400" stroke="var(--muted)" strokeWidth="1.6" strokeDasharray="5 5" markerEnd="url(#cert-arr-2)"/>
      <text x="736" y="366" className="t-edge" textAnchor="end">business wallet presents the credential</text>
      <rect x="40" y="400" width="820" height="72" rx="10" fill="var(--surface-2)" stroke="var(--violet)" strokeWidth="1.4"/>
      <text x="450" y="430" className="t-title" textAnchor="middle">Certified integrators directory</text>
      <text x="450" y="452" className="t-sub" textAnchor="middle">generated from the Trust Graph: companies whose business wallet presents a valid credential issued by Mobiera</text>
      <text x="450" y="504" className="t-edge" textAnchor="middle">Mobiera · designated by the Verana Foundation · valid until May 2029</text>
    </svg>
  );
}
