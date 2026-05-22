# Design: taste-skill stub/adapter

**Date:** 2026-05-22  
**Repo:** design-agent-skills (shareable catalogue)  
**Approach:** Install-on-invoke (C) — stub includes agent-executable install command

## What we're building

A stub/adapter skill in `skills/taste-skill/SKILL.md` that:
1. Advertises the upstream `taste-skill` in this catalogue for agent discovery
2. Tells the agent **when/why** to use the skill (use cases, trigger scenarios)
3. Provides an **install command** the agent can present or run to pull the upstream SKILL.md locally
4. Explains **how to invoke** the full skill after install

A supporting `README.md` documents the catalogue structure and stub anatomy.

## Repo structure

```
design-agent-skills/
├── README.md
├── docs/plans/
│   └── 2026-05-22-taste-skill-stub-design.md
└── skills/
    └── taste-skill/
        └── SKILL.md
```

## Frontmatter schema (`das:` namespace)

```yaml
das:
  category: string        # skill category (e.g. design-systems)
  upstream: string        # GitHub repo URL
  upstream_path: string   # path to SKILL.md within upstream repo
  version: string         # "latest" or a git tag
  install: boolean        # true = install-on-invoke pattern
```

## SKILL.md body sections (agent-readable)

1. **When to use** — trigger phrases + use case descriptions so agent knows when to surface this skill
2. **How to install** — curl command pulling upstream SKILL.md → `~/.claude/skills/taste-skill/SKILL.md`; agent instruction for what to do if not yet installed
3. **How to invoke after install** — skill name + trigger phrases
4. **What it does** — 3-dial table (DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY with defaults and ranges) + one-line summary of forbidden patterns

## README.md sections

1. What this catalogue is
2. Stub anatomy (frontmatter fields + body sections explained)
3. How to browse and use stubs
4. How to add a new stub

## Constraints

- No upstream content embedded beyond the 3-dial defaults table
- Install path: `~/.claude/skills/taste-skill/SKILL.md`
- Agent instruction: if not installed, present command and ask user to run it (or self-run if shell access available)
