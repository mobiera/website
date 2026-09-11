import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LEGAL, LINKS } from "@/app/lib/site";

export default async function Footer() {
  const t = await getTranslations("common.footer");
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container-x">
        <div className="fcols">
          <div>
            <p className="font-display font-semibold text-ink">Mobiera</p>
            <p className="mt-2 max-w-[34ch]">{t("blurb")}</p>
          </div>
          <div>
            <h4>{t("trustHead")}</h4>
            <ul>
              <li><Link href="/trust">{t("trustNetworks")}</Link></li>
              <li><Link href="/trust/services">{t("trustServices")}</Link></li>
              <li><Link href="/certification">{t("certification")}</Link></li>
              <li><a href={LINKS.foundation} rel="noopener">{t("foundation")} ↗</a></li>
              <li><a href={LINKS.verana} rel="noopener">verana.io ↗</a></li>
              <li><a href={LINKS.council} rel="noopener">{t("council")} ↗</a></li>
            </ul>
          </div>
          <div>
            <h4>{t("telecomHead")}</h4>
            <ul>
              <li><Link href="/telecom">{t("platforms")}</Link></li>
              <li><Link href="/telecom/aircast">Aircast</Link></li>
              <li><Link href="/telecom/ai-agents">AI One</Link></li>
              <li><a href={LINKS.docs} rel="noopener">{t("documentation")} ↗</a></li>
              <li><a href={LINKS.github} rel="noopener">GitHub ↗</a></li>
            </ul>
          </div>
          <div>
            <h4>{t("companyHead")}</h4>
            <ul>
              <li><Link href="/company">{t("about")}</Link></li>
              <li><Link href="/company#open-source">{t("openSource")}</Link></li>
              <li><Link href="/company/careers">{t("careers")}</Link></li>
              <li><Link href="/news">{t("news")}</Link></li>
              <li><Link href="/contact">{t("contact")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="fbottom">
          <span>© {LEGAL.founded}-{year} {LEGAL.name}, {LEGAL.city}</span>
          <span className="flex flex-wrap gap-x-3">
            <Link href="/privacy">{t("privacy")}</Link>
            <Link href="/cookies">{t("cookies")}</Link>
            <a href={LINKS.linkedin} rel="noopener">LinkedIn</a>
            <a href={LINKS.github} rel="noopener">GitHub</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
