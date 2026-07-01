# Pouya Azarandaz — Materials & AM Researcher

A single-page portfolio landing page built with **React + TypeScript + Vite**,
**Tailwind CSS**, **Framer Motion**, and **Lucide React**. Copy reflects a
materials & additive-manufacturing research profile.

## Sections

1. **Hero** — animated heading, magnetic portrait (`/public/portrait.jpg`), contact CTA
2. **About** — character-by-character scroll reveal + decorative 3D corners
3. **Expertise** — five staggered areas of expertise (AM, characterisation, simulation, lattice design, data/ML)
4. **Research** — four sticky, scale-on-scroll project cards with real thesis/paper figures (`/public/thesis/`)
5. **Experience** — two-column timeline of professional experience and education (from CV)
6. **Publications** — journal, conference, in-preparation, and peer-review entries (from CV)
7. **Certifications** — grid of 10 certificates (`/public/certificates/`) with click-to-enlarge lightbox
8. **Teaching** — "Teaching Assistant" strip with the Politecnico di Torino group photo (`/public/teaching.jpg`). If the file is missing, a styled gradient placeholder is shown instead.

## CAD portfolio (separate pages)

- `/cad` — bento-grid gallery of 13 SolidWorks models (AI-cutout WebP renders in `/public/cad`)
- `/cad/<slug>` — detail page per model: large cutout, description, technique chips, details card, prev/next navigation
- Routing: `react-router-dom` (BrowserRouter). `vercel.json` contains the SPA rewrite so deep links work on Vercel.
- Model data (titles, descriptions, tile sizes) lives in `src/data/cad.ts`.

## Local development

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Deploy to Vercel

This is a standard Vite project — Vercel auto-detects it.

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

Either push this folder to a Git repo and import it in the Vercel dashboard, or
run `npx vercel` from inside this folder.

## Customizing

- **Name / copy:** `src/sections/HeroSection.tsx`, `AboutSection.tsx`
- **Contact email:** `src/components/ContactButton.tsx`
- **Services & projects data:** `src/data/content.ts`
- **Colors / font / gradient:** `src/index.css`
