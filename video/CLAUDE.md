# Video editing workspace

Videos are edited as code with HyperFrames (HTML + GSAP rendered to MP4), using Whisper for word timings and FFmpeg for frames and cuts. Follow the "Let Claude Edit Your Videos" method: listen, look, plan, build, preview, render.

## Layout
- `inbox/`: raw takes, logos, music, sfx, `refs/` style references (gitignored)
- `projects/<name>/`: one HyperFrames project per video (`npx hyperframes init`)
- `renders/`: final MP4s (gitignored)
- `scripts/`: helpers below. `setup.sh` runs at session start and installs the tools.

## Workflow
1. **Prep the take.** Re-encode so seeking is frame-accurate: `ffmpeg -i in.mp4 -c:v libx264 -r 30 -g 30 -keyint_min 30 -movflags +faststart -c:a aac take.mp4`
2. **Ears.** `python3 scripts/transcribe.py take.mp4 --names "<names>"` writes `take.words.json` (word, start, end). Fix misspelled names by hand. `npx hyperframes transcribe` is an alternative (needs whisper-cpp).
3. **Eyes.** `scripts/frames.sh take.mp4 1` pulls 1 frame/sec. Read the frames to locate the face, hands, empty space and edges before placing anything.
4. **Plan.** Write a beat sheet table (start, end, exact words, what appears, where, sound) and wait for the user's OK before building.
5. **Rough cut.** Cut pauses > 0.3s and breaths using the word timings. Never cut inside a word. Rough cut before effects.
6. **Build.** `HYPERFRAMES_SKIP_SKILLS=1 npx hyperframes init projects/<name> --video <take> --non-interactive --skip-transcribe`, then `python3 scripts/vendor-cdn.py projects/<name>` (cloud sessions block CDNs; run it again after adding any CDN library). Sync every effect to a word's start time.
7. **Self-check.** `npx hyperframes lint`, `npx hyperframes snapshot` at the times you changed, and look at the frames before reporting done.
8. **Preview / render.** `npx hyperframes preview`, then `npx hyperframes render -o ../../renders/<name>-vN.mp4`.

## Rules
- Save a version before each round of notes (v1, v2...) so any change can be undone.
- One effect per request; land effects on the exact word, never guessed times.
- Text never covers the face. For 9:16 keep text out of the bottom 20% and away from the right edge (app buttons).
- Captions: 2-3 words at a time, bold white, key word highlighted, ~65% of screen height.
- Punch-in zooms at most once every 5 seconds.
- Only use music, sound effects and logos the user supplied.

## Style (edit to match your brand)
- Font: <font>
- Colors: <primary>, <accent>
- Handle: <@handle>
