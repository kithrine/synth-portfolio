# Convert synth-portfolio to Next.js + React + TypeScript

## Context

The repo is Kit's synthwave-themed portfolio ("NEON NOSTALGIA"), currently a vanilla static site: [index.html](index.html) (481 lines), [style.css](style.css) (1162 lines), [script.js](script.js) (203 lines), plus ~20MB of PNG assets and a resume PDF. Kit wants it converted to Next.js/React/TypeScript for deployment on Vercel with a custom domain, with **pixel-identical visuals**. Follow-ups (synthwave music, updated projects section, `/resume` page) are explicitly out of scope but the architecture must make them easy.

## User decisions (confirmed)

1. **Styling:** port `style.css` nearly verbatim as `app/globals.css`. No Tailwind rewrite; drop the Tailwind CDN (only `w-full` is actually used — replicate it in CSS; `.sr-only` already exists in style.css).
2. **Language:** TypeScript, App Router, latest stable Next.js.
3. **Scope:** conversion only.
4. **Git:** automated — feature branch `feat/nextjs-conversion`, staged commits, push, PR via `gh`, merge with a **merge commit** (`gh pr merge --merge --delete-branch`) to preserve commit history. `main` stays deployable-vanilla until the PR merges.
5. **Hero bug:** FIX it — the hero bg `<img>` at index.html:126 has its alt text in the `class` attribute, so `.hero-bg-img` (`object-fit: cover`, style.css:411) never applies. Apply the proper class in JSX; verify side-by-side (image is 1774×887, near-identical at common desktop sizes).
6. **Social links:** LinkedIn → `https://www.linkedin.com/in/kithrine`. Instagram icon **commented out in JSX** (`{/* ... */}`) so it can be re-enabled later.

## Scaffolding (non-empty repo root)

Run `create-next-app@latest` in the **scratchpad temp dir**, then copy generated files into the repo root on the feature branch (create-next-app refuses non-empty dirs; hand-scaffolding risks config drift):

```
npx create-next-app@latest synth-scaffold --typescript --eslint --app --no-tailwind --no-src-dir --import-alias "@/*" --use-npm --yes
```

- Copy in: `package.json` (rename to `synth-portfolio`, fix repository/homepage URLs to `kithrine/synth-portfolio`), `tsconfig.json`, `next.config.ts`, `eslint.config.mjs`, `app/` skeleton.
- Merge scaffold `.gitignore` entries into the existing one (`.next/`, `out/`, `next-env.d.ts`, `*.tsbuildinfo`, `.vercel`).
- Delete old `package-lock.json`; fresh `npm install`.
- Remove scaffold cruft: default page content, scaffold `public/*.svg`, default `app/favicon.ico` (vanilla site ships no favicon; branded favicon = follow-up).
- **Old site files stay in place until the final cleanup commit** — inert to Next, and needed as the reference implementation for side-by-side verification.
- `docs/superpowers/` and `.remember/` untouched.
- OneDrive risk: if `npm install`/`next dev` hits EPERM or is slow, pause OneDrive sync and note it to the user.

## Target structure

```
app/
  layout.tsx           # server — next/font, metadata, devicon css import
  page.tsx             # server — <SiteShell> wrapping section components
  globals.css          # ported style.css
components/
  SiteShell.tsx        # 'use client' — owns menuOpen + activeSection state
  Sidebar.tsx  MobileMenuButton.tsx  NowPlaying.tsx  EqualizerBars.tsx
  StarField.tsx        # 'use client' — hydration-safe random stars
  icons/NavIcons.tsx  icons/SocialIcons.tsx  icons/ExperienceIllustrations.tsx
  sections/Hero.tsx  About.tsx  Skills.tsx  Experience.tsx  Projects.tsx  Contact.tsx  ContactForm.tsx
data/
  navigation.ts  tracks.ts  skills.ts  experience.ts  projects.ts
lib/hooks/
  useScrollSpy.ts  useScrollReveal.ts
public/assets/
  images/  docs/Tensfeldt_Resume_Public.pdf
```

**`public/assets/...` keeps every URL byte-identical** to the vanilla site (`/assets/images/...`, resume at `/assets/docs/Tensfeldt_Resume_Public.pdf` with `download` attr unchanged). Data-driven sections (skills ×9, experience ×4, projects ×3 as typed arrays) are the hooks the follow-ups need.

## Key technical decisions

- **Server/client split:** only `SiteShell` (scroll-spy + drawer state), `StarField`, and `ContactForm` are client components. Sections pass through `SiteShell` as server children.
- **`activeSection` is single source of truth** driving both nav `.active` highlight AND NowPlaying track title via `trackMap` (home: "Midnight Drive", about: "Neon Daydream", skills: "Synthwave Grid", experience: "Retrograde", projects: "Build Mode", contact: "Outrun Tonight"). `.now-playing-sub` stays hardcoded `HOME` (vanilla never updates it).
- **useScrollSpy:** IntersectionObserver with vanilla's exact params (`rootMargin: '-40% 0px -40% 0px'`, threshold 0), elements looked up by `getElementById` from a module-level constant id array; `observer.disconnect()` cleanup.
- **useScrollReveal — deliberate direct-DOM port:** one client effect that adds `.reveal` to `.section-card, .skill-item, .project-card, .timeline-item` then observes to add `.visible` (threshold 0.1, rootMargin '0px 0px -40px 0px', fire-once). Rationale: a wrapper component would break the CSS grids; static `reveal` in JSX would hide content when JS fails. `classList.add` is StrictMode-idempotent.
- **StarField hydration safety:** generate the 120 stars in `useEffect` → `setState` (empty on server AND first client render; stars mount after — same UX as vanilla's DOMContentLoaded). Sizes/positions/`--dur`/`--delay`/opacity as style objects with `as React.CSSProperties` cast for custom props. Ranges from script.js:24-37.
- **12 contact chibi-stars:** static `--x/--y/--s/--c/--dur/--dl` values from index.html:454-465 → data array, server-rendered.
- **Mobile drawer:** `menuOpen` state; `window.innerWidth <= 768` read **only inside event handlers** (SSR-safe); close on nav click + outside (main) click; `aria-expanded` synced.
- **Smooth scroll:** rely on existing CSS `scroll-behavior: smooth` (style.css:73); drop the JS interception. Accepted delta: URL hash now updates on nav clicks (documented in PR body).
- **ContactForm:** line-for-line port of script.js:133-190. Keep `action="https://formspree.io/f/xqenvlqr"` as no-JS fallback; same validation order/messages/colors (`var(--pink)`/`var(--cyan)`), SENDING… disabled state, `data.ok` check, error join, network-error catch, 5s auto-clear via ref-held timeout (cleared on new status/unmount).
- **Fonts:** `next/font/google` — Inter (400/600/700), Press_Start_2P, Share_Tech_Mono, `display: 'swap'`, exposed as CSS variables. **Do not load Permanent Marker** (only consumed by unused `.logo-letters` rule — token's literal value stays as harmless fallback). Metadata port: title `KT — Developer & Designer` + description from index.html:6.
- **DevIcons:** npm `devicon` package, `import 'devicon/devicon.min.css'` in layout (pins version vs the unpinned CDN). Verify all 9 glyphs: javascript-plain, react-original, redux-original, tailwindcss-original, nodejs-plain, mongodb-plain, postgresql-plain, socketio-original, git-plain.
- **Images:** `next/image` with static imports for all content images (intrinsic dimensions for free; renders real `<img>` so `mix-blend-mode: screen`, `image-rendering: pixelated`, drop-shadow glows apply via existing classes). Hero bg: `fill priority sizes="100vw"` + fixed `className="hero-bg-img"`. Hero name + logo: `priority`. Sidebar images `sizes="220px"`. **Escape hatch (named verification step):** per-image `unoptimized` if the optimizer softens pixel art or glows.
- **Asset migration:** `git mv assets public/assets`; delete unused `KT-sidenav.png`, `hero-font.png`, `kit-chibi-peace.png` (~7MB). Remove the missing-`pixel-cat.gif` markup entirely (status text block stays). Drop inline `onerror` fallbacks (images are bundled; placeholder CSS rules stay verbatim).
- **globals.css — complete edit list** (everything else verbatim, including dead `heart-beat`/`.logo-letters` rules):
  1. Rewire `--font-pixel`/`--font-mono`/`--font-body` tokens to next/font variables.
  2. Append `.w-full { width: 100%; }`.
  3. Delete the `.pixel-cat img` rule.
- **Sidebar content changes:** LinkedIn href → `https://www.linkedin.com/in/kithrine`; Instagram icon commented out with `{/* */}`; nav item "RESUME" keeps its `data-section`→`experience` mapping.

## Commit sequence (branch `feat/nextjs-conversion`, repo builds from commit 1 onward)

1. `chore: scaffold Next.js app (TypeScript, App Router, no Tailwind)` — scaffold files, merged .gitignore, fresh lockfile, renamed package metadata; `npm run build` green.
2. `chore: move assets into public/, drop unused images`
3. `feat: port global styles, fonts, and metadata` — globals.css + next/font + metadata + devicon.
4. `feat: add app shell — sidebar, nav, now-playing, mobile drawer` — SiteShell, Sidebar, MobileMenuButton, NowPlaying, EqualizerBars, NavIcons, SocialIcons, navigation.ts, tracks.ts, both hooks.
5. `feat: add hero and about sections` — Hero (incl. class fix), StarField, About.
6. `feat: add skills, experience, and projects sections` — sections + data files + ExperienceIllustrations (4 bespoke inline SVGs from index.html:234-339).
7. `feat: add contact section with Formspree form and footer`
8. *(verification fixes as needed)*
9. `chore: remove vanilla site files and legacy lint configs` — rm index.html, style.css, script.js, .htmlhintrc, .stylelintrc.json; README rewrite (stack, dev/build commands, Vercel deploy + domain instructions).

Also commit the design/plan doc to `docs/superpowers/specs/` (repo convention) early in the branch.

Then: `git push -u origin feat/nextjs-conversion` → `gh pr create` (body documents the three intentional deltas: hero-bg class fix, URL-hash-on-nav, Permanent Marker not loaded, plus Instagram removal + LinkedIn fix) → after verification, `gh pr merge --merge --delete-branch`.

## Verification (before final cleanup commit)

Side-by-side rig: `git worktree add ../synth-portfolio-vanilla main` served via `npx serve -l 3001` vs `next dev` on 3000 (browser preview). Compare at 1280 / 1024 / 768 / 480–375 widths, section by section:

- Sidebar: logo pulse, nav hover/active cyan glow, cassette shadow, 20 EQ bars with per-bar rhythm, social colors + hover scale, status blink; **Instagram gone, LinkedIn correct**.
- Hero: star density/twinkle, overlay gradient, name-image glow + blend mode, `C:\> Hello, World!` prompt, CTA hovers; **hero bg covers correctly (eyeball vs old; tune `object-position` if needed — never revert the class fix)**.
- About / Skills / Experience / Projects: grids, devicon glyphs + colors, timeline line/dots/dashed connectors + SVG glows, project cards + tag pills, all responsive shifts (gameboy hidden ≤1024, timeline 2-col@1024 → 1-col@768, projects 2-col@768 → 1-col@480).
- Contact: input focus glow, empty-submit + bad-email validation messages, SENDING… state (don't spam real submissions), 12 twinkling stars, chibi wobble + blend, footer.
- Behavior: scroll-spy drives nav + track title; hamburger drawer ≤768 (open/close via nav click, outside click, aria-expanded); resume PDF downloads; reveal fires once; smooth scroll.
- Console: zero hydration warnings, zero next/image warnings, no 404s.
- `npm run build` clean; `npm run start` smoke test; Lighthouse sanity (perf should improve vs 20MB vanilla).
- `git worktree remove ../synth-portfolio-vanilla` afterwards.

## Vercel readiness

No `vercel.json` needed (auto-detect), no env vars. Vercel CLI/MCP auth unavailable this session — README gets dashboard instructions: vercel.com → Add New Project → Import `kithrine/synth-portfolio` → Deploy; Settings → Domains for the purchased domain. PR-based workflow gives Vercel preview deploys per PR once connected.

## Risks

| Risk | Mitigation |
|---|---|
| next/image re-encode softens pixel art / glows | Named check; per-image `unoptimized` |
| Press Start 2P metric shift breaks heading wrap | next/font serves same Google files; verify wrap at all widths |
| Hero class fix changes look | Side-by-side eyeball decision point; tune `object-position` |
| OneDrive vs node_modules (EPERM/slow) | Pause sync if needed; flag to user |
| create-next-app prompts in non-interactive shell | Full flag set + `--yes` |

## Follow-ups (out of scope, enabled by this work)

- Synthwave background music (research non-copyrighted tracks; NowPlaying widget is the natural mount point).
- Update `data/projects.ts` with recent projects.
- `app/resume/page.tsx` visual resume reusing `data/experience.ts`, download button → existing PDF URL.
- Branded favicon; possible `.now-playing-sub` sync.

## Implementation notes (deltas discovered during verification)

Verification ran as a 9-agent code-fidelity review plus a computed-style/layout
probe diff of the vanilla and Next.js sites side by side, then interactive
checks in a real browser. Discoveries beyond the planned edit list:

1. **Tailwind preflight was load-bearing.** The vanilla page rendered with the
   Tailwind CDN's preflight reset: headings at body weight (`h1-h6
   { font-size/font-weight: inherit }`) and form controls inheriting
   `font`/`letter-spacing`/`color`. Without it, headings faux-bolded (700) and
   inputs shrank 6px. Equivalent rules now live in globals.css §2.
2. **Font fallback glyphs.** next/font's synthetic fallback ("Share Tech Mono
   Fallback", Arial-metric) rendered glyphs the webfonts lack (→ ↓ ✦) ~2×
   wider than vanilla's system-monospace fallback, shifting button widths 7px.
   `adjustFontFallback: false` is ignored by the Turbopack font loader, but
   Next 16 declares @font-face under real family names, so the pixel/mono
   tokens now use the plain vanilla stacks ('Share Tech Mono', monospace) —
   verified identical glyph metrics in dev and prod builds.
3. **Social colors keyed by class.** Hiding Instagram would have shifted the
   `:nth-child`-based colors (email would turn pink); selectors are now
   `.social-github` / `.social-linkedin` / `.social-instagram` / `.social-email`.
4. **devicon-base.css instead of devicon.min.css** — min.css ships a UTF-8 BOM
   that Turbopack's CSS parser rejects; base.css has the same @font-face and
   glyph classes without the `.colored` variants (unused).
5. **Status-timer improvement kept.** Vanilla's form status stacked 5s
   timeouts, so a rapid resubmit's message could be blanked early by the prior
   timer; the port cancels the prior timer (newest message always shows 5s).
   Confirmed as the only intentional behavior divergence by the review.
