/**
 * Aircast end to end for the Aircast page: campaign engine, Artemis queues
 * and SMPP and MM7 adapters, the operator's SMSC and MMSC, then three lanes
 * to the handset: STK applet, SMS and MMS, OTA to the SIM.
 * Static SVG drawn in the site's tokens so it follows the theme; the source
 * candidates are recorded in spec/design/README.md.
 */
export default function AircastFlow() {
  return (
    <svg viewBox="0 0 900 520" className="illus" role="img" aria-label="Aircast flow: campaign engine, Artemis queues and SMPP and MM7 adapters, the operator's SMSC and MMSC, then three lanes to the handset: STK applet, SMS and MMS, OTA to the SIM">
      <defs>
        <marker id="air-arr-0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker>
        <marker id="air-arr-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--violet-ink)"/></marker>
        <marker id="air-arr-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--green-ink)"/></marker>
        <marker id="air-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6"><circle cx="5" cy="5" r="4" fill="var(--muted)"/></marker>
      </defs>
      <g transform="translate(30 36)"><rect width="197" height="22" rx="4" fill="var(--violet-soft)"/><rect x="8" y="6" width="10" height="10" rx="3" fill="var(--violet)"/><text x="23" y="15" className="t-chip">01 · push marketing · stk</text></g>
      <g transform="translate(226 36)"><rect width="197" height="22" rx="4" fill="var(--violet-soft)"/><rect x="8" y="6" width="10" height="10" rx="3" fill="var(--muted)"/><text x="23" y="15" className="t-chip">02 · messaging · sms, mms</text></g>
      <g transform="translate(430 36)"><rect width="157.4" height="22" rx="4" fill="var(--violet-soft)"/><rect x="8" y="6" width="10" height="10" rx="3" fill="var(--green)"/><text x="23" y="15" className="t-chip">03 · ota · ram, rfm</text></g>
      <g transform="translate(20 226)">
        <rect width="192" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--violet)" opacity=".9"/>
        <text x="50" y="30" className="t-title">Campaign engine</text>
        <text x="50" y="50" className="t-sub">one engine, three jobs</text>
      </g>
      <g transform="translate(20 304)"><rect width="70.8" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">rest api</text></g>
      <g transform="translate(94 304)"><rect width="77.4" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">file drop</text></g>
      <g transform="translate(20 332)"><rect width="70.8" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">webhooks</text></g>
      <g transform="translate(94 332)"><rect width="97.2" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">operator gui</text></g>
      <text x="20" y="380" className="t-edge">integration</text>
      <rect x="228" y="170" width="130" height="170" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
      <text x="293" y="192" className="t-title" textAnchor="middle">Queues and adapters</text>
      <rect x="236" y="212" width="114" height="10" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="240" y="214" width="10" height="6" rx="1.5" fill="var(--violet-ink)" opacity=".85"/>
      <rect x="254" y="214" width="10" height="6" rx="1.5" fill="var(--violet-ink)" opacity=".85"/>
      <rect x="268" y="214" width="10" height="6" rx="1.5" fill="var(--violet-ink)" opacity=".85"/>
      <rect x="236" y="230" width="114" height="10" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="240" y="232" width="10" height="6" rx="1.5" fill="var(--muted)" opacity=".85"/>
      <rect x="254" y="232" width="10" height="6" rx="1.5" fill="var(--muted)" opacity=".85"/>
      <rect x="268" y="232" width="10" height="6" rx="1.5" fill="var(--muted)" opacity=".85"/>
      <rect x="282" y="232" width="10" height="6" rx="1.5" fill="var(--muted)" opacity=".85"/>
      <rect x="236" y="248" width="114" height="10" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="240" y="250" width="10" height="6" rx="1.5" fill="var(--green-ink)" opacity=".85"/>
      <rect x="254" y="250" width="10" height="6" rx="1.5" fill="var(--green-ink)" opacity=".85"/>
      <rect x="268" y="250" width="10" height="6" rx="1.5" fill="var(--green-ink)" opacity=".85"/>
      <rect x="282" y="250" width="10" height="6" rx="1.5" fill="var(--green-ink)" opacity=".85"/>
      <rect x="296" y="250" width="10" height="6" rx="1.5" fill="var(--green-ink)" opacity=".85"/>
      <text x="293" y="274" className="t-edge" textAnchor="middle">artemis queues</text>
      <g transform="translate(242.4 289)"><rect width="41.2" height="22" rx="11" fill="var(--surface)" stroke="var(--rule)"/><text x="20.6" y="15" className="t-edge" textAnchor="middle">smpp</text></g>
      <g transform="translate(306.6 289)"><rect width="34.9" height="22" rx="11" fill="var(--surface)" stroke="var(--rule)"/><text x="17.4" y="15" className="t-edge" textAnchor="middle">mm7</text></g>
      <text x="293" y="328" className="t-sub" textAnchor="middle">bearer adapters</text>
      <text x="293" y="366" className="t-edge" textAnchor="middle">per-hour tps budgets · priorities · caps</text>
      <text x="293" y="382" className="t-edge" textAnchor="middle">stateless · queue-driven</text>
      <g transform="translate(386 226)">
        <rect width="146" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--violet)" opacity=".9"/>
        <text x="50" y="30" className="t-title">SMSC · MMSC</text>
        <text x="50" y="50" className="t-sub">operator side</text>
      </g>
      <line x1="212" y1="260" x2="228" y2="260" stroke="var(--muted)" strokeWidth="1.6" markerEnd="url(#air-arr-0)"/>
      <line x1="358" y1="260" x2="386" y2="260" stroke="var(--muted)" strokeWidth="1.6" markerEnd="url(#air-arr-0)"/>
      <rect x="770" y="70" width="100" height="230" rx="14" fill="none"/>
      <path d="M532 242 C590 242 590 118 650 118 H775" fill="none" stroke="var(--violet-ink)" strokeWidth="1.6" markerEnd="url(#air-arr-1)"/>
      <path d="M775 134 H660 C606 134 606 256 532 256" fill="none" stroke="var(--green-ink)" strokeWidth="1.6" strokeDasharray="5 5" markerEnd="url(#air-arr-2)"/>
      <text x="662" y="92" className="t-edge" textAnchor="middle">down: ciphered stk bytecode</text>
      <text x="662" y="106" className="t-edge" textAnchor="middle">up: user input as ciphered mo-sms</text>
      <path d="M532 270 C590 270 590 214 650 214 H775" fill="none" stroke="var(--muted)" strokeWidth="1.6" markerEnd="url(#air-arr-0)"/>
      <text x="700" y="186" className="t-edge" textAnchor="middle">sms · flash · binary</text>
      <text x="700" y="200" className="t-edge" textAnchor="middle">mms over mm7</text>
      <path d="M532 286 C590 286 590 400 650 400 H780" fill="none" stroke="var(--green-ink)" strokeWidth="1.6" markerEnd="url(#air-arr-2)"/>
      <text x="668" y="420" className="t-edge" textAnchor="middle">ota · ram applets · rfm files</text>
      <g transform="translate(730 40)"><rect width="156.6" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">sleepy · display text</text></g>
      <rect x="780" y="70" width="100" height="230" rx="14" fill="var(--surface)" stroke="var(--rule)"/>
      <rect x="816.0" y="79" width="28" height="4" rx="2" fill="var(--rule)"/>
      <rect x="790" y="92" width="80" height="101" rx="4" fill="var(--surface-2)" stroke="var(--rule)"/>
      <text x="797" y="109" className="t-edge" style={{fill: "var(--ink)"}}>Get 1 GB</text>
      <text x="797" y="123" className="t-edge" style={{fill: "var(--ink)"}}>for $1?</text>
      <text x="797" y="142" className="t-edge" style={{fill: "var(--violet-ink)"}}>1 Yes</text>
      <text x="797" y="156" className="t-edge" style={{fill: "var(--violet-ink)"}}>2 No</text>
      <rect x="790" y="205" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="819.5" y="205" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="849" y="205" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="790" y="223" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="819.5" y="223" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="849" y="223" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="790" y="241" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="819.5" y="241" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="849" y="241" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="790" y="259" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="819.5" y="259" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <rect x="849" y="259" width="21" height="12" rx="3" fill="var(--surface-2)" stroke="var(--rule)"/>
      <text x="830" y="318" className="t-edge" textAnchor="middle">any handset</text>
      <text x="830" y="332" className="t-edge" textAnchor="middle">no data, no balance</text>
      <path d="M790 374 q0 -6 6 -6 H842 L854 380 V408 q0 6 -6 6 H796 q-6 0 -6 -6 Z" fill="var(--surface)" stroke="var(--rule)"/><rect x="800" y="380" width="24" height="18" rx="3" fill="var(--green)" opacity=".9"/><line x1="800" y1="389" x2="824" y2="389" stroke="var(--surface)"/><line x1="808" y1="380" x2="808" y2="398" stroke="var(--surface)"/><line x1="816" y1="380" x2="816" y2="398" stroke="var(--surface)"/>
      <text x="822" y="436" className="t-edge" textAnchor="middle">live sim base</text>
      <text x="450" y="500" className="t-edge" textAnchor="middle">0-rated mo/mt shortcode · 3des-cbc or aes · ustk push api for third-party applets</text>
    </svg>
  );
}
