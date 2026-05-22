#!/usr/bin/env bash
# design-agent-skills installer — works with bash 3.2+
# Usage: ./install.sh [--scope=user|project] [install|status|update|fix|help]
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")" && pwd)"
SKILLS_SRC="$REPO_DIR/skills"

# ── Parse global flags ────────────────────────────────────────────────────────
SCOPE="user"
INCLUDE_EXPERIMENTAL=0
ARGS=()
for arg in "$@"; do
  case "$arg" in
    --scope=user)             SCOPE="user"             ;;
    --scope=project)          SCOPE="project"          ;;
    --include-experimental)   INCLUDE_EXPERIMENTAL=1   ;;
    *) ARGS+=("$arg") ;;
  esac
done
set -- "${ARGS[@]+"${ARGS[@]}"}"

# ── Agent registry (name:config_root:skills_dir) ──────────────────────────────
USER_AGENTS="
claude:$HOME/.claude:$HOME/.claude/skills
cursor:$HOME/.cursor:$HOME/.cursor/skills
codex:$HOME/.codex:$HOME/.codex/skills
opencode:$HOME/.config/opencode:$HOME/.config/opencode/skills
droid:$HOME/.factory:$HOME/.factory/skills
"

PROJECT_AGENTS="
claude:$(pwd)/.claude:$(pwd)/.claude/skills
cursor:$(pwd)/.cursor:$(pwd)/.cursor/skills
opencode:$(pwd)/.opencode:$(pwd)/.opencode/skills
"

# ── Helpers ───────────────────────────────────────────────────────────────────

agent_list_for_scope() {
  if [ "$SCOPE" = "project" ]; then
    echo "$PROJECT_AGENTS"
  else
    echo "$USER_AGENTS"
  fi
}

detected_agents() {
  agent_list_for_scope | grep -v '^$' | while IFS=: read -r name root _skills; do
    if [ "$SCOPE" = "project" ]; then
      # Project scope: include if the config dir exists OR we're creating it
      [ -d "$(dirname "$root")" ] && echo "$name:$root:$_skills"
    else
      [ -d "$root" ] && echo "$name:$root:$_skills"
    fi
  done
}

stub_yaml_value() {
  # $1=key  $2=stub.yaml path — minimal key: value parser
  grep "^${1}:" "$2" | sed 's/^[^:]*: *//' | tr -d '"'
}

stub_yaml_list() {
  # $1=key  $2=stub.yaml path — parse block-sequence list (- item per line)
  awk -v key="$1" '
    $0 ~ ("^" key ":") { in_list=1; next }
    in_list && /^[[:space:]]*-[[:space:]]/ {
      line=$0; sub(/^[[:space:]]*-[[:space:]]+/,"",line); gsub(/"/,"",line)
      print line; next
    }
    in_list && /^[^[:space:]]/ { exit }
  ' "$2"
}

stub_tier() {
  local yaml="$1/stub.yaml"
  [ -f "$yaml" ] && stub_yaml_value tier "$yaml" 2>/dev/null || echo "experimental"
}

is_allowed_tier() {
  local src="$1"
  [ "$INCLUDE_EXPERIMENTAL" -eq 1 ] && return 0
  local tier
  tier="$(stub_tier "$src")"
  [ "$tier" != "experimental" ]
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
    local yaml="$src/stub.yaml"
    local skills_dir
    skills_dir="$(dirname "$target")"
    # Check for block-list installed_as first
    local list_items
    list_items="$(stub_yaml_list installed_as "$yaml" 2>/dev/null || true)"
    if [ -n "$list_items" ]; then
      local total=0 found=0
      while IFS= read -r item; do
        total=$((total + 1))
        local t="$skills_dir/$item"
        if [ -d "$t" ] && ! grep -q "^das:" "$t/SKILL.md" 2>/dev/null; then
          found=$((found + 1))
        fi
      done <<< "$list_items"
      if [ "$found" -eq 0 ]; then
        echo "package"
      elif [ "$found" -eq "$total" ]; then
        echo "installed"
      else
        echo "${found}/${total}"
      fi
      return
    fi
    # Scalar installed_as
    local installed_as
    installed_as="$(stub_yaml_value installed_as "$yaml" 2>/dev/null || true)"
    [ -z "$installed_as" ] && installed_as="$(basename "$src")"
    local installed_target="$skills_dir/$installed_as"
    if [ -d "$installed_target" ] && ! grep -q "^das:" "$installed_target/SKILL.md" 2>/dev/null; then
      echo "installed"
    else
      echo "package"
    fi
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
        if ! is_allowed_tier "$SKILLS_SRC/$skill"; then
          skipped=$((skipped + 1))
        elif [ -L "$target" ] || [ -d "$target" ]; then
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
  if [ "$INCLUDE_EXPERIMENTAL" -eq 0 ]; then
    printf "scope: %s  |  experimental skills skipped (add --include-experimental to install all)\n" "$SCOPE"
  else
    printf "scope: %s  |  run './install.sh status' to inspect states.\n" "$SCOPE"
  fi
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

  printf "\n%-22s  %-4s" "skill" "tier"
  for name in "${names[@]}"; do printf "  %-10s" "$name"; done
  echo

  printf "%-22s  %-4s" "──────────────────────" "────"
  for _ in "${names[@]}"; do printf "  %-10s" "──────────"; done
  echo

  while IFS= read -r skill; do
    local src="$SKILLS_SRC/$skill"
    local tier_char
    case "$(stub_tier "$src")" in
      official)     tier_char="O" ;;
      community)    tier_char="C" ;;
      experimental) tier_char="E" ;;
      *)            tier_char="?" ;;
    esac
    printf "%-22s  %-4s" "$skill" "$tier_char"
    local i=0
    while [ $i -lt $ncols ]; do
      local target="${dirs[$i]}/$skill"
      printf "  %-10s" "$(skill_state "$target" "$src")"
      i=$((i + 1))
    done
    echo
  done < <(skill_names)

  echo
  printf "scope: %s\n" "$SCOPE"
  echo "tier: O=official  C=community  E=experimental"
  echo "stub=pending  upgraded=full  installed=package installed  package=not installed  BROKEN=run fix"
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

    # New stub not yet linked to all agents → add missing links (respects tier filter)
    is_allowed_tier "$src" || continue
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

cmd_doctor() {
  local strict=0 show_substr=0
  for arg in "$@"; do
    case "$arg" in
      --strict) strict=1 ;;
      --substr) show_substr=1 ;;
    esac
  done

  local tmp
  tmp="$(mktemp)"

  local skill_count
  skill_count=$(skill_names | wc -l | tr -d ' ')
  printf "Scanning %d skills for trigger collisions...\n\n" "$skill_count"

  # Collect (trigger TAB skill) pairs into temp file
  while IFS= read -r skill; do
    local md="$SKILLS_SRC/$skill/SKILL.md"
    [ -f "$md" ] || continue
    awk -v skill="$skill" '
      BEGIN { in_front=0; in_trig=0 }
      /^---$/ { if(in_front==0){in_front=1}else{exit}; next }
      in_front && /^triggers:/ { in_trig=1; next }
      in_front && in_trig && /^[[:space:]]*-[[:space:]]/ {
        line=$0; sub(/^[[:space:]]*-[[:space:]]+/,"",line); gsub(/"/,"",line)
        print line "\t" skill; next
      }
      in_front && in_trig && /^[^[:space:]]/ { in_trig=0 }
    ' "$md"
  done < <(skill_names) > "$tmp"

  local issues=0

  # ── Exact collisions ─────────────────────────────────────────────────────────
  local exact_out
  exact_out=$(sort "$tmp" | awk -F'\t' '
    {
      key=$1; skill=$2
      if (key != prev_key) {
        if (cnt > 1) print prev_key "\t" list
        prev_key=key; list=skill; cnt=1
      } else { list=list ", " skill; cnt++ }
    }
    END { if (cnt > 1) print prev_key "\t" list }
  ')

  if [ -n "$exact_out" ]; then
    local exact_count
    exact_count=$(printf '%s\n' "$exact_out" | grep -c . || true)
    printf "Exact trigger collisions (%d):\n" "$exact_count"
    printf '%s\n' "$exact_out" | awk -F'\t' '{ printf "  %-34s → %s\n", "\"" $1 "\"", $2 }'
    echo
    issues=$((issues + exact_count))
  fi

  # ── Substring overlaps (opt-in via --substr) ──────────────────────────────────
  if [ "$show_substr" -eq 1 ]; then
    local substr_out
    substr_out=$(cut -f1 "$tmp" | sort -u | awk '
      { t[NR]=$0 }
      END {
        n=NR
        for(i=1;i<=n;i++) for(j=1;j<=n;j++) {
          if(i!=j && index(t[i],t[j])>0 && length(t[j])<length(t[i]))
            printf "%s\t%s\n", t[j], t[i]
        }
      }
    ' | sort -u)

    if [ -n "$substr_out" ]; then
      local substr_count
      substr_count=$(printf '%s\n' "$substr_out" | grep -c . || true)
      printf "Substring overlaps — shorter trigger subsumed by longer (%d):\n" "$substr_count"
      printf '%s\n' "$substr_out" | awk -F'\t' '{ printf "  %-20s  ⊇  %s\n", "\"" $1 "\"", "\"" $2 "\"" }'
      echo
      issues=$((issues + substr_count))
    fi
  fi

  rm -f "$tmp"

  if [ "$issues" -eq 0 ]; then
    echo "All triggers OK — no collisions found."
  else
    printf "%d collision(s) found.\n" "$issues"
    if [ "$strict" -eq 1 ]; then
      echo "Exiting 1 (--strict)."
      exit 1
    fi
  fi
}

cmd_help() {
  cat <<HELP
Usage: ./install.sh [flags] [command]

Global flags:
  --scope=user              Link to agent user-level dirs (default): ~/.claude/skills/
  --scope=project           Link to project-level dirs: ./.claude/skills/
  --include-experimental    Also install experimental-tier skills (default: official+community only)

Commands:
  install          Symlink all stubs to detected agents (default)
  status           Show stub / upgraded / installed / BROKEN state per agent
  update           Re-fetch upgraded skills from upstream; add links for new stubs
  fix              Remove broken symlinks
  doctor           Scan for trigger collisions across installed stubs
    --strict         Exit 1 if any collisions found (useful for CI)
    --substr         Also report substring overlaps (broad triggers subsuming narrow ones)
  help             Show this message

Skill tiers:  official (28)  community (35)  experimental (60)
User-scope agents:  claude  cursor  codex  opencode  droid
Project-scope agents: claude  cursor  opencode
HELP
}

# ── Entry ─────────────────────────────────────────────────────────────────────
CMD="${1:-install}"
shift 2>/dev/null || true
case "$CMD" in
  install) cmd_install ;;
  status)  cmd_status  ;;
  update)  cmd_update  ;;
  fix)     cmd_fix     ;;
  doctor)  cmd_doctor "$@" ;;
  help|-h) cmd_help ;;
  *) echo "Unknown command: $CMD"; cmd_help; exit 1 ;;
esac
