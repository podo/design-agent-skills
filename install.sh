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

stub_yaml_value() {
  # $1=key  $2=stub.yaml path — minimal key: value parser
  grep "^${1}:" "$2" | sed 's/^[^:]*: *//' | tr -d '"'
}

stub_type() {
  local yaml="$1/stub.yaml"
  if [ -f "$yaml" ]; then
    local t
    t="$(stub_yaml_value type "$yaml")"
    echo "${t:-skill}"
  else
    echo "skill"
  fi
}

raw_url_from_stub() {
  # Derive raw GitHub URL from stub.yaml fields
  local yaml="$1"
  local upstream upstream_path version repo branch
  upstream="$(stub_yaml_value upstream "$yaml")"
  upstream_path="$(stub_yaml_value upstream_path "$yaml")"
  version="$(stub_yaml_value version "$yaml")"
  repo="$(echo "$upstream" | sed 's|https://github.com/||')"
  branch="$([ "$version" = "latest" ] && echo "main" || echo "$version")"
  echo "https://raw.githubusercontent.com/$repo/$branch/$upstream_path"
}

is_stub() {
  # Stub = SKILL.md still has das: frontmatter block
  local md="$1/SKILL.md"
  [ -f "$md" ] && grep -q "^das:" "$md"
}

has_stub_manifest() {
  [ -f "$1/stub.yaml" ]
}

skill_state() {
  local target="$1" src="$2"
  local stype
  stype="$(stub_type "$src")"
  if [ "$stype" = "package" ] || [ "$stype" = "platform" ]; then
    echo "package"
    return
  fi
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
  local agent_list
  agent_list="$(detected_agents)"
  [ -z "$agent_list" ] && { echo "No supported agents found."; exit 0; }

  while IFS=: read -r name _root skills_dir; do
    mkdir -p "$skills_dir"
    local linked=0 skipped=0
    while IFS= read -r skill; do
      local target="$skills_dir/$skill"
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
        skipped=$((skipped + 1))
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

  local names=() dirs=()
  while IFS=: read -r name _root skills_dir; do
    names+=("$name")
    dirs+=("$skills_dir")
  done <<< "$agent_list"

  local ncols=${#names[@]}

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
      printf "  %-10s" "$(skill_state "$target" "$src")"
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
  local refreshed=0 linked=0 shown=0

  while IFS= read -r skill; do
    local src="$SKILLS_SRC/$skill"
    local yaml="$src/stub.yaml"

    # Package/platform types — print install command instead of symlinking
    local stype
    stype="$(stub_type "$src")"
    if [ "$stype" = "package" ] || [ "$stype" = "platform" ]; then
      local install_cmd
      install_cmd="$(stub_yaml_value install_default "$yaml" 2>/dev/null || true)"
      if [ -n "$install_cmd" ]; then
        printf "  package  %-18s  run: %s\n" "$skill" "$install_cmd"
        shown=$((shown + 1))
      fi
      continue
    fi

    # Upgraded stub with manifest → re-fetch from upstream
    if has_stub_manifest "$src" && ! is_stub "$src"; then
      local url
      url="$(raw_url_from_stub "$yaml")"
      printf "  updating  %s ... " "$skill"
      if curl -fsSL "$url" -o "$src/SKILL.md" 2>/dev/null; then
        echo "ok"
        refreshed=$((refreshed + 1))
      else
        echo "failed (upstream unreachable?)"
      fi
      continue
    fi

    # New stub not yet linked to all agents → add missing links
    while IFS=: read -r name _root skills_dir; do
      local target="$skills_dir/$skill"
      if [ ! -L "$target" ] && [ ! -d "$target" ]; then
        mkdir -p "$skills_dir"
        ln -s "$src" "$target"
        printf "  added  %-18s  %s\n" "$skill" "$name"
        linked=$((linked + 1))
      fi
    done <<< "$agent_list"

  done < <(skill_names)

  if [ "$refreshed" -eq 0 ] && [ "$linked" -eq 0 ] && [ "$shown" -eq 0 ]; then
    echo "Nothing to update."
  else
    [ "$refreshed" -gt 0 ] && echo "$refreshed skill(s) refreshed from upstream."
    [ "$linked" -gt 0 ]    && echo "$linked new link(s) added."
    [ "$shown" -gt 0 ]     && echo "$shown package install command(s) shown."
  fi
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
  update    Re-fetch upgraded skills from upstream; add links for new stubs
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
