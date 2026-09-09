#!/usr/bin/env sh
# Creates or refreshes the `mobiera-website-secrets` Secret in the target
# namespace from the environment (mirrored 1:1 from GitHub Actions secrets by
# the deploy workflows, so the two cannot drift). Annotated keep so helm never
# prunes it. Empty values just disable the feature they serve.
#
# Expected in the environment:
#   NAMESPACE (default web)
#   MAIL_HOST MAIL_PORT MAIL_USERNAME MAIL_PASSWORD MAIL_ENCRYPTION
#   MAIL_FROM_ADDRESS MAIL_FROM_NAME
#   CONTACT_TO CONTACT_TO_AIRCAST CONTACT_TO_AI_AGENTS CONTACT_TO_TRUST
#   CONTACT_TO_CERTIFICATION CONTACT_TO_PARTNERSHIP CONTACT_TO_CAREERS
#   CONTACT_TO_PRESS CONTACT_TO_GENERAL
#   ALERT_WEBHOOK_URL
set -eu

NAMESPACE="${NAMESPACE:-web}"

kubectl create namespace "$NAMESPACE" --dry-run=client -o yaml | kubectl apply -f -
kubectl -n "$NAMESPACE" create secret generic mobiera-website-secrets \
  --from-literal=MAIL_HOST="${MAIL_HOST:-}" \
  --from-literal=MAIL_PORT="${MAIL_PORT:-587}" \
  --from-literal=MAIL_USERNAME="${MAIL_USERNAME:-}" \
  --from-literal=MAIL_PASSWORD="${MAIL_PASSWORD:-}" \
  --from-literal=MAIL_ENCRYPTION="${MAIL_ENCRYPTION:-}" \
  --from-literal=MAIL_FROM_ADDRESS="${MAIL_FROM_ADDRESS:-}" \
  --from-literal=MAIL_FROM_NAME="${MAIL_FROM_NAME:-Mobiera}" \
  --from-literal=CONTACT_TO="${CONTACT_TO:-}" \
  --from-literal=CONTACT_TO_AIRCAST="${CONTACT_TO_AIRCAST:-}" \
  --from-literal=CONTACT_TO_AI_AGENTS="${CONTACT_TO_AI_AGENTS:-}" \
  --from-literal=CONTACT_TO_TRUST="${CONTACT_TO_TRUST:-}" \
  --from-literal=CONTACT_TO_CERTIFICATION="${CONTACT_TO_CERTIFICATION:-}" \
  --from-literal=CONTACT_TO_PARTNERSHIP="${CONTACT_TO_PARTNERSHIP:-}" \
  --from-literal=CONTACT_TO_CAREERS="${CONTACT_TO_CAREERS:-}" \
  --from-literal=CONTACT_TO_PRESS="${CONTACT_TO_PRESS:-}" \
  --from-literal=CONTACT_TO_GENERAL="${CONTACT_TO_GENERAL:-}" \
  --from-literal=ALERT_WEBHOOK_URL="${ALERT_WEBHOOK_URL:-}" \
  --dry-run=client -o yaml | kubectl apply -f -
kubectl -n "$NAMESPACE" annotate secret mobiera-website-secrets \
  helm.sh/resource-policy=keep --overwrite
