export type ConsentValue = "accepted" | "declined";
export const STORAGE_KEY = "mobiera-cookie-consent";
export const EVENT_NAME = "cookie-consent-change";

export function readStoredConsent(): ConsentValue | null {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
}
