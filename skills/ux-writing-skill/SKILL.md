---
name: ux-writing-skill
description: |
  Systematic UX writing for digital products — applies four quality standards
  (Purposeful, Concise, Conversational, Clear) to all interface copy. Covers
  microcopy patterns for buttons, error messages, empty states, form labels,
  notifications, tooltips, and onboarding. Includes accessibility writing
  guidelines, voice/tone framework, and before/after examples.
triggers:
  - "UX writing"
  - "microcopy"
  - "error message copy"
  - "empty state copy"
  - "button label"
  - "UI copy"
  - "interface copy"
  - "ux-writing-skill"
das:
  type: skill
  category: content-design
  upstream: "https://github.com/content-designer/ux-writing-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# ux-writing-skill

> Catalogue stub — full skill: [content-designer/ux-writing-skill](https://github.com/content-designer/ux-writing-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `ux-writing`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/ux-writing/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/ux-writing/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `ux-writing`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/ux-writing-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add content-designer/ux-writing-skill --skill ux-writing -g -y
   ```

   **Project:**
   ```bash
   npx skills add content-designer/ux-writing-skill --skill ux-writing -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
- **Download size:** ~21 MB.
- **Name collision:** `ux-writing` is also written by `designer-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `ux-writing`
- Triggers: "UX writing", "microcopy", "error message copy", "empty state copy", "button label", "UI copy"

## What it does

Applies systematic UX writing standards to every piece of interface copy. Four quality dimensions: **Purposeful** (serves user goals), **Concise** (fewest words that keep the meaning; about 8–14 words per sentence, 2–4 words for buttons), **Conversational** (active voice, second person), **Clear** (no jargon). Covers the most common UI copy patterns:

- **Buttons & CTAs** — action-verb labels, primary/secondary/destructive framing
- **Error messages** — what happened, why, how to fix (never blame the user)
- **Empty states** — purpose, value prop, call to action
- **Form labels & placeholders** — distinction between label, hint, placeholder, validation
- **Notifications & toasts** — urgency calibration, dismissal copy
- **Onboarding** — progressive disclosure, setup copy, success moments
- **Accessibility** — screen reader-first phrasing, `aria-label` guidance, cognitive load

## When NOT to use

- Long-form product marketing copy — use `copywriting-skill`
- Removing AI writing patterns from existing text — use `humanize-text`
- Full content strategy / information architecture — use `design-with-claude` (`content-strategist`)
