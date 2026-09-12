# Style rules for mobiera.io

These rules apply to every page and every news item. They follow the discipline
of the Verana family of sites (verana.io, veranafoundation.org,
veranacouncil.org, 2060.io) with one difference: mobiera.io sells.

## Writing

1. Present tense, active voice, short sentences. "Aircast runs campaigns over
   the operator's network", not "Aircast empowers operators to regain control".
2. Every claim carries a noun a buyer can check: a standard, a number, a
   customer, a documentation page.
3. No em-dashes in site copy. Use commas, colons or parentheses.
4. No superlatives without a measure. Do not use: cutting-edge, seamless,
   robust, world-class, plethora, wonderland, revolutionize, empower, leverage,
   innovative, next-generation.
5. US spelling: optimize, organization, center, license (noun and verb).
6. Headings in sentence case. Uppercase only for eyebrow labels.
7. One call to action per section, verb first: "Read the docs", "Apply for
   certification", "Talk to us".
8. No email addresses on pages. The contact form routes. The one exception is
   privacy@mobiera.com on the privacy policy.
9. No names, titles or photos of people anywhere on the site. News items are
   signed "Mobiera".
10. Numbers as digits with units: 25+ operators, 800 million subscribers
    reachable, about 60 million a day. Years as 2012, not "fourteen years ago".
11. Link, do not duplicate. What Verana is lives on verana.io; what the
    Foundation and the Council are lives on their sites. Mobiera pages state
    Mobiera's role and link out.

## Names and terms

| Term | Use | Do not use |
|---|---|---|
| Mobiera | "Mobiera" in news, "we" on pages, "Mobiera SAS" in legal text | MOBIERA, Mobiera S.A.S. in running text |
| The trust line | "Verifiable Credentials" (capitalized, the W3C term, better known than "trust networks") as the nav label and line name; "trust networks" in running text | "Trust" alone as a label |
| Products | Aircast, AI One, Sleepy, Micro, USTK | AIRCAST, AI-One, AI Friends (internal only) |
| Applets | "the Sleepy applet", "the Micro applet" | "Sleepy Applet" as a proper noun |
| Acronyms | STK (SIM toolkit), SAT (SIM application toolkit), OTA, RAM, RFM, MNO, MVNO, VAS, SMSC, SMPP, MM7, TPS; expand on first use per page | |
| Verana | Verana (the network), Verana Foundation, Verana Council, ECS Ecosystem, Essential Credential Schemas, Verifiable Service, Verifiable User Agent, Proof-of-Trust, VS-Agent, Trust Graph, Playground | "the Verana blockchain", "Verana Labs" (it is a GitHub organization, not a body) |
| Certification | "An official certificator for Verana integrators in Latin America" (never "the": the designation is not exclusive, the Foundation can name others); "Verana Certified Professional" (people), "Verana Certified Integrator" (companies). It is a training and exam program: never describe it in ECS or credential-onboarding terms. Not "accredited" or "authorized". |
| Partners | 2060 (the company), Hologram (its product), Orchestrating Identity, Idemia, Bitdefender, Amplitudes | "idemia", "2060 OÜ" outside legal text |
| Customers | Claro, Telefónica, América Móvil, Ooredoo, Viettel, Digicel, Bitel, Viva, Halotel | trademark symbols |

## Structure of a page file

```markdown
---
title: Page title as shown in the browser tab (without " | Mobiera")
description: One sentence for the meta description, at most 160 characters.
url: /path
---

# H1

Sections with ## headings, in the order they render. A section may carry a
`> CTA:` line naming the button label and target.

## Sources

- Where each fact on this page comes from.
```

## Structure of a news file

```markdown
---
title: Headline in sentence case
date: YYYY-MM-DD
tags: [Telecom | Trust | Company]
summary: One paragraph shown on the index.
---

Body. Signed "Mobiera" by convention; no byline field.
```

## Spanish (es-419)

The site is served in Latin American Spanish under `/es` to browsers that
prefer any Spanish variant; English stays at the bare paths. The English copy
in `spec/` and `messages/en/` is the source; the Spanish lives only in
`messages/es/` (one file per page) and `content/news/*.es.md`. Register is
"usted", never "tú" or "vosotros"; neutral Latin American vocabulary; sentence
case for titles; no em-dashes. Fixed terms:

| English | Spanish |
| --- | --- |
| Verifiable Credentials (term, nav) | Credenciales Verificables |
| trust network, trust ecosystem | red de confianza, ecosistema de confianza |
| trust registry, public registry | registro de confianza, registro público |
| issuer, holder, verifier | emisor, titular, verificador |
| wallet (business, personal) | billetera (empresarial, personal), never cartera |
| governance framework | marco de gobernanza |
| Verifiable Service, Proof-of-Trust | Servicio Verificable, Proof-of-Trust |
| integrator, certificator, exam, track, training | integrador, certificador, examen, módulo, capacitación |
| operator, subscriber, handset | operador, suscriptor, teléfono |
| push marketing, bulk messaging, throughput | marketing push, mensajería masiva, capacidad de envío |
| on-premise, hosted by Mobiera, hybrid | en sus instalaciones, alojado por Mobiera, híbrido |
| open source | código abierto |
| Careers, About, Company, News, Telecom | Trabaje con nosotros, Quiénes somos, Empresa, Noticias, Telecomunicaciones |
| Request a demo, Talk to us, Get certified | Solicite una demo, Hable con nosotros, Certifíquese |

Product and proper names never change: Mobiera, Aircast, AI One, Sleepy,
Micro, Verana, Verana Foundation, Verana Council, Trust Graph, Hologram, 2060,
Verana Certified Professional, Verana Certified Integrator.
