# MonoFetch Landing Web App

A clean, minimalist monochrome web app concept for high-resolution media download workflows.

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy to Vercel (fully prepared repo)

This repository is now prepared for automated production deploys to Vercel via GitHub Actions.

### 1) Connect project in Vercel
1. Push this repo to GitHub.
2. In Vercel, click **Add New → Project**.
3. Import this repository once.
4. Keep static defaults and complete the first setup.

### 2) Add GitHub Actions secrets
In your GitHub repo: **Settings → Secrets and variables → Actions**, add:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

You can copy `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` from `.vercel/project.json` after running `vercel link` locally, or from Vercel project settings.

### 3) Trigger deployment
- Push to `main`, or
- Run **Actions → Deploy to Vercel → Run workflow** manually.

Workflow file:
- `.github/workflows/vercel-deploy.yml`

### 4) Expected live URL
- `https://<your-project-name>.vercel.app`

## Quick setup helper

```bash
./scripts/vercel-setup-checklist.sh
```

> Note: This project currently ships a front-end simulation flow. Connect your own compliant backend service for real download processing.
