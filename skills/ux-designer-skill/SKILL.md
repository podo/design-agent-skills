---
name: ux-designer-skill
description: |
  UX/UI design guidance for building, reviewing and critiquing interfaces, grounded in
  Nielsen heuristics, the Laws of UX and WCAG 2.2, with modern 2026 best practices. Covers
  interaction patterns, forms, navigation, accessibility, UX writing, onboarding, AI and
  chat interfaces, i18n/RTL, and more, with reference files loaded on demand.
triggers:
  - "UX designer"
  - "UX principles"
  - "Laws of UX"
  - "ux-designer-skill"
  - "usability guidelines"
das:
  type: skill
  category: design-review
  upstream: "https://github.com/szilu/ux-designer-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# ux-designer-skill

> Catalogue stub — full skill: [szilu/ux-designer-skill](https://github.com/szilu/ux-designer-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `ux-designer`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/ux-designer/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/ux-designer/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `ux-designer`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/ux-designer-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add szilu/ux-designer-skill --skill ux-designer -g -y
   ```

   **Project:**
   ```bash
   npx skills add szilu/ux-designer-skill --skill ux-designer -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `ux-designer`
- Trigger phrases: "UX designer", "UX principles", "Laws of UX", "ux-designer-skill", "usability guidelines"

## What it does

A UX/UI design skill for three jobs: reviewing an interface (screenshot, URL or code), building UI, and advising on a design decision. The main file holds the workflows, rules and a routing table; a folder of reference files (core principles and Nielsen heuristics, Laws of UX, WCAG 2.2 and European Accessibility Act compliance, visual design, information architecture, interaction, forms, mobile, UX writing, user research, design systems, collaborative and canvas apps, AI interfaces, ethical design, onboarding, notifications, data tables, i18n and RTL, voice, barcode scanning) is loaded only when the task needs it. Useful when you need principled UX rationale grounded in established frameworks rather than generic advice.

## When NOT to use

- Code-specific implementation — this skill provides design guidance, not code output
- Brand or visual identity work — use a dedicated brand/creative direction skill
