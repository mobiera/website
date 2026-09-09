import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "./components/JsonLd";
import TpsChart from "./components/TpsChart";
import LogoWall from "./components/LogoWall";
import NewsList from "./components/NewsList";
import { ButtonLink, Card, Chips, Eyebrow, MoreLink, ProofStrip, Section } from "./components/ui";
import { NUMBERS, OPERATORS, PARTNERS } from "./lib/content";
import { getAllNews } from "./lib/news";
import { LINKS, SITE_DESCRIPTION } from "./lib/site";

export const metadata: Metadata = {
  title: { absolute: "Mobiera: Operator-grade software. Verifiable trust." },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Home() {
  const news = getAllNews().slice(0, 3);
  return (
    <>
      <JsonLd />
      <div className="ground">
        <section className="hero container-x">
          <div className="hero-grid">
            <div>
              <Eyebrow>Bogotá · since 2012 · 25+ operators</Eyebrow>
              <h1 className="mt-3">Operator-grade software. Verifiable trust.</h1>
              <p className="lead">
                Mobiera builds and runs the platforms behind SIM toolkit push, messaging and AI agents in 25+ mobile networks. As a co-founder of the Verana Foundation and the official certificator for Verana integrators in Latin America, it brings the same rigor to verifiable credentials and trust networks.
              </p>
              <div className="ctas">
                <ButtonLink href="/telecom" variant="primary">Telecom platforms</ButtonLink>
                <ButtonLink href="/trust">Verifiable trust</ButtonLink>
              </div>
            </div>
            <TpsChart />
          </div>
        </section>
      </div>

      <Section eyebrow="Two lines of business" title="What we build, and what we prove">
        <div className="grid-2">
          <Card>
            <span className="eyebrow tag">01</span>
            <h3>Telecom software and services</h3>
            <p className="text-muted">Platforms that run inside the operator's network.</p>
            <ul>
              <li>Aircast: STK push marketing, bulk messaging and SIM OTA campaigns from one engine.</li>
              <li>AI One: customer-support AI agents on SMS and Hologram, verifiable by design.</li>
              <li>Integration, managed operations and SIM engineering, on your infrastructure or ours.</li>
            </ul>
            <MoreLink href="/telecom">Telecom</MoreLink>
          </Card>
          <Card>
            <span className="eyebrow tag">02</span>
            <h3>Verifiable credentials and trust networks</h3>
            <p className="text-muted">Trust that anyone can verify, built on Verana.</p>
            <ul>
              <li>Founding member of the Verana Foundation since June 2025.</li>
              <li>Trust ecosystems, issuer and verifier services, wallet and agent integration.</li>
              <li>The official certificator for Verana integrators in Latin America.</li>
            </ul>
            <MoreLink href="/trust">Trust</MoreLink>
          </Card>
        </div>
      </Section>

      <Section>
        <ProofStrip items={NUMBERS} />
      </Section>

      <Section eyebrow="Telecom platforms" title="Software that runs inside the operator's network">
        <div className="grid-2">
          <Card>
            <h3>Aircast</h3>
            <p className="text-muted">Campaigns over the operator's network. Any handset, no data, no balance. STK push marketing, bulk SMS and MMS, and SIM OTA campaigns from one engine, at whatever throughput your SMSC allows.</p>
            <Chips items={["STK · SAT · USTK", "SMS · MMS · flash", "OTA RAM · RFM", "3DES-CBC · AES"]} />
            <MoreLink href="/telecom/aircast">Aircast</MoreLink>
          </Card>
          <Card>
            <h3>AI One</h3>
            <p className="text-muted">AI agents your subscribers can reach on any phone, and verify. Customer support over SMS and Hologram, integrated with your billing, identified with verifiable credentials so nobody can impersonate your operator.</p>
            <Chips items={["SMS · DIDComm", "MSISDN PIN", "LLM-agnostic · MCP", "Verifiable Service"]} />
            <MoreLink href="/telecom/ai-agents">AI One</MoreLink>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Verifiable trust" title="Trust that anyone can verify, built on Verana">
        <div className="grid-2">
          <Card>
            <p className="text-muted">Mobiera co-founded the Verana Foundation, builds and runs trust ecosystems on the Verana network, and certifies the integrators who build on it in Latin America.</p>
            <ul>
              <li>Ecosystem design and governance frameworks.</li>
              <li>Issuer and verifier services, wallets and AI agents as Verifiable Services.</li>
              <li>Certification that makes an integrator's products trust-resolvable on Verana.</li>
            </ul>
            <MoreLink href="/trust">Trust</MoreLink>
          </Card>
          <div className="cert">
            <span className="pot"><i />Proof-of-Trust · verified</span>
            <h3 className="text-[1.4rem]">Become trusted on Verana</h3>
            <p className="muted">Mobiera is the official certificator for integrators building on Verana in Latin America. Designated by the Verana Foundation. Valid until May 2029.</p>
            <Link href="/certification" className="btn">Get certified <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid-2">
          <LogoWall title="Operators" logos={OPERATORS} />
          <LogoWall title="Partners" logos={PARTNERS} />
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
