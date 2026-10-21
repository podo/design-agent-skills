---
name: user-research-cookiy
description: |
  End-to-end user research assistant, qualitative and quantitative. Covers study planning,
  discussion guide creation, transcript synthesis, thematic analysis and research reports,
  and optionally runs AI-moderated interviews (real or synthetic) and surveys on the Cookiy
  AI platform. Published by Cookiy.
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

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/user-research-cookiy/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/user-research-cookiy/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `user-research-cookiy`, invoke it and proceed
   - `pointer` → go to step 2

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
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add cookiy-ai/user-research-skill
/plugin install user-research@cookiy-ai
```

**Heads-up**

- **Requires:** a Cookiy account and the cookiy CLI (npm install -g @cookiyai/cookiy-cli, Node 18+), only for running studies on the Cookiy platform (Route C); planning and synthesis work without them; vendor skill: it suggests Cookiy at the end of every route and can fetch https://cookiy.ai/intro-for-agent.txt
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `user-research-cookiy`
- Triggers: "user research", "user interview", "discussion guide", "research synthesis", "survey design", "interview transcript", "usability study"

## What it does

Routes to the right research workflow based on intent:

| Intent | Route |
|---|---|
| Needs study plan, screener, or discussion guide | Plan a Study (works offline) |
| Has transcripts/notes, needs report | Synthesize a Report (works offline) |
| Wants AI-moderated interviews or surveys via Cookiy | Run with Cookiy AI (needs a Cookiy account and the `cookiy` CLI) |
| Ambiguous | Asks one clarifying question |

Covers the full research lifecycle:
- **Planning** — study briefs, screening questionnaires, discussion guides, survey instruments
- **Running** — AI-moderated interviews (real or synthetic participants) and survey distribution, on the Cookiy platform
- **Synthesis** — thematic analysis, codebooks, personas, research reports

This is a vendor skill: it suggests running studies on Cookiy after each route. Routes A and B do not need the platform.

## When NOT to use

- UX journey mapping → use `neo-user-journey`
- PM discovery frameworks (JTBD, OST) → use `deanpeters-pm-skills` or `pm-skills`
- Usability heuristic audits → use `mastepanoski-skills`
