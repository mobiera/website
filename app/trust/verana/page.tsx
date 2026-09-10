import type { Metadata } from "next";
import { faGavel, faGlobe, faGraduationCap, faLandmark, faTowerCell, faUsers } from "@fortawesome/free-solid-svg-icons";
import { ButtonLink, Card, CardTitle, CtaBand, Feature, PageHero, Section } from "@/app/components/ui";
import { LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Mobiera and Verana",
  description: "Mobiera co-founded the Verana Foundation, contributes to its Specification and Reference Implementation working groups, and is a candidate for a Founding Council seat.",
  alternates: { canonical: "/trust/verana" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Mobiera and Verana" title="Founding member. Working-group contributor. Council candidate." lead="Mobiera co-founded the Verana Foundation, contributes to its Specification and Reference Implementation working groups, and is a candidate for a Founding Council seat." />

      <Section eyebrow="Founding member" lead="The Verana Foundation is the non-profit steward of the open trust layer: it owns the Verifiable Trust and Verifiable Public Registry specifications, stewards the open-source software, and grows the ecosystem. It is in formation, stewarded by 2060 OÜ. Its founding members are 2060 OÜ, Mobiera and Orchestrating Identity. Mobiera joined at the founding, in June 2025.">
        <ButtonLink href={LINKS.foundation}>Verana Foundation</ButtonLink>
      </Section>

      <Section eyebrow="Three bodies, three sites" lead="Mobiera's site describes Mobiera's role. For the protocol itself, read those three.">
        <div className="grid-3">
          <Card>
            <CardTitle icon={faLandmark}>Verana Foundation</CardTitle>
            <p className="text-muted">The steward. Specifications, software, membership, working groups.</p>
            <a className="more" href={LINKS.foundation} rel="noopener">veranafoundation.org ↗</a>
          </Card>
          <Card>
            <CardTitle icon={faGavel}>Verana Council</CardTitle>
            <p className="text-muted">The governor. A non-profit Swiss association that governs and secures the live network and its ECS Ecosystem, one member one vote.</p>
            <a className="more" href={LINKS.council} rel="noopener">veranacouncil.org ↗</a>
          </Card>
          <Card>
            <CardTitle icon={faGlobe}>verana.io</CardTitle>
            <p className="text-muted">The network and its software. Documentation, the Playground, the roadmap.</p>
            <a className="more" href={LINKS.verana} rel="noopener">verana.io ↗</a>
          </Card>
        </div>
      </Section>

      <Section eyebrow="What we contribute">
        <div className="grid-3">
          <Feature icon={faTowerCell} title="Telecom channels for the trust layer"><p>SMS, SIM toolkit and phone-number verification as first-class parts of verifiable interactions.</p></Feature>
          <Feature icon={faGraduationCap} title="Training and certification of integrators"><p>Across Latin America, as the Foundation's official certificator: eight tracks, one exam each, on the testnet.</p></Feature>
          <Feature icon={faUsers} title="Two working groups"><p>The Specification WG (SPEC-WG) and the Reference Implementation WG.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="Council candidacy" lead="Founding Council recruitment is open through Q4 2026. Mobiera has applied for a Founding Council seat. Until the Council's ballot seats it, Mobiera is a candidate, and this page will say so.">
        <ButtonLink href={LINKS.council}>Verana Council</ButtonLink>
      </Section>

      <Section eyebrow="The roadmap we build to" lead="Protocol v4 is in progress through Q3 2026 (trust graph and indexer APIs, operator authorization, business and cloud wallets, wallet integrations). Protocol v5, mainnet readiness, is planned for Q4 2026. Mainnet launch is planned for Q1 2027.">
        <ButtonLink href={LINKS.roadmap}>Full roadmap</ButtonLink>
      </Section>

      <CtaBand title="Working on Verana in Latin America?" lead="Integrators, sector bodies and operators: tell us what you are building." href="/contact?topic=trust" label="Talk to us" />
    </>
  );
}
