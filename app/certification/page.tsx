import type { Metadata } from "next";
import { ButtonLink, Card, CtaBand, PageHero, Section, Steps } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Verana integrator certification",
  description: "Mobiera is the official certificator for integrators building products and services on the Verana network in Latin America. Review, interoperability testing on the Playground, and the credentials that make your products verifiable.",
  alternates: { canonical: "/certification" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Certification · Latin America" title="Become trusted on Verana." lead="Mobiera is the official certificator for integrators building products and services on the Verana network in Latin America. We review your implementation, test it on the Playground, and issue the credentials that make your organization, services and wallets verifiable.">
        <ButtonLink href="/contact?topic=certification" variant="primary">Apply for certification</ButtonLink>
      </PageHero>

      <Section eyebrow="Why certification exists" lead="On Verana, a service, an organization or a user agent is trusted only if it holds Essential Credentials issued by an issuer accredited in the ECS Ecosystem, the identity baseline governed by the Verana Council. Peers verify first, then connect. A product that cannot be trust-resolved is refused by wallets and by other services.">
        <p className="text-muted">Certification is how an integrator's products get there.</p>
      </Section>

      <Section eyebrow="What we certify">
        <div className="grid-3">
          <Card>
            <h3>Organizations</h3>
            <p className="text-muted">The legal entity behind the products, identified by its Organization credential.</p>
          </Card>
          <Card>
            <h3>Verifiable services, including AI agents</h3>
            <p className="text-muted">Conformance to the Verifiable Trust specification, so the service proves what it is and who operates it before any connection.</p>
          </Card>
          <Card>
            <h3>User agents and wallets</h3>
            <p className="text-muted">One authorization per product line, so every instance can prove it is a genuine Verifiable User Agent.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="The process">
        <Steps items={[
          { title: "Apply", body: "Tell us what you build and where it runs." },
          { title: "Review", body: "DID documents, Linked Verifiable Presentations, Proof-of-Trust display, fail-closed trust resolution, against the Verifiable Trust specification." },
          { title: "Interoperability test", body: "On the Verana Playground: issue and present credentials in SD-JWT VC and AnonCreds, over DIDComm and OpenID4VC, against the reference issuers, verifiers and wallets." },
          { title: "Certification", body: "Your participant entries are validated on the registry and your credentials issued." },
          { title: "Listing", body: "Your products appear in Mobiera's directory of certified integrators and become discoverable through the Trust Graph." },
          { title: "Renewal", body: "Per validity period, and on major versions of a product." },
        ]} />
      </Section>

      <Section eyebrow="Who it is for" lead="Wallet vendors, AI-agent builders, software vendors, system integrators and operators launching verifiable services, based or operating in Latin America. Requests from elsewhere are pointed to Verana's own channels." />

      <Section eyebrow="The designation">
        <div className="cert max-w-[60ch]">
          <span className="pot"><i />Official certificator · Latin America</span>
          <h3 className="text-[1.4rem]">Designated by the Verana Foundation.</h3>
          <p className="muted">Valid until May 2029.</p>
        </div>
      </Section>

      <Section eyebrow="Timing" lead="Certification is available on the Verana testnet now. Mainnet certification starts at network launch." />

      <CtaBand title="Apply for certification" lead="Tell us what you build and where it runs. We answer within two business days." href="/contact?topic=certification" label="Apply" />
    </>
  );
}
