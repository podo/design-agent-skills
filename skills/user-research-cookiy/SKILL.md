---
name: user-research-cookiy
description: |
  End-to-end user research assistant — qualitative and quantitative. Covers the
  full research lifecycle: study planning, discussion guide creation, AI-moderated
  interviews (real or synthetic via Cookiy), survey design and distribution,
  transcript synthesis, thematic analysis, and research report generation. 141 ★.
triggers:
  - "user research"
  - "user interview"
  - "research synthesis"
  - "discussion guide"
  - "research plan"
  - "usability study"
  - "interview transcript"
  - "user-research-cookiy"
das:
  type: skill
  category: design-research
  upstream: "https://github.com/cookiy-ai/user-research-skill"
  version: latest
---

# user-research-cookiy

> Catalogue stub — full skill: [cookiy-ai/user-research-skill](https://github.com/cookiy-ai/user-research-skill)

## Decision tree

1. **Is the full skill already installed?**
   - Global: `grep -q "^das:" ~/.agents/skills/user-research-cookiy/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - Project: `grep -q "^das:" .agents/skills/user-research-cookiy/SKILL.md 2>/dev/null && echo "pointer" || echo "installed"`
   - No `das:` block → full skill installed, invoke and proceed
   - `das:` block present → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/user-research-cookiy ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add cookiy-ai/user-research-skill --skill user-research-cookiy -g -y
   ```

   **Project:**
   ```bash
   npx skills add cookiy-ai/user-research-skill --skill user-research-cookiy -y
   ```
   > **Claude Code:** send either command as a chat message starting with `!` to run it without leaving the conversation.

## Invoke after install

- Skill name: `user-research-cookiy`
- Triggers: "user research", "user interview", "discussion guide", "research synthesis", "survey design", "interview transcript", "usability study"

## What it does

Routes to the right research workflow based on intent:

| Intent | Route |
|---|---|
| Needs study plan, screener, or discussion guide | Plan a Study |
| Has transcripts/notes, needs report | Synthesize a Report |
| Wants AI-moderated interviews via Cookiy | Run with Cookiy AI |
| Ambiguous | Asks one clarifying question |

Covers the full research lifecycle:
- **Planning** — study briefs, screening questionnaires, discussion guides, survey instruments
- **Running** — AI-moderated interview flows, synthetic user simulations, survey distribution
- **Synthesis** — thematic analysis, affinity clustering, insight extraction, research reports

## When NOT to use

- UX journey mapping → use `neo-user-journey`
- PM discovery frameworks (JTBD, OST) → use `deanpeters-pm-skills` or `pm-skills`
- Usability heuristic audits → use `mastepanoski-skills`
