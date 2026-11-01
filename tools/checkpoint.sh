#!/usr/bin/env bash
# checkpoint.sh - save a helper's work to GitHub, so a container restart cannot lose it (2026-11-01:
# a restart deleted a whole batch in progress).
#
#   tools/checkpoint.sh <web-repo> <batch-folder> <name> "<message>" [<git pathspec> ...]
#
# 1. In the website working copy, writes the diff of the given pathspecs (new files included, binary
#    safe) to <batch-folder>/<name>/web.patch, against the copy's HEAD. Restore with
#    `git apply --binary <web.patch>` on the same base.
# 2. Pushes <batch-folder>/<name>/ to this repo's branch from a private clone, so helpers working at
#    the same time never share an index. Retries a few times if another push got there first.
set -u
WEB="$1"; BATCH="$2"; NAME="$3"; MSG="$4"; shift 4
BB="$(cd "$(dirname "$0")/.." && pwd)"
BRANCH="$(git -C "$BB" rev-parse --abbrev-ref HEAD)"
REL="$(realpath --relative-to="$BB" "$BATCH")/$NAME"
mkdir -p "$BATCH/$NAME"
if [ "$#" -gt 0 ]; then
  for i in 1 2 3 4 5; do git -C "$WEB" add -N -- "$@" 2>/dev/null && break; sleep $((i * 2)); done
  git -C "$WEB" diff --binary -- "$@" > "$BATCH/$NAME/web.patch"
  git -C "$WEB" rev-parse HEAD > "$BATCH/$NAME/web.base"
fi
CLONE="${TMPDIR:-/tmp}/checkpoint-$(echo "$REL" | tr '/' '-')"
[ -d "$CLONE/.git" ] || git clone -q --depth 1 -b "$BRANCH" "$(git -C "$BB" remote get-url origin)" "$CLONE"
for i in 1 2 3 4 5 6; do
  git -C "$CLONE" fetch -q --depth 1 origin "$BRANCH" && git -C "$CLONE" reset -q --hard "origin/$BRANCH"
  rm -rf "$CLONE/$REL" && mkdir -p "$CLONE/$REL" && cp -a "$BATCH/$NAME/." "$CLONE/$REL/"
  git -C "$CLONE" add -A "$REL"
  git -C "$CLONE" diff --cached --quiet && { echo "checkpoint: nothing new in $REL"; exit 0; }
  git -C "$CLONE" -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -q -m "$MSG

Co-Authored-By: Claude <noreply@anthropic.com>${CLAUDE_SESSION_URL:+
Claude-Session: $CLAUDE_SESSION_URL}"
  git -C "$CLONE" push -q origin "HEAD:$BRANCH" && { echo "checkpoint: pushed $REL"; exit 0; }
  sleep $((i * 3))
done
echo "checkpoint: push failed for $REL" >&2; exit 1
