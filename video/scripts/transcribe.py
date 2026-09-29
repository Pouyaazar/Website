#!/usr/bin/env python3
"""Transcribe a video with faster-whisper and save a timestamp for every word.

Usage: python3 transcribe.py take.mp4 [--model small] [--language en] [--names "Claude, Pouya"]
Writes take.words.json next to the video: [{"word": "zoom", "start": 5.32, "end": 5.74}, ...]
"""
import argparse
import json
import sys
from pathlib import Path


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("video")
    ap.add_argument("--model", default="small", help="tiny, base, small, medium, large-v3")
    ap.add_argument("--language", default=None, help="e.g. en, es, fa; auto-detected if omitted")
    ap.add_argument("--names", default=None, help="names/brands to spell right, comma separated")
    ap.add_argument("-o", "--output", default=None)
    args = ap.parse_args()

    from faster_whisper import WhisperModel

    try:
        model = WhisperModel(args.model, device="cpu", compute_type="int8")
    except Exception as e:
        sys.exit(
            f"Could not load Whisper model '{args.model}': {e}\n"
            "Models download from huggingface.co on first use. If that host is blocked, "
            "allow it in the environment's network settings."
        )

    prompt = f"Names in this video: {args.names}." if args.names else None
    segments, info = model.transcribe(
        args.video, language=args.language, word_timestamps=True, initial_prompt=prompt
    )

    words = []
    for seg in segments:
        for w in seg.words or []:
            words.append({"word": w.word.strip(), "start": round(w.start, 2), "end": round(w.end, 2)})

    out = Path(args.output) if args.output else Path(args.video).with_suffix(".words.json")
    out.write_text(json.dumps(words, indent=1, ensure_ascii=False))
    for w in words:
        print(f"{w['start']:7.2f}s -> {w['end']:7.2f}s  {w['word']}")
    print(f"\n{len(words)} words, language {info.language}, saved to {out}", file=sys.stderr)


if __name__ == "__main__":
    main()
