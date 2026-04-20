# TODO — Tan Hoang Portfolio

**Owner:** TanQHoang  
**Start Date:** 2026-04-18  
**Live:** https://portfolio-seven-eosin-57.vercel.app

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

## Phase 5: CI/CD + Polish & SEO
- [ ] GitHub Actions CI: lint + type-check on every push/PR
  - [ ] `.github/workflows/ci.yml`
- [ ] `public/favicon.ico` — custom favicon
- [ ] `public/og-image.png` — 1200×630 OG image
- [ ] `sitemap.xml` + `robots.txt`
- [ ] Section entrance animations (CSS keyframes)
- [ ] Mobile responsiveness audit
- [ ] Accessibility audit (keyboard nav, ARIA, contrast)
- [ ] Lighthouse score targets: Performance ≥90, Accessibility ≥95, SEO ≥95

---

## Phase 6: Advanced Integrations (Future)
- [ ] **Contentful CMS** — fetch projects dynamically
  - [ ] Create Contentful space + `project` content type
  - [ ] `src/lib/contentful.ts` — SDK client + `getProjects()`
  - [ ] Replace static project data with Contentful fetch
- [ ] **Resend** — email notification on contact form submit
  - [ ] `src/app/api/contact/route.ts`
- [ ] **OpenAI** — AI chat widget or bio variation
  - [ ] `src/lib/openai.ts`
  - [ ] Rate limiting / cost guard

---

## Phase 7: Final QA & Launch
- [ ] Cross-browser: Chrome, Firefox, Safari, Edge
- [ ] Mobile: iOS Safari, Android Chrome
- [ ] Contact form end-to-end test
- [ ] All links verified (projects, social, CTAs)
- [ ] Custom domain setup on Vercel (optional)
- [ ] Final production deploy

---

## Backlog / Future
- [ ] Blog section powered by Contentful
- [ ] Dark/light theme toggle
- [ ] Stripe donation / "Buy me a coffee"
- [ ] Firebase auth for admin panel
- [ ] OpenWeather widget
- [ ] Animated skill progress bars
- [ ] Resume PDF download
