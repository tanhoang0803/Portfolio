# /memory — Save or Recall Project Memory

Manage persistent memory for this portfolio project across sessions.

## Usage
```
/memory save <topic>
/memory recall <topic>
/memory list
```

## What to Save

| Type | Example |
|---|---|
| user | Role, preferences, expertise level |
| feedback | Corrections Claude made ("don't do X"), confirmed approaches |
| project | Decisions, deadlines, stakeholder requirements |
| reference | External system URLs, dashboards |

## Memory Location
All memories are stored in:
```
~/.claude/projects/Portfolio_Resume/memory/
```
Index file: `MEMORY.md`

## Examples

**Save a decision:**
> "Remember that we decided to use Server Components by default and only add 'use client' for interactive elements."

**Save a preference:**
> "Remember I prefer minimal comments — only add them when the WHY is non-obvious."

**Recall context:**
> "What do you remember about the CMS setup?"

## Do NOT Save
- Code patterns (read from files)
- Git history (use `git log`)
- Temporary task state (use TODO.md)
