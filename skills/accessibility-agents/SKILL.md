---
name: accessibility-agents
description: |
  WCAG 2.2 AA enforcement as a package of Agent Skills: router skills for web UI, full-site audits,
  Office/PDF/ePub documents, markdown, desktop and Python tooling, and GitHub workflows dispatch
  specialist, helper and reference skills by name.
triggers:
  - "accessibility agents"
  - "Community Access"
  - "PDF accessibility"
  - "document accessibility"
  - "accessibility lead"
das:
  type: package
  category: accessibility-quality
  upstream: "https://github.com/Community-Access/accessibility-agents"
  version: latest
  install: false
---

# accessibility-agents

> Catalogue stub — full package: [Community-Access/accessibility-agents](https://github.com/Community-Access/accessibility-agents)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 108 skills (`accessibility-lead`, `web-accessibility-wizard`, `document-accessibility-wizard`, `markdown-a11y-assistant`, `developer-hub`, `github-hub`, `a11y-core`, `a11y-tool-builder`, `accessibility-regression-detector`, `accessibility-statement`, `actions-manager`, `alt-text-headings`, `analytics`, `aria-specialist`, `ci-accessibility`, `cognitive-accessibility`, `compliance-mapping`, `contrast-master`, `contributions-hub`, `cross-document-analyzer`, `cross-page-analyzer`, `daily-briefing`, `data-visualization-accessibility`, `design-system-auditor`, `desktop-a11y-specialist`, `desktop-a11y-testing-coach`, `document-csv-reporter`, `document-inventory`, `email-accessibility`, `epub-accessibility`, `epub-scan-config`, `excel-accessibility`, `forms-specialist`, `i18n-accessibility`, `insiders-a11y-tracker`, `issue-tracker`, `kb-accessibility-rules`, `kb-ci-integration`, `kb-cognitive-accessibility`, `kb-data-visualization-accessibility`, `kb-design-system`, `kb-document-scanning`, `kb-email-accessibility`, `kb-framework-accessibility`, `kb-github-a11y-scanner`, `kb-github-analytics-scoring`, `kb-github-scanning`, `kb-github-shared-instructions`, `kb-github-workflow-standards`, `kb-help-url-reference`, `kb-legal-compliance-mapping`, `kb-lighthouse-scanner`, `kb-markdown-accessibility`, `kb-media-accessibility`, `kb-mobile-accessibility`, `kb-office-remediation`, `kb-path-instructions`, `kb-playwright-testing`, `kb-python-development`, `kb-report-generation`, `kb-severity-mapping`, `kb-testing-strategy`, `kb-web-scanning`, `kb-web-severity-scoring`, `keyboard-navigator`, `lighthouse-bridge`, `link-checker`, `live-region-controller`, `markdown-csv-reporter`, `markdown-fixer`, `markdown-scanner`, `media-accessibility`, `mobile-accessibility`, `modal-specialist`, `notifications-manager`, `nvda-addon-specialist`, `office-remediator`, `office-scan-config`, `pdf-accessibility`, `pdf-remediator`, `pdf-scan-config`, `performance-accessibility`, `playwright-scanner`, `playwright-verifier`, `powerpoint-accessibility`, `pr-review`, `projects-manager`, `python-specialist`, `release-manager`, `repo-admin`, `repo-manager`, `scanner-bridge`, `screen-reader-lab`, `security-dashboard`, `tables-data-specialist`, `team-manager`, `template-builder`, `testing-coach`, `text-quality-reviewer`, `wcag-aaa`, `wcag-guide`, `wcag3-preview`, `web-component-specialist`, `web-csv-reporter`, `web-issue-fixer`, `wiki-manager`, `word-accessibility`, `wxpython-specialist`); checking the first.
   - Global: `f=~/.agents/skills/accessibility-lead/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/accessibility-lead/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `accessibility-lead`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/accessibility-agents ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Community-Access/accessibility-agents -g -y
   ```

   **Project:**
   ```bash
   npx skills add Community-Access/accessibility-agents -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add Community-Access/accessibility-agents
/plugin install accessibility-agents@community-access
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

Describe the problem; six router skills pick the specialists and hand work to them by name, so install the whole package, not single skills.

- Skill name: `accessibility-lead` — before writing or changing HTML, JSX, TSX, Vue, Svelte, CSS or templates
- Skill name: `web-accessibility-wizard` — a full site or app audit rather than one change
- Skill name: `document-accessibility-wizard` — Word, Excel, PowerPoint, PDF or ePub files
- Skill name: `markdown-a11y-assistant` — markdown documentation
- Skill name: `developer-hub` — Python, wxPython, desktop apps, NVDA add-ons, accessibility tooling
- Skill name: `github-hub` — issues, pull requests, releases, projects, actions, security, teams, wikis
- Trigger phrases: "accessibility agents", "Community Access", "PDF accessibility", "document accessibility", "accessibility lead"

## What it does

Models forget accessibility while generating code; this package routes the work to the right specialist and merges the findings. The six routers dispatch many specialist, helper and reference skills (ARIA, keyboard, focus, forms, contrast, modals, live regions, tables, cognitive load, i18n, mobile, email, data visualisation, Office/PDF/ePub scanning, markdown audits) by name. Reports are rendered from structured findings rather than from memory.

`npx skills add` installs the skills only. Upstream's extras (hooks that block edits to user-facing files until the accessibility lead has reviewed, plus an MCP server that supplies the scanners) come with the Claude Code plugin route or upstream's own `node scripts/install.mjs`.

## When NOT to use

- Single-file audits where a lighter tool suffices — use `fixing-accessibility`
- Quick contrast check only — use `color-expert`
- A single WCAG 2.2 audit pass without the router and specialist machinery — use `wcag-audit-patterns`
