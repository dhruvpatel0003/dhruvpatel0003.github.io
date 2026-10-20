# Dhruv Patel — Portfolio

A static portfolio built with HTML, Tailwind CSS (CDN), vanilla JavaScript and Font Awesome.

## Run locally

Open the folder in VS Code and use Live Server, or run:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Add Figma previews

1. In Figma, select the dashboard frame, export as PNG, and save as `assets/images/agentic-dashboard.png`.
2. Export the trade approval/risk review frame as `assets/images/agentic-trade-approval.png`.
3. Copy your shareable Figma prototype URL.
4. Open `portfolioData.js`, find `id: 'agentic-paper-trader'`, and replace `figma: {url:''` with `figma: {url:'https://www.figma.com/proto/...'`.
5. Make sure the Figma link's sharing permissions allow viewers to open it.

Missing images show placeholders. No prototype button appears until a URL is set.

## Add your resume

Copy your real `resume.pdf` into the root of this folder, next to `index.html`.

## Project progress

Edit each project's `lifecycle` entries in `portfolioData.js`. Valid statuses: `completed`, `in-progress`, `not-started`, `on-hold`. The bar counts **completed phases**, not estimated percent of engineering work. Initial status values are illustrative starting points and should be verified against actual deliverables before publishing.

## Research links

Set `url` in each research object only when you have a shareable paper, report, repository or presentation.

## Deploy

Upload the files to a GitHub repository and enable GitHub Pages (Settings → Pages → Deploy from branch). This site uses Tailwind via CDN, which is convenient for a portfolio demo but for production performance consider a compiled Tailwind build.

## Privacy & accuracy

All profile data is public when deployed. Review phone number, GPA, project status, and all descriptions before publishing. Don't list planned work as implemented.
