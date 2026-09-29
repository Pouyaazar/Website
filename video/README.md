# Video editing with Claude Code

Based on "Let Claude Edit Your Videos" (The Creator Stack). No editing app: Claude listens (Whisper), looks (FFmpeg), writes the edit as a HyperFrames project and renders an MP4.

## What's installed
Cloud sessions run `scripts/setup.sh` at start (hook in `.claude/settings.json`), which installs:
- **FFmpeg** (frames, cuts, audio, conversion)
- **faster-whisper** (word-level transcripts)
- **HyperFrames** via `npx hyperframes` + its headless Chrome for rendering
- **HyperFrames Claude plugin** (`hyperframes@hyperframes`), enabled in `.claude/settings.json`
- Node.js 22 and Python 3 come with the environment

Check it anytime: `npx hyperframes doctor`.
To install locally on your own machine: `bash video/scripts/setup.sh --force` (Linux), or on a Mac `brew install node ffmpeg python whisper-cpp`.

## Getting a video in
Attach the file in the Claude chat, or put it in `video/inbox/`. Media files are gitignored, so ask Claude to give you the final MP4 when it's rendered.

## Prompts to start with
**Eyes and ears**
> My video is inbox/take.mp4. Transcribe it with a timestamp for every word, pull one frame per second and look at them. Tell me what I say, when, and what's in the shot. Spell these right: [names].

**Plan first**
> Write a beat sheet for this edit as a table: start/end, my exact words, what appears on screen, where the text sits, and the sound. Format: vertical 9:16 for Reels. Wait for my OK before you build.

**Everyday edits**
- Captions: *Add captions word by word, 2-3 words at a time, bold white, key word in [color], at ~65% screen height.*
- Dead air: *Cut every pause longer than 0.3s and every breath. Never cut inside a word. Tell me the new length.*
- Zooms: *Punch in 1.2x on the key word of each sentence, hold 2s, ease out. Max one zoom every 5s.*
- Title + name tag: *Open with a title card "[hook]" for 2s, then a lower third with my name and [@handle].*
- Pop-ups: *When I say "[word]", pop up [image.png] next to me for 2s with a small bounce. Never cover my face.*
- Music/SFX: *Add [music.mp3] low under my voice, duck it while I talk, whoosh on zooms, pop on pop-ups.*
- Reframe: *Reframe this 16:9 video to 9:16 and keep my face centered.*

**Notes that work**: one change per line, with the time.
> At 0:07 the logo covers my face. Move it next to my hand and make it 20% smaller.

**Styles**: *Edit this like a cinematic movie trailer.* Or put examples in `inbox/refs/` and ask Claude to describe the style back before building.

## Fix it fast
- Names wrong: give them in the first prompt (`--names`).
- Effect late: name the word it should start on.
- Looks wrong: "snapshot the frame at 0:07 and check it yourself".
- Render fails: `npx hyperframes doctor`, then paste the error to Claude.
