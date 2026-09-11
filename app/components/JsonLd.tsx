import { getTranslations } from "next-intl/server";
import { LEGAL, LINKS, SITE_NAME, SITE_URL } from "@/app/lib/site";

/** Organization structured data, rendered on the home page only. */
export default async function JsonLd() {
  const t = await getTranslations("common");
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: LEGAL.name,
    url: SITE_URL,
    logo: `${SITE_URL}/images/favicon/android-chrome-512x512.png`,
    description: t("meta.description"),
    foundingDate: String(LEGAL.founded),
    address: { "@type": "PostalAddress", streetAddress: "Cra 13A 86A-42", addressLocality: "Bogotá D.C.", addressCountry: "CO" },
    sameAs: [LINKS.linkedin, LINKS.github],
    memberOf: { "@type": "Organization", name: "Verana Foundation", url: LINKS.foundation },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
