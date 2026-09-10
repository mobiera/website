import type { Metadata } from "next";
import { faBrain, faCommentSms, faComments, faCubes, faPlug, faReceipt } from "@fortawesome/free-solid-svg-icons";
import { ButtonLink, Card, CardTitle, CtaBand, Feature, PageHero, Section } from "@/app/components/ui";
import { LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "AI One",
  description: "AI One runs customer-support AI agents over SMS and Hologram, integrates with the operator's billing, and identifies itself with verifiable credentials so nobody can impersonate your operator.",
  alternates: { canonical: "/telecom/ai-agents" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="AI One · AI agents for customer support" title="AI agents your subscribers can reach on any phone, and verify." lead="AI One runs customer-support agents over SMS and Hologram, integrates with your billing, and identifies itself with verifiable credentials so nobody can impersonate your operator.">
        <ButtonLink href="/contact?topic=ai-agents" variant="primary">Request a demo</ButtonLink>
      </PageHero>

      <Section eyebrow="Channels subscribers already have">
        <div className="grid-2">
          <Card>
            <CardTitle icon={faCommentSms}>SMS</CardTitle>
            <p className="text-muted">Every handset, no app, no data. The agent answers through the operator's SMSC, on a shortcode your subscribers already know.</p>
          </Card>
          <Card>
            <CardTitle icon={faComments}>Hologram</CardTitle>
            <p className="text-muted">A private DIDComm channel through Hologram Messaging, with rich messages, credential exchange and the Proof-of-Trust a subscriber sees before the first message.</p>
          </Card>
        </div>
        <p className="text-muted mt-4">Web and in-app front ends follow as they ship.</p>
      </Section>

      <Section eyebrow="Verifiable by design" title="The operator's agent proves it is the operator's agent" lead="The agent is a Verifiable Service on the Verana network. It holds a Service credential and your operator's Organization credential, published in its DID document, so a subscriber's wallet resolves who operates it and shows a Proof-of-Trust before the conversation starts. Nobody can stand up a lookalike support agent for your brand.">
        <p className="text-muted max-w-[66ch]">Phone number verification by SMS PIN binds each conversation to the MSISDN, on both channels.</p>
        <p className="mt-5"><ButtonLink href={LINKS.veranaIdentity}>How verification works</ButtonLink></p>
      </Section>

      <Section eyebrow="Runs on your stack">
        <div className="grid-2">
          <Feature icon={faBrain} title="LLM-agnostic"><p>Built on LangChain; connect the model provider you choose.</p></Feature>
          <Feature icon={faPlug} title="Your tools through MCP"><p>Balance, plans, tickets, campaigns: the agent calls your systems, not a copy of them.</p></Feature>
          <Feature icon={faCubes} title="Deployable in your Kubernetes"><p>Or hosted by Mobiera, with the same runbooks as Aircast.</p></Feature>
          <Feature icon={faReceipt} title="Billing integration"><p>Subscriptions and charging through your billing integration; conversation logs and statistics through the same service-log and stats containers as Aircast.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="What subscribers ask" lead="Balance and plan questions, bundle purchase, troubleshooting, campaign follow-up after an Aircast push, and handoff to a human agent with the context attached." />

      <Section eyebrow="Built with 2060's Hologram" lead="AI One runs on the Hologram AI agent framework built by 2060, the company that leads the Verana specifications. Mobiera integrates it with the operator's channels, billing and identity, and operates it.">
        <ButtonLink href={LINKS.hologram}>hologram.zone</ButtonLink>
      </Section>

      <Section eyebrow="Who runs it" title="Claro (Peru) and Halotel (Tanzania), since 2025." />

      <CtaBand title="See an AI One agent answer over SMS" lead="A demo on your own shortcode takes an afternoon to set up." href="/contact?topic=ai-agents" label="Request a demo" />
    </>
  );
}
