# mobiera.io Helm chart

Minimal chart for the standalone Next.js image (`mobiera/website` on Docker
Hub): Deployment, Service, Ingress for `mobiera.io` (nginx, cert-manager TLS)
and a redirect Ingress for secondary hosts (`www.mobiera.io`, later the
`mobiera.com` names). Trimmed from the 2060.io-website chart: no
database, no storage volume, no migrate jobs.

```bash
kubectl create namespace web
kubectl -n web create secret generic mobiera-website-secrets \
  --from-literal=MAIL_HOST=smtp.gmail.com --from-literal=MAIL_PORT=587 \
  --from-literal=MAIL_USERNAME=... --from-literal=MAIL_PASSWORD=... \
  --from-literal=MAIL_FROM_ADDRESS=no-reply@mobiera.com --from-literal=MAIL_FROM_NAME=Mobiera \
  --from-literal=CONTACT_TO=... --from-literal=CONTACT_TO_CAREERS=...
helm upgrade --install website ./charts --namespace web --set image.tag=v0.1.0 --wait
```
