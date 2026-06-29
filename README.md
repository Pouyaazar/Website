# Pouya Azarandaz — Portfolio

A dark, futuristic personal portfolio for a mechanical engineer / researcher.
Built with **React + Vite**, **Tailwind CSS**, **Three.js (React Three Fiber)**, and **Framer Motion**.
Everything runs in the browser — no paid APIs, no backend, no external 3D assets — and it is fully free to deploy.

**Highlights**
- Interactive 3D hero with a real **gyroid / Schwarz-P TPMS surface** and a cubic **lattice**, generated in-browser. Drag to rotate; switch geometry with the toggle.
- Photo, real metrics, skills bento grid, projects, thesis + a live scoping-review callout, education/experience timeline.
- **Certificate gallery** with a full-screen lightbox (arrow-key / swipe navigation) and verify links.
- **Inline CV preview** plus one-click download.
- Scroll-progress bar, scroll-spy navigation, back-to-top, copy-email, skip-to-content.
- Social/SEO ready: Open Graph + Twitter cards, a generated share image, JSON-LD, sitemap, robots.txt.
- Graceful WebGL fallback, `prefers-reduced-motion` support, keyboard focus, responsive down to mobile.

---

## 1. Run the website locally

You need **Node.js 18+** installed (https://nodejs.org).

```bash
npm install      # install dependencies (first time only)
npm run dev      # start the local dev server
```

Then open the URL it prints (usually http://localhost:5173).

## 2. Build for production

```bash
npm run build    # creates an optimized site in the /dist folder
npm run preview  # preview the production build locally
```

The `dist` folder is what you deploy.

---

## 3. Deploy free on Vercel (easiest)

1. Push this project to a GitHub repository.
2. Go to https://vercel.com, sign in with GitHub, and click **Add New → Project**.
3. Import your repository. Vercel auto-detects Vite. Leave defaults:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. Done — you get a live URL.

> The same flow works on **Netlify** and **Cloudflare Pages**: build command `npm run build`, publish/output directory `dist`. No config changes needed because `base` is `'/'`.

## 4. Deploy free on GitHub Pages

GitHub Pages serves the site from a sub-path, so you must set the `base` first.

1. Open `vite.config.js` and change the base to your repository name:
   ```js
   base: '/YOUR-REPO-NAME/',   // e.g. '/portfolio/'
   ```
2. Build the site:
   ```bash
   npm run build
   ```
3. Publish the `dist` folder. Two common options:
   - **Easy:** install once with `npm install --save-dev gh-pages`, add this script to `package.json`:
     ```json
     "deploy": "gh-pages -d dist"
     ```
     then run `npm run build && npm run deploy`. In your repo settings, set **Pages → Branch → `gh-pages`**.
   - **Manual:** push the contents of `dist` to a `gh-pages` branch yourself.
4. Your site appears at `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/`.

> Remember: keep `base: '/'` for Vercel/Netlify/Cloudflare, and `base: '/YOUR-REPO-NAME/'` for GitHub Pages.

---

## 5. Where to put your CV PDF

- Replace the file at **`public/CV.pdf`** with your own PDF (your real CV is already in place).
- Keep the filename **`CV.pdf`** (or, if you rename it, update `cvFile` in `src/data/content.js`).
- Anything in `public/` is copied to the site root, so the **Download CV** buttons serve it automatically.

### Your photo
- Replace **`public/profile.jpg`** with any portrait (a 4:5 portrait crop looks best). The name and path are set by `profile.photo` in `src/data/content.js`.

### Your certificates
- Certificate images live in **`public/certificates/`** (`cert-01.jpg` … `cert-10.jpg`).
- To change, add, or remove one: drop the image into that folder and edit the `certifications` array in `src/data/content.js` (each entry has `name`, `issuer`, `date`, `category`, `image`, and an optional `verify` link).

---

## 6. How to edit your content (name, projects, skills, links)

**Almost everything you'll want to change lives in one file:**

```
src/data/content.js
```

Inside it you can edit:

| What | Where in the file |
|------|-------------------|
| Your name, title, tagline, photo | `profile` |
| Email, phone, LinkedIn, GitHub, location | `contact` |
| About paragraphs | `about` |
| Key metrics + languages | `metrics`, `languages` |
| Skills cards | `skills` |
| Project cards | `projects` |
| Thesis / research + scoping review | `research` |
| Certificates | `certifications` |
| Education & experience timeline | `timeline` |
| Publications | `publications` |
| CV file path | `cvFile` |

Placeholders look like `[Add ...]` — just replace the text inside.
Save the file and the dev server updates instantly.

### Other quick edits
- **Page title / SEO description / fonts:** `index.html`
- **Colours and fonts (theme):** `tailwind.config.js` (the `colors` and `fontFamily` sections)
- **Background grid / glow:** `src/index.css`
- **The 3D hero (geometry, colours, speed):** `src/components/LatticeScene.jsx`
  - Default shape & toggle order: the `MODES` array in `src/components/Hero.jsx`.
  - TPMS detail / size: `buildTPMS(kind, { res, periods, target })` — raise `res` for a finer surface (slower), change `periods` for more/fewer cells.
  - Auto-rotate speed and drag behaviour: the `<OrbitControls>` props.

### Set your real domain (for the social share card)
The social preview image and SEO tags point at a placeholder domain. After you deploy, replace **`https://your-domain.com`** with your real URL in three files:
`index.html` (Open Graph / Twitter / canonical / JSON-LD), `public/robots.txt`, and `public/sitemap.xml`.
To change the share image itself, replace `public/og.png` (1200×630).

---

## Project structure

```
.
├── index.html              # page shell + font links + meta
├── package.json
├── vite.config.js          # set `base` here for GitHub Pages
├── tailwind.config.js      # theme colors + fonts
├── postcss.config.js
├── public/
│   ├── CV.pdf             # your CV (Download CV + preview use this)
│   ├── profile.jpg        # your portrait
│   ├── og.png             # social share image (1200×630)
│   ├── apple-touch-icon.png
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── certificates/      # cert-01.jpg … cert-10.jpg
└── src/
    ├── main.jsx
    ├── App.jsx             # assembles all sections + global UI
    ├── index.css           # global styles + Tailwind
    ├── data/
    │   └── content.js     # ← EDIT YOUR CONTENT HERE
    ├── utils/
    │   └── webgl.js        # WebGL availability check
    └── components/
        ├── Navbar.jsx          # scroll-spy active links
        ├── ScrollProgress.jsx
        ├── Hero.jsx            # geometry toggle + HUD
        ├── LatticeScene.jsx    # gyroid / Schwarz-P / lattice (R3F)
        ├── WebGLFallback.jsx
        ├── SectionHeading.jsx
        ├── About.jsx          # photo, bio, metrics, languages
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Research.jsx        # thesis + scoping review
        ├── Timeline.jsx
        ├── Certifications.jsx  # gallery + lightbox
        ├── Publications.jsx
        ├── CV.jsx             # inline PDF preview + download
        ├── Contact.jsx        # copy-email
        ├── Footer.jsx
        └── BackToTop.jsx
```

## Notes

- **Performance:** the 3D scene is lazy-loaded as a separate chunk and only mounts in the browser, so the page loads fast and the heavy Three.js code never blocks the first paint.
- **Fallback:** if a device has no WebGL, a clean static lattice graphic is shown instead of the 3D canvas.
- **Accessibility:** keyboard focus is visible, and the 3D rotation respects the OS "reduce motion" setting.
- **Responsive:** layouts adapt across desktop, tablet, and mobile.
