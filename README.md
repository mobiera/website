# mobiera.com

Source for [mobiera.com](https://www.mobiera.com), the Mobiera SAS website:
operator-grade software for mobile networks (Aircast, AI One) and verifiable
trust on Verana (trust services, integrator certification for Latin America).

Built with **Next.js** (App Router, standalone output), **React 19**,
**Tailwind CSS v4** and **TypeScript**, on the same stack as
[2060.io-website](https://github.com/2060-io/2060.io-website). No database, no
accounts. Delivered as a container image (`ghcr.io/mobiera/website`).

## Content

The copy is specified in [`spec/`](spec/): one Markdown file per page under
`spec/pages/`, the style rules in `spec/STYLE.md`, every fact the site may
state in `spec/facts.yaml`. Pages under `app/` implement those files; change
the spec first, then the page.

News items are Markdown files in [`content/news/`](content/news/), named
`YYYY-MM-DD-slug.md` with front matter (`title`, `date`, `tags`, `summary`).
They render at `/news/<slug>` and in the RSS feed at `/news/feed.xml`.

Design: direction A ("Signal") from `spec/design/`. Tokens live in
`app/globals.css`; the logo is the existing Mobiera mark and wordmark.

## Develop

```bash
nvm use            # Node 22
npm install
cp .env.example .env.local   # optional: SMTP for the contact form
npm run dev        # http://localhost:3000
```

Scripts: `npm run build`, `npm start`, `npm run typecheck`, `npm test`.

## Contact form

`/contact` posts to `app/api/contact/route.ts`, which validates the
submission (honeypot, time-to-submit, rate limit, consent) and emails it over
SMTP with Nodemailer, the same way 2060.io-website does. Recipients come from
`CONTACT_TO` with per-topic overrides (`CONTACT_TO_CAREERS`, ...). Career
applications attach the PDF the candidate uploads. With `MAIL_HOST` unset the
form accepts and logs submissions without delivering them.

## Deploy

GitHub Actions build and push `ghcr.io/mobiera/website` on pushes to `main`
(`dev` tag) and on release tags (`vX.Y.Z`, `latest`). Releases are cut by
release-please from conventional commits. Rolling the image out to a cluster is
not wired yet: the target (the OVH Kubernetes pattern of the sister sites, or
Mobiera's own infrastructure) is decided at launch. `charts/` holds a minimal
Helm chart for that step.

Old URLs from the Hugo site redirect (`app/lib/redirects.ts`); the PHP form
handlers and the mock login return 410 (`proxy.ts`). `/images/*` keeps the old
paths for the mark-only logos and hosted images linked from outside the site.
