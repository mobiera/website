import { getCertifiedIntegrators, isDirectoryConfigured } from "@/app/lib/trust-graph";

export default async function CertifiedIntegrators() {
  const entries = await getCertifiedIntegrators();
  if (entries.length === 0) {
    return (
      <div className="card max-w-[70ch]">
        <h3>The first cohort is in training</h3>
        <p className="text-muted">
          Certified integrators appear here from the Trust Graph: the companies whose business wallet presents a valid Verana Certified Integrator credential issued by Mobiera.
          {!isDirectoryConfigured() && " The directory switches on when the Trust Graph is live."}
        </p>
      </div>
    );
  }
  return (
    <ul className="grid-3" aria-label="Certified integrators">
      {entries.map((e) => (
        <li key={e.did} className="card">
          <h3>{e.name}</h3>
          {e.country && <span className="eyebrow">{e.country}</span>}
          <p className="font-mono text-xs text-muted break-all">{e.did}</p>
          <p className="flex flex-wrap gap-4">
            <a className="more" href={e.verifyUrl} rel="noopener">Verify</a>
            {e.website && <a className="more" href={e.website} rel="noopener">Website</a>}
          </p>
        </li>
      ))}
    </ul>
  );
}
