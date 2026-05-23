---
name: mastepanoski-skills
description: |
  Six UX/UI audit skills: ux-audit-rethink (7 UX factors), nielsen-heuristics-audit, wcag-accessibility-audit (POUR framework), don-norman-principles-audit, cognitive-walkthrough, and ui-design-review. Each skill is a structured audit methodology.
triggers:
  - "mastepanoski"
  - "Don Norman audit"
  - "cognitive walkthrough"
  - "POUR accessibility"
  - "ux-audit-rethink"
das:
  type: package
  category: accessibility-quality
  upstream: "https://github.com/mastepanoski/claude-skills"
  version: latest
  install: false
---

# mastepanoski-skills

> Catalogue stub — full package: [mastepanoski/claude-skills](https://github.com/mastepanoski/claude-skills)

## Decision tree

1. **Is the package already installed?**
   Check your agent's skills directory for `mastepanoski-skills` with content beyond this stub.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Which agent?**
   - Claude Code / Cursor → `npx skills add mastepanoski/claude-skills` — or send `! npx skills add …` as a chat message (add `-g` for global, omit for project-only)
   - Other → see [GitHub README](https://github.com/mastepanoski/claude-skills)

## Install command

```bash
npx skills add mastepanoski/claude-skills
```

## Invoke after install

- Skill name: `mastepanoski-skills`
- Trigger phrases: "mastepanoski", "Don Norman audit", "cognitive walkthrough", "POUR accessibility", "ux-audit-rethink"

## What it does

Six structured UX/UI audit skills covering distinct methodological frameworks: `ux-audit-rethink` (7-factor UX evaluation), `nielsen-heuristics-audit` (10 Nielsen heuristics), `wcag-accessibility-audit` (POUR framework — Perceivable, Operable, Understandable, Robust), `don-norman-principles-audit` (The Design of Everyday Things principles), `cognitive-walkthrough` (task-based usability analysis), and `ui-design-review` (visual UI assessment). Each skill follows a structured methodology and produces actionable findings.

## When NOT to use

- Automated code-level fixes — use `react-doctor` for component-level remediation
- Core Web Vitals and performance — use `cloudflare-web-perf`
