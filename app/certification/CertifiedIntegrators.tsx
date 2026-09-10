import { CardTitle } from "@/app/components/ui";
import { getCertifiedIntegrators, isDirectoryConfigured } from "@/app/lib/trust-graph";
import { faBuilding, faUsers } from "@fortawesome/free-solid-svg-icons";

export default async function CertifiedIntegrators() {
  const entries = await getCertifiedIntegrators();
  if (entries.length === 0) {
    return (
      <div className="card max-w-[70ch]">
        <CardTitle icon={faUsers}>The first cohort is in training</CardTitle>
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
          <CardTitle icon={faBuilding}>{e.name}</CardTitle>
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
