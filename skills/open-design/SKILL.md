---
name: open-design
description: |
  Open-source, local-first alternative to Claude Design. A daemon plus web UI or desktop
  app that runs design skills (web prototypes, SaaS landing pages, dashboards, mobile
  onboarding, decks, email, social carousels, posters, motion frames, sprite animation)
  and brand-grade design systems on top of your own coding-agent CLI or API key.
triggers:
  - "open-design"
  - "open design platform"
  - "nexu-io platform"
  - "local Claude Design alternative"
  - "open-source Claude Design"
das:
  category: creative-3d
  upstream: "https://github.com/nexu-io/open-design"
  version: latest
  install: false
---

# open-design

> Catalogue stub — full platform: [nexu-io/open-design](https://github.com/nexu-io/open-design)

<!-- das:install:start — generated from stub.yaml by `npm run generate`; edit stub.yaml, not this block -->
## Install

Open Design is an application (a local daemon with a web UI, an optional desktop app and an MCP server), not a skill the skills CLI can install. Pick one route. Desktop app (macOS Apple Silicon or Intel, Windows x64): download it from open-design.ai or github.com/nexu-io/open-design/releases; no Node, pnpm or clone needed. From source (the only route on Linux; needs Node ~24 and pnpm 10.33.x): `git clone https://github.com/nexu-io/open-design.git && cd open-design && corepack enable && pnpm install && pnpm tools-dev run web`, then open the URL it prints (the repository is about 3.4 GB, so add `--depth 1` to the clone to shorten the download). Inside your own coding agent: run `od mcp install claude` (use codex, cursor, opencode and so on for other agents) to connect it to Open Design over MCP; on a macOS desktop install `od` can resolve to /usr/bin/od (octal dump), so copy the snippet from Settings, MCP server in the app instead.

**Heads-up**

- **Requires:** a coding-agent CLI on your PATH (Claude Code, Codex, Cursor Agent and others) or a BYOK model API key set in the app's Settings; Node ~24 and pnpm 10.33.x, only for the from-source route
- **License:** Apache-2.0
<!-- das:install:end -->

## Invoke after install

Once an agent is connected over MCP, ask it in plain language, for example "Use open-design to generate a landing page with the Linear design system". In the desktop or web app, type a brief in the entry view, choose a runtime, a design template and a design system, and press Send. The daemon prints its local URL when it starts (from source, development ports are allocated dynamically).

## What it does

A local-first design product. It detects the coding-agent CLIs on your `PATH` (or uses a BYOK API key), loads a large catalogue of functional design skills, rendering templates and design systems, and streams the generated files into a sandboxed preview. Output covers web prototypes, SaaS landing pages, dashboards, mobile onboarding flows, decks, email templates, social carousels, posters, motion frames and sprite animation. Self-hosted, with no vendor lock-in, and an MCP server so other agents can read your Open Design projects.

## When NOT to use

- Single-skill tasks where the platform overhead isn't warranted (install the individual skill directly, for example `design-brief` for briefs)
- Cloud-only environments (CI, serverless) or machines where you cannot run a persistent local process
- Linux desktops expecting a prebuilt app (there is none yet; the from-source route is the only one)
