import { getLocale, getTranslations } from "next-intl/server";
import { FOUNDED, getEntity } from "@/app/lib/entity";
import { LINKS, SITE_NAME } from "@/app/lib/site";

/** Organization structured data, rendered on the home page only. */
export default async function JsonLd() {
  const t = await getTranslations("common");
  const entity = getEntity(await getLocale());
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${entity.url}/#organization`,
    name: SITE_NAME,
    legalName: entity.name,
    url: entity.url,
    logo: `${entity.url}/images/favicon/android-chrome-512x512.png`,
    description: t("meta.description"),
    foundingDate: String(FOUNDED),
    address: { "@type": "PostalAddress", ...entity.postal },
    sameAs: [LINKS.linkedin, LINKS.github],
    memberOf: { "@type": "Organization", name: "Verana Foundation", url: LINKS.foundation },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
