import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Manrope, Sora, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "../globals.css";

faConfig.autoAddCss = false;
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import CookieConsent from "@/app/components/CookieConsent";
import Analytics from "@/app/components/Analytics";
import { SITE_NAME, SITE_URL } from "@/app/lib/site";
import { alternates, pageLocale, type PageParams } from "@/app/lib/seo";
import { HTML_LANG, OG_LOCALE, routing, type Locale } from "@/i18n/routing";

const sora = Sora({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-sora", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-manrope", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });
// Wordmark faces of the Verana sites, used only by the VeranaLockup component.
const inter = Inter({ subsets: ["latin"], weight: ["600"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["700"], variable: "--font-space-grotesk", display: "swap" });

export function generateStaticParams(): { locale: Locale }[] {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const locale = await pageLocale(params);
  const t = await getTranslations({ locale, namespace: "common.meta" });
  const title = `${SITE_NAME}: ${t("tagline")}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s | ${SITE_NAME}` },
    description: t("description"),
    applicationName: SITE_NAME,
    keywords: t("keywords").split(",").map((k) => k.trim()),
    alternates: alternates(locale, "/"),
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
    openGraph: { type: "website", siteName: SITE_NAME, url: SITE_URL, title, description: t("description"), locale: OG_LOCALE[locale] },
    twitter: { card: "summary_large_image", title, description: t("description") },
    icons: {
      icon: [{ url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" }, { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" }],
      apple: "/apple-touch-icon.png",
    },
  };
}

/**
 * Sets data-theme before first paint: stored choice, else OS preference, else
 * dark. The server never renders the attribute itself: a client-side
 * navigation between locales re-renders <html> and would reset a server value
 * to "dark" without running this script again.
 */
const themeInitScript = `
(function(){try{var s=localStorage.getItem('mobiera-theme');var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();
`;

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: Promise<PageParams> }) {
  const locale = await pageLocale(params);
  setRequestLocale(locale);
  const t = await getTranslations("common");
  return (
    <html lang={HTML_LANG[locale]} suppressHydrationWarning className={`${sora.variable} ${manrope.variable} ${plexMono.variable} ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <NextIntlClientProvider>
          <a href="#main" className="skip-link">{t("skipToContent")}</a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <CookieConsent />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
