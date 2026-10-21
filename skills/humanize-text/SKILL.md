---
name: humanize-text
description: |
  Scores and rewrites text to remove AI writing patterns. Rates content across
  seven dimensions (AI vocabulary, content inflation, grammar patterns, UX copy
  quality, structural tells, punctuation, and meta-content), each on a 1–10
  scale. Works with raw text, Figma URLs, and UI screenshots. Based on
  Wikipedia's Signs of AI Writing field guide.
triggers:
  - "humanize text"
  - "remove AI patterns"
  - "AI slop"
  - "de-slop"
  - "AI writing detection"
  - "UX copy quality score"
  - "humanize-text"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/gregorymm/humanize-text"
  upstream_path: "skills/humanize-text/SKILL.md"
  version: latest
  install: true
---

# humanize-text

> Catalogue stub — full skill: [gregorymm/humanize-text](https://github.com/gregorymm/humanize-text)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/humanize-text/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/humanize-text/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `humanize-text`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/humanize-text ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add gregorymm/humanize-text/skills/humanize-text -g -y
   ```

   **Project:**
   ```bash
   npx skills add gregorymm/humanize-text/skills/humanize-text -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add gregorymm/humanize-text
/plugin install humanize-text@gregorymm-humanize-text
```

**Heads-up**

- **Requires:** Figma MCP server (only for the Figma-URL input; raw text and screenshots need nothing)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `humanize-text`
- Trigger phrases: "humanize text", "remove AI patterns", "de-slop", "UX copy quality score"

## What it does

Analyzes any text and produces a per-dimension score (1–10) plus a human-rewritten version:

| Dimension | What it catches |
|---|---|
| **AI vocabulary** | Overused words: "delve", "leverage", "utilize", "seamlessly", "robust" |
| **Content inflation** | Unnecessary padding, redundant qualifiers, filler transitions |
| **Grammar patterns** | Passive overuse, nominalization, non-human sentence openers |
| **UX copy quality** | Button/label clarity, error message tone, empty state effectiveness |
| **Structural tells** | Excessive bullet lists, formulaic H2/H3 patterns, intro-body-conclusion rigidity |
| **Punctuation** | Em-dash overuse, ellipsis as hedge, unnatural comma placement |
| **Meta-content** | Self-referential phrases ("In this article…", "It's important to note…") |

Works across input types: paste raw text, share a UI screenshot, or provide a Figma URL (the Figma workflow reads the design through the Figma MCP server).

## When NOT to use

- Writing new UI copy from scratch — use `ux-writing-skill`
- Writing new marketing copy — use `copywriting-skill`
- Full design audit — use `design-auditor` or `plan-design-review`
