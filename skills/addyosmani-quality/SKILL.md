---
name: addyosmani-quality
description: |
  Web quality skills from Google Chrome's Addy Osmani: a measurement-first
  web quality audit (Lighthouse-style), accessibility (WCAG 2.2), Core Web
  Vitals (LCP/INP/CLS), performance, SEO, and security/modern-web best practices.
triggers:
  - "Addy Osmani"
  - "web quality"
  - "core web vitals"
  - "web accessibility"
  - "Lighthouse audit"
  - "SEO audit"
  - "web best practices"
das:
  category: accessibility-quality
  upstream: "https://github.com/addyosmani/web-quality-skills"
  version: latest
  install: false
---

# addyosmani-quality

> Catalogue stub — full package: [addyosmani/web-quality-skills](https://github.com/addyosmani/web-quality-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 6 skills (`web-quality-audit`, `accessibility`, `core-web-vitals`, `performance`, `seo`, `best-practices`); checking the first.
   - Global: `f=~/.agents/skills/web-quality-audit/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/web-quality-audit/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `web-quality-audit`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/addyosmani-quality ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add addyosmani/web-quality-skills --skill web-quality-audit accessibility core-web-vitals performance seo best-practices -g -y
   ```

   **Project:**
   ```bash
   npx skills add addyosmani/web-quality-skills --skill web-quality-audit accessibility core-web-vitals performance seo best-practices -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add addyosmani/web-quality-skills
/plugin install web-quality-skills@addy-web-quality-skills
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- `web-quality-audit` — "Lighthouse audit", "web quality", "audit my site"
- `accessibility` — "WCAG compliance", "screen reader", "keyboard nav"
- `core-web-vitals` — "LCP", "INP", "CLS", "Core Web Vitals"
- `performance` — "page speed", "loading performance"
- `seo` — "SEO", "structured data", "crawlability"
- `best-practices` — "web security", "modern APIs", "code quality"

## What it does

Addy Osmani's (Google Chrome) web quality suite. Each skill is a focused, evidence-led playbook: a holistic Lighthouse-style audit (performance, accessibility, SEO, best practices, agentic browsing), WCAG 2.2 accessibility, Core Web Vitals optimization using field and lab data, loading and runtime performance, search visibility and structured data, and security and modern-web best practices. Start with `web-quality-audit` and drop into a focused skill for the fixes.

## When NOT to use

- A single-purpose WCAG 2.2 guidance workflow (design through conformance docs) → use `wcag-ai-skill`
- Targeted color-contrast and accessibility fixes in code → use `fixing-accessibility`
- Motion-specific jank (layout thrashing, compositor properties) → use `fixing-motion-performance`
