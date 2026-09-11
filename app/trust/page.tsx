import type { Metadata } from "next";
import { faCertificate, faDiagramProject, faHandshake } from "@fortawesome/free-solid-svg-icons";
import EcosystemTree from "@/app/components/EcosystemTree";
import VeranaLockup from "@/app/components/VeranaLockup";
import { ButtonLink, Card, CardTitle, Chips, CtaBand, Feature, MoreLink, PageHero, Section, UseCase } from "@/app/components/ui";
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
      <PageHero eyebrow="Verifiable Credentials and trust networks" title="Verifiable trust for services, people and AI agents." lead="Mobiera co-founded the Verana Foundation, builds and runs trust ecosystems on the Verana network, and is the official certificator for the integrators who build on it in Latin America.">
        <ButtonLink href="/trust/services" variant="primary">Our trust services</ButtonLink>
        <ButtonLink href="/certification">Get certified</ButtonLink>
      </PageHero>

      <Section eyebrow="Three roles">
        <div className="grid-3">
          <Card>
            <CardTitle icon={faHandshake}>Founding member</CardTitle>
            <p className="text-muted">Mobiera co-founded the Verana Foundation in June 2025, with 2060 OÜ and Orchestrating Identity, and contributes to its Specification and Reference Implementation working groups.</p>
            <MoreLink href="/trust/verana">Mobiera and Verana</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faDiagramProject}>Builder and operator</CardTitle>
            <p className="text-muted">We design trust ecosystems, deploy issuer and verifier services, integrate wallets and AI agents, and run the stack for clients who do not want to run it themselves.</p>
            <MoreLink href="/trust/services">Trust services</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faCertificate}>Official certificator</CardTitle>
            <p className="text-muted">Designated by the Verana Foundation as the official certificator for Latin America: Mobiera trains integrators to build on Verana and certifies the professionals who pass the exams.</p>
            <MoreLink href="/certification">Get Verana certified</MoreLink>
          </Card>
        </div>
        <div className="illus-block mt-6"><EcosystemTree /></div>
      </Section>

      <Section eyebrow="Why Mobiera" title="Fourteen years of software other parties depend on" lead="Trust infrastructure has to stay up. The team that designs your ecosystem has run platforms inside 25+ mobile networks since 2012, reaching about 60 million subscribers a day, and brings the same operations discipline to VS-Agents, indexers and resolvers.">
        <MoreLink href="/telecom">Telecom software and services</MoreLink>
      </Section>

      <Section eyebrow="What Verana is, in one paragraph" lead="Verana is the open, public, neutral trust infrastructure for the internet, in three parts: sovereign trust ecosystems that define who is accredited to issue and verify credentials; verifiable identity, where a service, a person or an AI agent proves who is behind it before any connection; and the Trust Graph, which makes services discoverable by the credentials they hold. Open source, owned by no one.">
        <a href={LINKS.verana} className="btn btn-lockup" rel="noopener">
          <VeranaLockup variant="verana" size={22} />
          <span>Read more on verana.io</span>
          <span className="arrow" aria-hidden="true">→</span>
        </a>
      </Section>

      <Section eyebrow="Use cases we lead with" lead="Each one runs as a demo on the Verana Playground, with real wallets and real credentials on the testnet.">
        <div className="grid-3">
          <UseCase image="/images/usecases/verandia.webp" alt="The capital of the Republic of Verandia, the Playground's demo country" title="Government ID and Business Register credentials" href={LINKS.playgroundVerandia} cta="See Verandia on the Playground">
            Build your sovereign government trust network on a 100 percent open source stack: civil registry, business registry and tax authority issuing credentials that any service can verify, in an ecosystem the state governs and hosts.
          </UseCase>
          <UseCase image="/images/usecases/cexa.webp" alt="The Crypto Exchange Association boardroom, with the trust triangle on screen" title="Reusable KYC" href={LINKS.playgroundCexa} cta="See the exchange association on the Playground">
            One governed KYC credential shared across a consortium of exchanges and banks. Verify once, reuse everywhere, and pay the original issuer on each reuse instead of every party verifying from scratch.
          </UseCase>
          <UseCase image="/images/usecases/vesta.webp" alt="The Vesta Appliances factory, the Playground's demo manufacturer" title="Sector ecosystems in Latin America" href={LINKS.playgroundVesta} cta="See a partner ecosystem on the Playground">
            Diplomas, licenses, certifications and partner networks that any party can verify, governed by the sector body that issues them, on infrastructure it can host in its own jurisdiction. Vesta shows the pattern for a manufacturer and its repair partners.
          </UseCase>
        </div>
      </Section>

      <Section eyebrow="Standards">
        <Chips items={TRUST_STANDARDS} />
      </Section>

      <CtaBand title="Building or joining a trust ecosystem?" lead="Tell us the relying parties, the credentials and the governance you have in mind." href="/contact?topic=trust" label="Talk to us" />
    </>
  );
}
