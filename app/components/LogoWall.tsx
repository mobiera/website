import type { Logo } from "@/app/lib/content";

export default function LogoWall({ title, logos, countries = false }: { title: string; logos: Logo[]; countries?: boolean }) {
  return (
    <div>
      <p className="eyebrow mb-3">{title}</p>
      <ul className="logos" aria-label={title}>
        {logos.map((l) => (
          <li key={l.name} className="logo-chip" title={l.country ? `${l.name}, ${l.country}` : l.name}>
            <span className="tile">
              <img src={`/assets/logos/${l.file}`} alt={l.name} width={l.width} height={l.height} loading="lazy" className={l.darkArt ? "dark-art" : undefined} />
            </span>
            {countries && l.country && <span className="country">{l.country}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
