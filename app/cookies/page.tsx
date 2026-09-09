import type { Metadata } from "next";
import CookiePreferences from "./CookiePreferences";
import { PageHero } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "mobiera.com sets one essential cookie for your consent choice and, only if you accept, analytics cookies. No advertising cookies.",
  alternates: { canonical: "/cookies" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Cookie policy" lead="One essential entry for your consent choice, analytics only if you accept, no advertising cookies." ground={false} />
      <div className="container-x prose pb-20">
        <h2>Essential</h2>
        <p>Your consent choice is stored in your browser's local storage for as long as you keep it. Your theme preference (light or dark) is stored the same way and never sent to us.</p>
        <h2>Analytics, with consent</h2>
        <p>Anonymized usage statistics through Google Analytics 4, set only after you accept, for 13 months.</p>
        <h2>Change your choice</h2>
        <CookiePreferences />
      </div>
    </>
  );
}
