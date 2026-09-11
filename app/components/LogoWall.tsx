import { getTranslations } from "next-intl/server";
import type { Logo } from "@/app/lib/content";

export default async function LogoWall({ title, logos, countries = false }: { title: string; logos: Logo[]; countries?: boolean }) {
  const t = await getTranslations("content");
  return (
    <div>
      <p className="eyebrow mb-3">{title}</p>
      <ul className="logos" aria-label={title}>
        {logos.map((l) => {
          const country = l.country ? t(`countries.${l.country}`) : undefined;
          return (
            <li key={l.name} className="logo-chip" title={country ? `${l.name}, ${country}` : l.name}>
              <span className="tile">
                <img src={`/assets/logos/${l.file}`} alt={l.name} width={l.width} height={l.height} loading="lazy" className={l.darkArt ? "dark-art" : undefined} />
              </span>
              {countries && country && <span className="country">{country}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
