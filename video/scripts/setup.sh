#!/bin/bash
# Installs the video-editing toolchain (FFmpeg, faster-whisper, HyperFrames' Chrome).
# Runs from the SessionStart hook in cloud sessions; safe to run by hand anywhere. Idempotent.
set -uo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ] && [ "${1:-}" != "--force" ]; then
  exit 0
fi

log() { echo "[video-setup] $*" >&2; }
SUDO=""; [ "$(id -u)" -ne 0 ] && command -v sudo >/dev/null && SUDO="sudo"

if ! command -v ffmpeg >/dev/null; then
  log "installing ffmpeg"
  $SUDO apt-get install -y -q ffmpeg >/dev/null 2>&1 \
    || { $SUDO apt-get update -q >/dev/null 2>&1 && $SUDO apt-get install -y -q ffmpeg >/dev/null 2>&1; } \
    || log "ffmpeg install failed"
fi

if ! python3 -c "import faster_whisper" 2>/dev/null; then
  log "installing faster-whisper"
  pip3 install -q faster-whisper >/dev/null 2>&1 || log "faster-whisper install failed"
fi

if ! compgen -G "$HOME/.cache/hyperframes/chrome/*/*/*/chrome-headless-shell" >/dev/null; then
  log "downloading HyperFrames Chrome"
  npx -y hyperframes browser ensure >/dev/null 2>&1 || log "HyperFrames Chrome download failed"
fi

exit 0
