# Design brief and directions

Decisions taken 9 September 2026:

- **Logo**: the existing Mobiera logo is reused as is. Source files:
  `assets/images/logo_mobiera.svg` (color, navy wordmark), `logo_mobiera-white.svg`
  (white, for dark grounds), `logo_mobiera-footer.svg`, and the mark alone in
  `static/images/logo-notext.svg` and `logo-notext-transparent.svg`. In the
  mockups the wordmark is inlined with `fill="currentColor"` so it follows the
  text color in light and dark themes; the puzzle mark stays violet.
- **Palette**: violet #8353F2, navy #192442, green #50E2AA, from the 2023
  brandbook. Deep violet #5E3ABE appears inside the mark.
- **Typeface**: ITC Avant Garde is not licensed for the web and is not kept.
  Each direction below proposes its own pairing; the chosen direction fixes it.
- **Framework**: the same stack as 2060.io-website (see `stack.md`). Hugo is
  retired.
- **Process**: three homepage directions to choose from before the full site is
  built. All three use the same copy from `../pages/home.md`, the same logo and
  the same palette, so the comparison is about design only. Each is a
  responsive page with light and dark themes.

## Chosen: A · Signal (decided 9 September 2026)

Direction A is the site's design. Its tokens are the `:root` blocks in
`app/globals.css`; Sora, Manrope and IBM Plex Mono load through `next/font`.
Directions B and C stay here as the record of the choice.

Hero background (decided 10 September 2026): the square grid is replaced by
the puzzle-piece M from the logo, outlined large and faded, offset to the
right, over a soft violet glow. Chosen among five candidates (glow, signal
lines, trust graph, mark, dot field): `hero-backgrounds.html`.

Card icons (10 September 2026): card titles carry a Font Awesome solid icon
in a violet badge on the left; feature titles carry the icon inline. Icons
are React SVGs from `@fortawesome/free-solid-svg-icons`, chosen per title in
each page, decorative only (`aria-hidden`).

## The three directions

| | A · Signal | B · Paper | C · Modular |
|---|---|---|---|
| Preview | https://claude.ai/code/artifact/0a920038-08e8-40d1-adb6-6d9937761b12 | https://claude.ai/code/artifact/9f1272f8-81a2-49df-be07-248dd6c7193c | https://claude.ai/code/artifact/c8fa1b36-716f-4104-88e6-c7ea592bac99 |
| File | `direction-a-signal.html` | `direction-b-paper.html` | `direction-c-modular.html` |
| Idea | The operator's network as a system: a grid ground, mono labels, and Aircast's 24-hour TPS budget as the hero visual | An editorial page: large geometric type, hairline rules, big numerals, the puzzle mark as a ghost pattern | The brand concept made literal: interlocking tiles in violet, navy and green, a bento hero |
| Default theme | Dark-first (full light theme) | Light-first (full dark theme) | Light-first (full dark theme) |
| Display face | Sora | Outfit | Plus Jakarta Sans (800) |
| Body face | Manrope | Source Sans 3 | Plus Jakarta Sans (400) |
| Labels | IBM Plex Mono | IBM Plex Mono | JetBrains Mono |
| Reads as | Technical, infrastructure, closest to verana.io's register | Considered, institutional, closest to the Foundation's register | Product-led, energetic, most distinct from the sister sites |
| Best if | Buyers are network and platform engineers | Buyers are executives, regulators, sector bodies | Mobiera wants to look like a product company first |

All three carry the same sections in the same order: nav, hero, the two lines,
the six numbers, the two platforms, trust and certification, operators and
partners, open source and latest news, contact, footer.

## After the choice

1. The chosen direction's tokens (colors, type, radius, spacing) become the
   Tailwind v4 `@theme` block in `app/globals.css`.
2. The homepage components are generalized into the shared set: page hero,
   product card, proof strip, process steps, logo wall, news card.
3. Two diagrams are drawn in the chosen language: Aircast's three jobs and the
   certification process.
4. The remaining fourteen pages are built from `../pages/*.md`.

## Illustrations (2026-09-10)

Static inline SVG components in `app/components/`, drawn in the site's tokens
(text classes `.illus .t-*` in `app/globals.css`) so they follow the theme.
Three candidates were shown per page; the chosen ones:

| Page | Component | Chosen | Shows |
| --- | --- | --- | --- |
| /trust | `EcosystemTree` | A, top-down tree | Ecosystem root, grantors, issuers and verifiers, holders; Mobiera's branch highlighted |
| /certification | `CertificationPath` | A, horizontal roadmap | Foundation member, training, eight exams, Certified Professional, company step, Certified Integrator, directory from the Trust Graph |
| /telecom | `DeployStack` | C, two nodes, one stack | Two active-active georedundant nodes, each a layered stack down to the operator's SMSC, MMSC and SIM base, one monitoring strip |
| /telecom/aircast | `AircastFlow` | A, engine to handset | Campaign engine, Artemis queues and SMPP/MM7 adapters, the operator's SMSC/MMSC, three lanes: STK, SMS/MMS, OTA |
| /trust/services | `TrustTriangle` | B reworked, standing on the registry | Holder on top with its wallet; issuer and verifier standing on the Verana public registry band; Mobiera chips where it acts |
| /telecom/ai-agents | `AiOneHub` | B, hub | SMS and the operator mobile app on the left, LLM, MCP tools and billing on the right, Verana registry below |

Still open: the verify-first illustration and the locations map.
