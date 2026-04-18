# Agent: Content Agent

Autonomous agent for managing and updating portfolio content via Contentful CMS.

## Purpose
Automate routine content tasks: syncing project data, updating skill tags, validating content integrity.

## Triggers
- Manually invoked via `/content-agent`
- On new project deployment (future: GitHub Actions webhook)

## Capabilities

### 1. Sync Projects
Reads from Contentful and validates all `project` entries have:
- `title`, `slug`, `description` filled
- `liveUrl` or `githubUrl` present
- `coverImage` attached
- `featured` flag set correctly

### 2. Generate Content Suggestions
Uses OpenAI to suggest improved project descriptions based on tech stack + GitHub README.

**Input:** GitHub repo URL  
**Output:** Draft description for Contentful

### 3. Audit Skills List
Compares hardcoded `src/constants/skills.ts` against Contentful `skill` entries and flags mismatches.

## Implementation Notes
- Contentful SDK: `contentful` (read) + `contentful-management` (write)
- OpenAI model: `gpt-4o-mini` for cost efficiency on short content tasks
- Always log changes to `.claude/logs/content-agent.log`
- Never auto-publish; create drafts for human review

## Future Agents
- **SEO Agent:** Audit meta titles, descriptions, OG images
- **Perf Agent:** Run Lighthouse and flag regressions
- **Deploy Agent:** Watch Vercel deployment status and notify
