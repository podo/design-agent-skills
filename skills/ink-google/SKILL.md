---
name: ink-google
description: |
  Ink-style visual design skill for Claude artifacts. Applies a distinctive
  editorial aesthetic — high contrast, strong typographic voice, restrained
  color — to artifact output from Google Labs.
triggers:
  - "ink design"
  - "ink style"
  - "editorial design"
  - "ink visual"
  - "artifact design"
das:
  category: visual-components
  upstream: "https://github.com/google-labs-code/design.md"
  upstream_path: ".agents/skills/ink/SKILL.md"
  version: latest
  install: true
---

# ink-google

> Catalogue stub — full skill: [google-labs-code/design.md](https://github.com/google-labs-code/design.md/blob/main/.agents/skills/ink/SKILL.md)

## Decision tree

Run this before applying ink-style visual design to any artifact:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/ink-google/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `ink-google` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/ink-google && \
  curl -fsSL \
    "https://raw.githubusercontent.com/google-labs-code/design.md/main/.agents/skills/ink/SKILL.md" \
    -o ~/.claude/skills/ink-google/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/ink-google/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `ink-google`
- Trigger phrases: "ink design", "ink style", "editorial design", "artifact design"

## What it does

Applies a distinctive ink-style editorial aesthetic to Claude artifact output: high contrast, strong typographic voice, minimal restrained color, and clean structural composition. From Google Labs' design.md project — a system for encoding visual design intent into agent-readable format.
