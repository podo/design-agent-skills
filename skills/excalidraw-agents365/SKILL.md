---
name: excalidraw-agents365
description: |
  Excalidraw diagram generation for coding agents. Turns natural-language descriptions
  of system architecture, flows, and technical documentation into .excalidraw files,
  exported to SVG through the Kroki API or to PNG/SVG with a local CLI.
triggers:
  - "excalidraw for agents"
  - "architecture diagram excalidraw"
  - "system diagram"
das:
  category: diagrams
  upstream: "https://github.com/Agents365-ai/365-skills"
  upstream_path: "plugins/excalidraw/skills/excalidraw-skill/SKILL.md"
  version: latest
  install: true
---

# excalidraw-agents365

> Catalogue stub — full skill: [Agents365-ai/365-skills](https://github.com/Agents365-ai/365-skills) (`plugins/excalidraw`)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `excalidraw`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/excalidraw/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/excalidraw/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `excalidraw`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/excalidraw-agents365 ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add Agents365-ai/365-skills --skill excalidraw -g -y
   ```

   **Project:**
   ```bash
   npx skills add Agents365-ai/365-skills --skill excalidraw -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add Agents365-ai/365-skills
/plugin install excalidraw@365-skills
```

**Heads-up**

- **Requires:** curl for SVG export through the third-party Kroki API (kroki.io), which receives your diagram content; PNG export needs excalidraw-brute-export-cli (npm) and Playwright Firefox; on macOS the skill also patches that global module
- **License:** MIT (plugins/excalidraw/LICENSE; the repository has no top-level LICENSE file)
- **Download size:** ~53 MB.
- **Name collision:** `excalidraw` is also written by `softaworks-agent-toolkit` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- Skill name: `excalidraw`
- Trigger phrases: "architecture diagram excalidraw", "system diagram"
- The installed skill is marked `disable-model-invocation: true`, so in Claude Code it does not auto-trigger: call it by name (`/excalidraw`) or ask for it explicitly.

## What it does

Generates Excalidraw diagrams tuned for coding agent workflows — system architecture, flow charts, and technical documentation — as `.excalidraw` JSON files, from a natural-language description. Export has two backends: the zero-install Kroki API via `curl` (SVG only, the diagram content is sent to kroki.io) or a local Firefox-based CLI for PNG and SVG. Optimized for clean, structured output rather than freeform sketching. Moved from the standalone `excalidraw-skill` repo into the `365-skills` collection.

## When NOT to use

- Quick ideation sketches with a hosted edit link → use `hand-drawn-diagrams`
- A render-and-verify Excalidraw workflow with a Playwright validation loop → use `excalidraw-diagram`
- Diagrams that must not leave your machine → use the local CLI export only (not the Kroki option), or another diagram skill
