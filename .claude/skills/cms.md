# Skill: CMS (Contentful)

Domain knowledge for working with Contentful as the headless CMS for this portfolio.

## Content Model

### Content Type: `project`
| Field | Type | Description |
|---|---|---|
| `title` | Short text | Project name |
| `slug` | Short text (unique) | URL slug |
| `description` | Long text | Short description shown on card |
| `techTags` | Short text (list) | e.g. ["Next.js", "TypeScript"] |
| `liveUrl` | Short text | Live deployment URL |
| `githubUrl` | Short text | GitHub repo URL |
| `coverImage` | Media | Project screenshot |
| `featured` | Boolean | Show on homepage |
| `order` | Integer | Display order |

### Content Type: `skill`
| Field | Type | Description |
|---|---|---|
| `category` | Short text | e.g. "Frontend", "Backend" |
| `name` | Short text | Skill name |
| `icon` | Short text | Icon identifier |

---

## SDK Usage

```typescript
// src/lib/contentful.ts
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getProjects() {
  const entries = await client.getEntries({
    content_type: 'project',
    order: ['fields.order'],
  });
  return entries.items;
}
```

## Preview Mode
Use `CONTENTFUL_PREVIEW_TOKEN` + preview client for draft content.

## When to Use CMS vs Hardcoded
- **CMS:** Projects, blog posts, anything updated frequently
- **Hardcoded constants:** Social links, nav items, color tokens, skill list (static)

## Env Keys
```
CONTENTFUL_SPACE_ID
CONTENTFUL_ACCESS_TOKEN
CONTENTFUL_PREVIEW_TOKEN
CONTENTFUL_ENVIRONMENT=master
```

## Contentful Dashboard
Settings → API Keys → Content Delivery API
