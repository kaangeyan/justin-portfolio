# Dr. Justin Sudhakar — Portfolio Website

Academic / EdTech portfolio site. Phase 1: project foundation + Dashboard page.

## Run locally

No build step — plain HTML/CSS/JS.

1. Open the `justin-portfolio` folder in VS Code.
2. Use the **Live Server** extension (right-click `index.html` → "Open with Live Server"),
   or run a quick local server from the folder:
   ```
   python3 -m http.server 8000
   ```
   then open `http://localhost:8000` in your browser.
3. You can also just double-click `index.html` to open it directly in a browser,
   though a local server is recommended so fonts and relative paths behave the same
   way they will on GitHub Pages.

## Deploy to GitHub Pages

1. Push this folder to a GitHub repository (e.g. `justin-portfolio`).
2. In the repo: **Settings → Pages → Source** → select the `main` branch, root folder.
3. GitHub will publish at `https://<your-username>.github.io/justin-portfolio/`.

No paid services, backend, or build tooling required.

## Project structure

```
justin-portfolio/
├── index.html        Dashboard / home page (Phase 1)
├── css/
│   └── styles.css    Design system (tokens) + all Phase 1 styles
├── js/
│   └── main.js        Mobile nav drawer behavior
├── assets/
│   └── img/            Drop real photos here later (portrait, project icons, gallery)
└── README.md
```

## What's implemented (Phase 1)

- Global design system: color tokens, type scale, spacing, radii, shadows (all in
  `:root` at the top of `css/styles.css` — edit these to retune the whole site)
- Persistent desktop sidebar navigation with all 11 nav items
- Polished mobile navigation (top bar + slide-in drawer, keyboard/Escape accessible)
- Dashboard page: hero, professional highlights, "What I do", featured apps &
  projects grid, featured research, teaching preview, YouTube & Learning preview,
  photography preview, latest updates, quick access, contact CTA, footer
- Fully responsive: desktop, tablet, and mobile breakpoints with a real mobile
  nav (not just a shrunk desktop layout)
- Reusable `.card` component used consistently across metrics, focus areas,
  projects, teaching, chips, timeline and quick-access sections

## Placeholders to fill in later

Search the project for these markers and replace them with real content:

- `[ADD PROFESSIONAL PHOTO]` — hero portrait
- `[ADD EMAIL]` — contact CTA
- `[ADD YOUTUBE LINK]` / `[ADD YOUTUBE URL]`
- `[ADD LINKEDIN URL]`
- `[ADD GITHUB URL]`
- `[ADD GOOGLE PLAY LINK]` / `[ADD GOOGLE PLAY URL]` (Praxis, Research Methods in
  Education, PolicyProgrammeEval)
- `[ADD PROJECT LINK]` (Bezel, FaithTales, ProctorFlow, LMS Admin, Ryan Music Studio)
- `[ADD DATE]` — Latest Updates timeline (all three entries)

## What's NOT built yet (Phase 2)

The sidebar and footer link to these pages, but the pages themselves don't exist
yet — clicking them from the live site will 404 until Phase 2:

- About Me
- Academic Profile
- Teaching & Courses (full page — dashboard only has a preview)
- Research (full page — dashboard only has a preview)
- Apps & Projects (full page — dashboard only has a preview grid)
- Publications
- Resources
- YouTube & Learning (full page — dashboard only has a preview)
- Photography (full page — dashboard only has a preview strip)
- Contact

Say the word and I'll build these next, one at a time or in a batch.
