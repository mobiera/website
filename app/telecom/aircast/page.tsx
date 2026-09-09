import type { Metadata } from "next";
import { ButtonLink, Card, Chips, CtaBand, Feature, PageHero, Section } from "@/app/components/ui";
import { LINKS } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Aircast",
  description: "Aircast runs STK push marketing, bulk SMS and MMS, and SIM OTA campaigns over the operator's network, on any handset, with no data and no balance, at the throughput your SMSC allows.",
  alternates: { canonical: "/telecom/aircast" },
};

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Aircast · MNO platform" title="Campaigns over the operator's network. Any handset, no data, no balance." lead="Aircast runs STK push marketing, bulk messaging and SIM OTA campaigns from one engine, at whatever throughput your SMSC allows. Across our deployments it reaches about 60 million subscribers a day.">
        <ButtonLink href={LINKS.docs} variant="primary">Read the docs</ButtonLink>
        <ButtonLink href="/contact?topic=aircast">Talk to us</ButtonLink>
      </PageHero>

      <Section eyebrow="One platform, three jobs">
        <div className="grid-3">
          <Card>
            <span className="eyebrow tag">01</span>
            <h3>Push marketing channel</h3>
            <p className="text-muted">Interactive STK campaigns delivered to the handset through a small Java Card applet on the SIM: Mobiera's Sleepy or Micro applet, or a third-party applet through the USTK push API.</p>
            <ul>
              <li>Any handset, smartphone or feature phone.</li>
              <li>No data connection and no subscriber balance, over a 0-rated MO/MT SMS shortcode.</li>
              <li>Bi-directional: ciphered STK bytecode down, the user's input back as ciphered MO-SMS.</li>
              <li>End-to-end ciphered with 3DES-CBC or AES, keys independent from the OTA keys.</li>
            </ul>
            <p className="text-sm text-muted">Use cases: advertising and upsell, opt-in and double opt-in, click-to-call, click-to-URL, USSD launchers, surveys, on-SIM menus.</p>
          </Card>
          <Card>
            <span className="eyebrow tag">02</span>
            <h3>Messaging platform</h3>
            <p className="text-muted">Bulk SMS, binary SMS, flash SMS (class 0) and MMS over the operator's SMSC and MMSC, with no applet required. Same campaign engine, same targeting, same throttling: only the bearer changes. One-shot pushes through the REST API, or mass campaigns from a target list and a descriptor file.</p>
            <p className="text-sm text-muted">Use cases: onboarding and welcome messages, one-time passwords, balance reminders, flash alerts, rich-media bursts, transactional bulk SMS.</p>
          </Card>
          <Card>
            <span className="eyebrow tag">03</span>
            <h3>OTA campaign manager</h3>
            <p className="text-muted">RAM campaigns (install, update, delete applets) and RFM campaigns (read, update SIM files) at SMSC scale on the live SIM base: TPS-aware, throttled, queued. Built on Mobiera's ETSI smart-card libraries and a GlobalPlatform card-content manager.</p>
            <p className="text-sm text-muted">Use cases: roll out, upgrade or remove an applet on existing SIMs; push SIM file updates such as PLMN lists.</p>
          </Card>
        </div>
      </Section>

      <Section eyebrow="One campaign engine" title="Scheduling, targeting, lists, file drop, statistics">
        <div className="grid-2">
          <Feature title="Scheduling"><p>Day-of-week and hour-of-day bitmaps, date ranges, maximum sends per day per MSISDN.</p></Feature>
          <Feature title="Targeting"><p>Full base scans, filtered SIM lists (by SIM profile, country, custom flags), or operator-supplied MSISDN lists.</p></Feature>
          <Feature title="Whitelists and blacklists"><p>Opt-in lists, opt-out lists, do-not-disturb registries, applied at execution time.</p></Feature>
          <Feature title="File-drop campaign creation"><p>Upload a descriptor file to a watched directory and the platform creates and schedules the campaign. No REST call needed. The integration path for operators with an upstream campaign manager.</p></Feature>
          <Feature title="Statistics and service logs"><p>Every send and every interaction recorded.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="Throughput you control" title="Shape the budget, never idle the SMSC" lead="An operator runs a massive overnight OTA roll-out without degrading daytime marketing or transactional SMS and MMS traffic.">
        <div className="grid-2">
          <Feature title="Per-hour TPS bitmaps"><p>On every SMPP and MMSC account: high TPS for OTA at night, lower in the day.</p></Feature>
          <Feature title="Per-campaign priorities"><p>A higher-priority campaign preempts a lower one for the shared budget.</p></Feature>
          <Feature title="Per-campaign TPS caps"><p>Individual ceilings, regardless of the bearer budget.</p></Feature>
          <Feature title="Stale-bandwidth reuse"><p>Budget a high-priority campaign does not use is offered to lower-priority campaigns, so the SMSC is never idle while there is work to do.</p></Feature>
        </div>
      </Section>

      <Section eyebrow="The applets" title="Sleepy, Micro, and third-party applets through USTK" lead="Sleepy and Micro are Mobiera products, delivered with installation guides and checksums.">
        <div className="grid-3">
          <Card>
            <h3>Sleepy</h3>
            <p className="text-muted">The full-feature STK applet, in Full and Lite editions, with SIM (0x070X) and UICC (0x090X) profiles. Requires Java Card 2.1.1 and the 3GPP TS 03.19 SIM Toolkit API, Release 99.</p>
            <Chips items={["Full · Lite", "SIM · UICC", "Java Card 2.1.1"]} />
          </Card>
          <Card>
            <h3>Micro</h3>
            <p className="text-muted">About 1.3 KB on card, for SIMs with 1.5 to 2 KB of free memory. Receives a campaign over OTA SMS, shows up to two DISPLAY TEXT commands, and reports the outcome back by SMS. Text is rendered exactly as encoded, in GSM-7, 8-bit or UCS-2.</p>
            <Chips items={["~1.3 KB", "DISPLAY TEXT", "GSM-7 · UCS-2"]} />
          </Card>
          <Card>
            <h3>Third-party applets</h3>
            <p className="text-muted">SAT and Oberthur / Idemia Pico applets through the USTK push API, one contract for all of them.</p>
            <Chips items={["SAT", "Pico", "USTK"]} />
          </Card>
        </div>
      </Section>

      <Section eyebrow="Integrate" title="APIs, file drop, webhooks, SMPP accounts, operator GUI">
        <ul className="grid-2 text-muted list-disc pl-5">
          <li>Sleepy Push API and USTK Push API for interactive campaigns.</li>
          <li>SMS and MMS messaging API for one-shot pushes.</li>
          <li>File drop for mass campaigns.</li>
          <li>Webhooks for response events and delivery reports.</li>
          <li>SMPP accounts per bearer, with TPS rules.</li>
          <li>Operator GUI for campaigns, files, lists, rules, users and statistics.</li>
        </ul>
        <p className="mt-6"><ButtonLink href={LINKS.docs}>Developer documentation</ButtonLink></p>
      </Section>

      <Section eyebrow="Deploy" title="Documented for your infrastructure team" lead="Deployment topologies, prerequisites, networking, security, monitoring, backups, scaling, high availability, upgrade and rollback.">
        <ButtonLink href={LINKS.docs}>Infrastructure documentation</ButtonLink>
      </Section>

      <Section eyebrow="Who runs it" title="Ooredoo (Algeria) and Claro (Peru), among 25+ operators." />

      <CtaBand title="Bring Aircast to your network" lead="Tell us your SMSC, SIM base and applet situation. We answer within two business days." href="/contact?topic=aircast" label="Talk to us" />
    </>
  );
}
