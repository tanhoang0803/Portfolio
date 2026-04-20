# TODO — Tan Hoang Portfolio

**Owner:** TanQHoang  
**Start Date:** 2026-04-18  
**Live:** https://tanqhoang-portfolio.vercel.app

---

## Phase 0: Project Init ✅
- [x] Create CLAUDE.md
- [x] Create README.md
- [x] Create .env.example + .env.local
- [x] Create .gitignore
- [x] Create .claude/ (commands, skills, agents, hooks, settings.json)

---

## Phase 1: Next.js Project Setup ✅
- [x] Scaffold Next.js 15 with TypeScript, Tailwind v4, App Router, src/ dir
- [x] Install dependencies: `lucide-react`, `contentful`
- [x] Set up `src/app/globals.css` with base dark theme + CSS tokens
- [x] Configure `next.config.ts` (Contentful image domain)
- [x] Configure `tsconfig.json` path aliases (`@/*`)
- [x] Add `npm run type-check` script to `package.json`
- [x] ESLint configured via `eslint.config.mjs`
- [x] Initialize git repo + push to GitHub

---

## Phase 2: Layout & Navigation ✅
- [x] `src/app/layout.tsx` — root layout, Geist font, full metadata + OG tags
- [x] `src/components/layout/Header.tsx` — fixed nav, scroll blur, social icons, mobile hamburger
- [x] `src/components/layout/Footer.tsx` — brand, nav links, copyright
- [x] `src/constants/navigation.ts` — nav links
- [x] `src/constants/social.ts` — social media links
- [x] `src/app/page.tsx` — section shell assembled

---

## Phase 3: Sections (Core UI) ✅
- [x] `src/types/index.ts` — Project, Skill, NavLink, SocialLink interfaces
- [x] `src/constants/projects.ts` — 3 static project entries
- [x] `src/constants/skills.ts` — 7 skill categories
- [x] `src/components/sections/Hero.tsx` — gradient glow, animated badge, CTAs, scroll hint
- [x] `src/components/sections/About.tsx` — bio, career goal, quick facts, focus area cards
- [x] `src/components/sections/Learning.tsx` — study checklist, flashcard link, quote
- [x] `src/components/sections/Projects.tsx` — 3 project cards grid
- [x] `src/components/ui/ProjectCard.tsx` — hover glow, tech tags, live/GitHub links
- [x] `src/components/sections/Skills.tsx` — 7 category grids with pill badges
- [x] `src/components/sections/Contact.tsx` — Formspree form, success/error states, social links

---

## Phase 4: Deploy + Integrations ✅
- [x] Connect repo to Vercel — auto-deploy on push to `main`
- [x] Formspree form created (`mlgalbpg`) — contact form live
- [x] Set env vars in Vercel dashboard (`NEXT_PUBLIC_FORMSPREE_ID`, `NEXT_PUBLIC_SITE_URL`)
- [x] `NEXT_PUBLIC_FORMSPREE_ID` set in `.env.local`
- [x] Live URL wired into `README.md`, `layout.tsx` metadata, `metadataBase`
- [x] Production build passes — 0 errors

---

## Phase 5: CI/CD + Polish & SEO ✅
- [x] GitHub Actions CI: lint + type-check on every push/PR (`/.github/workflows/ci.yml`)
- [x] `sitemap.xml` + `robots.txt` — Next.js App Router generated routes
- [x] Section entrance animations (CSS fade-up keyframes on Hero)
- [x] `src/app/icon.tsx` — custom favicon (TH monogram via ImageResponse)
- [x] `src/app/opengraph-image.tsx` — 1200×630 OG image (branded card)
- [x] `prefers-reduced-motion` media query added to globals.css
- [ ] Mobile responsiveness audit
- [ ] Accessibility audit (keyboard nav, ARIA, contrast)
- [ ] Lighthouse score targets: Performance ≥90, Accessibility ≥95, SEO ≥95

---

## Phase 6: Advanced Integrations ✅
- [x] **Contentful CMS** — projects fetched dynamically
  - [x] Space: `vpp5gtlerrbg`, content type: `portfolioTanQHoang`
  - [x] `src/lib/contentful.ts` — SDK client + `getProjects()` with static fallback
  - [x] Rich Text description handled via `documentToPlainTextString`
  - [x] 3 entries published and live
- [x] **Resend** — email sent to Gmail on contact form submit
  - [x] `src/app/api/contact/route.ts` — replaces Formspree direct POST
  - [x] `RESEND_API_KEY` set in Vercel + `.env.local`
- [ ] **OpenAI** — AI chat widget or bio variation (backlog)

## Phase 7: Final QA & Launch ✅
- [x] Favicon — `TH` monogram, cyan on dark (`src/app/icon.tsx`)
- [x] OG image 1200×630 — branded card (`src/app/opengraph-image.tsx`)
- [x] Contact form end-to-end — Resend delivering to Gmail (check spam → mark not spam)
- [x] Contentful CMS — 3 projects live with tech tags
- [x] LeetCode icon — official SVG in Header + Contact
- [x] ITViec link updated
- [x] TH monogram logo — Header, Footer, favicon, OG image all consistent
- [x] LeetCode icon — official SVG in Header + Contact section
- [x] ITViec social link updated
- [x] Accessibility — form label/id pairs, `aria-expanded` on mobile menu
- [x] Custom Vercel alias — `tanqhoang-portfolio.vercel.app` active
- [x] All URL references updated across codebase
- [x] Mark Gmail Resend email as "Not Spam" — resolved
- [ ] Mobile responsiveness audit (manual)
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge (manual)
- [ ] Lighthouse score targets: Performance ≥90, Accessibility ≥95, SEO ≥95

---

## Backlog / Future
- [ ] Blog section powered by Contentful
- [ ] Dark/light theme toggle
- [ ] Stripe donation / "Buy me a coffee"
- [ ] Firebase auth for admin panel
- [ ] OpenWeather widget
- [ ] Animated skill progress bars
- [ ] Resume PDF download
