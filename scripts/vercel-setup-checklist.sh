#!/usr/bin/env bash
set -euo pipefail

cat <<'MSG'
Vercel deployment checklist:

1) In Vercel dashboard, create/import this project.
2) In the Vercel project settings, copy:
   - VERCEL_ORG_ID
   - VERCEL_PROJECT_ID
3) In your GitHub repo settings > Secrets and variables > Actions, add:
   - VERCEL_TOKEN
   - VERCEL_ORG_ID
   - VERCEL_PROJECT_ID
4) Rename your default branch to main OR adjust .github/workflows/vercel-deploy.yml.
5) Push to main or run the workflow manually from Actions tab.

When complete, production URL will be:
https://<your-project>.vercel.app
MSG
