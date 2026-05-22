# design-agent-skills

A shareable catalogue of agent skill stubs. Each stub advertises an upstream skill for agent discovery and provides everything the agent needs to install and invoke the full skill.

## Install the catalogue

```bash
git clone https://github.com/<you>/design-agent-skills
cd design-agent-skills
./install.sh
```

This copies each stub from `skills/` into `~/.claude/skills/` — one directory per skill. Stubs that already exist at the target are skipped.

**Why copy, not symlink:** when you install an upstream skill, the `curl` command overwrites the stub file in place. With a symlink that write would go back into the repo. Copies keep the repo clean.

**Custom skills dir:**
```bash
CLAUDE_SKILLS_DIR=~/.config/claude/skills ./install.sh
```

## How it works

Skills live in `skills/<skill-name>/SKILL.md`. Two types:

**Stubs (install-on-invoke):** Lightweight adapters pointing to an upstream skill.
1. Expose triggers so agents discover the skill during planning
2. Tell the agent **when and why** to use the skill
3. Provide an **install command** to pull the full upstream skill locally
4. Explain **how to invoke** the skill after install

When the agent runs the install command, the upstream SKILL.md overwrites the stub at `~/.claude/skills/<skill-name>/SKILL.md`. The stub is gone; the full skill takes its place. That is the intended lifecycle.

**Native skills:** Live fully in this repo, no install step. Used for catalogue-level tasks like browsing and routing.

```
skills/
├── design-catalogue/
│   └── SKILL.md   ← native: browse and route to stubs
└── taste-skill/
    └── SKILL.md   ← stub → https://github.com/Leonxlnx/taste-skill
```

## Stub anatomy

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

## Adding a new stub

1. Create `skills/<skill-name>/SKILL.md`
2. Fill in frontmatter (`name`, `description`, `triggers`, `das:` block)
3. Write the four body sections
4. Update the skills table below
5. Open a PR

## Skills in this catalogue

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [design-catalogue](skills/design-catalogue/SKILL.md) | native | meta | — |
| [taste-skill](skills/taste-skill/SKILL.md) | stub | design-systems | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
