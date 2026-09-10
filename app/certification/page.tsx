import type { Metadata } from "next";
import CertifiedIntegrators from "./CertifiedIntegrators";
import { ButtonLink, Card, CtaBand, Feature, PageHero, Section, Steps } from "@/app/components/ui";
import { LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Verana certification",
  description: "Mobiera trains integrators to build on Verana and certifies the professionals who pass the eight exams. Verana Certified Professional and Verana Certified Integrator, for Latin America.",
  alternates: { canonical: "/certification" },
};

const TRACKS = [
  { title: "Verana foundations", body: "The three parts (trust ecosystems, verifiable identity, the Trust Graph), the public registry, the standards." },
  { title: "Business wallets", body: "Deploying and operating VS-Agent: DIDs, credentials and Linked Verifiable Presentations, key custody, upgrades." },
  { title: "Ecosystems", body: "Credential schemas, the participant tree, permission modes, business models, a governance framework from the Council's template, onboarding participants." },
  { title: "Hosting services for customers", body: "Issuers, verifiers and AI agents as Verifiable Services; operations, monitoring, backups, security." },
  { title: "Personal wallets", body: "Integrating and customizing wallets with Verana, DIDComm and OpenID4VC flows, interoperability on the Playground." },
  { title: "Selling Verana-based services", body: "The value proposition, ecosystem business models, the pitch to a customer." },
  { title: "The Verana community", body: "The Foundation's working groups, how to take part and how to promote them." },
  { title: "The Verana brand", body: "Usage rules and recommendations: what an integrator may claim, and how to present it." },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Certification · Latin America" title="Get Verana certified." lead="Mobiera trains integrators to build on Verana and certifies the professionals who pass the exams: business wallets, ecosystems, hosting services for customers, personal wallets, and how to sell and represent Verana. Designated by the Verana Foundation as the official certificator for Latin America.">
        <ButtonLink href="/contact?topic=certification" variant="primary">Enroll</ButtonLink>
      </PageHero>

      <Section eyebrow="Why certification exists" lead="Verana is open, public infrastructure. What a customer buys from an integrator is the ability to put it to work: a business wallet that stays up, an ecosystem whose governance holds, services hosted with the keys and the operations a regulated client expects. Certification proves an integrator can do that, against a curriculum maintained by the Foundation's official certificator for Latin America." />

      <Section eyebrow="The curriculum" title="Eight tracks, one exam each">
        <Steps items={TRACKS} />
      </Section>

      <Section eyebrow="The exams" lead="One exam per track, eight in total. Hands-on on the Verana testnet, in person, in English or Spanish. Online exams follow. Pass mark: 90 percent per exam. A failed exam is retaken on its own, with no waiting period. Pass every exam and you are a Verana Certified Professional." />

      <Section eyebrow="Training" lead="Instructor-led by Mobiera, about three weeks, scheduled per company. Self-paced material on docs.verana.io as it is published." />

      <Section eyebrow="Prerequisites">
        <div className="grid-2">
          <Feature title="Professionals"><p>A Contributor member of the Verana Foundation. Contributor membership is free and open to individuals.</p></Feature>
          <Feature title="Companies"><p>A Contributor or Associate member of the Verana Foundation.</p></Feature>
        </div>
        <p className="mt-6"><ButtonLink href={`${LINKS.foundation}/join`}>Join the Foundation</ButtonLink></p>
      </Section>

      <Section eyebrow="Two levels of recognition">
        <div className="grid-2">
          <Card>
            <h3>Verana Certified Professional</h3>
            <p className="text-muted">By exam, valid two years. Issued as a certificate and as a Verifiable Credential to the professional's personal wallet.</p>
          </Card>
          <Card>
            <h3>Verana Certified Integrator</h3>
            <p className="text-muted">A company with two certified professionals and one delivered project, or a public Playground use case published on its own infrastructure. Issued as a Verifiable Credential to the company's business wallet.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Certified integrators" lead="A company proves its certification from its own business wallet, verifiable by anyone, the same way it will prove everything else on Verana. This list is generated from the Trust Graph, not maintained by hand.">
        <CertifiedIntegrators />
      </Section>

      <Section eyebrow="Who it is for" lead="Integrators, software vendors, consultancies and operator IT teams in Latin America." />

      <Section eyebrow="The designation">
        <div className="cert max-w-[60ch]">
          <span className="pot"><i />Official certificator · Latin America</span>
          <h3 className="text-[1.4rem]">Designated by the Verana Foundation.</h3>
          <p className="muted">Valid until May 2029.</p>
        </div>
      </Section>

      <Section eyebrow="Pricing and schedule" lead="On request. Training is scheduled per company." />

      <CtaBand title="Enroll" lead="Tell us who you are, how many people, and when. We answer within two business days." href="/contact?topic=certification" label="Enroll" />
    </>
  );
}
