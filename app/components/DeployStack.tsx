/**
 * Deployment topology for the Telecom page: the Aircast stack on two
 * georedundant, active-active nodes, the operator's SMSC, MMSC and SIM base
 * under each, and one monitoring strip under both.
 * Static SVG drawn in the site's tokens so it follows the theme; the source
 * candidates are recorded in spec/design/README.md.
 */
export default function DeployStack() {
  return (
    <svg viewBox="0 0 900 520" className="illus" role="img" aria-label="Layered stack on two georedundant nodes: integration paths, GUI and API, campaign manager, queues, adapters, then the operator's SMSC, MMSC and SIM base, with a monitoring strip">
      <defs>
        <marker id="dep-arr-0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker>
        <marker id="dep-arr-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--violet-ink)"/></marker>
        <marker id="dep-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6"><circle cx="5" cy="5" r="4" fill="var(--muted)"/></marker>
      </defs>
      <text x="450" y="50" className="t-edge" textAnchor="middle">active-active · georedundant nodes · either one carries all the traffic</text>
      <rect x="30" y="60" width="400" height="282" rx="12" fill="var(--surface-2)" opacity=".6" stroke="var(--rule)"/>
      <text x="44" y="82" className="t-lbl">site a · node 1</text>
      <text x="416" y="82" className="t-edge" textAnchor="end">active · carries traffic</text>
      <g transform="translate(44 96)"><rect width="70.8" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">rest api</text></g>
      <line x1="79.4" y1="118" x2="79.4" y2="127" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <g transform="translate(122.8 96)"><rect width="77.4" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">file drop</text></g>
      <line x1="161.5" y1="118" x2="161.5" y2="127" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <g transform="translate(208.2 96)"><rect width="97.2" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">smpp account</text></g>
      <line x1="256.8" y1="118" x2="256.8" y2="127" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <text x="416" y="111" className="t-edge" textAnchor="end">integration</text>
      <g transform="translate(42 128)"><rect width="376" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--violet)" opacity=".9"/><text x="28" y="19" className="t-lbl">GUI and API</text><text x="366" y="19" className="t-edge" textAnchor="end">console · rest</text></g>
      <g transform="translate(42 170)"><rect width="376" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--violet)" opacity=".9"/><text x="28" y="19" className="t-lbl">campaign manager</text><text x="366" y="19" className="t-edge" textAnchor="end">stateless · scaled by instances</text></g>
      <g transform="translate(42 212)"><rect width="376" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--violet)" opacity=".9"/><text x="28" y="19" className="t-lbl">queues</text><text x="366" y="19" className="t-edge" textAnchor="end">artemis · monitored depth</text></g>
      <rect x="120" y="221" width="5" height="12" rx="1.5" fill="var(--violet-ink)" opacity=".7"/>
      <rect x="130" y="221" width="5" height="12" rx="1.5" fill="var(--violet-ink)" opacity=".7"/>
      <rect x="140" y="221" width="5" height="12" rx="1.5" fill="var(--violet-ink)" opacity=".7"/>
      <rect x="150" y="221" width="5" height="12" rx="1.5" fill="var(--violet-ink)" opacity=".7"/>
      <rect x="160" y="221" width="5" height="12" rx="1.5" fill="var(--green)" opacity=".7"/>
      <g transform="translate(42 254)"><rect width="236" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--violet)" opacity=".9"/><text x="28" y="19" className="t-lbl">bearer adapters</text><text x="226" y="19" className="t-edge" textAnchor="end">smpp · mm7</text></g>
      <g transform="translate(286 254)"><rect width="132" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--violet)" opacity=".9"/><text x="28" y="19" className="t-lbl">OTA executor</text></g>
      <g transform="translate(42 300)"><rect width="120" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--green)" opacity=".9"/><text x="28" y="19" className="t-lbl">SMSC</text></g>
      <g transform="translate(170 300)"><rect width="120" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--green)" opacity=".9"/><text x="28" y="19" className="t-lbl">MMSC</text></g>
      <g transform="translate(298 300)"><rect width="120" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--green)" opacity=".9"/><text x="28" y="19" className="t-lbl">SIM base</text></g>
      <line x1="70" y1="158" x2="70" y2="169" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="70" y1="200" x2="70" y2="211" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="70" y1="242" x2="70" y2="253" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="102" y1="284" x2="102" y2="299" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="230" y1="284" x2="230" y2="299" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="352" y1="284" x2="352" y2="299" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <rect x="470" y="60" width="400" height="282" rx="12" fill="var(--surface-2)" opacity=".6" stroke="var(--rule)"/>
      <text x="484" y="82" className="t-lbl">site b · node 2</text>
      <text x="856" y="82" className="t-edge" textAnchor="end">active · carries traffic</text>
      <g transform="translate(484 96)"><rect width="70.8" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">rest api</text></g>
      <line x1="519.4" y1="118" x2="519.4" y2="127" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <g transform="translate(562.8 96)"><rect width="77.4" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">file drop</text></g>
      <line x1="601.5" y1="118" x2="601.5" y2="127" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <g transform="translate(648.2 96)"><rect width="97.2" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">smpp account</text></g>
      <line x1="696.8" y1="118" x2="696.8" y2="127" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <text x="856" y="111" className="t-edge" textAnchor="end">integration</text>
      <g transform="translate(482 128)"><rect width="376" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--violet)" opacity=".9"/><text x="28" y="19" className="t-lbl">GUI and API</text><text x="366" y="19" className="t-edge" textAnchor="end">console · rest</text></g>
      <g transform="translate(482 170)"><rect width="376" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--violet)" opacity=".9"/><text x="28" y="19" className="t-lbl">campaign manager</text><text x="366" y="19" className="t-edge" textAnchor="end">stateless · scaled by instances</text></g>
      <g transform="translate(482 212)"><rect width="376" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--violet)" opacity=".9"/><text x="28" y="19" className="t-lbl">queues</text><text x="366" y="19" className="t-edge" textAnchor="end">artemis · monitored depth</text></g>
      <rect x="560" y="221" width="5" height="12" rx="1.5" fill="var(--violet-ink)" opacity=".7"/>
      <rect x="570" y="221" width="5" height="12" rx="1.5" fill="var(--violet-ink)" opacity=".7"/>
      <rect x="580" y="221" width="5" height="12" rx="1.5" fill="var(--violet-ink)" opacity=".7"/>
      <rect x="590" y="221" width="5" height="12" rx="1.5" fill="var(--violet-ink)" opacity=".7"/>
      <rect x="600" y="221" width="5" height="12" rx="1.5" fill="var(--green)" opacity=".7"/>
      <g transform="translate(482 254)"><rect width="236" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--violet)" opacity=".9"/><text x="28" y="19" className="t-lbl">bearer adapters</text><text x="226" y="19" className="t-edge" textAnchor="end">smpp · mm7</text></g>
      <g transform="translate(726 254)"><rect width="132" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--violet)" opacity=".9"/><text x="28" y="19" className="t-lbl">OTA executor</text></g>
      <g transform="translate(482 300)"><rect width="120" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--green)" opacity=".9"/><text x="28" y="19" className="t-lbl">SMSC</text></g>
      <g transform="translate(610 300)"><rect width="120" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--green)" opacity=".9"/><text x="28" y="19" className="t-lbl">MMSC</text></g>
      <g transform="translate(738 300)"><rect width="120" height="30" rx="7" fill="var(--surface)" stroke="var(--rule)"/><rect x="10" y="10" width="10" height="10" rx="3" fill="var(--green)" opacity=".9"/><text x="28" y="19" className="t-lbl">SIM base</text></g>
      <line x1="510" y1="158" x2="510" y2="169" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="510" y1="200" x2="510" y2="211" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="510" y1="242" x2="510" y2="253" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="542" y1="284" x2="542" y2="299" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="670" y1="284" x2="670" y2="299" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="792" y1="284" x2="792" y2="299" stroke="var(--muted)" strokeWidth="1.2" markerEnd="url(#dep-arr-0)"/>
      <line x1="430" y1="227" x2="470" y2="227" stroke="var(--violet-ink)" strokeWidth="1.6" strokeDasharray="4 4" markerStart="url(#dep-arr-1)" markerEnd="url(#dep-arr-1)"/>
      <line x1="230" y1="342" x2="230" y2="364" stroke="var(--rule)" strokeDasharray="2 4" markerEnd="url(#dep-dot)"/>
      <line x1="670" y1="342" x2="670" y2="364" stroke="var(--rule)" strokeDasharray="2 4" markerEnd="url(#dep-dot)"/>
      <rect x="30" y="364" width="840" height="60" rx="10" fill="var(--surface)" stroke="var(--green)" strokeWidth="1.4"/>
      <rect x="46" y="384" width="12" height="12" rx="3" fill="var(--green)" opacity=".9"/>
      <text x="66" y="394" className="t-lbl">monitoring</text>
      <text x="66" y="412" className="t-edge">queue depth · tps per account · smpp binds · dlr ratio · node health</text>
      <g transform="translate(547.6 383)"><rect width="308.4" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">upgrade and rollback tested on every release</text></g>
      <text x="450" y="462" className="t-edge" textAnchor="middle">an upgrade takes one node out while the other keeps sending; rollback is the same move in reverse</text>
      <text x="450" y="484" className="t-edge" textAnchor="middle">every component ships as a container; the same images run on-premise, hosted, or hybrid</text>
    </svg>
  );
}
