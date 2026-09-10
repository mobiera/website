/**
 * AI One as a hub for the AI agents page: SMS and the operator mobile app
 * on the left, LLM provider, MCP tools and billing on the right, and the
 * Verana public registry with the Service and Organization credentials below.
 * Static SVG drawn in the site's tokens so it follows the theme; the source
 * candidates are recorded in spec/design/README.md.
 */
export default function AiOneHub() {
  return (
    <svg viewBox="0 0 900 520" className="illus" role="img" aria-label="AI One hub: SMS and the operator mobile app on the left, LLM, MCP tools and billing on the right, the Verana registry with the Service and Organization credentials below">
      <defs>
        <marker id="aio-arr-0" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--green-ink)"/></marker>
        <marker id="aio-arr-1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--muted)"/></marker>
        <marker id="aio-arr-2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="var(--violet-ink)"/></marker>
        <marker id="aio-dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6"><circle cx="5" cy="5" r="4" fill="var(--muted)"/></marker>
      </defs>
      <rect x="320" y="200" width="260" height="120" rx="14" fill="none" stroke="var(--rule)" strokeDasharray="4 4"/>
      <text x="332" y="312" className="t-edge">operator's Kubernetes</text>
      <g transform="translate(350 226)">
        <rect width="200" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--violet)" opacity=".9"/>
        <text x="56" y="30" className="t-title">AI One agent</text>
        <text x="56" y="50" className="t-sub">LangChain · MCP tools</text>
      </g>
      <g transform="translate(30 100)">
        <rect width="230" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--green)" opacity=".9"/>
        <text x="56" y="30" className="t-title">SMS</text>
        <text x="56" y="50" className="t-sub">operator smsc · shortcode</text>
      </g>
      <g transform="translate(30 226)">
        <rect width="230" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--green)" opacity=".9"/>
        <text x="50" y="30" className="t-title" fontSize="14">Operator mobile app</text>
        <text x="50" y="50" className="t-sub">in-app chat · didcomm · PoT card</text>
      </g>
      <g transform="translate(30 352)">
        <rect width="230" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)" strokeDasharray="4 4"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--muted)" opacity=".9"/>
        <text x="56" y="30" className="t-title">Web chat</text>
        <text x="56" y="50" className="t-sub">next: same agent, browser</text>
      </g>
      <g transform="translate(30 302)"><rect width="163.2" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">built on 2060 Hologram</text></g>
      <g transform="translate(640 100)">
        <rect width="200" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--violet)" opacity=".9"/>
        <text x="56" y="30" className="t-title">LLM provider</text>
        <text x="56" y="50" className="t-sub">any model, any vendor</text>
      </g>
      <g transform="translate(640 226)">
        <rect width="210" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--violet)" opacity=".9"/>
        <text x="56" y="30" className="t-title">MCP tools</text>
        <text x="56" y="50" className="t-sub">balance · plans · tickets</text>
      </g>
      <g transform="translate(640 352)">
        <rect width="200" height="68" rx="10" fill="var(--surface)" stroke="var(--rule)"/>
        <rect x="14" y="20" width="28" height="28" rx="7" fill="var(--violet)" opacity=".9"/>
        <text x="56" y="30" className="t-title">Billing</text>
        <text x="56" y="50" className="t-sub">subscriptions · charging</text>
      </g>
      <line x1="260" y1="134" x2="350" y2="246" stroke="var(--green-ink)" strokeWidth="1.6" markerStart="url(#aio-arr-0)" markerEnd="url(#aio-arr-0)"/>
      <text className="t-edge" transform="translate(305 190) rotate(51.2)" textAnchor="middle" y="-10">sms</text>
      <line x1="260" y1="260" x2="350" y2="260" stroke="var(--green-ink)" strokeWidth="1.6" markerStart="url(#aio-arr-0)" markerEnd="url(#aio-arr-0)"/>
      <text className="t-edge" transform="translate(305 260) rotate(0)" textAnchor="middle" y="-10">didcomm</text>
      <line x1="260" y1="386" x2="350" y2="274" stroke="var(--muted)" strokeWidth="1.6" strokeDasharray="5 5" markerStart="url(#aio-arr-1)" markerEnd="url(#aio-arr-1)"/>
      <text className="t-edge" transform="translate(305 330) rotate(-51.2)" textAnchor="middle" y="-10">later</text>
      <line x1="550" y1="246" x2="640" y2="134" stroke="var(--violet-ink)" strokeWidth="1.6" markerEnd="url(#aio-arr-2)"/>
      <text className="t-edge" transform="translate(595 190) rotate(-51.2)" textAnchor="middle" y="-10">langchain</text>
      <line x1="550" y1="260" x2="640" y2="260" stroke="var(--violet-ink)" strokeWidth="1.6" markerEnd="url(#aio-arr-2)"/>
      <text className="t-edge" transform="translate(595 260) rotate(0)" textAnchor="middle" y="-10">mcp</text>
      <line x1="550" y1="274" x2="640" y2="386" stroke="var(--violet-ink)" strokeWidth="1.6" markerEnd="url(#aio-arr-2)"/>
      <text className="t-edge" transform="translate(595 330) rotate(51.2)" textAnchor="middle" y="-10">charging</text>
      <line x1="450" y1="320" x2="450" y2="436" stroke="var(--rule)" strokeDasharray="2 4" markerEnd="url(#aio-dot)"/>
      <text x="450" y="418" className="t-edge" textAnchor="middle">did document · resolved by the wallet</text>
      <rect x="270" y="436" width="360" height="64" rx="10" fill="var(--surface-2)" stroke="var(--violet)" strokeWidth="1.4"/>
      <text x="450" y="458" className="t-title" textAnchor="middle">Verana public registry</text>
      <g transform="translate(290 468)"><rect width="136.8" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">service credential</text></g>
      <g transform="translate(439 468)"><rect width="169.8" height="22" rx="4" fill="var(--violet-soft)"/><text x="9" y="15" className="t-chip">organization credential</text></g>
    </svg>
  );
}
