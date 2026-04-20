import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Languages",
    icon: "code",
    level: 80,
    skills: ["JavaScript", "TypeScript", "Python", "C", "C#"],
  },
  {
    category: "Frontend",
    icon: "monitor",
    level: 85,
    skills: ["React", "Next.js", "Redux", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "server",
    level: 70,
    skills: ["NestJS", "Node.js", "Express.js", "REST APIs", "JWT Auth"],
  },
  {
    category: "Database",
    icon: "database",
    level: 65,
    skills: ["PostgreSQL", "SQL", "Redis", "Firebase"],
  },
  {
    category: "DevOps & Infra",
    icon: "container",
    level: 60,
    skills: ["Docker", "Linux", "GitHub Actions", "CI/CD", "Git"],
  },
  {
    category: "Deployment",
    icon: "cloud",
    level: 75,
    skills: ["Vercel", "Render"],
  },
  {
    category: "Integrations & AI",
    icon: "zap",
    level: 70,
    skills: ["OpenAI", "Stripe", "Resend", "Formspree", "Contentful", "OpenWeather API"],
  },
];
