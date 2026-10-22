# Portfolio Changes

## Repository replacement October 23 2026

At the user's explicit request, promoted the redesign to the Git-connected repository root and removed the previous source and redundant nested project directory. This supersedes earlier preservation statements below. Git history, package/lock files, dependencies and GitHub configuration were preserved. No commit, push or deployment was performed.

The canonical entry is now index.html, generating dist/index.html with the root Vite configuration. React mounting is in src/main.jsx and the page component is in src/App.jsx for clean development refresh. README describes root commands and Vercel settings. Prior portable HTML/ZIP exports remain outside the repository in Desktop/jefresume/Portfolio_Exports.

Migration validation passed: Vite production build, ESLint with no reported issues, root-entry asset checks, and browser review at `/`. The full-color portrait loads, decorative label dots remain removed, and all five case studies are present. Local preview runs at http://127.0.0.1:5176/. Deployment itself remains for the user's Git push.

## Hero redesign October 23 2026

Replaced the split text/dashboard hero with a centered editorial composition using the existing `src/assets/profile.png` portrait, copied unchanged as `public/evidence/jefrey-portrait.png`. Oversized outlined lettering, a subtle grid, schematic connector decoration, four discipline annotations, and a slightly rotated photograph create a more personal engineering identity. Introduction and actions sit below the visual rather than beside it. Photo monochrome-to-color hover is CSS presentation; no image-generation or portrait alteration was used. The connector artwork represents practice areas, not a new system architecture or live telemetry.

Added dedicated `src/hero-studio.css` with mobile, reduced-motion and print handling. Existing case studies and evidence remain unchanged. Production build and original-file hash verification passed. Desktop at 1280px and mobile at 390px were visually checked with no horizontal overflow and the portrait loaded successfully. Regenerated portable HTML and editable-source ZIP. The user-started local preview remains available.

Prepared October 23, 2026 for Integration Developer opportunities, including Pillar5 Pharma Inc. through RCM Technologies Philippines.

## Result

Created a separate React/Vite engineering portfolio in Integration_Developer_Portfolio. The original portfolio stays unchanged. The new edition uses the existing stack and available dependencies; it does not introduce a new framework or require hosting migration.

## Content and evidence

- Repositioned around Software & Systems Integration Engineer with Embedded Systems, MQTT, API Integration, Python and Backend Development. Official employment titles remain Web, IoT & Embedded Systems Developer at Innovation Central PH and Information Technology Specialist at RNM Dynamics Philippines, with the supplied dates/status.
- Reassessed all 27 projects/categories against integration architecture, messaging, APIs, software, error handling, actual software/integration testing, diagnostics and overall relevance. No testing credit is awarded merely for system automation.
- Featured SEDI, Soil Monitoring, IoT Interactive Platform, VendoLabsPH and Tool Monitoring. CardiHoop has a compact visual case, and the searchable index retains older agriculture, industrial, access, business-system, ML and frontend projects.
- Each featured case includes problem/objective, contribution, stack, logical architecture, workflow, challenge, reliability/testing evidence and outcome. Engineering notes expand without leaving the page.
- Five new architecture diagrams use solid explicit links and dashed logical relationships. A VendoLabsPH request/response sequence explains the product API and database workflow. Unknown transports, MQTT endpoint roles and broker topology are not invented. IoT tracks are an association map rather than a false universal radio-to-MQTT deployment.
- VendoLabsPH is REST/API/MySQL work only. The user's latest clarification excludes controller-to-mobile MQTT from personal contribution. No Vendo AWS EC2 deployment is inferred from general AWS skills.
- Reverified https://vendolabsph.com/ (HTTP 200, matching title) and inspected public homepage/docs. Added a real public controller image with an explicit product-context caption, not a hardware contribution claim. Planned public technical guides are not treated as authored completed manuals.
- Retained four original technical screenshots. No fictional screenshot, dashboard counter interpreted as a result, measured reliability claim or test output was created. IoT platform URL remains omitted as requested.
- Technical practice focuses on actual Postman testing, validation, monitoring, transaction records, guided documentation and cross-team engineering. Missing unit tests, retries, incident reports and regulated experience are described accurately.

## Design and interaction

- Navy/charcoal, white and restrained teal; modern typography with local font fallbacks; editorial grid, readable hierarchy, consistent case-study structure and generous spacing.
- Desktop/mobile navigation, keyboard skip link, visible focus states, semantic headings, descriptive image alternatives and reduced-motion support.
- Project filters, case-study jump links, expandable notes, search with no-results state, full-size original image links, contact/professional links and local resume PDF.
- A4 print stylesheet includes every featured/index project even after filters; engineering notes open for printing. Browser Print/Save as PDF control included. External font service is optional; Arial fallback remains readable.
- Production build uses relative asset paths and can be served beneath a subdirectory. An additional self-contained HTML embeds the bundled React app, CSS, five evidence images and resume PDF, with no external font request. The portable edition uses download links for embedded images/PDFs. No analytics, fake live feeds, backend, credentials or contact form submission.

## Validation

- Final Vite production build passed. Static build asset references and five evidence-image files checked; copied resume PDF matches the earlier resume byte for byte.
- Original portfolio preservation passed: all 38 recorded files match SHA-256 hashes. Git status shows only the new portfolio directory.
- Matrix completeness passed: 27 scored projects/categories. Source encoding checked after edits.
- Desktop browser review at 1280 pixels and mobile review at 390 pixels passed with no horizontal overflow. Hero, navigation and case-study layouts inspected; mobile diagrams stack vertically.
- MQTT filter returns SEDI/Soil/IoT Platform; API filter returns VendoLabsPH; device-control filter returns Tool Monitoring. All restores five cases. Cross-section case-study links reset filtering so their targets remain visible.
- Individual notes and expand/collapse-all controls checked; five engineering-note sections expand. Search checked with RFID and an unmatched query; correct results and empty state shown.
- Production/portable pages render expected role titles, dates, screenshots, case studies and source notes. No errors/warnings recorded in the clean portable browser tab. Earlier development-only HMR errors were corrected before the final successful build.
- Portable HTML checked in a static browser preview: CSS parsed (237 rules), no external stylesheet links, all displayed image sources embedded, filters and notes working. The first portable CSS removal defect was caught visually and corrected before packaging.
- Embedded resume content is present, and the standalone PDF is included separately in the ZIP. The in-app browser's automated download check timed out; actual download completion is unverified there. No download-success claim is made. Image-link and external social/contact actions were not exhaustively activated.
- A4 print styles and before/after-print expansion logic reviewed. A rendered print/PDF export was not visually inspected; pagination can vary by browser. Website format is the primary deliverable, with Print/Save as PDF available.
- Desktop/mobile preview screenshots saved as QA evidence. Temporary preview servers stopped at handoff; the portable HTML needs no running server.

## Original preservation

SHA-256 hashes of the 38 original authored files are retained in qa/original_hashes.json and rechecked after implementation. The original portfolio source, assets, package files and resume files are unchanged. Only the new subdirectory contains the redesign. No changes were published to the original hosted portfolio.

## Run and deliverables

Open release/Integration_Developer_Portfolio.html directly in a modern browser, or see README.md for npm development/build/preview commands. Integration_Developer_Portfolio.zip contains editable source, dist build, portable HTML, local evidence, copied targeted resume, packaging helper, README, Portfolio_Project_Audit.md and this change record; dependencies/QA files are excluded.

## Hero refinement October 23 2026

Removed the four SVG endpoint dots overlapping the discipline labels and changed the portrait to full color by default. Retained the subtle hover zoom. Rebuilt the web edition and regenerated portable HTML and source ZIP.
