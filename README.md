# MonoFetch Landing Web App

A clean, minimalist monochrome web app concept for high-resolution media download workflows.

## Run locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Deploy to Vercel

### Option 1: Vercel dashboard (fastest)
1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel, click **Add New → Project**.
3. Import the repo.
4. Keep defaults (framework preset: **Other** / static site).
5. Click **Deploy**.

### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel
```

For production:
```bash
vercel --prod
```

After deployment, Vercel gives you a public URL like:
- `https://your-project-name.vercel.app`

> Note: This project currently ships a front-end simulation flow. Connect your own compliant backend service for real download processing.
