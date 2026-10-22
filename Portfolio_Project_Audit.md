# Portfolio Project Audit

Repository status update October 23, 2026: the user subsequently authorized replacing the old portfolio. The redesign now lives at the repository root, and the previous source is removed. Earlier preservation/scope notes describe the initial separate edition, not the current directory layout. Project evidence and rankings remain applicable. Page rendering code is now src/App.jsx; src/main.jsx is the React bootstrap. No commit or push was made by the assistant.

Prepared October 23, 2026. Target: Integration Developer, Pillar5 Pharma Inc., through RCM Technologies Philippines. Format: separate React/Vite website edition.

## Assessment and selection

Reviewed all available authored portfolio content, original DOCX/PDF resumes, the targeted resume, source descriptions and project images, AWS attendance certificate, and the developer's clarifications in this chat. Five detailed case studies were selected for complementary evidence: SEDI, Soil Monitoring, IoT Interactive Platform, VendoLabsPH and Tool Monitoring. CardiHoop remains a compact visual case. Other relevant work appears in a searchable index. Selection is based on job fit and available technical detail, not date or product marketing.

The website represents a broader engineering record than the two-page resume. The experience section retains the two roles requested by the user. Earlier instructor and apprentice roles were reviewed and recorded in this audit without relabeling them as Test Development Engineer or Firmware Engineer employment.

This repository is a React presentation site, not the implementation repository for the MQTT, API, firmware or database projects it describes. No backend source, firmware source, automated test suite, protocol captures, root-cause reports or engineering test results were found in the supplied folders. Explicit candidate-authored descriptions support attributable claims; they are not independent code or employment verification. Screenshots establish visible interfaces, not scale, operating reliability or personal authorship by themselves.

## Source register

All relative portfolio paths below resolve against `C:/Users/Jef/Desktop/REACTPROJECTS/jef-portfolio/jefrey-portfolio/`.

| ID | Source | Contents and evidentiary limits |
|---|---|---|
| R1 | `C:/Users/Jef/Desktop/jefresume/JEFREYTBONYADRESUME.docx` | Newer resume file dated August 6, 2026; paragraphs, text boxes and hyperlink relationships extracted. VendoLabsPH API, Postman, validation, freelance and employment details. |
| R2 | `C:/Users/Jef/Desktop/jefresume/JEFREYTBONYADRESUME.pdf` | Older resume file dated May 20, 2026; all four pages of text and link annotations extracted. Broader legacy project list, RNM IT / Programmer title, manufacturing context, contact details. |
| P1 | `src/data/projects.js` | Tool Monitoring, Cardihoop, SEDI, Soil Monitoring; commented BMI entry reviewed but treated as weaker evidence for specific sensor models. All project demo URLs are commented placeholders. |
| P2 | `src/data/businessWebsites.js` | Company Profile Website, Service Landing Page, Business Portfolio Website; technologies, descriptions and named URLs. |
| P3 | `src/components/About.jsx` | Device/web/database integration; AWS EC2, Linux, databases and MQTT broker deployment statements. |
| P4 | `src/components/Skills.jsx` | Python, Node.js, PHP, MySQL, WebSocket, MQTT, C/C++, Arduino, ESP32, Raspberry Pi, AWS, Git, Vercel and hosting. |
| P5 | `src/components/Hero.jsx` | General web/IoT/cloud positioning. Decorative proficiency percentages are not measured outcomes and were not reused. |
| P6 | `src/components/Contact.jsx` | Email, exact LinkedIn link, Philippines/remote availability; no confirmation of US-hour availability. |
| P7 | `src/components/Projects.jsx`, `BusinessWebsites.jsx`, `Navbar.jsx` | Presentation of project claims, candidate name, inactive resume download, rendering of selected data. No integration implementation or tests. |
| P8 | `src/App.jsx`, `src/main.jsx`, `src/App.css`, `src/index.css`, `index.html`, `package.json`, lockfile, Vite/ESLint config, README | React/Vite presentation application. README is starter documentation, not an integration workflow or authored engineering report. No unit-test script or testing framework evidenced. Styles/configuration were inventoried; not treated as backend proof. |
| I1 | `src/assets/projects/cardihoop.jpeg` | ECG dashboard, records, abnormal-reading flags. Screenshot counts do not establish users served, diagnostic accuracy or clinical validation. |
| I2 | `src/assets/projects/sedi-dashboard.jpg` | System health, online/offline sensors, alerts, multi-location views. Displayed figures are UI evidence, not validated fleet size or performance metrics. |
| I3 | `src/assets/projects/tool-monitoring-system.png` | QR kiosk login, scanner status and instructions. Supports interface existence, not automated-test coverage. |
| I4 | `src/assets/projects/soil-monitoring.jpeg` | Soil readings, historical charts, threshold settings, controls. Shows interface features, not retry behavior. |
| I5 | `src/assets/projects/pond.jpeg`, `bmi-kiosk.jpeg`, `company-website.jpeg`, `service-website.jpeg` | All visually show the AquaGuard pond dashboard. Filenames are misleading; they cannot verify BMI or corporate-site implementation. AquaGuard authorship/protocol/backend details need clarification. |
| I6 | `src/assets/projects/website.png`, `landing-page.png`, `service-website.png` | Innovation Central PH company site, React development landing page, Luma Interior Studio portfolio. Business-site visuals support layout work; advertised company services do not establish the candidate's personal STM32, PCB or testing achievements. |
| I7 | `src/assets/profile.png`, `hero.png`, `logo.png`, React/Vite assets and public icons | Presentation/identity assets inventoried; no substantive employment or integration evidence inferred. |
| C1 | `C:/Users/Jef/Desktop/jefresume/aws cert.png` | Visually reviewed: AWSome Day Online Conference Certificate of Attendance, Jefrey Bonyad, July 11, 2024. Not an AWS professional certification. |
| U1 | User clarification in this chat, October 22, 2026 | Explicit candidate-supplied LinkedIn content: Web, IoT & Embedded Systems Developer, Innovation Central PH, Full-time, January 2023 - Present, Philippines/Remote; Information Technology Specialist, RNM Dynamics Philippines, Full-time, December 2019 - June 2023. User requested focus on these two roles. |
| U2 | User project clarification in this chat, October 22, 2026 | IoT Interactive Platform, November 2025 - January 2026: developed web learning platform, WiFi/GSM/LoRa/BLE tracks, real hardware/live dashboards, guided exercises for MQTT, sensors, dashboard control, RFID, SMS and OTA; HTML/CSS/JavaScript/MQTT/WebSockets/ESP32. URL intentionally omitted at user request. |
| U3 | User SEDI clarification in this chat, October 22, 2026 | Dam Monitoring System: multi-site geophone/turbidity/water-level dashboard, alerts/charts/system health; user explicitly built MQTT backend using Python, set it up on AWS server, and created the dashboard. No date supplied. |
| U4 | User VendoLabsPH clarification and HTTP check, October 22, 2026 | Official candidate-supplied URL https://vendolabsph.com; user explicitly says website has no MQTT implementation. Direct HTTPS GET returned HTTP 200, page title “VendoLabPH | Smart Controller Boards for Vendo Machines.” This verifies a matching live website, not its private API implementation. |


| R3 | `C:/Users/Jef/Desktop/jefresume/Integration_Developer_Resume.docx` and `.pdf` | Targeted resume created earlier; read in full as supporting synthesis. Original R1/R2 and direct clarifications remain underlying evidence. |
| U5 | Current-task developer clarification, October 23, 2026 | “The vending controller can use MQTT to transfer sales data to the mobile app, but it is not included on my work contribution so focus on the REST API with the VendoLabsPH website.” Other projects should show MQTT. This overrides the initial task's broad suggestion that all Vendo components might belong to the candidate's work. |
| W1 | https://vendolabsph.com/ and https://vendolabsph.com/docs | Rechecked October 23, 2026: HTTP 200 and matching VendoLabPH controller-board title. Rendered pages inspected. Site shows controller hardware, connected product context and generic machine sequences; detailed pinouts/wiring/troubleshooting/firmware guides are marked planned. Public marketing is not proof of this candidate's controller implementation. |
| W2 | https://vendolabsph.com/images/product-spotlight/vendocore-board.webp | Image discovered on the rendered public homepage and retained through the browser asset bundle. Included with an explicit product-context caption, not as proof of hardware contribution. |

Portfolio code and presentation/configuration files were reviewed or inventoried across all authored sources; dependencies and Git internals are not personal engineering evidence. All 11 project images were visually reviewed during the shared audit. Identity/logo/decorative assets were inventoried, not treated as technical achievements. Misnamed pond images were excluded from BMI and corporate website evidence.

## Scoring criteria and evidence status

Scores assess available project evidence: 0 = absent; 1 = incidental; 2 = limited; 3 = relevant; 4 = strong; 5 = unusually direct/detailed. Overall is a holistic job-fit assessment, not an average or skill proficiency percentage.

Each cell has a status: **V** = explicit source evidence (original file or separately identified developer statement); **S** = supported but needs clarification; **N** = not evidenced. User descriptions U1-U5 are distinguished from inspected code. A 0N does not mean lack of ability. Error scores may cover validation/alerts; they do not imply failed-call recovery. Crucially, the testing column scores software/integration testing only: physical actuation, control automation and learning exercises are not awarded testing points without test evidence. No automated-test achievement was found.

IA = Integration architecture; M = MQTT/Messaging (includes WebSocket messaging); API = API communication; SW = Software development; E = Error handling; T = Software/integration testing; O = Monitoring/troubleshooting; R = Overall relevance. Logical architecture means described component integration, not a verified deployed infrastructure diagram.

## Complete project assessment matrix

| Rank | Project | IA | M | API | SW | E | T | O | R | Evidence and decision |
|---:|---|---|---|---|---|---|---|---|---|---|
| 1 | Project SEDI Dashboard / Dam Monitoring System | 5V | 5V | 0N | 4V | 1S | 0N | 5V | 5V | Featured. P1/I2/U3 explicitly establish Python MQTT backend, AWS deployment and a multi-site diagnostic dashboard. Strongest direct backend/messaging/monitoring combination. Alert visibility is not error recovery. |
| 2 | Soil Monitoring System | 4V | 4V | 0N | 4V | 1S | 0N | 4V | 4V | Featured. P1/I4 document RS485 sensor integration, SIM-based MQTT, PHP/MySQL, thresholds and charts. Adds field-protocol breadth. No Modbus, broker topology or automated tests inferred. |
| 3 | IoT Interactive Platform | 4V | 4V | 0N | 4V | 0N | 0N | 3V | 4V | Featured. U2 supports a personally developed ESP32/web learning environment, MQTT/WebSockets and WiFi/GSM/LoRa/BLE tracks with guided activities. Good documentation and protocol breadth; no formal test automation. |
| 4 | VendoLabsPH Product Management and Customer Website | 4V | 0N | 5V | 5V | 2V | 3V | 1V | 4V | Featured. R1 supports React/Laravel CRUD APIs, MySQL model, upload validation and Postman testing. U5 explicitly excludes controller/mobile MQTT from personal contribution; W1 confirms live domain/product context only. |
| 5 | Tool Monitoring System | 4V | 4V | 0N | 4V | 2V | 0N | 4V | 4V | Featured. R1/R2/P1/I3 establish browser-to-Pi WebSocket control, QR workflow, transactions and login/return alerts. Adds actuation and logging. No unit tests or acknowledgement/retry behavior documented. |
| 6 | CardiHoop ECG Monitoring System | 4V | 4V | 0N | 4V | 0N | 0N | 4V | 4V | Compact visual case. R1/R2/P1/I1 establish ESP32/MQTT/Python/inference/database/dashboard flow. Strong alternate, kept visible beyond the five detailed studies; overlaps SEDI messaging/Python. No clinical validation or test framework. |
| 7 | IoT Monitoring Dashboards | 3V | 3V | 0N | 3V | 0N | 0N | 3V | 3V | Compact index; R2 broad project category: MQTT, databases, cloud and automation. Less specific than selected named projects; possible overlap, not counted as an additional delivered system. |
| 8 | Smart Aquaponics / NPK Monitoring | 3V | 1S | 0N | 3V | 0N | 0N | 3V | 3V | Compact index; R2 agriculture sensors, data logging and visualization. Do not assume identical to Soil Monitoring; excluded because protocol and individual contribution details are thinner. |
| 9 | River Monitoring and Forecasting System | 3V | 2V | 0N | 3V | 0N | 0N | 3V | 3V | Compact index; R2 hardware, communication and dashboard. Forecasting method/accuracy not described. Do not merge with SEDI without confirmation. |
| 10 | BMI Monitoring System / BMI Monitoring Kiosk | 3V | 0N | 0N | 3V | 0N | 0N | 2V | 3V | Compact index; R1/R2 Raspberry Pi, Python, height/weight inputs, automated BMI, digital records. P1 commented sensor details weaker; mislabeled image is not BMI proof. |
| 11 | Centralized Oven Controller | 2V | 0N | 0N | 3V | 0N | 0N | 2V | 3V | Compact index; R2 production equipment control and monitoring. Industrial relevance but no protocol, implementation, testing or safety validation details. |
| 12 | ESD Monitoring System | 1S | 0N | 0N | 2S | 0N | 0N | 2V | 2V | Compact index; R2 electrostatic-discharge monitoring in electronics/production. Too little detail for strong technical bullets. |
| 13 | Queueing System / Smart Kiosk | 2V | 0N | 0N | 3V | 0N | 0N | 1S | 2V | Compact index; R2 web UI, database and real-time workflow; RNM summary supports queueing work. No named protocol. T is workflow automation. |
| 14 | Service Management System | 2V | 0N | 0N | 3V | 0N | 0N | 1V | 2V | Compact index; R1/R2 PHP/MySQL service records and requests. Covered under RNM rather than repeating in projects. |
| 15 | Internal File Storage System | 1S | 0N | 0N | 2S | 0N | 0N | 0N | 2V | Compact index; R1/R2 RNM company system; no specific architecture or protocol. Covered under RNM. |
| 16 | Pharmacy Sales and Inventory System | 2V | 0N | 0N | 3V | 0N | 0N | 2V | 2V | Compact index; R2 products, sales, transactions and admin. No manufacturing, RAM API, regulated-system validation or pharmaceutical integration claim justified. |
| 17 | IoT-Based RFID Parking System | 2V | 0N | 0N | 3V | 0N | 0N | 2V | 2V | Compact index; R2 RFID identity, access tracking and database records. No detailed protocol or test evidence. |
| 18 | Electrical Theft Monitoring System | 2V | 0N | 0N | 2V | 0N | 0N | 2V | 2V | Compact index; R2 abnormal-usage detection/reporting. No accuracy, algorithms or reliability evidence. |
| 19 | Irrigation System | 2V | 0N | 0N | 2V | 0N | 0N | 2V | 2V | Compact index; R2 sensor-driven control and monitoring. |
| 20 | Smart Expiry Monitoring System | 1V | 0N | 0N | 2V | 0N | 0N | 2V | 2V | Compact index; R2 expiry records/status/alerts. No interfaces or validation detail. |
| 21 | Waste Segregator System with Machine Learning | 2V | 0N | 0N | 3V | 0N | 0N | 1V | 2V | Compact index; R1/R2 Edge Impulse, camera/UI/predictions and classification feedback. T is inference workflow automation; no model test metrics. |
| 22 | AquaGuard Pond Monitoring System | 2S | 0N | 0N | 2S | 0N | 0N | 3S | 2S | Excluded from personal-work claims; image-only evidence. I5 shows an AquaGuard pond UI, but authorship, stack and contribution are unconfirmed. Four misleading filenames show the same pond dashboard. |
| 23 | Company Profile Website | 0N | 0N | 0N | 3V | 0N | 0N | 0N | 1V | Compact index; P2/I6 responsive HTML/CSS/JS company site. General frontend value, limited integration evidence. |
| 24 | Service Landing Page | 0N | 0N | 0N | 3V | 0N | 0N | 0N | 1V | Compact index; P2/I6 service marketing and responsive UI; lower role relevance. |
| 25 | Business Portfolio Website | 0N | 0N | 0N | 3V | 0N | 0N | 0N | 1V | Compact index; P2/I6 business presentation; lower role relevance. |
| 26 | Jefrey Portfolio React Application | 1V | 0N | 0N | 4V | 0N | 0N | 0N | 1V | Audited as the existing React/Vite portfolio application. Shows component-based frontend development, not an engineering integration backend or unit-test suite. Original retained unchanged. |
| 27 | RNM Company Website | 1S | 0N | 0N | 3V | 0N | 0N | 0N | 1V | Compact index; R1/R2 employment summary. Not assumed identical to any P2 business site; retained within RNM responsibilities. |

Ranks distinguish 27 identified projects/categories, not 27 independently verified deployments. Generic IoT dashboard, aquaponics, river and named monitoring projects may overlap; they are not merged or counted as separate commercial deliveries without confirmation. The compact website card groups the three external business websites and the RNM company website, while this matrix assesses them individually.

## Featured case-study evidence and diagram boundaries

### SEDI

- Implemented contribution: Python MQTT backend, AWS server setup, multi-site dashboard (U3). Geophone/turbidity/water-level readings, 4G/MQTT, alerts, history and health (P1/I2).
- Diagram: telemetry data toward Python backend, then logical data presentation toward dashboard. Backend-to-dashboard transport is unspecified and dashed. No Mosquitto, EMQX, exact topics, QoS, reconnect/session behavior, ingestion database or API type invented.
- Reliability: source-backed alerts, history and health visibility. Offline-state UI is visible; offline recovery and last-will behavior are not established.
- Testing: no project-specific tests or results provided.

### Soil Monitoring

- Implemented contribution: sensor-to-software monitoring, RS485, SIM-based MQTT, PHP/MySQL, threshold alerts and web visualization (P1/I4).
- Diagram: logical sensor/data path; unspecified gateway and ingestion details are not invented. RS485 is an electrical/interface fact, not evidence of Modbus RTU or TCP.
- Reliability: threshold alerts confirmed. Screenshot controls, device status and thresholds do not establish actuator acknowledgement or retry implementation.
- Testing: no calibration, protocol trace, malformed-message test or test framework supplied.

### IoT Interactive Platform

- Implemented contribution: web platform and guided exercises, real hardware/live dashboards, WiFi/GSM/LoRa/BLE tracks, MQTT/WebSockets/ESP32, RFID/SMS/OTA activities (U2). Dates November 2025-January 2026 retained.
- Diagram: component association map with undirected dashed connections, explicitly not a deployment topology. No invented per-radio MQTT route, broker, endpoint assignment or LoRaWAN claim.
- Documentation: guided activities support authored technical materials. The complete exercise files were not supplied for inspection.
- Testing: learning exercises do not establish unit tests, automation frameworks, or production firmware reliability. No OTA rollback/security claim.
- URL omitted at user's explicit request; no screenshot exists in supplied files, so no fictional screenshot is used.

### VendoLabsPH

- Implemented personal contribution: React/Tailwind customer and admin interfaces, Laravel CRUD APIs, MySQL product model (SKU, slug, pricing, inventory/status/images), product-slug pages, image upload/validation, filter/search, frontend API requests and Postman backend testing (R1).
- Architecture: React interfaces ↔ Laravel REST APIs ↔ MySQL. These request/response and product read/write directions follow the explicit API/database description. Product field examples are source-backed; endpoint paths, JSON schema, auth mechanism and status codes are not invented.
- Candidate boundary: user explicitly excluded controller/mobile MQTT from personal work (U5). No broker, publisher/subscriber role, embedded controller, EC2 deployment or vending telemetry is attached to this contribution. General AWS EC2 experience in P3 is not automatically assigned to VendoLabsPH.
- Live domain verified, public site/docs inspected. Public controller image is product context only, clearly captioned. It is not a screenshot of the candidate's backend or a personal hardware photograph. No private admin page was accessed.
- Reliability/testing: upload validation and Postman testing supported; actual test collections, assertion results, retries and missing-data recovery absent. Public docs' planned manuals are not presented as completed authored deliverables.

### Tool Monitoring

- Implemented contribution: QR kiosk/admin workflows, browser-to-Pi WebSocket solenoid control, database transactions, failed-login alerts, late-return monitoring (R1/R2/P1/I3).
- Diagram: browser → Pi → solenoid control, matching explicit direction. Transaction records and admin visibility described separately because writer process/transport is unspecified. No bidirectional acknowledgement implied.
- Reliability: login/return alerts established. No physical safety interlocks, feedback sensor, retry/delivery guarantee or actuator-cycle test invented.
- Testing: no code or test record supplied.

### CardiHoop and compact work

R1/R2/P1/I1 support ESP32/AD8232, MQTT, Python, Edge Impulse, database and web records. Shown as a logical processing sequence, not a packet-level trace. No clinical validation, accuracy metric or regulatory claim. All other project summaries map to R2's Other Projects Developed section, except business websites (P2/I6), Tool/Soil/SEDI (P1), and BMI/waste (R1/R2). The searchable index explains each system's integration relationship rather than presenting unexplained names.

Problem/objective and challenge paragraphs are editorial explanations of the documented system requirements, not invented customer quotations, resolved incidents or measured accomplishments. Outcomes state delivered capabilities; none asserts new quantitative benefits.

## Employment, qualifications and personal contribution

- Innovation Central PH: Web, IoT & Embedded Systems Developer, full-time, January 2023-Present, Philippines/Remote (U1). Current user-supplied official role supersedes original self-employed/freelance labeling for the overlapping period. Do not count it as another separate job.
- RNM Dynamics Philippines: Information Technology Specialist, full-time, December 2019-June 2023, on-site (U1). Supersedes original IT / Programmer and expanded IT Programmer / Full-Stack Web Development and Automation wording. PHP/MySQL web systems, real-time hardware integration, semiconductor automation, IT infrastructure and cross-team work supported.
- Overlap January-June 2023 is preserved as supplied, not silently corrected.
- Earlier roles reviewed: College Instructor, Don Honorio Ventura State University, August-December 2018 (instructional materials); Apprentice Maintenance Engineer, Amkor Technology Philippines, April-July 2018 (KNS MAXUM/8028 setup/troubleshooting/maintenance). Not featured in the experience section per user's earlier instruction to focus on two roles.
- No official Test Development Engineer or Firmware Engineer employment record was provided. Embedded skills do not justify inventing those job titles.
- Education: BS Electronics and Communication Engineering, Don Honorio Ventura State University, 2012-2017. Both October 2017 licensure exam passes retained as passes. AWSome Day certificate is attendance, July 11, 2024; not an AWS professional certification.

## Role-requirement review

| Pillar5 requirement | Evidence and final treatment |
|---|---|
| Integration/adapter flows | Multiple connected-system workflows demonstrated. No proprietary adapter platform or RAM-specific adapter claim. |
| MQTT publish/subscribe | MQTT integration established across SEDI, Soil, IoT platform and CardiHoop. Exact publisher/subscriber assignments, topics and broker configuration absent; diagrams do not invent them. |
| API / RAM API | VendoLabsPH demonstrates REST development/consumption and Postman. RAM API is an unverified learning gap, not listed experience. |
| Failed calls, retries, malformed/missing data | Upload/server validation and visibility are supported. Retry/backoff/idempotency and failed-call recovery are not evidenced. |
| Monitoring, logs and diagnostics | SEDI health/history/alerts, Soil thresholds, Tool transaction records and login/return alerts. No fabricated structured-logging stack. |
| Unit tests | No formal framework or suite evidenced. Postman is named accurately; guided learning is not rebranded testing. |
| Documentation | Authored guided IoT exercises supported. No completed formal test-result package, issue report or production runbook supplied. |
| Non-production testing | API development/testing supported; explicit staging/non-production environment architecture and regulated validation not established. |
| Structured collaboration | RNM cross-team collaboration supported. No invented reporting line to Senior Integration Engineer. |
| Pharmaceutical manufacturing | Prior semiconductor context and pharmacy business software only; no regulated pharmaceutical manufacturing integration claim. |

## Optional future improvements — not implemented

1. Add sanitized real MQTT publisher/subscriber snippets, topic table, payload schemas and broker deployment boundaries for SEDI/Soil. Record actual QoS/session choices rather than examples presented as facts.
2. Add repeatable integration tests for valid/missing/malformed data and a documented disconnect/reconnect experiment, with actual output and limits.
3. Add unit tests to a real Python/adapter repository once supplied; record framework, assertions and results. Do not infer testing from control automation.
4. Export a sanitized Postman collection and actual Vendo API response/error examples, avoiding credentials and customer data.
5. Implement retries only with explicit retryability/idempotency rules, then document verification. This portfolio does not implement or claim that backend feature.
6. Add a real failure investigation covering symptom, reproduction, logs, root cause, fix and retest when a supported example is supplied.
7. Add board/firmware photographs only with confirmed personal contribution and provenance. Vendo public product imagery is contextual.
8. Supply Modbus, CAN or LoRaWAN evidence before adding them. RS485/LoRa alone do not establish those protocols.
9. Confirm US-hour availability independently of the confirmed remote-work status.

## Preservation and deliverable scope

The original portfolio's 38 authored/source/assets/config files were captured by SHA-256 before changes; all editing is confined to the new Integration_Developer_Portfolio subdirectory. No original resume or portfolio content was overwritten, no original site deployed over, and no website/contact message sent. Existing files in dependency and Git directories are excluded from the hash inventory.

The new React/Vite source is editable; production HTML/assets are in dist. The release directory also contains a self-contained HTML with embedded React, CSS, real evidence images and resume, using local font fallbacks without external requests. A ZIP package includes source, build, portable HTML, local evidence, copied resume, packaging helper, audit and change record without node_modules or QA intermediates. The site includes print styling and a browser Print/Save as PDF control; printed pagination was not visually verified. A separately rendered portfolio PDF is not part of this website deliverable. In-app automated embedded-download completion was not verified; the resume is included as a separate PDF in the package.
