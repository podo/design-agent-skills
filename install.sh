#!/usr/bin/env bash
# design-agent-skills installer — works with bash 3.2+
# Usage: ./install.sh [install|status|update|fix|help]
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILLS_SRC="$REPO_DIR/skills"

# ── Agent registry (name:config_root:skills_dir) ──────────────────────────────
AGENTS="
claude:$HOME/.claude:$HOME/.claude/skills
cursor:$HOME/.cursor:$HOME/.cursor/skills
codex:$HOME/.codex:$HOME/.codex/skills
opencode:$HOME/.config/opencode:$HOME/.config/opencode/skills
droid:$HOME/.factory:$HOME/.factory/skills
"

# ── Helpers ───────────────────────────────────────────────────────────────────

detected_agents() {
  echo "$AGENTS" | grep -v '^$' | while IFS=: read -r name root _skills; do
    [ -d "$root" ] && echo "$name:$root:$_skills"
  done
}

agent_skills_dir() {
  # $1 = agent name, returns skills dir
  echo "$AGENTS" | grep -v '^$' | while IFS=: read -r name _root skills; do
    [ "$name" = "$1" ] && echo "$skills" && break
  done
}

is_stub() {
  # Stub = SKILL.md still has das: frontmatter block
  local md="$1/SKILL.md"
  [ -f "$md" ] && grep -q "^das:" "$md"
}

skill_state() {
  local target="$1" src="$2"
  if [ -L "$target" ] && [ ! -e "$target" ]; then
    echo "BROKEN"
  elif [ -L "$target" ] && is_stub "$src"; then
    echo "stub"
  elif [ -L "$target" ]; then
    echo "upgraded"
  elif [ -d "$target" ]; then
    is_stub "$target" && echo "stub" || echo "upgraded"
  else
    echo "-"
  fi
}

skill_names() {
  for d in "$SKILLS_SRC"/*/; do
    [ -d "$d" ] && basename "${d%/}"
  done
}

# ── Commands ──────────────────────────────────────────────────────────────────

cmd_install() {
  local found=0
  local agent_list
  agent_list="$(detected_agents)"

  [ -z "$agent_list" ] && { echo "No supported agents found."; exit 0; }

  while IFS=: read -r name _root skills_dir; do
    found=1
    mkdir -p "$skills_dir"
    local linked=0 skipped=0
    while IFS= read -r skill; do
      local target="$skills_dir/$skill"
      if [ -L "$target" ] || [ -d "$target" ]; then
        skipped=$((skipped + 1))
      else
        ln -s "$SKILLS_SRC/$skill" "$target"
        linked=$((linked + 1))
      fi
    done < <(skill_names)
    printf "  %-12s  +%d linked  %d skipped\n" "$name" "$linked" "$skipped"
  done <<< "$agent_list"

  echo
  echo "Done. Run './install.sh status' to inspect skill states."
}

cmd_status() {
  local agent_list
  agent_list="$(detected_agents)"
  [ -z "$agent_list" ] && { echo "No supported agents found."; exit 0; }

  # Collect agent names and dirs into indexed arrays (bash 3.2 safe)
  local names=() dirs=()
  while IFS=: read -r name _root skills_dir; do
    names+=("$name")
    dirs+=("$skills_dir")
  done <<< "$agent_list"

  local ncols=${#names[@]}

  # Header
  printf "\n%-22s" "skill"
  for name in "${names[@]}"; do printf "  %-10s" "$name"; done
  echo

  printf "%-22s" "──────────────────────"
  for _ in "${names[@]}"; do printf "  %-10s" "──────────"; done
  echo

  while IFS= read -r skill; do
    printf "%-22s" "$skill"
    local i=0
    while [ $i -lt $ncols ]; do
      local target="${dirs[$i]}/$skill"
      local src="$SKILLS_SRC/$skill"
      local state
      state="$(skill_state "$target" "$src")"
      printf "  %-10s" "$state"
      i=$((i + 1))
    done
    echo
  done < <(skill_names)

  echo
  echo "stub=install pending  upgraded=full skill active  BROKEN=run fix"
  echo
}

cmd_update() {
  local agent_list
  agent_list="$(detected_agents)"
  local total=0

  while IFS=: read -r name _root skills_dir; do
    mkdir -p "$skills_dir"
    while IFS= read -r skill; do
      local target="$skills_dir/$skill"
      if [ ! -L "$target" ] && [ ! -d "$target" ]; then
        ln -s "$SKILLS_SRC/$skill" "$target"
        printf "  added  %-18s  %s\n" "$skill" "$name"
        total=$((total + 1))
      fi
    done < <(skill_names)
  done <<< "$agent_list"

  [ "$total" -eq 0 ] && echo "All agents up to date." || echo "Added $total link(s)."
}

cmd_fix() {
  local agent_list
  agent_list="$(detected_agents)"
  local fixed=0

  while IFS=: read -r _name _root skills_dir; do
    [ -d "$skills_dir" ] || continue
    for target in "$skills_dir"/*/; do
      target="${target%/}"
      [ -L "$target" ] || continue
      if [ ! -e "$target" ]; then
        rm "$target"
        printf "  removed broken link: %s\n" "$target"
        fixed=$((fixed + 1))
      fi
    done
  done <<< "$agent_list"

  [ "$fixed" -eq 0 ] && echo "No broken links found." || echo "Fixed $fixed broken link(s)."
}

cmd_help() {
  cat <<HELP
Usage: ./install.sh [command]

  install   Symlink all stubs to detected agents (default)
  status    Show stub / upgraded / BROKEN state per agent
  update    Add links for new stubs added since last install
  fix       Remove broken symlinks
  help      Show this message

Supported agents: claude  cursor  codex  opencode  droid
HELP
}

# ── Entry ─────────────────────────────────────────────────────────────────────
case "${1:-install}" in
  install) cmd_install ;;
  status)  cmd_status  ;;
  update)  cmd_update  ;;
  fix)     cmd_fix     ;;
  help|--help|-h) cmd_help ;;
  *) echo "Unknown command: $1"; cmd_help; exit 1 ;;
esac
