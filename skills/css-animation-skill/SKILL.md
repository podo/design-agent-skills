---
name: css-animation-skill
description: |
  Generates self-contained HTML/CSS animations of app features for walkthroughs,
  demos, and onboarding. Four-phase workflow: researches your live app's design
  language in Chrome, interviews you about what to animate, produces a brief and an
  HTML/CSS animation file, then iterates until approved. Requires Claude-in-Chrome MCP.
triggers:
  - "CSS animation"
  - "custom animation"
  - "animation from live app"
  - "css-animation-skill"
das:
  type: skill
  category: motion-animation
  upstream: "https://github.com/neonwatty/css-animation-skill"
  upstream_path: "SKILL.md"
  version: latest
  install: true
---

# css-animation-skill

> Catalogue stub — full skill: [neonwatty/css-animation-skill](https://github.com/neonwatty/css-animation-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `css-animation`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/css-animation/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/css-animation/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `css-animation`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/css-animation-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add neonwatty/css-animation-skill --skill css-animation -g -y
   ```

   **Project:**
   ```bash
   npx skills add neonwatty/css-animation-skill --skill css-animation -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Heads-up**

- **Requires:** Claude Code with the Claude-in-Chrome MCP tools; A target app reachable in the browser
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `css-animation`
- Trigger phrases: "CSS animation", "custom animation", "animation from live app", "css-animation-skill"

## What it does

Runs a four-phase animation creation workflow: (1) researches your live app using Claude-in-Chrome MCP to extract the existing design language (colours, fonts, spacing) and layout geometry; (2) interviews you about what feature to animate, the style (feature demo or multi-screen carousel) and the key payoff moment; (3) produces an animation brief and a self-contained HTML/CSS output file with the custom animation; (4) runs a freeze-inspect-feedback review loop until the result is approved. Produces bespoke animations matched to your app's visual identity rather than off-the-shelf library classes.

## When NOT to use

- Library-based animations where custom keyframes aren't needed (use `animate-css-skill` or `framer-motion-skills`)
- Video or Lottie output (use `wiggle-claude-skill`)
