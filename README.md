# Shayan — Portfolio

A dark-mode, terminal/dashboard-styled personal portfolio built with Next.js 14, TypeScript, and Tailwind CSS. Designed around a FinTech-to-data-analytics story: a "boot sequence" hero, a scrolling skills ticker, and dashboard-panel sections for About / Skills / Projects / Contact.

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 18.18+ installed.

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the site reloads automatically as you edit files.

## 2. Customize it

Everything is placeholder content you should swap out:

| What | Where |
|---|---|
| Name, headline | `components/Hero.tsx` |
| Terminal intro lines | `components/Hero.tsx` → `LINES` array |
| Bio paragraphs, quick facts | `components/About.tsx` |
| Skills & proficiency levels | `components/Skills.tsx` → `CATEGORIES` |
| Project cards | `components/Projects.tsx` → `PLACEHOLDERS` |
| Email / LinkedIn / GitHub | `components/Footer.tsx` → `LINKS` |
| Page title & meta description | `app/layout.tsx` → `metadata` |
| Colors | `tailwind.config.ts` → `theme.extend.colors` |

The skill "bars" in `Skills.tsx` are self-rated on a 1–5 scale (`level: 1` to `level: 5`) — adjust the numbers to match how you'd actually rate yourself.

When you have real projects to show, replace the `PLACEHOLDERS` array in `components/Projects.tsx` with real titles, a one-line result-focused blurb, and tags for the tools used. You can also add a `href` to each card and turn the "add case study →" text into a real link.

## 3. Deploy to Vercel

**Option A — GitHub (recommended, auto-deploys on every push):**

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click **Add New → Project**, select the repo.
4. Vercel auto-detects Next.js — leave defaults as-is, click **Deploy**.
5. You'll get a live URL like `your-portfolio.vercel.app`. Every future `git push` to `main` redeploys automatically.

**Option B — Vercel CLI (deploy straight from this folder, no GitHub needed):**

```bash
npm install -g vercel
vercel login
vercel        # preview deploy
vercel --prod # production deploy
```

### Custom domain
In the Vercel project → **Settings → Domains**, add your own domain (e.g. `shayanahmed.com`) if you buy one — Vercel issues free SSL automatically.

## 4. Notes

- Fonts (Space Grotesk, Inter, JetBrains Mono) load via `next/font/google` and are fetched + self-hosted automatically at build time — no extra setup needed, but the build machine does need internet access to fetch them once.
- Respects `prefers-reduced-motion` for the scroll-reveal animations.
- No backend/database — it's a static-friendly site, fully covered by Vercel's free tier.
