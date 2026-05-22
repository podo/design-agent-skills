# design-agent-skills

A shareable catalogue of agent skill stubs. Clone once, link to every AI coding tool you use.

## Install

```bash
git clone https://github.com/<you>/design-agent-skills
cd design-agent-skills
./install.sh
```

Auto-detects Claude Code, Cursor, Codex, OpenCode, and Droid. Symlinks each stub into their skills directories — one source, all agents.

## Commands

```bash
./install.sh              # link all stubs to detected agents
./install.sh status       # show stub / upgraded / BROKEN per skill per agent
./install.sh update       # pick up new stubs added to the catalogue (after git pull)
./install.sh fix          # remove broken symlinks
```

### Status output

```
skill                   claude      cursor      codex
──────────────────────  ──────────  ──────────  ──────────
design-catalogue        stub        stub        stub
taste-skill             upgraded    stub        -
```

- `stub` — pointer installed, upstream skill not yet fetched
- `upgraded` — upstream skill installed, stub replaced
- `BROKEN` — symlink target missing, run `./install.sh fix`
- `-` — not installed for this agent

### How stubs become upgraded

Each stub contains a `curl` install command. When an agent runs it, the upstream
`SKILL.md` overwrites the stub file **through the symlink** at the same path.
Because all agents share the same symlink target, one install upgrades all of them.

```bash
# example from skills/taste-skill/SKILL.md:
mkdir -p ~/.claude/skills/taste-skill && \
  curl -fsSL \
    https://raw.githubusercontent.com/Leonxlnx/taste-skill/main/skills/taste-skill/SKILL.md \
    -o ~/.claude/skills/taste-skill/SKILL.md
```

After this runs, `./install.sh status` shows `upgraded` for every agent.

## How it works

Skills live in `skills/<name>/SKILL.md`. Two types:

| Type | Description |
|------|-------------|
| **stub** | Pointer to an upstream skill. Has `das:` frontmatter. Agent reads it to discover and install the full skill. |
| **native** | Full skill that lives in this repo. No install step needed. |

## Stub anatomy

```yaml
---
name: <skill-name>
description: |
  One-paragraph description for agent discovery.
triggers:
  - "phrase that activates this skill"
das:
  type: <type>                # skill | package | platform
  category: <category>        # design-systems, testing, devops, …
  upstream: <github-url>
  upstream_path: <path>       # skill type only
  version: latest
  install: true               # skill type only
---
```

### Stub types

| Type | `install.sh` behaviour | Example |
|------|------------------------|---------|
| `skill` | Symlinks SKILL.md; `update` re-fetches from upstream | taste-skill |
| `package` | Skips symlink; `update` prints per-agent install commands | ui-craft |
| `platform` | Same as package; SKILL.md has template vars — never curl directly | impeccable |

### Body sections

**When to use** · **How to install** · **How to invoke after install** · **What it does**

## Adding a stub

1. `mkdir skills/<name> && touch skills/<name>/SKILL.md`
2. Fill frontmatter + four body sections
3. Add a row to the table below
4. Open a PR — no review of upstream content required

## Skills

| Skill | Type | Category | Upstream |
|-------|------|----------|----------|
| [design-catalogue](skills/design-catalogue/SKILL.md) | native | meta | — |
| [taste-skill](skills/taste-skill/SKILL.md) | stub | design-systems | [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) |
| [impeccable](skills/impeccable/SKILL.md) | platform | design-systems | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) |
