---
name: callstack-agent-skills
description: |
  Official Callstack React Native skills covering best practices (profiling,
  FPS, re-renders, native modules), React Navigation, TV apps, library creation,
  GitHub Actions build artifacts, React Native upgrades, and brownfield migration.
triggers:
  - "Callstack"
  - "callstack-agent-skills"
  - "React Native profiling"
  - "Turbo Modules"
  - "brownfield migration"
  - "React Native upgrade"
  - "React Native FPS"
das:
  type: package
  category: official-suites
  upstream: "https://github.com/callstackincubator/agent-skills"
  version: latest
  install: false
---

# callstack-agent-skills

> Catalogue stub — full package: [callstackincubator/agent-skills](https://github.com/callstackincubator/agent-skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 8 skills (`react-native-best-practices`, `react-navigation`, `react-native-tv-best-practices`, `create-react-native-library`, `upgrading-react-native`, `github-actions`, `assess-react-native-migration`, `react-native-brownfield-migration`); checking the first.
   - Global: `f=~/.agents/skills/react-native-best-practices/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/react-native-best-practices/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `react-native-best-practices`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/callstack-agent-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add callstackincubator/agent-skills --skill react-native-best-practices react-navigation react-native-tv-best-practices create-react-native-library upgrading-react-native github-actions assess-react-native-migration react-native-brownfield-migration -g -y
   ```

   **Project:**
   ```bash
   npx skills add callstackincubator/agent-skills --skill react-native-best-practices react-navigation react-native-tv-best-practices create-react-native-library upgrading-react-native github-actions assess-react-native-migration react-native-brownfield-migration -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add callstackincubator/agent-skills
/plugin install building-react-native-apps@callstack-agent-skills
/plugin install testing-react-native-apps@callstack-agent-skills
/plugin install migrating-to-react-native@callstack-agent-skills
```

**Heads-up**

- **License:** MIT
- **Name collision:** `react-native-best-practices` is also written by `software-mansion-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- `react-native-best-practices` — "React Native profiling", "React Native FPS", re-renders, bundle size, memory leaks, Turbo Modules
- `react-navigation` — React Navigation stacks, tabs, drawers, headers, safe areas
- `react-native-tv-best-practices` — TV focus, remote input, playback, 10-foot UI
- `create-react-native-library` — scaffolding libraries and local native modules and views
- `upgrading-react-native` — "React Native upgrade", template diffs, dependency and native project updates
- `github-actions` — iOS simulator and Android emulator build artifacts in CI
- `assess-react-native-migration` — whether and how to migrate a native product to React Native
- `react-native-brownfield-migration` — "brownfield migration", embedding React Native into existing iOS and Android apps

## What it does

Official Callstack React Native skill suite covering production best practices: performance profiling, FPS optimization, eliminating unnecessary re-renders, and native integration. Also covers React Navigation UI patterns, TV app focus and playback, creating React Native libraries, GitHub Actions CI for downloadable simulator and emulator builds, version upgrade procedures, and brownfield migration (assessing, then embedding React Native into existing native iOS and Android apps).

## When NOT to use

- Expo projects — use `expo-skills`
- Animation-heavy and gesture-heavy work — use `software-mansion-skills`
- Figma or UI design work — use `mobile-app-design` or `work-with-design-systems`
