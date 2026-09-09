# Style rules for mobiera.com

These rules apply to every page and every news item. They follow the discipline
of the Verana family of sites (verana.io, veranafoundation.org,
veranacouncil.org, 2060.io) with one difference: mobiera.com sells.

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
| Products | Aircast, AI One, Sleepy, Micro, USTK | AIRCAST, AI-One, AI Friends (internal only) |
| Applets | "the Sleepy applet", "the Micro applet" | "Sleepy Applet" as a proper noun |
| Acronyms | STK (SIM toolkit), SAT (SIM application toolkit), OTA, RAM, RFM, MNO, MVNO, VAS, SMSC, SMPP, MM7, TPS; expand on first use per page | |
| Verana | Verana (the network), Verana Foundation, Verana Council, ECS Ecosystem, Essential Credential Schemas, Verifiable Service, Verifiable User Agent, Proof-of-Trust, VS-Agent, Trust Graph, Playground | "the Verana blockchain", "Verana Labs" (it is a GitHub organization, not a body) |
| Certification | "the official certificator for Verana integrators in Latin America" | "accredited" (a specific ECS term), "authorized" |
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
