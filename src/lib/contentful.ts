import { createClient } from "contentful";
import type { Project } from "@/types";
import { PROJECTS } from "@/constants/projects";

function getClient() {
  const space = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  if (!space || !accessToken) return null;
  return createClient({ space, accessToken });
}

import type { EntrySkeletonType } from "contentful";

interface ContentfulProjectFields {
  title: string;
  slug: string;
  description: string;
  techTags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order?: number;
}

type ProjectSkeleton = EntrySkeletonType<ContentfulProjectFields, "project">;

export async function getProjects(): Promise<Project[]> {
  const client = getClient();

  // Fall back to static data if Contentful is not configured
  if (!client) return PROJECTS;

  try {
    const entries = await client.getEntries<ProjectSkeleton>({
      content_type: "project",
    });

    return entries.items.map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      description: item.fields.description,
      techTags: item.fields.techTags ?? [],
      liveUrl: item.fields.liveUrl ?? "",
      githubUrl: item.fields.githubUrl ?? "",
      featured: item.fields.featured ?? false,
    }));
  } catch {
    // Contentful fetch failed — use static fallback
    return PROJECTS;
  }
}
