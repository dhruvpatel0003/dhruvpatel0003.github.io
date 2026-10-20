<div align="center">

# Dhruv Patel — Developer Portfolio

**Software Engineer · AI Systems · Product Engineering · Research**

A personal portfolio showcasing full-stack software development, AI-assisted systems, product planning, systems engineering, and empirical software engineering research.

[**View Portfolio**](https://dhruvpatel0003.github.io/) · [**GitHub**](https://github.com/dhruvpatel0003) · [**LinkedIn**](https://www.linkedin.com/in/dhruv-patel-4033a0255/) · [**Email**](mailto:dhruvpatel150203@gmail.com)

</div>

> **Deployment note:** The portfolio link above is the expected GitHub Pages address for the `dhruvpatel0003.github.io` repository. It will work once GitHub Pages is enabled and deployment succeeds.

---

## About

I'm a software engineer and M.S. Software Engineering student at **Stevens Institute of Technology**, with previous software engineering experience at **S&P Global**. My interests include full-stack applications, scalable APIs, AI/LLM-integrated workflows, software architecture, and research-informed engineering.

This website presents not just project outcomes, but also the **engineering process** behind ongoing work: requirements, feasibility, design, implementation, testing, and evaluation.

## Portfolio highlights

- **Project showcase:** software projects and products at different development stages.
- **Engineering lifecycle tracking:** expandable phase-by-phase project progress, with explicit status labels.
- **Figma design previews:** selected screenshots of the Agentic Paper Trader desktop prototype, plus a link to the full Figma prototype when available.
- **Research and case studies:** academic work presented separately from implemented software.
- **Professional background:** technical skills, industry experience, education, resume, and contact links.
- **Responsive interface:** dark-themed, mobile-friendly layout with project filters and detail views.

## Featured software and product work

| Project | Focus | Current portfolio status |
| --- | --- | --- |
| [Agentic Paper Trader](https://github.com/sandhya1631/agentic-paper-trader) | AI-assisted paper trading, risk checks, human approval, and auditability | In development |
| [EduResumePRO](https://github.com/dhruvpatel0003/eduResumePRO) | React/Node.js application, observability, containers, CI/CD | Project work |
| ChatCollab — Local Human–AI Collaboration | Exploring a local adaptation with Ollama and role-based AI agents | Local adaptation planned |
| Local-First AI Template Maker | Brand-aware, editable templates and local AI; future SaaS path | Requirements in progress |
| Bakery ERP & Wholesale Platform | Bakery operations, orders, inventory, wholesale distribution; SaaS vision | Discovery and market research |

*Project statuses describe the work as represented in the portfolio and should be updated as milestones are verified. Planned features are not claimed as implemented.*

## Research and systems engineering

| Work | Type | Focus |
| --- | --- | --- |
| **SpecMine: Specification Completeness & Verifiability** | Ongoing empirical study | Relationships between specification characteristics and downstream pull-request changes |
| **Ariane 5 — Systems Engineering Failure Analysis** | Course case study | Stakeholders, requirements, verification, validation, and corrective planning |
| **Verification vs. Validation** | SYS605 individual study | Distinguishing conformance to specifications from meeting stakeholder needs |

These are described as **research in progress or academic case studies**, not as peer-reviewed publications.

## Figma prototype previews

The Agentic Paper Trader design section is intended to show **two representative desktop frames**:

1. Portfolio Dashboard
2. Trade Approval / Risk Review

To display your own designs:

1. Export each Figma frame as a PNG.
2. Save the files to:
   - `assets/images/agentic-dashboard.png`
   - `assets/images/agentic-trade-approval.png`
3. In `portfolioData.js`, locate the project with `id: 'agentic-paper-trader'`.
4. Set its `figma.url` to the shareable prototype URL.
5. Verify that Figma's sharing permissions allow viewers to open it.

The site uses placeholders when screenshots are missing, and only displays the prototype link when a URL has been configured.

## Website tech stack

| Layer | Technology |
| --- | --- |
| Structure | HTML5 |
| Styling | Tailwind CSS (CDN) and custom CSS |
| Behavior | Vanilla JavaScript |
| Icons | Font Awesome |
| Content | `portfolioData.js` |
| Hosting | GitHub Pages (recommended) |

**No backend, database, or build process is required** to run this portfolio.

## Project structure

```text
my_portfolio/
├── index.html
├── portfolioData.js
├── README.md
├── resume.pdf                   # Add your own PDF
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    └── images/
        ├── agentic-dashboard.png       # Add your Figma export
        
```

## Run locally

Clone the repository:

```bash
git clone https://github.com/dhruvpatel0003/dhruvpatel0003.github.io.git
cd dhruvpatel0003.github.io
```

Start a local server (Python 3):

```bash
python -m http.server 8000
```

Visit **http://localhost:8000**. Alternatively, use the **Live Server** extension in VS Code.

> If you chose a different repository name, replace the clone URL and folder name accordingly.

## Customize the portfolio

Most site content lives in **`portfolioData.js`**:

| Content | Where to edit |
| --- | --- |
| Name, bio, social links, resume path | `profile` |
| Project descriptions, technologies, links | `projects` |
| Phase-by-phase progress | Each project's `lifecycle` |
| Figma URL and image paths | Agentic Paper Trader's `figma` |
| Research titles and document links | `research` |
| Skills, experience, education | Corresponding arrays |

Lifecycle statuses supported by the site include `completed`, `in-progress`, `not-started`, and `on-hold`. The displayed progress represents **completed phases / total phases**, not an estimate of total engineering effort.

## Deploy on GitHub Pages

1. Create a **public** repository named `dhruvpatel0003.github.io` (or use another name for a project site).
2. Push the portfolio files, with `index.html` in the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose **`main`** and **`/ (root)`**, then save.
6. After deployment, test the public site in a private/incognito browser window.

For a repository named `dhruvpatel0003.github.io`, the default address is **https://dhruvpatel0003.github.io/**. For a repository named `my-portfolio`, it is typically **https://dhruvpatel0003.github.io/my-portfolio/**.

## Before publishing

- [ ] Add the final `resume.pdf`.
- [ ] Export the two real Figma screenshots and configure the prototype URL.
- [ ] Verify GitHub, LinkedIn, email, and project links.
- [ ] Confirm project statuses and technology descriptions are accurate.
- [ ] Remove private keys, `.env` files, confidential materials, and non-public academic work.
- [ ] Decide which personal contact details you want publicly visible.
- [ ] Test desktop and mobile layouts and inspect browser console errors.

## Contact

**Dhruv Patel**  
Hoboken, New Jersey  
[GitHub](https://github.com/dhruvpatel0003) · [LinkedIn](https://www.linkedin.com/in/dhruv-patel-4033a0255/) · [Email](mailto:dhruvpatel150203@gmail.com)

---

<div align="center">

*Built to document ongoing learning, engineering decisions, and the evolution of real projects.*

</div>
