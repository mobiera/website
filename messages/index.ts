import type { Locale } from "@/i18n/routing";
import en from "./en";

type Json = { [key: string]: Json | string | unknown[] };

function isRecord(v: unknown): v is Json {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

/** English fills any key a translation has not covered yet; arrays are leaves. */
function fill(base: Json, over: Json): Json {
  const out: Json = { ...base };
  for (const [k, v] of Object.entries(over)) {
    const b = out[k];
    out[k] = isRecord(v) && isRecord(b) ? fill(b, v) : v;
  }
  return out;
}

export async function loadMessages(locale: Locale): Promise<typeof en> {
  if (locale === "en") return en;
  const { default: other } = await import(`./${locale}`);
  return fill(en as unknown as Json, other as Json) as unknown as typeof en;
}
