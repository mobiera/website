# Stack

Decision (9 September 2026): the same stack as 2060.io-website, not Hugo.

| Piece | Choice | Note |
|---|---|---|
| Framework | Next.js (App Router, `output: "standalone"`), as in 2060.io-website | 2060.io-website is on `next ^16.2` at the time of writing |
| Language | TypeScript, strict mode | |
| Styling | Tailwind CSS v4, CSS-first `@theme` tokens in `app/globals.css` | tokens come from the chosen design direction |
| Theme | Light and dark, stored choice else OS preference; toggle in the nav | same pattern as the sister sites |
| Fonts | Google Fonts, chosen with the design direction | no ITC Avant Garde, no SF Pro |
| Icons | Font Awesome via cdnjs, only if a direction needs icons | |
| Content | One typed content module per page built from `spec/pages/*.md`; news items as Markdown rendered with react-markdown | |
| Contact | `app/api/contact/route.ts`: zod validation, honeypot, time-to-submit, rate limit, topic routing to mailbox or CRM | no email addresses rendered on pages |
| SEO | `app/sitemap.ts`, `app/robots.ts`, per-page metadata, Open Graph image, JSON-LD Organization | |
| Redirects | `next.config.ts` `redirects()` from `spec/redirects.txt` | old Hugo URLs, and `/images/*` cache headers kept for inbound links |
| Runtime | Node 22 (alpine), multi-stage Dockerfile, unprivileged user | copied from 2060.io-website |
| Release | release-please, conventional commits | commit titles must be prefixed (feat:, fix:, chore:) |
| CI/CD | GitHub Actions: build and push the image, deploy | mirror 2060.io-website's `cd.yml` and `deploy.yml` |

Not carried over from 2060.io-website: Prisma, the database, Auth.js, the
dataroom. mobiera.io has no accounts.

Repository: this repository (mobiera/website). The Hugo site is removed when
the new site ships; until then it stays on `main` and the new site is built on
a branch.
