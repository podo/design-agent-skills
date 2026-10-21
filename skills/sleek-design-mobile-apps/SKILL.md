---
name: sleek-design-mobile-apps
description: |
  AI-powered mobile app design integrated with the Sleek platform — design
  screens from a brief, create and edit Sleek projects, and implement the
  designs in React Native or HTML. Requires a Sleek account and API key.
triggers:
  - "Sleek design"
  - "sleekdotdesign"
  - "sleek-design-mobile-apps"
  - "Sleek Pro"
  - "Sleek platform"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/sleekdotdesign/agent-skills"
  upstream_path: "skills/design-mobile-apps/SKILL.md"
  version: latest
  install: false
---

# sleek-design-mobile-apps

> Catalogue stub — full skill: [sleekdotdesign/agent-skills](https://github.com/sleekdotdesign/agent-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   - Global: `f=~/.agents/skills/sleek-design-mobile-apps/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/sleek-design-mobile-apps/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `sleek-design-mobile-apps`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/sleek-design-mobile-apps ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add sleekdotdesign/agent-skills --skill sleek-design-mobile-apps -g -y
   ```

   **Project:**
   ```bash
   npx skills add sleekdotdesign/agent-skills --skill sleek-design-mobile-apps -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** A Sleek account (sleek.design). Free accounts only get one-time trial credits (about one design run); sustained use needs a paid plan, see the upstream README for current pricing; SLEEK_API_KEY environment variable, created at sleek.design/agents/setup. The skill calls the Sleek REST API, so designs and briefs are sent to Sleek (a third party)
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `sleek-design-mobile-apps`
- Triggers: "Sleek design", "sleekdotdesign", "Sleek Pro"
- Needs the `SLEEK_API_KEY` environment variable set before use (see the heads-up above)

## What it does

Natural-language interface to the Sleek design platform for mobile app design, driven through Sleek's REST API. The agent creates Sleek projects, designs screens from a brief in a create, chat, screenshot loop, authors or seeds a style direction, and then implements the resulting designs in React Native or HTML with acceptance checks against screenshots. The skill ships separate guides for designing, implementing, styling and the API endpoints.

## When NOT to use

- Without a Sleek account and API key — use `mobile-app-design` or `mobile-app-ui-design` instead
- General mobile design guidance not requiring the Sleek platform
- Figma-based workflows — use `work-with-design-systems` or `claude2figma`
