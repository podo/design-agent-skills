---
name: copywriting-skill
description: |
  Copywriting toolkit for product and web: persuasion-driven copy for landing
  pages, feature pages, pricing pages, email sequences, and CTAs, with a built-in
  anti-AI-pattern layer and reference files for hooks, proof, and concision. The repo also
  bundles SEO, social (LinkedIn and X), French, career, and tone-of-voice sub-skills.
  Works with Claude Code, Cursor, and Windsurf.
triggers:
  - "copywriting"
  - "landing page copy"
  - "product copy"
  - "tone of voice"
  - "web copy"
  - "email copy"
  - "copywriting-skill"
  - "headline copy"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/judicael-s/Copywriting-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# copywriting-skill

> Catalogue stub — full skill: [judicael-s/Copywriting-skill](https://github.com/judicael-s/Copywriting-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `copywriting`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/copywriting/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/copywriting/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `copywriting`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/copywriting-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add judicael-s/Copywriting-skill --skill copywriting -g -y
   ```

   **Project:**
   ```bash
   npx skills add judicael-s/Copywriting-skill --skill copywriting -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `copywriting`
- Trigger phrases: "copywriting", "landing page copy", "web copy", "headline copy"

The installed `copywriting` directory also carries the bundled sub-skills (`skills/seo-copywriting`, `skills/social-copywriting`, `skills/french-copywriting`, `skills/tone-of-voice`, `skills/career-copywriting`). The skills CLI does not register them as separate skills. To use one as its own skill, install it by subpath (this copies its `SKILL.md` only, without the shared `references/` folder, so it falls back to its built-in baseline rules):

```bash
npx skills add judicael-s/Copywriting-skill/skills/seo-copywriting
```

## What it does

Persuasion-driven copy toolkit grounded in proven frameworks (AIDA, PAS, FAB). Covers the full product marketing stack:

- **Landing pages** — hero copy, value prop, social proof, objection handling, CTA
- **Feature pages** — outcome-first framing, benefit vs. feature discipline
- **Pricing pages** — anchoring, tier naming, CTA per plan
- **Email sequences** — subject lines, preview text, body, single CTA
- **Headlines** — formula library (curiosity, specificity, transformation)
- **Anti-AI layer** — detects and removes AI writing tells before delivery

## When NOT to use

- Short UI labels and error messages — use `ux-writing-skill`
- Conversion rate optimization of existing flows — use `coreyhaines-marketing`
- Auditing existing copy for AI patterns — use `humanize-text`
