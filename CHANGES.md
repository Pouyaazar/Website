# Changed files — 3D tilt effect + CAD teaser card

Copy each file into the same relative path inside your `Website` folder
(overwrite when asked). No new npm packages are needed.

| File | Status | What it does |
|---|---|---|
| `src/components/TiltCard.tsx` | **New** | Reusable subtle 3D tilt-on-hover wrapper (perspective transform toward the cursor, eases back flat on leave, `preserve-3d` so children can pop with translateZ). |
| `src/sections/CadTeaserSection.tsx` | **New** | The "CAD Portfolio" teaser card on the home page — text + collage of three model cutouts, links to `/cad`. Uses TiltCard with a very gentle 3° tilt. |
| `src/pages/CadGalleryPage.tsx` | **Modified** | Gallery tiles now wrapped in TiltCard (6° max tilt); the model cutout and label float above the card plane via translateZ for a parallax pop. |
| `src/pages/HomePage.tsx` | **Modified** | Renders the new `CadTeaserSection` between Research and Experience. |

After copying, rebuild with `npm run build` (or just run `npm run dev`).
