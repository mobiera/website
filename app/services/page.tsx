import type { Metadata } from "next";
import { ButtonLink, Card, Chips, CtaBand, Feature, PageHero, Section } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Engineering and operations",
  description: "Telecom integration, managed operations, SIM and OTA engineering, and software engineering for clients in any industry, from a team that has run production systems inside operators' networks since 2012.",
  alternates: { canonical: "/services" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Services" title="We build it, integrate it, run it, and stay." lead="Integration with your SMSC and billing, hosted or on-premise operations, SIM and OTA engineering, and software teams that have shipped in telecom, fintech, travel and legaltech.">
        <ButtonLink href="/contact?topic=general" variant="primary">Talk to us</ButtonLink>
      </PageHero>

      <Section>
        <div className="grid-3">
          <Feature title="Telecom integration"><p>SMSC, MMSC, billing and CRM integration for Aircast and AI One, or for platforms you already run. SMPP and MM7 bearers, REST endpoints, file-based exchanges with upstream campaign managers, and third-party STK applets through the USTK push API.</p></Feature>
          <Feature title="Managed operations"><p>Hosted Aircast and AI One nodes, operated by Mobiera: monitoring, backups, upgrades and rollback, capacity, high availability and georedundancy. Or the same runbooks applied to your on-premise deployment, with your team.</p></Feature>
          <Feature title="SIM and OTA engineering"><p>Applet development and porting, OTA key management, campaign design, SIM profile discovery and list synchronization, RAM and RFM roll-outs on live SIM bases. The libraries we use for ETSI TS 102.221, 102.222, 102.225 and 102.226 are open source.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="Software engineering for any industry" lead="Industries we have shipped in: telecommunications, fintech, travel management, legaltech, ad-tech, self-sovereign identity.">
        <div className="grid-4">
          <Card><h3>Develop</h3><p className="text-muted">Product development from specification to delivery, continuously integrated, on your budget and timeline.</p></Card>
          <Card><h3>Operate</h3><p className="text-muted">Infrastructure setup, scalability and performance tuning, so what we built runs reliably through its life cycle.</p></Card>
          <Card><h3>Integrate</h3><p className="text-muted">Third-party systems connected to yours, planned and tested so the integration holds.</p></Card>
          <Card><h3>Consult</h3><p className="text-muted">DevOps and delivery practices: we look at how you ship today, find what slows you down, and change it with your team.</p></Card>
        </div>
      </Section>

      <Section eyebrow="How we engage" lead="A distributed team working in Spanish and English, across the Americas and Europe.">
        <div className="grid-3">
          <Feature title="Team extension"><p>Our engineers inside your team, your process.</p></Feature>
          <Feature title="Fixed scope"><p>A defined deliverable, a defined price.</p></Feature>
          <Feature title="Managed service"><p>We run it, with service levels.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="Consulting" lead="Push-channel and campaign strategy, migration off affiliate campaigns, and trust-ecosystem readiness for organizations moving to verifiable credentials.">
        <Chips items={["Push channels", "Campaign strategy", "Affiliate migration", "Trust readiness"]} />
      </Section>

      <CtaBand title="Tell us what needs building or running" lead="We answer within two business days with the people who would do the work." href="/contact?topic=general" label="Talk to us" />
    </>
  );
}
