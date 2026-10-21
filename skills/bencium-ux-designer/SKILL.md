---
name: bencium-ux-designer
description: |
  Develops an original visual language and turns the human-chosen direction into
  production artifacts. Starts with ten independent, typography-led HTML directions,
  asks the human to judge them visually and commit to one, then builds the brand, web,
  or product system from it. Aimed at escaping generic AI and Big Tech aesthetics.
triggers:
  - "innovative UX"
  - "bencium"
  - "distinctive UI"
  - "production frontend"
das:
  type: skill
  category: interaction-polish
  upstream: "https://github.com/bencium/bencium-marketplace"
  upstream_path: "bencium-innovative-ux-designer/skills/bencium-innovative-ux-designer/SKILL.md"
  version: latest
  install: true
---

# bencium-ux-designer

> Catalogue stub — full skill: [bencium/bencium-marketplace](https://github.com/bencium/bencium-marketplace)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `bencium-innovative-ux-designer`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/bencium-innovative-ux-designer/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/bencium-innovative-ux-designer/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `bencium-innovative-ux-designer`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/bencium-ux-designer ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add bencium/bencium-marketplace --skill bencium-innovative-ux-designer -g -y
   ```

   **Project:**
   ```bash
   npx skills add bencium/bencium-marketplace --skill bencium-innovative-ux-designer -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add bencium/bencium-marketplace
/plugin install bencium-innovative-ux-designer
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `bencium-innovative-ux-designer`
- Trigger phrases: "innovative UX", "bencium", "distinctive UI", "production frontend"

## What it does

A creative-direction workflow rather than a component generator. From a one-line purpose statement it writes ten isolated, typography-led HTML design directions (type, color and space only, no imagery, shapes or icons), shows them to you before explaining them, and waits for an explicit "lock this" before moving on. After the lock it builds production artifacts and a style guide in that language. Its rules are strict: one author throughout, no contemporary visual references during invention, no SVG, and the human does the first visual judgement.

## When NOT to use

- Routine UI fixes, small components or applying an existing design system (the upstream skill itself says not to use it for these)
- A quick distinctive-looking page from a named aesthetic (use `frontend-design` or `distinctive-frontend`)
- Polishing or critiquing an existing interface (use `impeccable`)
