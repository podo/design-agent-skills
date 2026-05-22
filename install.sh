#!/usr/bin/env bash
set -euo pipefail

SKILLS_DIR="${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}"
CATALOGUE_DIR="$(cd "$(dirname "$0")/skills" && pwd)"

mkdir -p "$SKILLS_DIR"

for stub_dir in "$CATALOGUE_DIR"/*/; do
  skill_name="$(basename "$stub_dir")"
  target="$SKILLS_DIR/$skill_name"

  if [ -d "$target" ]; then
    echo "skip  $skill_name (already exists at $target)"
  else
    cp -r "$stub_dir" "$target"
    echo "copy  $skill_name → $target"
  fi
done

echo "done"
