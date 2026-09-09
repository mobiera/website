---
title: Aircast
description: Aircast runs STK push marketing, bulk SMS and MMS, and SIM OTA campaigns over the operator's network, on any handset, with no data and no balance, at the throughput your SMSC allows.
url: /telecom/aircast
---

# Campaigns over the operator's network. Any handset, no data, no balance.

Aircast runs STK push marketing, bulk messaging and SIM OTA campaigns from one
engine, at whatever throughput your SMSC allows. Across our deployments it
reaches about 60 million subscribers a day.

> CTA: Read the docs → https://docs.mobiera.io · Talk to us → /contact

## One platform, three jobs

### Push marketing channel

Interactive STK campaigns delivered to the handset through a small Java Card
applet on the SIM: Mobiera's Sleepy or Micro applet, or a third-party applet
through the USTK push API.

- Works on any handset, smartphone or feature phone.
- Works with no data connection and no subscriber balance, over a 0-rated MO/MT
  SMS shortcode.
- Bi-directional: the server sends ciphered STK bytecode, the applet renders
  the commands, the user's input returns as ciphered MO-SMS.
- End-to-end ciphered with 3DES-CBC or AES, with keys independent from the OTA
  keys.

Use cases: advertising and upsell, opt-in and double opt-in, click-to-call,
click-to-URL, USSD launchers, surveys, on-SIM menus.

### Messaging platform

Bulk SMS, binary SMS, flash SMS (class 0) and MMS over the operator's SMSC and
MMSC, with no applet required. Same campaign engine, same targeting, same
throttling: only the bearer changes. One-shot pushes through the REST API, or
mass campaigns driven from a target list and a descriptor file.

Use cases: onboarding and welcome messages, one-time passwords, balance
reminders, flash alerts, rich-media bursts, transactional bulk SMS.

### OTA campaign manager

RAM campaigns (install, update, delete applets) and RFM campaigns (read, update
SIM files) at SMSC scale on the live SIM base: TPS-aware, throttled, queued.
Built on Mobiera's ETSI smart-card libraries and a GlobalPlatform card-content
manager.

Use cases: roll out, upgrade or remove an applet on existing SIMs; push SIM file
updates such as PLMN lists.

## One campaign engine

- **Scheduling**: day-of-week and hour-of-day bitmaps, date ranges, maximum
  sends per day per MSISDN.
- **Targeting**: full base scans, filtered SIM lists (by SIM profile, country,
  custom flags), or operator-supplied MSISDN lists.
- **Whitelists and blacklists**: opt-in lists, opt-out lists, do-not-disturb
  registries, applied at execution time.
- **File-drop campaign creation**: upload a descriptor file to a watched
  directory and the platform creates and schedules the campaign. No REST call
  needed. The integration path for operators with an upstream campaign manager.
- **Statistics and service logs**: every send and every interaction recorded.

## Throughput you control

- Per-hour TPS bitmaps on every SMPP and MMSC account: high TPS for OTA at
  night, lower in the day.
- Per-campaign priorities: a higher-priority campaign preempts a lower one for
  the shared budget.
- Per-campaign TPS caps, regardless of the bearer budget.
- Stale-bandwidth reuse: budget a high-priority campaign does not use is
  offered to lower-priority campaigns, so the SMSC is never idle while there is
  work to do.

The result: an operator runs a massive overnight OTA roll-out without degrading
daytime marketing or transactional SMS and MMS traffic.

## The applets

**Sleepy.** The full-feature STK applet, in Full and Lite editions, with SIM
(0x070X) and UICC (0x090X) profiles. Requires Java Card 2.1.1 and the 3GPP TS
03.19 SIM Toolkit API, Release 99. Installation guides on the documentation
portal.

**Micro.** About 1.3 KB on card, for SIMs with 1.5 to 2 KB of free memory.
Receives a campaign over OTA SMS, shows up to two DISPLAY TEXT commands, and
reports the outcome back by SMS. Text is rendered exactly as encoded, in GSM-7,
8-bit or UCS-2.

**Third-party applets.** SAT and Oberthur / Idemia Pico applets through the
USTK push API, one contract for all of them.

Sleepy and Micro are Mobiera products, delivered with installation guides and
checksums.

## Integrate

- Sleepy Push API and USTK Push API for interactive campaigns.
- SMS and MMS messaging API for one-shot pushes.
- File drop for mass campaigns.
- Webhooks for response events and delivery reports.
- SMPP accounts per bearer, with TPS rules.
- Operator GUI for campaigns, files, lists, rules, users and statistics.

> CTA: Developer documentation → https://docs.mobiera.io

## Deploy

Deployment topologies, prerequisites, networking, security, monitoring,
backups, scaling, high availability, upgrade and rollback: all documented for
your infrastructure team.

> CTA: Infrastructure documentation → https://docs.mobiera.io

## Who runs it

Ooredoo (Algeria) and Claro (Peru), among 25+ operators.

> CTA: Read the docs → https://docs.mobiera.io · Talk to us → /contact

## Sources

- docs/aircast/intro.mdx and the concepts, applets, developers and infra
  sections of the documentation portal.
- sleepy/documentation installation guides (revision O, September 2025).
- micro/README (wire protocol, size limits).
- References: facts.yaml `products.aircast.references`.
