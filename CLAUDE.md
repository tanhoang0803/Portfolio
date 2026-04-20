# CLAUDE.md — Portfolio Resume Project

## Project Identity
- **Name:** Tan Hoang – Full-Stack Engineer Portfolio
- **Owner:** TanQHoang — hoangquoctan.1996@gmail.com
- **Version:** 2026
- **Sole Contributor:** TanQHoang

## Goal
Modern single-page portfolio built with Next.js 15 + TypeScript showcasing skills as a Junior Full-Stack Developer targeting Senior Enterprise Infrastructure Architect.

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Form | Formspree |
| CMS | Contentful |
| Deployment | Vercel |
| AI | OpenAI API |
| Email | Resend |
| Payments | Stripe |

---

## Project Structure

```
Portfolio_Resume/
├── .claude/                    # Claude Code configuration
│   ├── commands/               # Custom slash commands
│   │   ├── deploy.md
│   │   ├── memory.md
│   │   └── review.md
│   ├── skills/                 # Domain-specific skill docs
│   │   └── cms.md
│   ├── agents/                 # Multi-agent configs
│   │   └── content-agent.md
│   ├── hooks/                  # Lifecycle hooks
│   │   └── pre-commit.sh
│   └── settings.json
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/             # Header, Footer, Nav
│   │   ├── sections/           # Hero, About, Projects, Skills, Contact
│   │   └── ui/                 # Reusable UI primitives
│   ├── lib/                    # Utility functions & API clients
│   │   ├── contentful.ts
│   │   ├── openai.ts
│   │   └── utils.ts
│   ├── hooks/                  # React custom hooks
│   ├── types/                  # TypeScript interfaces
│   └── constants/              # Site data, config constants
├── public/                     # Static assets
├── .env.example
├── .env.local
├── .gitignore
├── CLAUDE.md
├── README.md
├── TODO.md
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Site Sections

1. **Hero** — Headline, subheadline, CTA buttons
2. **About Me** — Bio, career goal, focus areas
3. **My Learning Space** — Current focus, flashcard link
4. **Projects** — 3 project cards with tags
5. **Skills & Stacks** — Categorized tech grid
6. **Contact** — Formspree-powered form

---

## Key Links

- **Live Site:** https://portfolio-seven-eosin-57.vercel.app
- **GitHub Repo:** https://github.com/tanhoang0803/Portfolio
- Learning Space: https://tanhoang0803.github.io/Fash-Cards-for-my-Life/
- Project 1 (Telemedicine): https://telemedicine-booking-platform-mini.vercel.app/en
- Project 2 (Recipe Finder): https://recipe-finder-meal-planner-jet.vercel.app/
- Project 3 (IoT Logistics): https://github.com/tanhoang0803/Smart-Fleet-Predictive-IoT-Logistics-Engine
- GitHub: https://github.com/tanhoang0803
- LinkedIn: https://www.linkedin.com/in/tanqhoang080396/
- LeetCode: https://leetcode.com/u/tanhoang0803/

## Current Status (2026-04-20)
- Phases 0–4 complete — site is live on Vercel
- Formspree contact form active (ID: `mlgalbpg`)
- Next: Phase 5 — GitHub Actions CI + SEO polish

---

## Color Scheme

| Token | Value |
|---|---|
| Primary | Blue (`#2563EB`) |
| Accent | Cyan (`#06B6D4`) |
| Background | Black (`#0A0A0A`) |
| Surface | Dark gray (`#111827`) |
| Text | White (`#F9FAFB`) |

---

## Claude Code Conventions

- No AI-generated comments unless the WHY is non-obvious
- Prefer editing existing files over creating new ones
- Never commit `.env.local` — use `.env.example` for reference
- Tailwind utility classes preferred over custom CSS
- All components are React Server Components by default; add `"use client"` only when needed
- Form validation at boundary only (Formspree handles server-side)

---

## Integrations

| Service | Purpose | Env Key |
|---|---|---|
| Formspree | Contact form | `NEXT_PUBLIC_FORMSPREE_ID` |
| Contentful | CMS for project/blog content | `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN` |
| OpenAI | AI-assisted features | `OPENAI_API_KEY` |
| Resend | Transactional email | `RESEND_API_KEY` |
| Stripe | Payment (future) | `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` |
| Firebase | Auth / Realtime (future) | `FIREBASE_*` |
| OpenWeather | Weather widget (future) | `OPENWEATHER_API_KEY` |
