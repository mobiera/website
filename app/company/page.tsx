import type { Metadata } from "next";
import { faBullseye, faCode, faLocationDot, faPeopleGroup, faScaleBalanced, faWrench } from "@fortawesome/free-solid-svg-icons";
import LogoWall from "@/app/components/LogoWall";
import { ButtonLink, Card, CardTitle, CtaBand, Feature, MoreLink, PageHero, ProofStrip, Section } from "@/app/components/ui";
import { OFFICES, OPEN_SOURCE, OPERATORS, PARTNERS, TIMELINE } from "@/app/lib/content";
import { LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "About Mobiera",
  description: "Mobiera SAS was founded in Bogotá in 2012 and has put its platforms in 25+ mobile networks on every continent. Founding member of the Verana Foundation and official certificator for Verana integrators in Latin America.",
  alternates: { canonical: "/company" },
};

const NUMBERS = [
  { value: "25+", label: "mobile operators run our platforms" },
  { value: "800M", label: "subscribers reachable through messaging services powered by Mobiera" },
  { value: "~60M", label: "subscribers reached per day", tone: "green" as const },
  { value: "8", label: "offices: Bogotá, Peru, Bolivia, Panama, United States, Spain, France, Algeria" },
  { value: "2012", label: "founded; every continent served since" },
  { value: "16", label: "public repositories on GitHub", tone: "violet" as const },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Company" title="Fourteen years inside operators' networks." lead="Mobiera SAS was founded in Bogotá in 2012 and has since put its platforms in 25+ mobile networks on every continent, within reach of 800 million subscribers." />

      <Section eyebrow="Who we are">
        <div className="grid-2">
          <p className="text-muted">We build trust networks and verifiable credential systems on Verana: the ecosystems, issuer and verifier services and wallets that let people, organizations, services and AI agents prove who they are. In June 2025 we co-founded the Verana Foundation, the non-profit steward of the open trust layer, and in April 2026 the Foundation designated Mobiera the official certificator for Latin America: we train integrators to build on Verana and certify the professionals who pass the exams.</p>
          <p className="text-muted">Since 2012 we have also built the software that mobile operators run inside their networks: the SIM toolkit push and messaging platform behind campaigns that reach about 60 million subscribers a day, and the AI agents that answer their support questions over SMS. We deploy it, integrate it with the operator's systems, and operate it, on their infrastructure or ours.</p>
        </div>
      </Section>

      <Section eyebrow="Timeline">
        <div className="chapters">
          {TIMELINE.map((c) => (
            <div key={c.year} className={c.verana ? "chapter v" : "chapter"}>
              <div>
                <div className="ch-year">{c.year}</div>
                <div className="ch-span">{c.span}</div>
                <p className="ch-title">{c.title}</p>
              </div>
              <ol className="ch-list">
                {c.items.map((t) => (
                  <li key={t.when + t.text}><span className="when">{t.when}</span><span className="txt">{t.text}</span></li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="In numbers">
        <ProofStrip items={NUMBERS} />
      </Section>

      <Section eyebrow="Values">
        <div className="grid-4">
          <Feature icon={faBullseye} title="Customer first"><p>We measure ourselves on what runs in the customer's network, not on what we shipped.</p></Feature>
          <Feature icon={faScaleBalanced} title="Say what is true"><p>Concrete claims, disclosed limits, no surprises in production.</p></Feature>
          <Feature icon={faWrench} title="Do it properly"><p>Standards implemented to the letter, tested against real SIMs and real SMSCs.</p></Feature>
          <Feature icon={faPeopleGroup} title="Learn together"><p>A multilingual team that shares what it knows, with customers and in the open.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="Partners" lead="2060 OÜ, based in Tallinn, is an independent company that leads the Verana specifications and builds Hologram. Mobiera partners with 2060 on AI One and co-founded the Verana Foundation alongside it and Orchestrating Identity. Idemia, Bitdefender and Amplitudes are technology partners on the telecom platforms." />

      <Section eyebrow="Locations">
        <div className="grid-3">
          {OFFICES.map((o) => (
            <Card key={o.place}>
              <CardTitle icon={faLocationDot}>{o.place}</CardTitle>
              {o.note && <p className="text-muted text-sm">{o.note}</p>}
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Customers and partners">
        <div className="grid-2">
          <LogoWall title="Operators" logos={OPERATORS} countries />
          <LogoWall title="Partners" logos={PARTNERS} />
        </div>
      </Section>

      <Section id="open-source" eyebrow="Open source" title="Sixteen public repositories on github.com/mobiera">
        <div className="grid-3">
          {OPEN_SOURCE.map((g) => (
            <Card key={g.group}>
              <CardTitle icon={faCode}>{g.group}</CardTitle>
              <ul>
                {g.repos.map((r) => (
                  <li key={r}><a className="font-mono text-sm" href={`${LINKS.github}/${r}`} rel="noopener">{r}</a></li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-6"><MoreLink href={LINKS.github}>github.com/mobiera</MoreLink></p>
      </Section>

      <Section eyebrow="Careers" lead="We hire rarely, for people who want their code to run in a live network.">
        <ButtonLink href="/company/careers">Careers</ButtonLink>
      </Section>

      <CtaBand title="Talk to us" lead="Every message reaches the right person." href="/contact" label="Contact" />
    </>
  );
}
