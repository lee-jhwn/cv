# lee-jhwn.github.io/cv

Personal website of Jihwan Lee. Plain HTML/CSS/JS, no build step. Pushing to `master`
publishes `site/` to the `gh-pages` branch (see `.github/workflows/deploy.yml`).

## Updating

| What | Where |
|---|---|
| Papers | `site/assets/pubs.js`; or regenerate from the CV: `python3 tools/cv2pubs.py path/to/cv.tex` |
| News, research themes, demos | `site/assets/content.js` |
| Bio, links, background | `site/index.html` |
| CV PDF | replace `site/assets/Jihwan_Lee_CV.pdf` |
| Colors, layout | `site/assets/site.css` |

`cv2pubs.py` keeps links already in `pubs.js` (matched by title) and adds arXiv links on
its own. Add code/demo/weights links, or a link for a newly published paper, in `pubs.js`.

## Preview locally

```bash
python3 -m http.server 8000 --directory site
```

Then open http://localhost:8000.
