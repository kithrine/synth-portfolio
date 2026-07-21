# NEON NOSTALGIA — synth-portfolio

Kit Tensfeldt's synthwave-themed developer portfolio, built with
**Next.js 16 (App Router) + React 19 + TypeScript**.

## Stack

- **Framework:** Next.js 16 with Turbopack, static prerendering
- **Styling:** hand-written global CSS (`app/globals.css`) — neon glows,
  CSS-variable design tokens, pure-CSS animations; no CSS framework
- **Fonts:** Inter, Press Start 2P, and Share Tech Mono self-hosted via
  `next/font`
- **Icons:** [devicon](https://devicon.dev/) (skills grid) + hand-drawn
  inline SVGs (nav, socials, timeline illustrations)
- **Images:** `next/image` with static imports (automatic AVIF/WebP)
- **Contact form:** [Formspree](https://formspree.io/)

## Development

```bash
npm install
npm run dev     # dev server on http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

## Editing content

The page content is data-driven — most updates are single-file edits:

| What | Where |
|---|---|
| Skills grid | `data/skills.ts` |
| Experience timeline | `data/experience.ts` |
| Project cards | `data/projects.ts` |
| Nav sections + "Now Playing" tracks | `data/navigation.ts`, `data/tracks.ts` |
| Social links | `components/Sidebar.tsx` |
| Resume content (styled page + PDF) | `data/resume.ts` |

### Regenerating the resume PDF

The downloadable PDF is generated from the hidden `/resume/print` route,
which renders the same `data/resume.ts` content as the styled `/resume`
page. After editing resume content, regenerate it with the dev server
running:

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless `
  --no-pdf-header-footer `
  --print-to-pdf="public\assets\docs\Tensfeldt_Resume_Public.pdf" `
  --virtual-time-budget=10000 "http://localhost:3000/resume/print"
```

Then commit the updated PDF alongside the data change.

## Deploying to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New… → Project**.
2. Import the `kithrine/synth-portfolio` GitHub repository.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.
4. To attach a custom domain: Project → **Settings → Domains** → add the
   domain you purchased and follow the DNS instructions.

Every push to `main` deploys to production; every pull request gets its own
preview URL automatically.
