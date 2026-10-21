---
name: humanize-ppt
description: |
  Presentation planner and checker for agent-made decks. Turns raw material into an audience-state-transfer outline with per-page image, diagram, or video decisions, hands a production brief to a downstream renderer, then runs a capped checkup on the rendered deck. It never renders slides itself.
triggers:
  - "humanize ppt"
  - "presentation outline director"
  - "audience state transfer outline"
  - "presentation checkup"
  - "PPT outline before rendering"
das:
  type: skill
  category: presentations
  upstream: "https://github.com/LearnPrompt/humanize-ppt"
  version: latest
---

# humanize-ppt

> Catalogue stub — full skill: [LearnPrompt/humanize-ppt](https://github.com/LearnPrompt/humanize-ppt)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/humanize-ppt/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/humanize-ppt/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/humanize-ppt ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add LearnPrompt/humanize-ppt --skill humanize-ppt -g -y
   ```

   **Project:**
   ```bash
   npx skills add LearnPrompt/humanize-ppt --skill humanize-ppt -y
   ```

## Invoke after install

- Skill name: `humanize-ppt`
- Run it before rendering (brief mode) and again after rendering with the rendered deck as input (checkup mode)
- Trigger phrases: "humanize ppt", "presentation outline director", "audience state transfer outline", "presentation checkup"

## What it does

Treats a deck as an audience state-transfer artifact rather than an information container. From notes, transcripts, documents, or links it writes a deck brief, an AST outline, a slide plan with a per-page media decision (photo, system diagram, short process clip, or nothing), speaker intent, and a style brief for the next agent. After a downstream skill renders the deck, a checkup pass compares each rendered page to its outline page, flags pages that can only be looked at rather than spoken from, and writes fix instructions, for up to three rounds before handing back to a human. It owns the story and the check, not the visuals.

## When NOT to use

- You only want one good-looking template page with no outline or checkup → use a renderer directly: `html-ppt`, `frontend-slides`, `kami`, or `guizang-ppt`
- Markdown-driven developer decks → use `slidev-skill` or `marp-slides`
- Linting slide quality for Marp decks → use `marp-slide-quality`
