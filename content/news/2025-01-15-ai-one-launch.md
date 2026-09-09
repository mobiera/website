---
title: AI One: verifiable AI agents for operators
date: 2025-01-15
tags: [Telecom, Trust]
summary: Mobiera launches AI One, customer-support AI agents that subscribers reach over SMS and Hologram, integrated with the operator's billing and identified with verifiable credentials.
---

<!-- exact day in January 2025 to confirm -->

Mobiera launches AI One, a platform for customer-support AI agents that
subscribers reach on any phone.

An AI One agent answers over SMS through the operator's SMSC, so it works on
every handset with no app and no data, and over a private DIDComm channel
through Hologram Messaging. Phone number verification by SMS PIN binds each
conversation to the subscriber's MSISDN.

The agent is a Verifiable Service on the Verana network. It publishes a Service
credential and the operator's Organization credential in its DID document, so a
subscriber's wallet shows who operates it before the first message. A lookalike
"support agent" cannot pass that check.

AI One is LLM-agnostic, connects to the operator's systems through MCP, and
runs in the operator's Kubernetes or hosted by Mobiera. Subscriptions and
charging go through the operator's billing integration. It is built on the
Hologram AI agent framework by 2060.

Read more: [AI One](/telecom/ai-agents)

Mobiera
