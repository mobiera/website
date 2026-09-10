import Link from "next/link";
import { faCertificate, faDiagramProject, faGraduationCap, faHandshake, faHeadset, faMobileScreen, faRobot, faShieldHalved, faSimCard, faSitemap, faTowerCell } from "@fortawesome/free-solid-svg-icons";
import type { Metadata } from "next";
import JsonLd from "./components/JsonLd";
import HeroMark from "./components/HeroMark";
import ProofOfTrust from "./components/ProofOfTrust";
import LogoWall from "./components/LogoWall";
import NewsList from "./components/NewsList";
import { ButtonLink, Card, CardTitle, Chips, Eyebrow, Feature, MoreLink, ProofStrip, Section } from "./components/ui";
import { NUMBERS, OPERATORS, PARTNERS } from "./lib/content";
import { getAllNews } from "./lib/news";
import { LINKS, SITE_DESCRIPTION, SITE_TAGLINE } from "./lib/site";

export const metadata: Metadata = {
  title: { absolute: `Mobiera: ${SITE_TAGLINE}` },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Home() {
  const news = getAllNews().slice(0, 3);
  return (
    <>
      <JsonLd />
      <div className="ground">
        <HeroMark />
        <section className="hero container-x">
          <div className="hero-grid">
            <div>
              <Eyebrow>Verifiable Credentials · Verana Foundation co-founder · Latin America</Eyebrow>
              <h1 className="mt-3">Trust networks and Verifiable Credentials.</h1>
              <p className="lead">
                Mobiera co-founded the Verana Foundation, designs and runs trust ecosystems for governments, sectors and enterprises, and certifies the integrators who build on Verana in Latin America. The same team has run software inside 25+ mobile networks since 2012.
              </p>
              <div className="ctas">
                <ButtonLink href="/trust" variant="primary">Verifiable Credentials</ButtonLink>
                <ButtonLink href="/certification">Get Verana certified</ButtonLink>
              </div>
            </div>
            <ProofOfTrust />
          </div>
        </section>
      </div>

      <Section eyebrow="Two lines of business" title="What we build, and what we prove">
        <div className="grid-2">
          <Card>
            <span className="eyebrow tag">01</span>
            <CardTitle icon={faShieldHalved}>Verifiable Credentials and trust networks</CardTitle>
            <p className="text-muted">Trust that anyone can verify, built on the <a href="https://verana.io" className="text-link" rel="noopener">Verana Trust Infrastructure</a>.</p>
            <ul>
              <li>Founding member of the Verana Foundation since June 2025.</li>
              <li>Trust ecosystems, issuer and verifier services, wallet and agent integration.</li>
              <li>Training and certification for the integrators who build on Verana.</li>
            </ul>
            <MoreLink href="/trust">Verifiable Credentials</MoreLink>
          </Card>
          <Card>
            <span className="eyebrow tag">02</span>
            <CardTitle icon={faTowerCell}>Telecom software and services</CardTitle>
            <p className="text-muted">Platforms that run inside the operator's network.</p>
            <ul>
              <li>Aircast: STK push marketing, bulk messaging and SIM OTA campaigns from one engine.</li>
              <li>AI One: customer-support AI agents on SMS and Hologram, verifiable by design.</li>
              <li>Integration, managed operations and SIM engineering, on your infrastructure or ours.</li>
            </ul>
            <MoreLink href="/telecom">Telecom</MoreLink>
          </Card>
        </div>
      </Section>

      <Section>
        <ProofStrip items={NUMBERS} />
      </Section>

      <Section eyebrow="Verifiable Credentials and trust networks" title="Three roles on Verana">
        <div className="grid-3">
          <Card>
            <CardTitle icon={faHandshake}>Founding member</CardTitle>
            <p className="text-muted">Co-founded the Verana Foundation in June 2025 with 2060 OÜ and Orchestrating Identity. Specification and Reference Implementation working groups.</p>
            <MoreLink href="/trust/verana">Mobiera and Verana</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faDiagramProject}>Builder and operator</CardTitle>
            <p className="text-muted">Ecosystem design and governance frameworks; issuer and verifier services; wallets and AI agents as Verifiable Services; operations.</p>
            <MoreLink href="/trust/services">Trust services</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faCertificate}>Official certificator</CardTitle>
            <p className="text-muted">Trains integrators to build on Verana and certifies the professionals who pass the exams, for Latin America.</p>
            <MoreLink href="/certification">Get Verana certified</MoreLink>
          </Card>
        </div>
        <div className="grid-3 mt-8">
          <Feature icon={faMobileScreen} title="Telco-certified phone numbers"><p>The operator issues a credential that binds a phone number to a subscriber; every service that accepts it verifies the issuer on the public registry.</p></Feature>
          <Feature icon={faHeadset} title="Verifiable customer-support agents"><p>An operator's AI agent proves who operates it before a subscriber types a word. Running today in AI One.</p></Feature>
          <Feature icon={faSitemap} title="Sector ecosystems in Latin America"><p>Diplomas, licenses, certifications and memberships that any partner can verify, governed by the body that issues them.</p></Feature>
        </div>
        <div className="cert mt-8">
          <span className="pot"><i />Eight exams · two-year credential</span>
          <CardTitle icon={faGraduationCap}>Get Verana certified</CardTitle>
          <p className="muted">Mobiera trains integrators to build on Verana and certifies the professionals who pass the exams. Designated by the Verana Foundation. Valid until May 2029.</p>
          <Link href="/certification" className="btn">Get certified <span className="arrow" aria-hidden="true">→</span></Link>
        </div>
      </Section>

      <Section eyebrow="Telecom platforms" title="Software that runs inside the operator's network">
        <div className="grid-2">
          <Card>
            <CardTitle icon={faSimCard}>Aircast</CardTitle>
            <p className="text-muted">Campaigns over the operator's network. Any handset, no data, no balance. STK push marketing, bulk SMS and MMS, and SIM OTA campaigns from one engine, at whatever throughput your SMSC allows.</p>
            <Chips items={["STK · SAT · USTK", "SMS · MMS · flash", "OTA RAM · RFM", "3DES-CBC · AES"]} />
            <MoreLink href="/telecom/aircast">Aircast</MoreLink>
          </Card>
          <Card>
            <CardTitle icon={faRobot}>AI One</CardTitle>
            <p className="text-muted">AI agents your subscribers can reach on any phone, and verify. Customer support over SMS and Hologram, integrated with your billing, identified with verifiable credentials so nobody can impersonate your operator.</p>
            <Chips items={["SMS · DIDComm", "MSISDN PIN", "LLM-agnostic · MCP", "Verifiable Service"]} />
            <MoreLink href="/telecom/ai-agents">AI One</MoreLink>
          </Card>
        </div>
        <p className="mt-6"><MoreLink href="/telecom">Telecom software and services</MoreLink></p>
      </Section>

      <Section>
        <div className="grid-2">
          <LogoWall title="Partners" logos={PARTNERS} />
          <LogoWall title="Operators" logos={OPERATORS} />
        </div>
      </Section>

      <Section>
        <div className="grid-2 gap-10">
          <div>
            <Eyebrow>Open source</Eyebrow>
            <h2 className="my-3">Sixteen public repositories</h2>
            <p className="text-muted max-w-[52ch]">Libraries for ETSI TS 102.221, 102.222, 102.225 and 102.226, a GlobalPlatform card-content manager, the Aircast integration APIs, and the stats and service-log containers.</p>
            <p className="mt-4"><MoreLink href={LINKS.github}>github.com/mobiera</MoreLink></p>
          </div>
          <div>
            <Eyebrow className="mb-3">Latest news</Eyebrow>
            <NewsList items={news} />
          </div>
        </div>
      </Section>

      <section className="section">
        <div className="container-x cta-band">
          <div>
            <h2>Tell us what you are building</h2>
            <p className="text-muted mt-2">Every message reaches the right person. No sales queue, no email to guess.</p>
          </div>
          <ButtonLink href="/contact" variant="primary">Contact</ButtonLink>
        </div>
      </section>
    </>
  );
}
