import type { Metadata } from "next";
import { ButtonLink, Card, Chips, CtaBand, Feature, MoreLink, PageHero, Section } from "@/app/components/ui";
import { TRUST_STANDARDS } from "@/app/lib/content";
import { LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Verifiable credentials and trust networks",
  description: "Mobiera co-founded the Verana Foundation, builds and runs trust ecosystems on the Verana network, and is the official certificator for the integrators who build on it in Latin America.",
  alternates: { canonical: "/trust" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Trust" title="Verifiable trust for services, people and AI agents." lead="Mobiera co-founded the Verana Foundation, builds and runs trust ecosystems on the Verana network, and is the official certificator for the integrators who build on it in Latin America.">
        <ButtonLink href="/trust/services" variant="primary">Our trust services</ButtonLink>
        <ButtonLink href="/certification">Get certified</ButtonLink>
      </PageHero>

      <Section eyebrow="Three roles">
        <div className="grid-3">
          <Card>
            <h3>Founding member</h3>
            <p className="text-muted">Mobiera co-founded the Verana Foundation in June 2025, with 2060 OÜ and Orchestrating Identity, and contributes to its Specification and Reference Implementation working groups.</p>
            <MoreLink href="/trust/verana">Mobiera and Verana</MoreLink>
          </Card>
          <Card>
            <h3>Builder and operator</h3>
            <p className="text-muted">We design trust ecosystems, deploy issuer and verifier services, integrate wallets and AI agents, and run the stack for clients who do not want to run it themselves.</p>
            <MoreLink href="/trust/services">Trust services</MoreLink>
          </Card>
          <Card>
            <h3>Official certificator</h3>
            <p className="text-muted">Designated by the Verana Foundation as the official certificator for Latin America: Mobiera trains integrators to build on Verana and certifies the professionals who pass the exams.</p>
            <MoreLink href="/certification">Get Verana certified</MoreLink>
          </Card>
        </div>
      </Section>

      <Section eyebrow="What Verana is, in one paragraph" lead="Verana is the open, public, neutral trust infrastructure for the internet, in three parts: sovereign trust ecosystems that define who is accredited to issue and verify credentials; verifiable identity, where a service, a person or an AI agent proves who is behind it before any connection; and the Trust Graph, which makes services discoverable by the credentials they hold. Open source, owned by no one.">
        <ButtonLink href={LINKS.verana}>Read more on verana.io</ButtonLink>
      </Section>

      <Section eyebrow="Use cases we lead with">
        <div className="grid-3">
          <Feature title="Telco-certified phone numbers"><p>The operator issues a credential that binds a phone number to a subscriber, and every service that accepts it verifies the issuer on the public registry. Reusable proof of a mobile number, without an SMS to every relying party.</p></Feature>
          <Feature title="Verifiable customer-support agents"><p>An operator's AI agent proves who operates it before a subscriber types a word. Running today in AI One.</p></Feature>
          <Feature title="Sector ecosystems in Latin America"><p>Diplomas, licenses, certifications and memberships that any partner can verify, governed by the sector body that issues them, on infrastructure it can host in its own jurisdiction.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="Standards">
        <Chips items={TRUST_STANDARDS} />
      </Section>

      <CtaBand title="Building or joining a trust ecosystem?" lead="Tell us the relying parties, the credentials and the governance you have in mind." href="/contact?topic=trust" label="Talk to us" />
    </>
  );
}
