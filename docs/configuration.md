# Configuration: Google, GitHub, runtime secrets

What to set up before the new site goes live. Nothing here is committed to
the repository; every value below lives in Google, in GitHub settings, or in
the deployment's secret store.

## 1. Google Workspace: the sending mailbox

The contact form emails inquiries over SMTP through Google, the same way
2060.io-website does. It authenticates as one Workspace mailbox and sends
from it.

1. Pick or create the sending mailbox, for example `website@mobiera.com`.
   A dedicated mailbox keeps the app password separate from anyone's personal
   account.
2. Turn on 2-Step Verification for that account (Google Account > Security).
   App passwords require it.
3. Create an app password: Google Account > Security > 2-Step Verification >
   App passwords (https://myaccount.google.com/apppasswords). Name it
   `mobiera.io contact form`. Google shows a 16-character password once;
   that is `MAIL_PASSWORD`.
4. If the From address must differ from the mailbox (for example
   `no-reply@mobiera.com` while authenticating as `website@mobiera.com`), add
   it in Gmail > Settings > Accounts > "Send mail as" for that mailbox.
   Otherwise Google rewrites the From header to the authenticated address.
   The simplest setup is `MAIL_FROM_ADDRESS` = `MAIL_USERNAME`.
5. Workspace admin, only if app passwords are blocked by policy: enable them
   under Admin console > Security > Authentication > 2-Step Verification, or
   use the Workspace SMTP relay instead (Admin console > Apps > Google
   Workspace > Gmail > Routing > SMTP relay service) with
   `MAIL_HOST=smtp-relay.gmail.com`.

SMTP values for a Workspace mailbox:

| Variable | Value |
|---|---|
| `MAIL_HOST` | `smtp.gmail.com` |
| `MAIL_PORT` | `587` (STARTTLS) or `465` (SSL) |
| `MAIL_ENCRYPTION` | empty for 587, `ssl` for 465 |
| `MAIL_USERNAME` | the mailbox, e.g. `website@mobiera.com` |
| `MAIL_PASSWORD` | the app password |
| `MAIL_FROM_ADDRESS` | the mailbox, or a configured "Send mail as" alias |
| `MAIL_FROM_NAME` | `Mobiera` |

Sending limit for Workspace accounts is 2,000 messages per day, far above
what a contact form produces. Every email carries the visitor's address as
Reply-To, so the team answers by replying.

## 2. Google Workspace: who receives inquiries

Recipients are plain addresses, comma-separated. Google Groups
(`sales@mobiera.com`, `careers@mobiera.com`, ...) are the better choice:
routing changes in the group's membership, without a redeploy.

| Variable | Used for |
|---|---|
| `CONTACT_TO` | default recipients for every topic |
| `CONTACT_TO_AIRCAST` | topic "Aircast and STK push" |
| `CONTACT_TO_AI_AGENTS` | topic "AI agents" |
| `CONTACT_TO_TRUST` | topic "Trust services" |
| `CONTACT_TO_CERTIFICATION` | topic "Certification" |
| `CONTACT_TO_PARTNERSHIP` | topic "Partnership" |
| `CONTACT_TO_CAREERS` | topic "Careers" (career applications, with the CV attached) |
| `CONTACT_TO_PRESS` | topic "Press" |
| `CONTACT_TO_GENERAL` | topic "General" |

A topic without its own variable falls back to `CONTACT_TO`. With no
recipients configured, delivery fails and the visitor sees an error, so set
`CONTACT_TO` at minimum.

## 3. Google Analytics (optional)

1. Create a GA4 property for `www.mobiera.com` and a web data stream.
2. Copy the Measurement ID (`G-XXXXXXXXXX`).
3. Store it as the GitHub repository variable `NEXT_PUBLIC_GA_ID` (section 4).
   It is public and inlined at build time; the tag loads only after the
   visitor accepts analytics cookies. Leave the variable unset to keep
   analytics off.

## 4. GitHub

Settings to check once, in the `mobiera/website` repository:

- Actions > General > Workflow permissions: "Read and write permissions",
  and enable "Allow GitHub Actions to create and approve pull requests".
  release-please opens the release pull request with the default token and
  needs both.
- Actions > Secrets and variables > Actions > Variables (public values):

  | Variable | Value |
  |---|---|
  | `SITE_URL` | `https://mobiera.io` (optional, this is the default) |
  | `NEXT_PUBLIC_GA_ID` | the GA4 measurement id (optional) |

- Secrets (already created): `DOCKER_HUB_LOGIN` and `DOCKER_HUB_PWD`, a
  Docker Hub account with push rights on the `mobiera` organization. The
  workflows push `mobiera/website`: `dev` on every push to `main`; `main`,
  `latest`, `vX.Y.Z` and `vX.Y` when release-please cuts a release. The
  `mobiera/website` repository on Docker Hub is created on the first push if
  the account may create repositories in the organization; otherwise create
  it first (private or public, the cluster needs a pull secret if private).
- Pages: once DNS points at the new deployment, disable GitHub Pages for the
  repository (Settings > Pages). Until then the old site stays up.

Deployment runs from GitHub Actions (`deploy.yml`), like the other Mobiera
deploy workflows. Add these secrets alongside the Docker Hub ones; the
workflow mirrors the mail and routing values into the cluster secret:

| Secret | Value |
|---|---|
| `KUBECONFIG_MOBIERA_PROD` | kubeconfig of the OVH production cluster |
| `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD`, `MAIL_ENCRYPTION`, `MAIL_FROM_ADDRESS`, `MAIL_FROM_NAME` | section 1 |
| `CONTACT_TO` and the `CONTACT_TO_*` overrides you use | section 2 |
| `ALERT_WEBHOOK_URL` | optional |

Optional variables: `WEBSITE_NAMESPACE` (default `web`) and `WEBSITE_HOST`
(default `mobiera.io`).

## 5. Deploy

### From GitHub Actions (the normal path)

1. Add the secrets and variables from section 4.
2. Actions > "Deploy to Kubernetes (OVH)" > Run workflow, with the image tag
   to deploy (`v1.0.0`, `latest`, `main`, `dev`). The job creates the
   namespace and the secret, waits for the image on Docker Hub, and runs
   `helm upgrade --install` with `charts/`.
3. Every release cut by release-please deploys itself: merging the release
   pull request creates the tag, pushes the images, then runs this workflow
   with the new `vX.Y.Z` tag. The manual run stays for rollbacks and for
   pinning `dev`, `main` or `latest`.

The chart exposes the site through the cluster's nginx ingress with a
cert-manager certificate from the `letsencrypt-prod` issuer, the same setup as
the other Mobiera services.

### Cut-over to mobiera.io

Today `mobiera.io` (and `www.mobiera.io`, a CNAME to it) point at GitHub
Pages, and `mobiera.com` / `www.mobiera.com` at the Apache proxy that serves
the old site.

1. Deploy first, then test through the ingress before touching DNS:
   `curl -kI --resolve mobiera.io:443:<ingress IP> https://mobiera.io/`
   (the certificate is issued only once DNS resolves, hence `-k`).
2. Point `mobiera.io` at the ingress controller's external IP as A records
   (`kubectl -n ingress-nginx get svc`); keep `www.mobiera.io` as a CNAME to
   `mobiera.io`. The chart's redirect Ingress sends `www.mobiera.io` to
   `https://mobiera.io`.
3. cert-manager obtains the certificates within minutes of DNS propagating;
   `kubectl -n web get certificate` shows both Ready.
4. Remove the custom domain from whichever GitHub Pages site holds
   `mobiera.io` today, and disable Pages for this repository.
5. Old addresses: make `mobiera.com` and `www.mobiera.com` redirect to
   `https://mobiera.io`, either on the Apache proxy that serves them today or
   by pointing their DNS at the cluster and adding both names to
   `redirects.hosts` in `charts/values.yaml`. Old paths keep working through
   the site's own redirects.

### By hand (or on a plain Docker host)

The container reads the mail and routing values from its environment. On
Kubernetes with the chart in `charts/`, they come from one Secret named
`mobiera-website-secrets` in the `web` namespace:

```bash
kubectl create namespace web
kubectl -n web create secret generic mobiera-website-secrets \
  --from-literal=MAIL_HOST=smtp.gmail.com \
  --from-literal=MAIL_PORT=587 \
  --from-literal=MAIL_ENCRYPTION= \
  --from-literal=MAIL_USERNAME=website@mobiera.com \
  --from-literal=MAIL_PASSWORD='the 16-character app password' \
  --from-literal=MAIL_FROM_ADDRESS=website@mobiera.com \
  --from-literal=MAIL_FROM_NAME=Mobiera \
  --from-literal=CONTACT_TO=sales@mobiera.com \
  --from-literal=CONTACT_TO_CAREERS=careers@mobiera.com \
  --from-literal=CONTACT_TO_PRESS=press@mobiera.com \
  --from-literal=ALERT_WEBHOOK_URL=
helm upgrade --install website ./charts --namespace web --set image.tag=v0.1.0 --wait
```

On a plain Docker host, the same names go in an env file:
`docker run --env-file mobiera-website.env -p 3000:3000 mobiera/website:latest`.

`ALERT_WEBHOOK_URL` is optional: a Discord- or Slack-compatible webhook that
receives a message when an inquiry could not be delivered.

## 6. Check it works

1. Open `/contact`, send a message with a real topic.
2. The recipient mailbox for that topic receives "[mobiera.io contact]
   <topic>: <name>", with the visitor as Reply-To.
3. Send a career application with a PDF from `/company/careers`; the CV
   arrives as an attachment.
4. With analytics configured, accept cookies and confirm the GA4 realtime
   view registers the visit.

If SMTP is misconfigured the visitor sees "We could not send your message",
the container logs `[contact] delivery failed`, and the webhook, if set, gets
an alert.
