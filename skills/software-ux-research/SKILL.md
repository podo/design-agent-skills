---
name: software-ux-research
description: |
  De-risk product decisions with UX research: method choice, study design, findings synthesis
  and research operations (interviews, usability tests, surveys, research repository and consent
  practice), backed by a library of reference guides and templates.
triggers:
  - "software UX research"
  - "UX research ops"
  - "usability test plan"
  - "survey design methodology"
  - "research repository setup"
das:
  type: package
  category: design-research
  upstream: "https://github.com/gabrielmoreira/agent-skills-mirror"
  upstream_path: "mirrors/repos/vasilyu1983@AI-Agents-public/skills/universal/software-ux-research/SKILL.md"
  version: latest
---

# software-ux-research

> Catalogue stub — full skill: mirrored in [gabrielmoreira/agent-skills-mirror](https://github.com/gabrielmoreira/agent-skills-mirror/tree/main/mirrors/repos/vasilyu1983@AI-Agents-public/skills/universal/software-ux-research) (the original repository, vasilyu1983/AI-Agents-public, is no longer on GitHub)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/software-ux-research/SKILL.md; [ -e "$f" ] && ! grep -qs "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/software-ux-research/SKILL.md; [ -e "$f" ] && ! grep -qs "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → invoke it and proceed
   - `pointer` → go to step 2

2. **Install** (the skills CLI cannot install this one):

   The original repository (vasilyu1983/AI-Agents-public) is no longer on GitHub (404), so this skill comes from gabrielmoreira/agent-skills-mirror, an automated mirror of agent-skill repositories. That repo is about 1.4 GB, so only this one skill directory is sparse-checked out (about 75 MB of git metadata, roughly 12 s) and installed from the local path; the clone can be deleted afterwards.

   If an earlier attempt left `~/.cache/skill-mirrors/agent-skills-mirror` behind, delete it first (`rm -rf ~/.cache/skill-mirrors/agent-skills-mirror`): `git clone` refuses a non-empty directory.

   ```bash
   [ -e ~/.agents/skills/software-ux-research ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   git clone --depth=1 --filter=blob:none --sparse https://github.com/gabrielmoreira/agent-skills-mirror.git ~/.cache/skill-mirrors/agent-skills-mirror
   git -C ~/.cache/skill-mirrors/agent-skills-mirror sparse-checkout set mirrors/repos/vasilyu1983@AI-Agents-public/skills/universal/software-ux-research
   npx skills add ~/.cache/skill-mirrors/agent-skills-mirror/mirrors/repos/vasilyu1983@AI-Agents-public/skills/universal/software-ux-research -g -y
   ```

   **Project:**
   ```bash
   git clone --depth=1 --filter=blob:none --sparse https://github.com/gabrielmoreira/agent-skills-mirror.git ~/.cache/skill-mirrors/agent-skills-mirror
   git -C ~/.cache/skill-mirrors/agent-skills-mirror sparse-checkout set mirrors/repos/vasilyu1983@AI-Agents-public/skills/universal/software-ux-research
   npx skills add ~/.cache/skill-mirrors/agent-skills-mirror/mirrors/repos/vasilyu1983@AI-Agents-public/skills/universal/software-ux-research -y
   ```

**Heads-up**

- **License:** unknown for the skill itself (source repo gone); the mirror repository is MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `software-ux-research`
- Trigger phrases: "software UX research", "UX research ops", "usability test plan", "survey design methodology", "research repository setup"

## What it does

Owns research method choice, study design, findings synthesis and research operations, and does not own UI implementation. A method chooser maps the question (discovery and JTBD, usability evaluation, quantification, causal validation, research ops and repository design, accessibility and low-digital-literacy research) to a default method and an output type, with a verification checklist and a list of known traps (for example consent, data handling and sending participant recordings to AI vendors). It ships reference guides for survey design, usability testing, research repository management, UX metrics, customer journey mapping, competitive UX analysis, remote research, information-architecture testing and more, plus a research-plan template and audit, journey, metrics and testing assets.

The copy is the mirror's current version of the skill; the earlier pointer described an older revision.

## When NOT to use

- Lightweight single-method help — may be heavier than needed
- AI-moderated or synthetic interviews — use `user-research-cookiy`
- Controlled experiments or review mining — upstream scopes the skill to exclude them
