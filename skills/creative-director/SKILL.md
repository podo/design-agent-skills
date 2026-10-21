---
name: creative-director
description: |
  Senior creative director skill: generates concepts with SIT, TRIZ, SCAMPER, bisociation and
  lateral-thinking methods, scores them against weighted criteria calibrated on Cannes Lions, D&AD
  and HumanKind standards, and refines until the bar is met. Takes briefs as text, notes or PDFs.
triggers:
  - "creative director"
  - "creative strategy"
  - "ideation"
  - "campaign concept"
  - "creative brief"
  - "SCAMPER"
  - "TRIZ"
das:
  type: skill
  category: design-review
  upstream: "https://github.com/smixs/creative-director-skill"
  upstream_path: "creative-director/SKILL.md"
  version: latest
  install: true
---

# creative-director

> Catalogue stub — full skill: [smixs/creative-director-skill](https://github.com/smixs/creative-director-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/creative-director/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/creative-director/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `creative-director`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/creative-director ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add smixs/creative-director-skill --skill creative-director -g -y
   ```

   **Project:**
   ```bash
   npx skills add smixs/creative-director-skill --skill creative-director -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **License:** CC-BY-4.0 (attribution required: Serge Shima)
<!-- das:install:end -->

## Invoke after install

- Skill name: `creative-director`
- Trigger phrases: "creative director", "creative strategy", "ideation", "campaign concept"

## What it does

Applies senior creative director thinking: insight first, then structured ideation with SIT, TRIZ, bisociation, SCAMPER and related methods instead of free association. Concepts are scored against weighted criteria calibrated on Cannes Lions, D&AD and HumanKind standards and refined recursively, and a bundled library of past campaigns is used to detect saturation and keep ideas original. Useful for campaign strategy, brand positioning and breaking out of generic creative solutions. Not for media planning, production budgets, logo design or final copy drafts. The licence requires attribution to the author.
