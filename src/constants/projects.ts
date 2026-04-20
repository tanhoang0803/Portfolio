import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "telemedicine",
    icon: "Stethoscope",
    title: "Telemedicine Booking Platform",
    description:
      "A full-stack mini telemedicine platform with appointment booking, doctor listings, and multi-language support. Built with Next.js App Router, TypeScript, and Stripe payments.",
    techTags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "i18n"],
    liveUrl: "https://telemedicine-booking-platform-mini.vercel.app/en",
    githubUrl: "",
    featured: true,
  },
  {
    id: "recipe-finder",
    icon: "UtensilsCrossed",
    title: "Recipe Finder & Meal Planner",
    description:
      "Smart recipe discovery app with AI-powered meal planning. Search by ingredients, save favourites, and auto-generate weekly plans powered by OpenAI.",
    techTags: ["React", "OpenAI", "Node.js", "REST API", "Tailwind CSS"],
    liveUrl: "https://recipe-finder-meal-planner-jet.vercel.app/",
    githubUrl: "",
    featured: true,
  },
  {
    id: "smart-fleet",
    icon: "Cpu",
    title: "Smart Fleet Predictive IoT Engine",
    description:
      "Enterprise-grade IoT logistics engine with predictive maintenance, real-time fleet tracking, and anomaly detection. Designed for scalable infrastructure deployment.",
    techTags: ["Node.js", "IoT", "Docker", "PostgreSQL", "Redis", "GitHub Actions"],
    liveUrl: "",
    githubUrl: "https://github.com/tanhoang0803/Smart-Fleet-Predictive-IoT-Logistics-Engine",
    featured: true,
  },
];
