/**
 * Hero panel: what the trust line delivers, shown as a Proof-of-Trust, the
 * card a wallet displays before connecting to a service on Verana. The
 * resolution below is an example, labelled as such; the Verana Certified
 * Integrator line previews the certification directory.
 */
const ROWS = [
  { label: "Organization credential", detail: "issued by the ECS Ecosystem", ok: true },
  { label: "Service credential", detail: "self-issued, verified", ok: true },
  { label: "Verana Certified Integrator", detail: "issued by Mobiera · valid to 2028", ok: true },
];

export default function ProofOfTrust() {
  return (
    <div className="panel" aria-label="Example Proof-of-Trust for a service on Verana">
      <div className="panel-head">
        <b>Proof-of-Trust</b>
        <span className="eyebrow">Verana testnet · example</span>
      </div>
      <div className="pot-did">
        <span className="eyebrow">Resolving</span>
        <code>did:webvh:…:acme-integrators.example</code>
        <span className="pot-org">Acme Integrators SAS · Bogotá, CO</span>
      </div>
      <ul className="pot-rows">
        {ROWS.map((r) => (
          <li key={r.label}>
            <span className="pot-check" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
            <span className="pot-label">{r.label}</span>
            <span className="pot-detail">{r.detail}</span>
          </li>
        ))}
      </ul>
      <div className="pot-foot">
        <span className="eyebrow">Trust score</span>
        <span className="pot-score" aria-label="Trust score 4 of 5"><i /><i /><i /><i /><i className="off" /></span>
        <span className="pot-verdict">Verified. Connect.</span>
      </div>
    </div>
  );
}
