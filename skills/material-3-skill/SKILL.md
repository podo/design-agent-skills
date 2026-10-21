---
name: material-3-skill
description: |
  Implements Google Material Design 3 (Material You) — adaptive color, tonal
  surfaces, dynamic theming, spring-based motion, and the component library for
  Jetpack Compose (primary), Flutter (secondary) and limited web. Includes token
  system, layout scaffolds, responsive window size classes, accessibility, and a
  MD3 compliance audit.
triggers:
  - "Material Design 3"
  - "Material You"
  - "Jetpack Compose"
  - "MaterialTheme"
  - "material-3-skill"
  - "MD3 compliance"
  - "dynamic color"
  - "tonal surface"
das:
  type: skill
  category: visual-components
  upstream: "https://github.com/hamen/material-3-skill"
  upstream_path: "skills/material-3/SKILL.md"
  version: latest
---

# material-3-skill

> Catalogue stub — full skill: [hamen/material-3-skill](https://github.com/hamen/material-3-skill)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   Upstream names this skill `material-3`, so it installs next to this pointer (the pointer is not replaced).
   - Global: `f=~/.agents/skills/material-3/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/material-3/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `material-3`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/material-3-skill ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add hamen/material-3-skill --skill material-3 -g -y
   ```

   **Project:**
   ```bash
   npx skills add hamen/material-3-skill --skill material-3 -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add hamen/material-3-skill
/plugin install material-3@material-3-skill
```

**Heads-up**

- **License:** MIT
<!-- das:install:end -->

## Invoke after install

- Skill name: `material-3`
- Trigger phrases: "Material Design 3", "Material You", "MaterialTheme", "MD3 compliance", "dynamic color"

## What it does

Deep expertise in Google's Material Design 3 system. Covers:

- **Dynamic color** — `ColorScheme.fromSeed`, tonal palette generation, light/dark scheme derivation
- **Component library** — the MD3 components in Jetpack Compose with correct token bindings
- **Token system** — color roles, typography scale, shape scale, elevation/tonal elevation
- **Layout** — Scaffold, NavigationBar vs NavigationRail vs NavigationDrawer by window size class
- **Motion** — spring-based animations, shared element transitions, container transforms
- **Compliance audit** — checklist scoring MD3 conformance
- **Flutter** — secondary coverage with `ThemeData` + `useMaterial3: true`
- **Web** — a limited path through `@material/web`, which upstream notes is in maintenance mode

The skill installs together with its reference files (color system, component catalog, layout, navigation, theming, typography and shape), which it points to throughout.

## When NOT to use

- iOS / SwiftUI — use `apple-hig-skills` or `liquid-glass-skill`
- Cross-platform HIG patterns — use `platform-design-skills`
- Android design without Compose (XML Views) — this skill is Compose-first
