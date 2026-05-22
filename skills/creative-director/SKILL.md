---
name: creative-director
description: |
  Senior Creative Director skill with 20+ ideation methodologies (SIT, TRIZ, SCAMPER,
  Bisociation, Synectics) and a 3-axis evaluation framework calibrated against
  Cannes Lions, D&AD, and HumanKind award standards.
triggers:
  - "creative director"
  - "creative strategy"
  - "ideation"
  - "campaign concept"
  - "creative brief"
  - "SCAMPER"
  - "TRIZ"
das:
  category: design-review
  upstream: "https://github.com/smixs/creative-director-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# creative-director

> Catalogue stub — full skill: [smixs/creative-director-skill](https://github.com/smixs/creative-director-skill)

## Decision tree

Run this before any creative strategy or campaign work:

1. **Is the full skill already installed?**
   Check: `~/.claude/skills/creative-director/SKILL.md` exists AND does NOT contain a `das:` block.
   - Yes → invoke `creative-director` and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed once confirmed

## Install command

```bash
mkdir -p ~/.claude/skills/creative-director && \
  curl -fsSL \
    https://raw.githubusercontent.com/smixs/creative-director-skill/main/SKILL.md \
    -o ~/.claude/skills/creative-director/SKILL.md
```

Verify install: `head -3 ~/.claude/skills/creative-director/SKILL.md` — output must NOT contain `das:`.

## Invoke after install

- Skill name: `creative-director`
- Trigger phrases: "creative director", "creative strategy", "ideation", "campaign concept"

## What it does

Applies senior creative director thinking with 20+ proven ideation methodologies including SIT, TRIZ, Bisociation, SCAMPER, and Synectics. Evaluates ideas on a 3-axis framework (originality, relevance, craft) calibrated against Cannes Lions, D&AD, and HumanKind award standards. Useful for campaign strategy, brand positioning, and breaking out of generic creative solutions.
