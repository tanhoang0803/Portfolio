import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    icon: "code",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C#"],
  },
  {
    category: "Frontend",
    icon: "monitor",
    skills: ["React", "Next.js", "Redux", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "server",
    skills: ["NestJS", "Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    category: "Database",
    icon: "database",
    skills: ["PostgreSQL", "SQL", "Redis", "Firebase"],
  },
  {
    category: "DevOps & Infra",
    icon: "container",
    skills: ["Docker", "Linux", "GitHub Actions", "CI/CD", "Git"],
  },
  {
    category: "Deployment",
    icon: "cloud",
    skills: ["Vercel", "Render"],
  },
  {
    category: "Integrations & AI",
    icon: "zap",
    skills: ["OpenAI", "Stripe", "Resend", "Formspree", "Contentful", "OpenWeather API"],
  },
];
