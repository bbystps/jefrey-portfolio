# Jefrey Bonyad Engineering Portfolio

React/Vite portfolio featuring system integration, MQTT, Python, REST APIs, embedded systems, monitoring and device-control case studies.

## Development

Use Node.js 22.12+ (or another version supported by Vite 8).

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. The site starts at `/`; no special HTML filename or nested project folder is required.

```sh
npm run lint
npm run build
npm run preview
```

## Vercel

This repository is the deployable project root. Keep the existing GitHub connection and use:

- Framework preset: Vite
- Root directory: repository root (leave blank or use `.`)
- Build command: `npm run build`
- Output directory: `dist`

The build creates `dist/index.html`. No environment variables or backend service are needed to display the portfolio. Commit and push the changes to trigger your existing Vercel Git deployment.

## Editing

- `src/App.jsx`: page layout, hero, navigation, search, filters, case studies and experience.
- `src/main.jsx`: React entry point.
- `src/data.js`: project content and capability groups.
- `src/styles.css`: main layout and print styles.
- `src/hero-studio.css`: responsive portrait hero.
- `public/evidence/`: project screenshots, attributed product-context image and portrait.
- `public/Integration_Developer_Resume.pdf`: linked resume.
- `Portfolio_Project_Audit.md`: project evidence and rankings.
- `Portfolio_Changes.md`: redesign history and repository migration.

The previous portfolio has been replaced at the user's request. Earlier portable HTML and source ZIP snapshots remain outside the repository in `C:/Users/Jef/Desktop/jefresume/Portfolio_Exports`; these are not deployment inputs.

The site uses Google Fonts with local fallbacks and includes print styles. Claims remain grounded in supplied project evidence.
