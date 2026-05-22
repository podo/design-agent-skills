# design-agent-skills

A shareable catalogue of agent skill stubs. Each stub advertises an upstream skill for agent discovery and provides everything the agent needs to install and invoke the full skill.

## How it works

Skills live in `skills/<skill-name>/SKILL.md`. There are two types:

**Stubs (install-on-invoke):** Lightweight adapters pointing to an upstream skill. They:
1. Expose triggers so agents discover the skill during planning
2. Tell the agent **when and why** to use the skill
3. Provide an **install command** to pull the full upstream skill locally
4. Explain **how to invoke** the skill after install

**Native skills:** Live fully in this repo, no install step required. Used for catalogue-level tasks like browsing and routing.

```
skills/
├── design-catalogue/
│   └── SKILL.md   ← native meta-skill: browse and route to stubs
└── taste-skill/
    └── SKILL.md   ← stub pointing to https://github.com/Leonxlnx/taste-skill
```

## Stub anatomy

Every stub follows this structure:

### Frontmatter

```yaml
---
name: <skill-name>
description: |
  One-paragraph description for agent discovery.
triggers:
  - "phrase that activates this skill"
das:
  category: <category>           # e.g. design-systems, testing, devops
  upstream: <github-url>         # full repo URL
  upstream_path: <path>          # path to SKILL.md inside upstream repo
  version: latest                # or a git tag
  install: true                  # always true for install-on-invoke stubs
---
```

### Body sections

| Section | Purpose |
|---------|---------|
| **When to use** | Trigger phrases + use cases — agent reads this to decide whether to surface the skill |
| **How to install** | Shell command to pull upstream SKILL.md into `~/.claude/skills/`; includes agent instructions |
| **How to invoke after install** | Skill name + trigger phrases to use once installed |
| **What it does** | Brief capability summary — enough for the agent to confirm this is the right skill |

## Using a stub

When an agent encounters a stub and the upstream is not yet installed:

1. Agent presents the install command from the stub
2. User runs it (or agent self-runs if it has shell access)
3. Agent invokes the full upstream skill by name

## Adding a new stub

1. Create `skills/<skill-name>/SKILL.md`
2. Fill in frontmatter (`name`, `description`, `triggers`, `das:` block)
3. Write the four body sections (when to use, how to install, how to invoke, what it does)
4. Update the skills table in this README
5. Open a PR — no review of the upstream skill content required, only the stub structure

## Skills in this catalogue

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [design-catalogue](skills/design-catalogue/SKILL.md) | native | meta | — |
| [taste-skill](skills/taste-skill/SKILL.md) | stub | design-systems | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
