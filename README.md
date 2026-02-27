# May Cao Portfolio

A clean, pastel-style personal portfolio website built with HTML, Tailwind CSS (CDN), CSS, and JavaScript.

## Sections

- Education
- Skills
- Experience
- Projects
- Awards

## Quick Start

1. Open `index.html` in your browser to preview locally.
2. Replace placeholder text in `index.html` (all TODO comments show where to edit).
3. Add your images into the paths below.
4. Push to GitHub and enable GitHub Pages.

## Where To Add Your Content

- Hero statement and intro: `index.html` (search `TODO: Replace the one-line personal positioning statement`)
- Education: `#education` section in `index.html`
- Skills: `#skills` section in `index.html`
- Experience: `#experience` section in `index.html`
- Projects info and links: `#projects` section in `index.html`
- Awards card wall: `#awards` section in `index.html`
- Footer social links: footer in `index.html`

## Image Upload Paths

- Avatar: `assets/avatar/profile.jpg`
- Celebration image: `assets/project/celebration.jpg`
- Walle Walle image: `assets/project/walle-walle.jpg`
- GirlMath image: `assets/project/girlmath.jpg`

## Project Links To Fill

In each project card, replace:

- `href="#"` for GitHub
- `href="#"` for Devpost

## GitHub Pages Deployment

Run these commands in PowerShell:

```powershell
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Then in GitHub:

1. Go to `Settings` -> `Pages`
2. Under `Build and deployment`, choose `Deploy from a branch`
3. Select `main` and `/ (root)`
4. Save and wait for the Pages URL

## Notes

- The site includes:
  - Smooth scroll
  - Active nav highlight by section
  - Project category filters
  - Light reveal animation
- All comments in code are English only.
