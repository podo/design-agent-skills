---
name: software-mansion-skills
description: |
  Official Software Mansion skills for React Native and Expo: production patterns for animations
  (Reanimated), gestures, SVG, on-device AI, rich text, multithreading, audio and JSI, plus skills
  for RNRepo prebuilt libraries, Radon IDE debugging, TypeGPU, Meta Quest, Pulsar haptics, Fishjam
  streaming, Media over QUIC and Detour deep linking. From the team behind Reanimated and Gesture Handler.
triggers:
  - "Software Mansion"
  - "Reanimated"
  - "Gesture Handler"
  - "React Native animations"
  - "software-mansion-skills"
  - "React Native gestures"
  - "React Native SVG"
das:
  type: package
  category: official-suites
  upstream: "https://github.com/software-mansion-labs/skills"
  version: latest
  install: false
---

# software-mansion-skills

> Catalogue stub — full package: [software-mansion-labs/skills](https://github.com/software-mansion-labs/skills)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Decision tree

1. **Is the full skill already installed?**
   This package installs 11 skills (`react-native-best-practices`, `rnrepo`, `radon-mcp`, `typegpu`, `expo-horizon`, `pulsar-haptics`, `fishjam`, `react-native-moq`, `moq-kit`, `detour-onboarding`, `migrate-to-detour`); checking the first.
   - Global: `f=~/.agents/skills/react-native-best-practices/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - Project: `f=.agents/skills/react-native-best-practices/SKILL.md; [ -f "$f" ] && ! grep -q "^das:" "$f" && echo "installed" || echo "pointer"`
   - `installed` → the skill is installed as `react-native-best-practices`, invoke it and proceed
   - `pointer` → go to step 2

2. **Detect scope, then install:**

   ```bash
   [ -e ~/.agents/skills/software-mansion-skills ] && echo "global" || echo "project"
   ```

   **Global:**
   ```bash
   npx skills add software-mansion-labs/skills --skill react-native-best-practices rnrepo radon-mcp typegpu expo-horizon pulsar-haptics fishjam react-native-moq moq-kit detour-onboarding migrate-to-detour -g -y
   ```

   **Project:**
   ```bash
   npx skills add software-mansion-labs/skills --skill react-native-best-practices rnrepo radon-mcp typegpu expo-horizon pulsar-haptics fishjam react-native-moq moq-kit detour-onboarding migrate-to-detour -y
   ```
   > **Claude Code:** send a command as a chat message starting with `!` to run it without leaving the conversation.

**Claude Code plugin route:**

```
/plugin marketplace add software-mansion-labs/skills
/plugin install skills@swmansion
```

**Heads-up**

- **Requires:** radon-mcp needs Radon IDE and its MCP tools; fishjam, detour-onboarding and migrate-to-detour target Software Mansion hosted products (a Fishjam instance, the Detour dashboard); moq-kit and react-native-moq need a MoQ relay
- **License:** no LICENSE file in the repo (the plugin manifest says MIT)
- **Name collision:** `react-native-best-practices` is also written by `callstack-agent-skills` (its install or its catalogue pointer); installing both overwrites the earlier one.
<!-- das:install:end -->

## Invoke after install

- `react-native-best-practices` — "Reanimated", "Gesture Handler", "React Native animations", "React Native gestures", "React Native SVG"
- `rnrepo` — slow native builds, prebuilt React Native library artifacts
- `radon-mcp` — debugging a running app through Radon IDE
- `typegpu` — type-safe WebGPU in TypeScript
- `expo-horizon` — Meta Quest support for Expo apps
- `pulsar-haptics` — haptic feedback with Software Mansion Pulsar
- `fishjam` — Fishjam WebRTC video, audio and livestreaming
- `react-native-moq` and `moq-kit` — Media over QUIC live streaming (React Native, and native Swift/Kotlin)
- `detour-onboarding` and `migrate-to-detour` — Detour deferred deep linking, and migrating to it from Branch or AppsFlyer

## What it does

The official Software Mansion skill collection for React Native and Expo. The main skill, `react-native-best-practices`, gives production patterns for apps on the New Architecture: Reanimated animations, Gesture Handler, React Native SVG, on-device AI with ExecuTorch, rich text, worklet multithreading, the Audio API and JSI. The others cover specific products from the same team: RNRepo for faster native builds, Radon IDE's MCP tools, TypeGPU, Expo Horizon for Meta Quest, Pulsar haptics, Fishjam, Media over QUIC and Detour. Only the skills that match your project's keywords trigger. Install a subset with `--skill` if you do not want all of them in context.

## When NOT to use

- Non-React Native projects (web, native iOS/Android without RN), except the product skills for TypeGPU, Pulsar, Fishjam, moq-kit and Detour
- Expo-managed workflow projects — use `expo-skills`
- General React Native best practices without animation/gesture focus — use `callstack-agent-skills`
