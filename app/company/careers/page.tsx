import type { Metadata } from "next";
import ContactForm from "@/app/components/ContactForm";
import { Feature, PageHero, Section } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Careers",
  description: "Work on software that runs inside live mobile networks and on the trust layer of the verifiable internet, in a distributed team working in Spanish and English.",
  alternates: { canonical: "/company/careers" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Code that runs in a live network." lead="We build platforms that mobile operators depend on every day, and the verifiable credential systems that will let people, services and AI agents prove who they are. Small team, real production systems, standards implemented to the letter." />

      <Section eyebrow="Why work here">
        <div className="grid-3">
          <Feature title="Real systems"><p>What you ship runs on SMSCs and SIM cards at 25+ operators, or on the Verana network. Bugs are visible; so is good work.</p></Feature>
          <Feature title="Two fields at once"><p>Telecom protocols from the 1990s and decentralized identity standards from this decade, in the same codebase and the same week.</p></Feature>
          <Feature title="Distributed, bilingual"><p>Colombia, Peru, Bolivia, Panama, Spain and Algeria. Spanish and English every day. Written communication first.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="Open roles" lead="No open roles at the moment. If you have shipped production code in telecom, identity or agentic AI, send us a profile anyway." />

      <Section eyebrow="Apply" title="Send a profile" lead="Name, email, LinkedIn or GitHub profile, a short message, and a CV (PDF). Applications go to our People team through the form; we answer every one.">
        <div className="max-w-[720px]">
          <ContactForm defaultTopic="careers" careers />
        </div>
      </Section>
    </>
  );
}
