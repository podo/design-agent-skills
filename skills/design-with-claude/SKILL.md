---
name: design-with-claude
description: |
  Deterministic design-system audit plus a full set of design specialists as slash commands. `npx dwic-audit` scans a project across 8 categories (color, typography, spacing, accessibility, forms, navigation, motion, copy) using WCAG contrast math and token parsing — no LLM, no token, nothing leaves the machine — then routes each finding to the specialist that fixes it. Specialists cover visual hierarchy, interaction design, design system architecture, typography, color, spacing, motion, forms, navigation, dashboards, mobile, landing pages, auth UX, healthcare UX, b2b SaaS, e-commerce, dark mode, error handling, onboarding, and data viz. No runtime dependencies, pure markdown.
triggers:
  - "design with claude"
  - "imsaif design"
  - "audit my design system"
  - "WCAG contrast audit"
  - "b2b SaaS design"
das:
  type: package
  category: design-review
  upstream: "https://github.com/imsaif/design-with-claude"
  version: latest
  install: true
---

# design-with-claude

Full package: [imsaif/design-with-claude](https://github.com/imsaif/design-with-claude) (MIT)

## Decision tree

1. **Is the package already installed?**
   Check: `~/.agents/skills/design-with-claude/SKILL.md` (global) or `.agents/skills/design-with-claude/SKILL.md` (project) exists, or the Claude Code plugin is listed in `/plugin`.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Which agent?**
   - Claude Code → install the plugin (below)
   - Any other agent (Cursor, Cline, Gemini CLI, Antigravity, …) → the skills CLI cannot currently discover the upstream skill, so use the no-install audit below or follow the [upstream README](https://github.com/imsaif/design-with-claude#readme).

3. **Just want the audit, no install?**
   `npx dwic-audit` needs no install and no token.

## Install command

Claude Code plugin:

```
/plugin marketplace add imsaif/design-with-claude
/plugin install design-with-claude@design-with-claude
```

## Invoke after install

- Skill name: `design-with-claude`
- Trigger phrases: "design with claude", "audit my design system", "WCAG contrast audit", "dashboard design", "b2b SaaS design"

## What it does

Two halves that work together.

**Measure.** `npx dwic-audit` runs a deterministic static scan across 8 categories — color, typography, spacing, accessibility, forms, navigation, motion, copy. WCAG contrast math, token parsing, markup heuristics; no LLM runs. It prints a dashboard, writes a shareable `.dwic/audit-<date>.md`, and exits non-zero on errors so it works in CI. Nothing leaves the machine.

**Fix.** Design specialists as slash commands, each a domain expert in pure markdown with no runtime dependencies. The audit's categories map onto specialists (contrast failures → `/color-specialist`, unlabelled inputs → `/form-designer`, and so on), and `/design-triage` will read the audit report and work the findings in ranked order. `/design-brief` routes a plain-language brief when the problem spans several domains.

Use it when the request is vague ("improve our design", "is this any good?") — measure first, then invoke the specialist the findings point at, rather than guessing.

## When NOT to use

- Non-visual work with no design component
- A one-line CSS change you already know how to make
- When a single focused skill already installed suffices — avoid installing the full suite for one-off needs
