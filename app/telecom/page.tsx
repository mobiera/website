import type { Metadata } from "next";
import LogoWall from "@/app/components/LogoWall";
import HeroMark from "@/app/components/HeroMark";
import TpsChart from "@/app/components/TpsChart";
import { ButtonLink, Card, Chips, CtaBand, Eyebrow, Feature, MoreLink, Section } from "@/app/components/ui";
import { OPERATORS, TELECOM_STANDARDS } from "@/app/lib/content";
import { LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Telecom software and services",
  description: "Aircast and AI One, platforms that run inside the operator's network, on-premise or hosted, shaped to your SMSC's throughput. 25+ operators, about 60 million subscribers reached per day.",
  alternates: { canonical: "/telecom" },
};

export default function Page() {
  return (
    <>
      <div className="ground">
        <HeroMark />
        <section className="hero container-x">
          <div className="hero-grid">
            <div>
              <Eyebrow>Telecom · 25+ operators since 2012</Eyebrow>
              <h1 className="mt-3">Software that runs inside the operator's network.</h1>
              <p className="lead">Push marketing on every handset, bulk messaging and SIM OTA, AI agents on SMS. Deployed on your infrastructure or ours, shaped to your SMSC's throughput. 800 million subscribers reachable, about 60 million reached per day.</p>
              <div className="ctas">
                <ButtonLink href={LINKS.docs} variant="primary">Read the docs</ButtonLink>
                <ButtonLink href="/contact?topic=aircast">Talk to us</ButtonLink>
              </div>
            </div>
            <TpsChart />
          </div>
        </section>
      </div>

      <Section eyebrow="Two platforms">
        <div className="grid-2">
          <Card>
            <h3>Aircast</h3>
            <p className="text-muted">STK push marketing, general messaging and OTA campaign management in one platform, sharing one campaign engine, one operator GUI and one set of APIs. Works on any handset, with no data connection and no subscriber balance.</p>
            <Chips items={["STK · SAT · USTK", "SMS · MMS · flash", "OTA RAM · RFM"]} />
            <MoreLink href="/telecom/aircast">Aircast</MoreLink>
          </Card>
          <Card>
            <h3>AI One</h3>
            <p className="text-muted">Customer-support AI agents that subscribers reach over SMS or Hologram. The agent is a Verifiable Service on Verana, so a subscriber's wallet shows who operates it before the first message.</p>
            <Chips items={["SMS · DIDComm", "MSISDN PIN", "Verifiable Service"]} />
            <MoreLink href="/telecom/ai-agents">AI One</MoreLink>
          </Card>
        </div>
      </Section>

      <Section eyebrow="How we deploy" title="Your infrastructure or ours, at your network's pace">
        <div className="grid-2">
          <Feature title="On your infrastructure or ours"><p>Every platform ships as containers. Run it on-premise in your data center, hosted by Mobiera, or hybrid: the campaign engine with you, bearer adapters and OTA executors where the traffic is.</p></Feature>
          <Feature title="Scale by adding instances"><p>Every component on the campaign path (REST endpoint, campaign manager, bearer adapters, OTA executor) is stateless and queue-driven. When you need more throughput, you deploy more instances of the component that limits you. There is no central bottleneck.</p></Feature>
          <Feature title="Shaped to your network"><p>Throughput is set by configuration, not hard limits: per-hour TPS budgets on every SMPP and MMSC account, campaign priorities, per-campaign caps, and reuse of unused budget by lower-priority campaigns. An overnight OTA roll-out never degrades daytime marketing or transactional traffic.</p></Feature>
          <Feature title="Built for availability"><p>Active-active topologies, georedundant nodes, monitored queues, tested upgrade and rollback. The reference architectures are on the documentation portal.</p></Feature>
          <Feature title="Integrate three ways"><p>REST APIs for one-shot pushes and messaging, file drop for operators that already run an upstream campaign manager, and SMPP accounts for bearers.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="Standards we implement" lead="Four of these implementations are open source on github.com/mobiera.">
        <Chips items={TELECOM_STANDARDS} />
      </Section>

      <Section eyebrow="Services around the platforms" title="Integration, operations, SIM and OTA engineering" lead="Integration with your SMSC, MMSC and billing; managed operations of hosted nodes; SIM and OTA engineering; consulting on push channels and campaigns.">
        <MoreLink href="/contact?topic=aircast">Talk to us</MoreLink>
      </Section>

      <Section eyebrow="Who runs it">
        <LogoWall title="Operators" logos={OPERATORS} countries />
      </Section>

      <Section eyebrow="Documentation" title="Architecture, APIs, applets and operations, in public" lead="The Aircast documentation portal covers architecture, the developer APIs, the applet installation guides and the operations manuals.">
        <div className="ctas mt-0">
          <ButtonLink href={LINKS.docs} variant="primary">Read the docs</ButtonLink>
          <ButtonLink href="/contact?topic=aircast">Talk to us</ButtonLink>
        </div>
      </Section>
      <CtaBand title="Evaluating a push channel or an AI agent?" lead="Tell us which network, which SMSC and which use case. We answer within two business days." href="/contact?topic=aircast" label="Contact" />
    </>
  );
}
