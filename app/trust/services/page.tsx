import type { Metadata } from "next";
import { ButtonLink, CtaBand, Feature, PageHero, Section, Steps } from "@/app/components/ui";

export const metadata: Metadata = {
  title: "Trust services",
  description: "Ecosystem design and governance, issuer and verifier services, wallet and agent integration, and operations for organizations building on the Verana trust network.",
  alternates: { canonical: "/trust/services" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Trust services" title="From governance framework to production issuer." lead="We design the ecosystem, deploy the verifiable services, integrate the wallets, and run what you do not want to run yourself.">
        <ButtonLink href="/contact?topic=trust" variant="primary">Talk to us</ButtonLink>
      </PageHero>

      <Section>
        <div className="grid-2">
          <Feature title="Ecosystem design and governance"><p>An ecosystem on Verana is a governed list of participants authorized to issue, verify or hold certain credentials. We write yours: the credential schemas, the participant tree (grantors, issuers, verifiers, holders), the permission modes from fully open to fully governed, and the business model (onboarding fees, pay-per-issuance, pay-per-verification, or no fees at all). The Ecosystem Governance Framework starts from the template the Verana Council publishes.</p></Feature>
          <Feature title="Issuer and verifier services"><p>We deploy VS-Agent, Verana's Business Wallet, as the runtime of your Verifiable Services: a resolvable DID, credentials and Linked Verifiable Presentations, trust resolution before every exchange, and the registry operations run for you. Issuance and verification flows over DIDComm and OpenID4VC, in JSON-LD, SD-JWT VC or AnonCreds as each credential requires. Integrated with the IAM, CRM and KYC systems you already run.</p></Feature>
          <Feature title="Wallet and agent integration"><p>Your credentials work in the wallets already interoperating on the Verana Playground, among them Hologram, the EUDI reference wallet, swiyu, BC Wallet, NL Wallet, Inji and Paradym. Your AI agents become Verifiable Services that prove who operates them, over DIDComm, MCP or A2A.</p></Feature>
          <Feature title="Run the stack"><p>Self-hosted VS-Agents, an indexer and a resolver for your ecosystem, on your infrastructure or ours, monitored and upgraded like the telecom platforms we have run for fourteen years.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="How an engagement runs">
        <Steps items={[
          { title: "Discovery", body: "The relying parties, the credentials, the governance, the business model. Two to four weeks." },
          { title: "Pilot on testnet", body: "Your ecosystem registered on the Verana testnet, first issuer and verifier live, wallets connected." },
          { title: "Production at mainnet", body: "The same ecosystem carried to mainnet at network launch, with operations handed over or kept." },
        ]} />
      </Section>

      <CtaBand title="Start with a discovery" lead="Two to four weeks to a governance framework, a schema set and a pilot plan." href="/contact?topic=trust" label="Talk to us" />
    </>
  );
}
