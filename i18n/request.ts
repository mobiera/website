import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { applyTokens, entityFor, entityTokens, getRequestSite } from "@/app/lib/entity";
import { loadMessages } from "@/messages";

// Messages carry [[tokens]] wherever they name the legal entity behind the
// domain (entity.ts). They are resolved once per site and language.
const resolved = new Map<string, Awaited<ReturnType<typeof loadMessages>>>();

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const site = getRequestSite();
  const key = `${site}/${locale}`;
  let messages = resolved.get(key);
  if (!messages) {
    messages = applyTokens(await loadMessages(locale), entityTokens(entityFor(site, locale)));
    resolved.set(key, messages);
  }
  return { locale, messages };
});
