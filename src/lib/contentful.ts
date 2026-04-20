import { createClient } from "contentful";
import type { EntrySkeletonType } from "contentful";
import type { Document } from "@contentful/rich-text-types";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
import type { Project } from "@/types";
import { PROJECTS } from "@/constants/projects";

const CONTENT_TYPE = "portfolioTanQHoang";

function getClient() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !accessToken) return null;
  return createClient({ space, accessToken });
}

interface ContentfulProjectFields {
  title: string;
  slug: string;
  description: Document;
  techTags?: string[];
  liveUrl?: string;
  gitHubUrl?: string;
  featured: boolean;
}

type ProjectSkeleton = EntrySkeletonType<ContentfulProjectFields, typeof CONTENT_TYPE>;

const PROJECT_ICONS: Record<string, string> = {
  "telemedicine-booking-platform": "Stethoscope",
  "recipe-finder-and-meal-planner": "UtensilsCrossed",
  "smart-fleet-predictive-iot-engine": "Cpu",
};

// Static tech tags fallback — mirrors Contentful techTags field
const TECH_TAGS: Record<string, string[]> = {
  "telemedicine-booking-platform": ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "i18n", "MongoDB", "Resend", "Daily.co", "Contentful", "GitHub Actions", "Vercel"],
  "recipe-finder-and-meal-planner": ["Render", "Vercel", "React", "Redux", "Node.js", "Express", "Supabase", "Redis", "Docker", "GitHub Actions"],
  "smart-fleet-predictive-iot-engine": ["React", "Redux", "Firebase", "Tailwind", "Vite", "Spoonacular", "Groq", "GitHub Actions", "Node.js", "REST API"],
};

export async function getProjects(): Promise<Project[]> {
  const client = getClient();
  if (!client) return PROJECTS;

  try {
    const entries = await client.getEntries<ProjectSkeleton>({
      content_type: CONTENT_TYPE,
    });

    return entries.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description
        ? documentToPlainTextString(item.fields.description as Document).trim()
        : "",
      techTags: (() => {
        const tags = (item.fields as Record<string, unknown>).techTags;
        return Array.isArray(tags) && tags.length > 0
          ? (tags as string[])
          : (TECH_TAGS[item.fields.slug] ?? []);
      })(),
      liveUrl: item.fields.liveUrl ?? "",
      githubUrl: item.fields.gitHubUrl ?? "",
      featured: item.fields.featured ?? false,
      icon: PROJECT_ICONS[item.fields.slug] ?? "ExternalLink",
    }));
  } catch {
    return PROJECTS;
  }
}
