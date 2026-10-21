---
name: dark-pattern-audit
description: |
  Audits codebases and product copy for deceptive dark patterns inferable from
  local source code and text — no runtime inspection or screenshots needed.
  Produces a structured narrative report with confidence grading, source
  locations, concise reasoning, and official pattern reference links for each
  detected pattern. Covers pricing, subscriptions, consent, modals, preselected
  controls, misleading CTAs, and more.
triggers:
  - "dark pattern audit"
  - "dark pattern detection"
  - "deceptive design audit"
  - "dark-pattern-audit"
  - "deceptive patterns"
  - "manipulative UI audit"
das:
  type: skill
  category: accessibility-quality
  upstream: "https://github.com/SidKH/skills"
  upstream_path: "dark-pattern-audit/SKILL.md"
  version: latest
---

# dark-pattern-audit

> Catalogue stub — full skill: [SidKH/skills](https://github.com/SidKH/skills/tree/main/dark-pattern-audit)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/dark-pattern-audit/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/dark-pattern-audit/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `dark-pattern-audit`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/dark-pattern-audit ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add SidKH/skills --skill dark-pattern-audit -g -y
   ```

   **Project:**
   ```bash
   npx skills add SidKH/skills --skill dark-pattern-audit -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** no LICENSE file in the repo
<!-- das:install:end -->

## Invoke after install

- Skill name: `dark-pattern-audit`
- The upstream skill sets `disable-model-invocation: true`: an agent will not start it on its own. Ask the user to run `/dark-pattern-audit` (in Claude Code), or to name the skill explicitly in the prompt.
- Trigger phrases: "dark pattern audit", "dark pattern detection", "deceptive design audit"

## What it does

Static analysis of a codebase for dark patterns — purely from source code and copy, without runtime access:

**Surfaces covered:**
- Pricing, checkout, billing, fees, cart, upsells
- Subscriptions, trials, renewals, cancellation flows
- Consent dialogs, privacy prompts, notification permissions
- Modals, interstitials, countdown timers, fake stock counters
- Preselected controls, bundled choices, forced steps
- Misleading CTA text, low-contrast disclosures, hidden disclaimers

**Output per finding:**
- Pattern name + official reference link
- Confidence grade (conservative — only high-confidence findings reported)
- Exact source location (file, line, component)
- Concise reasoning grounded in local evidence

**Workflow:** Confirm scope → load pattern catalog → search evidence in code/copy → report

## When NOT to use

- General design quality audit (typography, dark mode, RTL) → use `design-auditor`
- WCAG accessibility compliance → use `wcag-ai-skill`
- AI writing pattern detection → use `humanize-text`
- Ethical design strategy → use `plan-design-review`
