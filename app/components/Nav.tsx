"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Logo from "./Logo";
import { NAV } from "@/app/lib/site";

const THEME_KEY = "mobiera-theme";

export default function Nav() {
  const t = useTranslations("common.nav");
  const locale = useLocale();
  const other = locale === "es" ? "en" : "es";
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
    setTheme(next);
  }

  return (
    <header className="site-header">
      <div className="container-x nav">
        <Link href="/" className="logo" aria-label={t("home")}>
          <Logo className="h-[26px] w-auto" />
        </Link>
        <nav className="links" aria-label={t("primary")}>
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : undefined} aria-current={isActive(l.href) ? "page" : undefined}>
              {t(l.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {/* A full navigation, not a client-side one: the proxy records the choice in the NEXT_LOCALE cookie and redirects to the canonical path. */}
          <a href={`/${other}${pathname === "/" ? "" : pathname}`} className="lang-switch" lang={other === "es" ? "es-419" : "en"} aria-label={t("switchLocale")} title={t("switchLocale")}>
            {t("switchLocaleShort")}
          </a>
          <button type="button" className="theme-toggle" aria-label={mounted && theme === "light" ? t("toDark") : t("toLight")} onClick={toggleTheme}>
            {mounted && theme === "light" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
            )}
          </button>
          <Link href="/contact" className="btn btn-primary nav-contact">{t("contact")}</Link>
          <button type="button" className="menu-btn" aria-label={t("menu")} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d={open ? "M4 4l12 12M16 4L4 16" : "M3 6h14M3 10h14M3 14h14"} /></svg>
          </button>
        </div>
      </div>
      {mounted && open && (
        <div className="mobile-menu">
          <nav className="container-x" aria-label={t("mobile")}>
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : undefined}>
                {t(l.key)}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary mt-2 self-start">{t("contact")}</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
