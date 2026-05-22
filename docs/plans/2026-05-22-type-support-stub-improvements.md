# Type Support & Stub Prompt Improvements Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add `type` field to `stub.yaml` so `install.sh` handles skill vs. package installs correctly, and rewrite the stub SKILL.md body to be a proper agent-executable prompt rather than human documentation.

**Architecture:** Two parallel concerns. (1) `stub.yaml` gains a `type` field (`skill` | `package` | `platform`) that `install.sh` branches on — type:skill symlinks as before, type:package/platform prints per-agent install commands instead. (2) Stub SKILL.md body is rewritten with explicit agent decision logic: check if installed → if yes proceed, if no → check shell access → if yes run install, if no show command to user. Both changes are additive; existing behaviour for type:skill is unchanged.

**Tech Stack:** bash 3.2, YAML frontmatter, raw GitHub URLs, `curl`, `grep`, `sed`

---

## Task 1: Add `type` to stub.yaml schema — taste-skill

**Files:**
- Modify: `skills/taste-skill/stub.yaml`

**Step 1: Add `type: skill` to existing stub.yaml**

```yaml
type: skill
upstream: https://github.com/Leonxlnx/taste-skill
upstream_path: skills/taste-skill/SKILL.md
version: latest
```

**Step 2: Verify**

```bash
grep "^type:" skills/taste-skill/stub.yaml
```
Expected: `type: skill`

**Step 3: Commit**

```bash
git add skills/taste-skill/stub.yaml
git commit -m "feat: add type field to taste-skill stub.yaml"
```

---

## Task 2: Update `install.sh` to read and branch on `type`

**Files:**
- Modify: `install.sh` — `stub_yaml_value`, `cmd_update`, `cmd_install`

**Step 1: Confirm `stub_yaml_value` already parses top-level keys**

```bash
bash -c "source install.sh 2>/dev/null; stub_yaml_value type skills/taste-skill/stub.yaml"
```
Expected: `skill`

If it doesn't work (function not exported): extract the grep/sed logic inline in the commands below.

**Step 2: Add `stub_type()` helper to install.sh after `stub_yaml_value`**

```bash
stub_type() {
  local yaml="$1/stub.yaml"
  [ -f "$yaml" ] && stub_yaml_value type "$yaml" || echo "skill"
}
```

Default to `skill` when no `type` field — keeps backward compat.

**Step 3: Update `cmd_install` — skip symlinking for package/platform types**

Inside the skill loop in `cmd_install`, replace the `ln -s` block with:

```bash
local stype
stype="$(stub_type "$SKILLS_SRC/$skill")"
if [ "$stype" = "skill" ]; then
  if [ -L "$target" ] || [ -d "$target" ]; then
    skipped=$((skipped + 1))
  else
    ln -s "$SKILLS_SRC/$skill" "$target"
    linked=$((linked + 1))
  fi
else
  # package/platform — not symlinked, shown in status only
  skipped=$((skipped + 1))
fi
```

**Step 4: Update `cmd_update` — for package/platform, run or print install_cmd**

After the `is_stub` check block, add a branch for package types:

```bash
local stype
stype="$(stub_type "$src")"
if [ "$stype" = "package" ] || [ "$stype" = "platform" ]; then
  local default_cmd
  default_cmd="$(stub_yaml_value install_default "$yaml" 2>/dev/null || true)"
  if [ -n "$default_cmd" ]; then
    printf "  package  %-18s  run: %s\n" "$skill" "$default_cmd"
  fi
  continue
fi
```

**Step 5: Update `skill_state` — add `package` state for non-skill types**

```bash
skill_state() {
  local target="$1" src="$2"
  local stype
  stype="$(stub_type "$src")"
  if [ "$stype" = "package" ] || [ "$stype" = "platform" ]; then
    echo "package"
    return
  fi
  # existing logic unchanged below
  ...
}
```

**Step 6: Verify install and status still work for taste-skill**

```bash
bash install.sh status
```
Expected: taste-skill shows `stub` across all agents (unchanged).

**Step 7: Commit**

```bash
git add install.sh
git commit -m "feat: branch install.sh on stub type — skip symlink for package/platform"
```

---

## Task 3: Add impeccable as a type:platform example stub

**Files:**
- Create: `skills/impeccable/SKILL.md`
- Create: `skills/impeccable/stub.yaml`

**Step 1: Create stub.yaml**

```yaml
type: platform
upstream: https://github.com/pbakaus/impeccable
version: latest
install_default: "npx skills add impeccable"
install_claude: "claude plugin install pbakaus/impeccable"
install_npm: "npm install -g impeccable"
note: "SKILL.md contains unresolved template vars — do not curl directly"
```

**Step 2: Create SKILL.md — see Task 4 for the improved stub prompt pattern**

Apply the improved prompt structure from Task 4. Impeccable-specific content:

- **What it does:** 1 skill + 23 slash commands (`/impeccable polish`, `/impeccable audit`, etc.), anti-pattern detector CLI, runtime node scripts. Requires npm package.
- **Why not curl:** SKILL.md has `{{scripts_path}}` template vars resolved at install time — raw curl produces a broken skill.
- **Per-agent install table** (see Task 4 format).

**Step 3: Update README skills table**

Add row:
```
| [impeccable](skills/impeccable/SKILL.md) | platform | design-systems | [pbakaus/impeccable](https://github.com/pbakaus/impeccable) |
```

**Step 4: Verify status shows `package` for impeccable**

```bash
bash install.sh status
```
Expected: impeccable row shows `package` across all agents.

**Step 5: Commit**

```bash
git add skills/impeccable/ README.md
git commit -m "feat: add impeccable platform stub"
```

---

## Task 4: Rewrite stub SKILL.md body — improved agent prompt

**Files:**
- Modify: `skills/taste-skill/SKILL.md` (reference implementation)
- Modify: `skills/design-catalogue/SKILL.md` (update routing guide to mention types)

**Problem with current body:** Written as human documentation ("here is how to install"). An agent reading it must infer what to do. The new version is written as explicit decision logic the agent executes.

**New body structure for type:skill stubs:**

```markdown
# <skill-name>

> Catalogue stub — full skill: [upstream-name](upstream-url)

## Decision tree

Run this before doing any design work:

1. **Is the full skill already installed?**
   Check: does `~/.claude/skills/<skill-name>/SKILL.md` exist AND lack a `das:` block?
   - Yes → invoke the skill by name and proceed
   - No → go to step 2

2. **Do you have shell access?**
   - Yes → run the install command below, then invoke the skill
   - No → show the user the install command, ask them to run it, then proceed

## Install command

```bash
mkdir -p ~/.claude/skills/<skill-name> && \
  curl -fsSL <raw-github-url> \
  -o ~/.claude/skills/<skill-name>/SKILL.md
```

Verify: `head -3 ~/.claude/skills/<skill-name>/SKILL.md` — should NOT contain `das:`.

## Invoke after install

Skill name: `<skill-name>` or `<upstream-name>`
Trigger phrases: <list from frontmatter>

## What it does

<concise capability summary — enough for the agent to confirm this is the right skill>

<capability table or bullet list>

## When NOT to use

<explicit negative cases>
```

**New body structure for type:package and type:platform stubs:**

```markdown
# <skill-name>

> Catalogue stub — [upstream-name](upstream-url) | type: package

## Decision tree

1. **Is this package installed for your agent?**
   Check the install table below for your agent.
   - Yes → invoke by skill name and proceed
   - No → go to step 2

2. **Install via your agent's preferred method:**

| Agent | Install command |
|-------|----------------|
| claude | `claude plugin install <repo>` |
| cursor | `npx skills add <name>` |
| codex | `npx skills add <name>` |
| opencode | `npx skills add <name>` |
| all agents | `npx skills add <name>` |

> Do NOT curl SKILL.md directly — this package uses template variables
> resolved at install time. Raw curl produces a broken skill.

## What it does

<summary>

## When NOT to use

<negative cases>
```

**Step 1: Rewrite taste-skill SKILL.md using new type:skill structure**

Keep all existing content — just restructure into the decision-tree format above.

**Step 2: Update design-catalogue routing guide**

Add a note that `package` and `platform` type stubs show per-agent install tables instead of a single install command.

**Step 3: Verify**

Read the updated SKILL.md and confirm:
- Decision tree is the first thing after the title
- Install command block is present
- "When NOT to use" section is explicit

**Step 4: Commit**

```bash
git add skills/taste-skill/SKILL.md skills/design-catalogue/SKILL.md
git commit -m "feat: rewrite stub body as agent decision-tree prompt"
```

---

## Task 5: Update README to document types

**Files:**
- Modify: `README.md` — stub anatomy section

**Step 1: Add `type` to the frontmatter example**

```yaml
das:
  category: design-systems
  upstream: <github-url>
  upstream_path: <path>       # skill type only
  version: latest
  install: true               # skill type only
```

**Step 2: Add type table after frontmatter block**

```markdown
### Stub types

| Type | Install behaviour | Example |
|------|------------------|---------|
| `skill` | `install.sh` symlinks SKILL.md; `update` re-curls from upstream | taste-skill |
| `package` | `install.sh` skips symlink; shows per-agent install commands | ui-craft |
| `platform` | Same as package; note added warning against raw curl | impeccable |
```

**Step 3: Commit**

```bash
git add README.md
git commit -m "docs: document stub types in README"
```
