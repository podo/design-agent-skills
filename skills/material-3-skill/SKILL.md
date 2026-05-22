---
name: material-3-skill
description: |
  Implements Google Material Design 3 (Material You) — adaptive color, tonal
  surfaces, dynamic theming, spring-based motion, and 30+ components for
  Jetpack Compose (primary) and Flutter (secondary). Includes token system,
  layout scaffolds, responsive window size classes, accessibility, and a
  10-category MD3 compliance audit.
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
  type: package
  category: visual-components
  upstream: "https://github.com/hamen/material-3-skill"
  version: latest
---

# material-3-skill

> Catalogue stub — full skill: [hamen/material-3-skill](https://github.com/hamen/material-3-skill)

## Install the full skill

Clone or copy the skill into your agents directory:

**Global:**
```bash
mkdir -p ~/.agents/skills/material-3-skill
curl -fsSL https://raw.githubusercontent.com/hamen/material-3-skill/master/skills/material-3/SKILL.md \
  -o ~/.agents/skills/material-3-skill/SKILL.md
```

**Project:**
```bash
mkdir -p .agents/skills/material-3-skill
curl -fsSL https://raw.githubusercontent.com/hamen/material-3-skill/master/skills/material-3/SKILL.md \
  -o .agents/skills/material-3-skill/SKILL.md
```

## What it does

Deep expertise in Google's Material Design 3 system. Covers:

- **Dynamic color** — `ColorScheme.fromSeed`, tonal palette generation, light/dark scheme derivation
- **Component library** — 30+ MD3 components in Jetpack Compose with correct token bindings
- **Token system** — color roles, typography scale, shape scale, elevation/tonal elevation
- **Layout** — Scaffold, NavigationBar vs NavigationRail vs NavigationDrawer by window size class
- **Motion** — spring-based animations, shared element transitions, container transforms
- **Compliance audit** — 10-category checklist scoring MD3 conformance
- **Flutter** — secondary coverage with `ThemeData` + `useMaterial3: true`

## When NOT to use

- iOS / SwiftUI — use `apple-hig-skills` or `liquid-glass-skill`
- Cross-platform HIG patterns — use `platform-design-skills`
- Android design without Compose (XML Views) — this skill is Compose-first
