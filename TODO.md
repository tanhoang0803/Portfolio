# TODO — Tan Hoang Portfolio

**Owner:** TanQHoang  
**Start Date:** 2026-04-18

---

## Phase 0: Project Init ✅
- [x] Create CLAUDE.md
- [x] Create README.md
- [x] Create .env.example + .env.local
- [x] Create .gitignore
- [x] Create .claude/ (commands, skills, agents, hooks, settings.json)

---

## Phase 1: Next.js Project Setup
- [ ] Run `npx create-next-app@latest . --typescript --tailwind --app --src-dir --import-alias "@/*"`
- [ ] Install dependencies: `lucide-react`, `contentful`, `openai`
- [ ] Configure `tailwind.config.ts` with custom color tokens (blue, cyan, black)
- [ ] Set up `src/app/globals.css` with base dark theme
- [ ] Configure `next.config.ts` (image domains, env vars)
- [ ] Configure `tsconfig.json` path aliases
- [ ] Add `npm run type-check` script to `package.json`
- [ ] Add ESLint + Prettier config
- [ ] Initialize git repo + first commit

---

## Phase 2: Layout & Navigation
- [ ] `src/app/layout.tsx` — root layout with metadata, fonts (Inter/Geist)
- [ ] `src/components/layout/Header.tsx` — fixed nav with logo + links + social icons
- [ ] `src/components/layout/Footer.tsx` — © 2026 Tan Hoang
- [ ] `src/components/layout/Nav.tsx` — mobile-responsive hamburger menu
- [ ] `src/app/page.tsx` — assemble all sections

---

## Phase 3: Sections (Core UI)

### 3.1 Hero Section
- [ ] `src/components/sections/Hero.tsx`
  - Headline: "Junior Full-Stack Engineer"
  - Subheadline: "Building scalable enterprise systems with AI"
  - Short bio
  - CTA buttons: "View Projects" + "Download CV"
  - Animated cyan gradient background accent

### 3.2 About Me
- [ ] `src/components/sections/About.tsx`
  - Profile photo placeholder
  - Career goal paragraph
  - Focus areas: Enterprise Architecture · AI Flows · SaaS Integrations

### 3.3 My Learning Space
- [ ] `src/components/sections/Learning.tsx`
  - Current focus list
  - Link to flashcards: https://tanhoang0803.github.io/Fash-Cards-for-my-Life/
  - "What I'm learning now" card

### 3.4 Projects
- [ ] `src/components/sections/Projects.tsx`
- [ ] `src/components/ui/ProjectCard.tsx`
  - Card with: title, description, tech tags, live link, GitHub link
  - Project 1: Telemedicine Booking Platform
  - Project 2: Recipe Finder & Meal Planner
  - Project 3: Smart Fleet Predictive IoT Engine
- [ ] Hover animation on cards

### 3.5 Skills & Stacks
- [ ] `src/components/sections/Skills.tsx`
- [ ] `src/constants/skills.ts` — structured skill categories
- [ ] Skill badge/pill component
- [ ] Category headers with icons

### 3.6 Contact
- [ ] `src/components/sections/Contact.tsx`
- [ ] Formspree form: Name, Email, Subject, Message
- [ ] Success/error state handling
- [ ] Cyan-styled submit button
- [ ] Social links row

---

## Phase 4: Types & Constants
- [ ] `src/types/index.ts` — Project, Skill, NavItem interfaces
- [ ] `src/constants/navigation.ts` — nav links
- [ ] `src/constants/skills.ts` — skill categories
- [ ] `src/constants/projects.ts` — fallback static project data
- [ ] `src/constants/social.ts` — social media links

---

## Phase 5: Integrations

### 5.1 Formspree
- [ ] Create Formspree account + form
- [ ] Set `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local`
- [ ] Wire up Contact form
- [ ] Test submission end-to-end

### 5.2 Contentful CMS
- [ ] Create Contentful account + space
- [ ] Define `project` content type
- [ ] Add 3 project entries
- [ ] `src/lib/contentful.ts` — SDK client + `getProjects()`
- [ ] Set env vars in `.env.local`
- [ ] Replace static project data with Contentful fetch

### 5.3 OpenAI (AI-Assist)
- [ ] `src/lib/openai.ts` — OpenAI client
- [ ] AI feature: "Ask me anything" chat widget or AI-generated bio variation
- [ ] Rate limiting / cost guard

### 5.4 Resend (Email notifications)
- [ ] `src/app/api/contact/route.ts` — API route to send notification on form submit
- [ ] Set `RESEND_API_KEY` in `.env.local`

---

## Phase 6: Infrastructure & DevOps

- [ ] Connect repo to Vercel
- [ ] Set all env vars in Vercel dashboard
- [ ] Configure `vercel.json` if needed (redirects, headers)
- [ ] GitHub Actions CI: lint + type-check on PR
  - [ ] `.github/workflows/ci.yml`
- [ ] Set up `pre-commit` hook from `.claude/hooks/pre-commit.sh`
- [ ] Add Lighthouse CI (performance budget)

---

## Phase 7: Polish & SEO

- [ ] `src/app/layout.tsx` — complete metadata (OG image, description, twitter card)
- [ ] `public/og-image.png` — 1200×630 OG image
- [ ] `public/favicon.ico` + `public/apple-touch-icon.png`
- [ ] Smooth scroll behavior
- [ ] Section entrance animations (Framer Motion or CSS)
- [ ] Mobile responsiveness audit (all breakpoints)
- [ ] Accessibility audit (keyboard nav, ARIA, contrast)
- [ ] sitemap.xml + robots.txt

---

## Phase 8: Final QA & Launch

- [ ] Cross-browser test: Chrome, Firefox, Safari, Edge
- [ ] Mobile test: iOS Safari, Android Chrome
- [ ] Lighthouse score targets: Performance ≥90, Accessibility ≥95, SEO ≥95
- [ ] Contact form end-to-end test
- [ ] All links verified (projects, social, CTA)
- [ ] Custom domain setup on Vercel (optional)
- [ ] Final production deploy
- [ ] Update README with live URL

---

## Backlog / Future
- [ ] Blog section powered by Contentful
- [ ] Dark/light theme toggle
- [ ] Stripe donation / "Buy me a coffee"
- [ ] Firebase auth for admin panel
- [ ] OpenWeather widget
- [ ] Animated skill progress bars
- [ ] Resume PDF download
