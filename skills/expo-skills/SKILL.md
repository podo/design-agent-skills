---
name: expo-skills
description: |
  Official Expo skills for building, deploying, upgrading, and debugging Expo
  apps, from the Expo team. Covers Expo Router, native UI and animation,
  data fetching, native modules, SDK upgrades, and Expo Application Services
  (EAS): builds and store submission, hosting, workflows, and OTA updates.
triggers:
  - "Expo"
  - "EAS"
  - "expo-skills"
  - "Expo Router"
  - "Expo SDK"
  - "EAS Build"
  - "EAS Submit"
das:
  type: package
  category: official-suites
  upstream: "https://github.com/expo/skills"
  version: latest
  install: false
---

# expo-skills

> Catalogue stub — full package: [expo/skills](https://github.com/expo/skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 25 skills (`expo-overview`, `expo-project-structure`, `expo-router`, `expo-animation`, `expo-native-ui`, `expo-design-system`, `expo-ui`, `expo-data-fetching`, `expo-dom`, `expo-web-to-native`, `expo-module`, `expo-brownfield`, `expo-dev-client`, `expo-examples`, `expo-app-clip`, `expo-upgrade`, `expo-skill-feedback`, `eas-app-stores`, `eas-hosting`, `eas-workflows`, `eas-observe`, `eas-update`, `eas-update-insights`, `eas-simulator`, `expo-migrate-module`); checking the first.
   - Global: `f=~/.agents/skills/expo-overview/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/expo-overview/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `expo-overview`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/expo-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add expo/skills --skill expo-overview expo-project-structure expo-router expo-animation expo-native-ui expo-design-system expo-ui expo-data-fetching expo-dom expo-web-to-native expo-module expo-brownfield expo-dev-client expo-examples expo-app-clip expo-upgrade expo-skill-feedback eas-app-stores eas-hosting eas-workflows eas-observe eas-update eas-update-insights eas-simulator expo-migrate-module -g -y
   ```

   **Project:**
   ```bash
   npx skills add expo/skills --skill expo-overview expo-project-structure expo-router expo-animation expo-native-ui expo-design-system expo-ui expo-data-fetching expo-dom expo-web-to-native expo-module expo-brownfield expo-dev-client expo-examples expo-app-clip expo-upgrade expo-skill-feedback eas-app-stores eas-hosting eas-workflows eas-observe eas-update eas-update-insights eas-simulator expo-migrate-module -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin install expo@claude-plugins-official
```

**Heads-up**

- **Requires:** Expo MCP server (recommended for live docs and EAS access; the Claude Code plugin wires it up, other agents need docs.expo.dev/eas/ai/mcp); Expo Application Services (EAS) account for the eas-* skills
- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Start with `expo-overview`: it is the router for any Expo or EAS request that does not name a specific tool.
- Framework skills: `expo-project-structure`, `expo-router`, `expo-animation`, `expo-native-ui`, `expo-design-system`, `expo-ui`, `expo-data-fetching`, `expo-dom`, `expo-web-to-native`, `expo-module`, `expo-brownfield`, `expo-dev-client`, `expo-examples`, `expo-app-clip`, `expo-upgrade`
- Services skills (paid EAS features): `eas-app-stores`, `eas-hosting`, `eas-workflows`, `eas-observe`, `eas-update`, `eas-update-insights`, `eas-simulator`
- Also installed: `expo-skill-feedback` (feedback submission and opt-in usage telemetry, off by default) and `expo-migrate-module` (experimental: Swift Expo modules from the 1.0 definition DSL to the 2.0 macro API)
- Trigger phrases: "Expo", "EAS", "Expo Router", "Expo SDK", "EAS Build", "EAS Submit"

## What it does

The official Expo skill suite, written by the Expo team and updated with the SDK. Framework skills teach project structure, file-based routing, native-feeling UI, animation, data fetching, DOM components, native modules, brownfield integration, development clients, and SDK upgrades. Services skills cover EAS: building and submitting to the stores, EAS Hosting, workflows and CI, EAS Update (OTA), and observability. Each skill's description tells the agent when to load it, so only the relevant one is used per task. The Expo docs, Expo CLI, and EAS CLI stay the source of truth.

The install pulls every skill listed above, so many descriptions land in each project; run the install command with a shorter `--skill` list to keep only the ones you need. The upstream repo also ships `expo-skill-eval`, a maintainer eval harness, which this pointer leaves out. Claude Code users can use the official plugin route instead, which also bundles the Expo MCP configuration.

## When NOT to use

- Bare React Native without Expo → use `callstack-agent-skills` or `software-mansion-skills`
- Animation and gesture-heavy work in an Expo project → combine with `software-mansion-skills`
- Mobile UI design work → use `mobile-app-design` or `mobile-app-ui-design`
