---
title: Telecom software and services
description: Aircast and AI One, platforms that run inside the operator's network, on-premise or hosted, shaped to your SMSC's throughput. 25+ operators, about 60 million subscribers reached per day.
url: /telecom
---

# Software that runs inside the operator's network.

Push marketing on every handset, bulk messaging and SIM OTA, AI agents on SMS.
Deployed on your infrastructure or ours, shaped to your SMSC's throughput.
800 million subscribers reachable, about 60 million reached per day.

> CTA: Read the docs → https://docs.mobiera.io · Talk to us → /contact

## Two platforms

### Aircast

STK push marketing, general messaging and OTA campaign management in one
platform, sharing one campaign engine, one operator GUI and one set of APIs.
Works on any handset, with no data connection and no subscriber balance.

> CTA: Aircast → /telecom/aircast

### AI One

Customer-support AI agents that subscribers reach over SMS or Hologram. The
agent is a Verifiable Service on Verana, so a subscriber's wallet shows who
operates it before the first message.

> CTA: AI One → /telecom/ai-agents

## How we deploy

**On your infrastructure or ours.** Every platform ships as containers. Run it
on-premise in your data center, hosted by Mobiera, or hybrid: the campaign
engine with you, bearer adapters and OTA executors where the traffic is.

**Scale by adding instances.** Every component on the campaign path (REST
endpoint, campaign manager, bearer adapters, OTA executor) is stateless and
queue-driven. When you need more throughput, you deploy more instances of the
component that limits you. There is no central bottleneck.

**Shaped to your network.** Throughput is set by configuration, not hard
limits: per-hour TPS budgets on every SMPP and MMSC account, campaign
priorities, per-campaign caps, and reuse of unused budget by lower-priority
campaigns. An overnight OTA roll-out never degrades daytime marketing or
transactional traffic.

**Built for availability.** Active-active topologies, georedundant nodes,
monitored queues, tested upgrade and rollback. The reference architectures are
on the documentation portal.

**Integrate three ways.** REST APIs for one-shot pushes and messaging, file
drop for operators that already run an upstream campaign manager, and SMPP
accounts for bearers.

## Standards we implement

ETSI TS 102.221 (UICC-terminal interface), ETSI TS 102.222 (administrative
commands), ETSI TS 102.225 (secured packet structure, the OTA security layer),
ETSI TS 102.226 (remote APDU structure for RAM and RFM), 3GPP TS 03.19 (SIM
Toolkit API), 3GPP TS 23.038 (alphabets and coding), 3GPP TS 23.048 (OTA
security), GlobalPlatform card content management, Java Card, SMPP, MM7.

Four of these implementations are open source on github.com/mobiera.

## Services around the platforms

Integration with your SMSC, MMSC and billing; managed operations of hosted
nodes; SIM and OTA engineering; consulting on push channels and campaigns.

> CTA: Talk to us → /contact

## Who runs it

Claro (Peru) · Telefónica · América Móvil · Ooredoo (Algeria) · Viettel
(Vietnam) · Digicel (Panama) · Bitel (Peru) · Viva (Bolivia) · Halotel
(Tanzania)

<!-- country labels for Telefónica and América Móvil to be filled from facts.yaml -->

## Documentation

Architecture, APIs, applet installation guides and operations manuals for
Aircast are public at docs.mobiera.io.

> CTA: Read the docs → https://docs.mobiera.io · Talk to us → /contact

## Sources

- Aircast documentation portal: docs/aircast/intro, concepts, infra sections.
- Standards: facts.yaml `standards.telecom`.
- Deployments: facts.yaml `customers_and_partners`.
