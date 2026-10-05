# Nhu Vuong — Orange Data portfolio

Static site (HTML/CSS/JS, no build step) for GitHub Pages.

## Structure
```
index.html          Home: positioning, about, how I work, case studies, product DNA, contact
project.html        One template for every case study: project.html?id=<case id>
assets/css/style.css
assets/js/data.js   ← ALL content lives here (PROFILE, CASES, OTHER_WORK). Lines marked VERIFY need fact-checking.
assets/js/main.js   Rendering logic
images/             Keep the existing images folder from the old repo
```

## Add a case study
Add one object to `CASES` in `assets/js/data.js` (`id`, `number`, `title`, `summary`, `tags`, `cover`, `meta`, `blocks`).
Block types: `text`, `quote`, `flow`, `columns`, `cards`, `matrix`, `metrics`, `phones`, `image`, `embed` — copy an existing one as a starting point.

## Deploy to GitHub Pages (repo `nhuvuong68.github.io`)
1. Delete the old HTML5 UP files (`index.html`, `port*.html`, `assets/`), but **keep `images/`**.
2. Copy this folder's contents into the repo root.
3. `git add -A && git commit -m "New portfolio" && git push`
4. The site updates at https://nhuvuong68.github.io within a minute or two.

Preview locally: `python -m http.server 8000`, then open http://localhost:8000
