#!/usr/bin/env bash
set -euo pipefail

OWNER="${KSLOG_GITHUB_OWNER:-justdoswift}"
REPO="${KSLOG_GITHUB_REPO:-kslog}"
REF="${KSLOG_REF:-main}"
INSTALL_DIR="${KSLOG_INSTALL_DIR:-"$HOME/.kslog/cli"}"
BIN_DIR="${KSLOG_BIN_DIR:-"$HOME/.kslog/bin"}"
TARBALL_URL="https://codeload.github.com/${OWNER}/${REPO}/tar.gz/${REF}"

info() {
  printf '==> %s\n' "$1"
}

fail() {
  printf 'kslog install error: %s\n' "$1" >&2
  exit 1
}

require_command() {
  command -v "$1" >/dev/null 2>&1 || fail "需要先安装 $1"
}

require_command curl
require_command tar
require_command node
require_command npm

NODE_MAJOR="$(node -p "Number(process.versions.node.split('.')[0])")"
if [ "$NODE_MAJOR" -lt 20 ]; then
  fail "需要 Node.js >= 20，当前版本是 $(node --version)"
fi

PARENT_DIR="$(dirname "$INSTALL_DIR")"
mkdir -p "$PARENT_DIR" "$BIN_DIR"

TMP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/kslog-install.XXXXXX")"
NEW_DIR="$(mktemp -d "${PARENT_DIR}/.kslog-cli.XXXXXX")"
BACKUP_DIR=""

cleanup() {
  rm -rf "$TMP_DIR"
  if [ -n "${NEW_DIR:-}" ] && [ -d "$NEW_DIR" ]; then
    rm -rf "$NEW_DIR"
  fi
  if [ -n "$BACKUP_DIR" ] && [ -d "$BACKUP_DIR" ]; then
    rm -rf "$BACKUP_DIR"
  fi
}
trap cleanup EXIT

info "Downloading ${OWNER}/${REPO}@${REF}"
curl -fsSL "$TARBALL_URL" -o "$TMP_DIR/kslog.tar.gz"
tar -xzf "$TMP_DIR/kslog.tar.gz" --strip-components=1 -C "$NEW_DIR"

[ -f "$NEW_DIR/dist/cli.js" ] || fail "安装包缺少 dist/cli.js，请确认仓库已构建"
[ -f "$NEW_DIR/package-lock.json" ] || fail "安装包缺少 package-lock.json"

info "Installing production dependencies"
(
  cd "$NEW_DIR"
  npm ci --omit=dev --ignore-scripts --no-audit --no-fund
)

chmod +x "$NEW_DIR/dist/cli.js"

if [ -e "$INSTALL_DIR" ]; then
  BACKUP_DIR="${INSTALL_DIR}.previous.$$"
  mv "$INSTALL_DIR" "$BACKUP_DIR"
fi

mv "$NEW_DIR" "$INSTALL_DIR"
NEW_DIR=""
rm -rf "$BACKUP_DIR"
BACKUP_DIR=""

{
  printf '#!/usr/bin/env bash\n'
  printf 'exec node %q "$@"\n' "$INSTALL_DIR/dist/cli.js"
} > "$BIN_DIR/kslog"
chmod +x "$BIN_DIR/kslog"

VERSION="$("$BIN_DIR/kslog" --version)"
info "Installed kslog ${VERSION}"
printf 'Binary: %s\n' "$BIN_DIR/kslog"
printf 'Profiles remain in: %s\n' "$HOME/.kslog/profiles.json"

case ":$PATH:" in
  *":$BIN_DIR:"*) ;;
  *)
    printf '\nAdd kslog to PATH:\n'
    printf '  export PATH="%s:$PATH"\n' "$BIN_DIR"
    printf '\nFor zsh, you can run:\n'
    printf '  echo '\''export PATH="%s:$PATH"'\'' >> ~/.zshrc\n' "$BIN_DIR"
    ;;
esac
