#!/bin/bash
# Pull still frames from a video so Claude can look at it.
# Usage: frames.sh take.mp4 [fps=1] [out_dir=<video>_frames] [width=640]
set -euo pipefail
video="$1"; fps="${2:-1}"; out="${3:-${video%.*}_frames}"; width="${4:-640}"
mkdir -p "$out"
ffmpeg -hide_banner -loglevel error -y -i "$video" -vf "fps=$fps,scale=$width:-2" "$out/%04d.jpg"
echo "$(ls "$out" | wc -l) frames in $out (frame N is at $(awk "BEGIN{print 1/$fps}")s * (N-1))"
