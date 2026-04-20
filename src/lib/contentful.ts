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
  liveUrl?: string;
  gitHubUrl?: string;
  featured: boolean;
}

type ProjectSkeleton = EntrySkeletonType<ContentfulProjectFields, typeof CONTENT_TYPE>;

// Static tech tags per slug — Contentful doesn't have this field yet
const TECH_TAGS: Record<string, string[]> = {
  "telemedicine-booking-platform": ["Next.js", "TypeScript", "Stripe", "Tailwind CSS", "i18n"],
  "recipe-finder-and-meal-planner": ["React", "OpenAI", "Node.js", "REST API", "Tailwind CSS"],
  "smart-fleet-predictive-iot-engine": ["Node.js", "IoT", "Docker", "PostgreSQL", "Redis", "GitHub Actions"],
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
      techTags: TECH_TAGS[item.fields.slug] ?? [],
      liveUrl: item.fields.liveUrl ?? "",
      githubUrl: item.fields.gitHubUrl ?? "",
      featured: item.fields.featured ?? false,
    }));
  } catch {
    return PROJECTS;
  }
}
