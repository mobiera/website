---
title: AI One
description: AI One runs customer-support AI agents over SMS and Hologram, integrates with the operator's billing, and identifies itself with verifiable credentials so nobody can impersonate your operator.
url: /telecom/ai-agents
---

# AI agents your subscribers can reach on any phone, and verify.

AI One runs customer-support agents over SMS and Hologram, integrates with your
billing, and identifies itself with verifiable credentials so nobody can
impersonate your operator.

> CTA: Request a demo → /contact?topic=ai-agents

## Channels subscribers already have

**SMS.** Every handset, no app, no data. The agent answers through the
operator's SMSC, on a shortcode your subscribers already know.

**Hologram.** A private DIDComm channel through Hologram Messaging, with rich
messages, credential exchange and the Proof-of-Trust a subscriber sees before
the first message.

Web and in-app front ends follow as they ship.

## Verifiable by design

The agent is a Verifiable Service on the Verana network. It holds a Service
credential and your operator's Organization credential, published in its DID
document, so a subscriber's wallet resolves who operates it and shows a
Proof-of-Trust before the conversation starts. Nobody can stand up a lookalike
"support agent" for your brand.

Phone number verification by SMS PIN binds each conversation to the MSISDN, on
both channels.

> CTA: How verification works → https://verana.io/identity

## Runs on your stack

- LLM-agnostic, built on LangChain. <!-- list supported providers here -->
- Your tools and systems through MCP: balance, plans, tickets, campaigns.
- Deployable in your Kubernetes, or hosted by Mobiera.
- Subscriptions and charging through your billing integration.
- Conversation logs and statistics through the same service-log and stats
  containers as Aircast.

## What subscribers ask

Balance and plan questions, bundle purchase, troubleshooting, campaign
follow-up after an Aircast push, and handoff to a human agent with the context
attached.

## Built with 2060's Hologram

AI One runs on the Hologram AI agent framework built by 2060, the company that
leads the Verana specifications. Mobiera integrates it with the operator's
channels, billing and identity, and operates it.

## Who runs it

Claro (Peru) and Halotel (Tanzania), since 2025.

> CTA: Request a demo → /contact?topic=ai-agents

## Sources

- aifriends-multichannel-chatbot and aircast-hologram-ai-agent repositories:
  SMS and Hologram channels, MSISDN PIN authentication, LangChain, billing
  integration.
- 2060.io: Hologram AI Agent description.
- verana.io: Verifiable Services, Proof-of-Trust.
- References and launch date: facts.yaml `products.ai_one`.
