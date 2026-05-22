#!/usr/bin/env bash
# One-command installer — no git clone required
# Usage: curl -fsSL https://raw.githubusercontent.com/podo/design-agent-skills/main/bootstrap.sh | bash
# Or with scope: curl -fsSL ... | bash -s -- --scope=project
set -euo pipefail

REPO="podo/design-agent-skills"
BRANCH="main"
INSTALL_DIR="${DESIGN_AGENT_SKILLS_DIR:-$HOME/.design-agent-skills}"

echo "design-agent-skills bootstrap"
echo "  destination: $INSTALL_DIR"
echo "  source: https://github.com/$REPO"
echo

# Clone or update
if [ -d "$INSTALL_DIR/.git" ]; then
  echo "Updating existing install..."
  git -C "$INSTALL_DIR" pull --ff-only
else
  echo "Cloning..."
  git clone --depth=1 "https://github.com/$REPO.git" "$INSTALL_DIR"
fi

echo
echo "Running installer..."
bash "$INSTALL_DIR/install.sh" "$@"

echo
echo "Bootstrap complete."
echo "  To update stubs later:   $INSTALL_DIR/install.sh update"
echo "  To check status:         $INSTALL_DIR/install.sh status"
