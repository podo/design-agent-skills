---
name: accessibility-agents
description: |
  Twenty-five specialist accessibility agents enforcing WCAG 2.2 AA compliance: nine web code specialists, six document accessibility specialists (Office/PDF), and markdown auditors. Each agent focuses on a specific accessibility domain.
triggers:
  - "accessibility agents"
  - "Community Access"
  - "PDF accessibility"
  - "document accessibility"
  - "25 a11y agents"
das:
  type: package
  category: accessibility-quality
  upstream: "https://github.com/Community-Access/accessibility-agents"
  version: latest
  install: false
---

# accessibility-agents

> Catalogue stub — full package: [Community-Access/accessibility-agents](https://github.com/Community-Access/accessibility-agents)

## Decision tree

1. **Is the package already installed?**
   Check your agent's skills directory for `accessibility-agents` with content beyond this stub.
   - Yes → invoke and proceed
   - No → go to step 2

2. **Which agent?**
   - Claude Code / Cursor → `npx skills add Community-Access/accessibility-agents` — or send `! npx skills add …` as a chat message (add `-g` for global, omit for project-only)
   - Other → see [GitHub README](https://github.com/Community-Access/accessibility-agents)

## Install command

```bash
npx skills add Community-Access/accessibility-agents
```

## Invoke after install

- Skill name: `accessibility-agents`
- Trigger phrases: "accessibility agents", "Community Access", "PDF accessibility", "document accessibility", "25 a11y agents"

## What it does

Twenty-five specialist accessibility agents each enforcing WCAG 2.2 AA compliance in a specific domain. Nine web code specialists cover HTML structure, ARIA, keyboard navigation, focus management, color contrast, images, forms, tables, and dynamic content. Six document accessibility specialists handle Word, Excel, PowerPoint, PDFs, and mixed-format documents. Additional markdown auditors cover structured content. Each agent produces targeted, domain-specific remediation guidance.

## When NOT to use

- Single-file audits where a lighter tool suffices — use `fixing-accessibility`
- Quick contrast check only — use `color-expert`
