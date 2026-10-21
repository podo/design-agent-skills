---
name: mastepanoski-skills
description: |
  UX/UI audit skills, each a structured methodology: ux-audit-rethink (IxDF UX factors), nielsen-heuristics-audit, wcag-accessibility-audit (POUR framework), don-norman-principles-audit, cognitive-walkthrough, ui-design-review, and information-architecture-audit. The package also holds AI-governance and security-audit skills that this catalogue does not install.
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
  install: true
---

# mastepanoski-skills

> Catalogue stub — full package: [mastepanoski/claude-skills](https://github.com/mastepanoski/claude-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 7 skills (`ux-audit-rethink`, `nielsen-heuristics-audit`, `wcag-accessibility-audit`, `don-norman-principles-audit`, `cognitive-walkthrough`, `ui-design-review`, `information-architecture-audit`); checking the first.
   - Global: `f=~/.agents/skills/ux-audit-rethink/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/ux-audit-rethink/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `ux-audit-rethink`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/mastepanoski-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add mastepanoski/claude-skills --skill ux-audit-rethink nielsen-heuristics-audit wcag-accessibility-audit don-norman-principles-audit cognitive-walkthrough ui-design-review information-architecture-audit -g -y
   ```

   **Project:**
   ```bash
   npx skills add mastepanoski/claude-skills --skill ux-audit-rethink nielsen-heuristics-audit wcag-accessibility-audit don-norman-principles-audit cognitive-walkthrough ui-design-review information-architecture-audit -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill names: `ux-audit-rethink`, `nielsen-heuristics-audit`, `wcag-accessibility-audit`, `don-norman-principles-audit`, `cognitive-walkthrough`, `ui-design-review`, `information-architecture-audit`
- Trigger phrases: "mastepanoski", "Don Norman audit", "cognitive walkthrough", "POUR accessibility", "ux-audit-rethink"

## What it does

Structured UX/UI audit skills covering distinct methodological frameworks. Each follows its method step by step and produces actionable, prioritized findings:

- `ux-audit-rethink` — holistic UX audit (IxDF's UX factors, usability characteristics, interaction dimensions) with redesign proposals
- `nielsen-heuristics-audit` — Jakob Nielsen's 10 usability heuristics
- `wcag-accessibility-audit` — WCAG evaluated through the POUR framework (Perceivable, Operable, Understandable, Robust)
- `don-norman-principles-audit` — principles from *The Design of Everyday Things*
- `cognitive-walkthrough` — task-based usability analysis simulating a novice user step by step
- `ui-design-review` — visual design and aesthetics: typography, color, spacing, hierarchy, consistency, branding
- `information-architecture-audit` — organization, labeling, navigation, search, sitemaps, card sorting and tree testing

There is no skill called `mastepanoski-skills`; the name is the package. A bare `npx skills add mastepanoski/claude-skills` would also install six non-design skills (GDPR audit, ISO 42001 AI governance, NIST AI RMF, OWASP AI testing, OWASP LLM Top 10, AI assessment scale), which is why this install lists the skills by name.

## When NOT to use

- Automated code-level fixes — use `react-doctor` for component-level remediation
- Core Web Vitals and performance — use `cloudflare-web-perf`
