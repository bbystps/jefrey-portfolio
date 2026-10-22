import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { cases, capabilities, otherWork, sources } from './data';
import './styles.css';
import './hero-studio.css';

const asset = (name) => globalThis.__PORTFOLIO_ASSETS__?.[name] ?? `${import.meta.env.BASE_URL}evidence/${name}`;
const resume = globalThis.__PORTFOLIO_RESUME__ ?? `${import.meta.env.BASE_URL}Integration_Developer_Resume.pdf`;

function Arrow({ diagonal = false }) {
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">{diagonal ? <path d="M6 18 18 6M6 6h12v12" /> : <path d="M4 12h15m-6-6 6 6-6 6" />}</svg>;
}
function Mark() {
  return <svg viewBox="0 0 42 42" className="brand-mark" fill="none" aria-hidden="true"><rect x="1" y="1" width="40" height="40" rx="9" stroke="currentColor" /><path d="M11 13h10v13a5 5 0 0 1-10 0m17-13v17m0-17h3a4 4 0 0 1 0 8h-3m0 0h3a4.5 4.5 0 0 1 0 9h-3" stroke="currentColor" strokeWidth="2" /></svg>;
}
function Badges({ items }) {
  return <ul className="badges" aria-label="Technologies">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}
function SectionHeading({ number, label, title, children }) {
  return <header className="section-heading"><p className="eyebrow"><span>{number}</span> / {label}</p><div><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div></header>;
}
function Architecture({ project }) {
  return <figure className="architecture" aria-label={`${project.title} architecture`}>
    <div className="figure-heading"><span>System architecture</span><span className="mono">LOGICAL VIEW</span></div>
    <div className="flow">{project.nodes.map(([title, detail], index) => <React.Fragment key={title}>
      {index > 0 && <div className={`connector ${project.edges[index - 1].type}`}>
        <span>{project.edges[index - 1].label}</span>
        <svg viewBox="0 0 100 18" preserveAspectRatio="none" aria-hidden="true"><path d="M3 9h94" />{project.edges[index - 1].direction !== 'none' && <path className="arrow-tip" d="m91 4 6 5-6 5" />}{project.edges[index - 1].direction === 'both' && <path className="arrow-tip" d="m9 4-6 5 6 5" />}</svg>
      </div>}
      <div className="flow-node"><span className="node-index">{String(index + 1).padStart(2, '0')}</span><strong>{title}</strong><small>{detail}</small></div>
    </React.Fragment>)}</div>
    <figcaption><span className="legend-line" /> Explicit connection <span className="legend-line dashed" /> Logical relationship <p>{project.diagramNote}</p></figcaption>
  </figure>;
}
function CaseStudy({ project, expanded, onToggle, hidden }) {
  return <article id={project.id} className="case-study" hidden={hidden}>
    <div className="case-rail"><span>{project.number}</span><span>{project.domain}</span></div>
    <div className="case-body">
      <div className="case-heading"><div><p className="eyebrow">{project.subtitle}</p><h3>{project.title}</h3></div>{project.link && <a className="text-link" href={project.link} target="_blank" rel="noreferrer">Live website <Arrow diagonal /></a>}</div>
      <p className="case-summary">{project.summary}</p>
      {project.period && <p className="period mono">{project.period}</p>}
      <Badges items={project.tags} />
      <div className={`case-overview ${project.image ? '' : 'without-image'}`}>
        <div className="contribution"><h4>My contribution</h4><p>{project.role}</p><h4>Engineering outcome</h4><p>{project.outcome}</p></div>
        {project.image ? <figure className={`evidence-image ${project.id === 'vendolabs' ? 'product-context' : ''}`}><a href={asset(project.image)} target="_blank" rel="noreferrer" aria-label={`Open full-size ${project.title} image`}><img src={asset(project.image)} alt={project.alt} loading="lazy" /></a><figcaption>{project.caption}</figcaption></figure> : <aside className="platform-tracks"><p className="eyebrow">Learning tracks</p><div>{['WiFi', 'GSM', 'LoRa', 'BLE'].map((x,i) => <p key={x}><span className="mono">0{i+1}</span><strong>{x}</strong><Arrow /></p>)}</div><small>Guided activities with real hardware and live dashboards. Project URL omitted at my preference.</small></aside>}
      </div>
      <Architecture project={project} />
      {project.id === 'vendolabs' && <figure className="api-sequence"><div className="figure-heading"><span>Product API communication sequence</span><span className="mono">SOURCE-BACKED OPERATIONS</span></div><ol><li><strong>React interface → Laravel API</strong><span>Request product records or submit a CRUD operation.</span></li><li><strong>Laravel API ↔ MySQL</strong><span>Read or write the product model; image upload includes validation.</span></li><li><strong>Laravel API → React interface</strong><span>Return application data for product and administration views.</span></li></ol><figcaption>Logical request / response summary. Exact endpoint paths, payload schemas, HTTP status codes, and request timing were not supplied.</figcaption></figure>}
      <details className="engineering-notes" open={expanded} onToggle={event => { if (event.currentTarget.open !== expanded) onToggle(project.id, event.currentTarget.open); }}>
        <summary><span>Engineering notes <small>Problem · workflow · reliability · validation</small></span><span className="toggle-sign" aria-hidden="true">{expanded ? '−' : '+'}</span></summary>
        <div className="notes-content">
          <div className="notes-grid"><div><h4>Engineering problem</h4><p>{project.problem}</p></div><div><h4>Project objective</h4><p>{project.objective}</p></div></div>
          <div className="workflow"><h4>Integration workflow</h4><ol>{project.workflow.map(x => <li key={x}>{x}</li>)}</ol></div>
          <div className="notes-grid"><div><h4>Technical challenge</h4><p>{project.challenge}</p></div><div><h4>Error handling & reliability</h4><p>{project.reliability}</p></div></div>
          <div><h4>Testing, debugging & validation evidence</h4><p>{project.testing}</p></div>
          <p className="evidence-reference"><strong>Evidence:</strong> {project.evidence.join(' / ')}</p>
        </div>
      </details>
    </div>
  </article>;
}
export default function App() {
  const [filter, setFilter] = useState('All projects');
  const [expanded, setExpanded] = useState(new Set());
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    let closedDetails = [];
    const prepare = () => {
      closedDetails = [...document.querySelectorAll('details:not([open])')];
      closedDetails.forEach(element => { element.open = true; });
    };
    const restore = () => closedDetails.forEach(element => { element.open = false; });
    window.addEventListener('beforeprint', prepare);
    window.addEventListener('afterprint', restore);
    return () => { window.removeEventListener('beforeprint', prepare); window.removeEventListener('afterprint', restore); };
  }, []);
  const filters = ['All projects', 'MQTT', 'APIs', 'Device control'];
  const matchingWork = otherWork.filter(x => x.join(' ').toLowerCase().includes(search.toLowerCase()));
  function toggle(id, open) {
    setExpanded(current => { const next = new Set(current); if (open) next.add(id); else next.delete(id); return next; });
  }
  function followCaseLink(event) {
    const hash = event.target.closest('a')?.getAttribute('href');
    if (filter !== 'All projects' && cases.some(project => `#${project.id}` === hash)) {
      flushSync(() => setFilter('All projects'));
    }
  }
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="header-inner"><a className="brand" href="#overview" aria-label="Jefrey Bonyad overview"><Mark /><span>JEFREY BONYAD<small>ENGINEERING PORTFOLIO</small></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="primary-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
      <nav id="primary-nav" className={menuOpen ? 'open' : ''} aria-label="Main navigation">{[['Capabilities','capabilities'],['Selected work','selected-work'],['Engineering practice','practice'],['Experience','experience']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Get in touch <Arrow diagonal /></a></nav>
    </div></header>
    <main id="main" onClickCapture={followCaseLink}>
      <section id="overview" className="hero hero-studio">
        <div className="studio-shell">
          <div className="studio-meta"><p className="eyebrow">JEFREY BONYAD / ECE, ECT</p><span className="mono">ENGINEERING PORTFOLIO — 01</span><span className="mono">PHILIPPINES / REMOTE</span></div>
          <header className="studio-heading"><p className="eyebrow">Connecting hardware, software, and everything between.</p><h1>Software & Systems<br /> <span>Integration Engineer</span></h1></header>
          <div className="portrait-stage">
            <span className="stage-word" aria-hidden="true">INTEGRATE</span>
            <svg className="studio-traces" viewBox="0 0 1200 440" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M165 105H350L450 205H530M1030 125H850L750 225H670M180 315H340L450 250M1030 320H860L750 265"/></svg>
            <div className="discipline discipline-device"><span className="mono">01 / EMBEDDED</span><strong>At the device.</strong><p>ESP32 · Raspberry Pi · C/C++</p></div>
            <div className="discipline discipline-backend"><span className="mono">02 / BACKEND</span><strong>Through the service.</strong><p>Python · REST APIs · MySQL</p></div>
            <div className="discipline discipline-protocol"><span className="mono">03 / COMMUNICATION</span><strong>Across the connection.</strong><p>MQTT · WebSocket · RS485</p></div>
            <div className="discipline discipline-interface"><span className="mono">04 / APPLICATIONS</span><strong>Into a useful interface.</strong><p>React · Dashboards · Monitoring</p></div>
            <figure className="studio-portrait"><div className="portrait-image"><img src={asset('jefrey-portrait.png')} alt="Portrait of Jefrey Bonyad, Software and Systems Integration Engineer." fetchPriority="high" /></div><figcaption><span>JEFREY BONYAD</span><span className="mono">THE ENGINEER BEHIND THE SYSTEMS</span></figcaption><span className="portrait-cross cross-top" aria-hidden="true">+</span><span className="portrait-cross cross-bottom" aria-hidden="true">+</span></figure>
            <span className="stage-caption mono">ONE PERSPECTIVE. THE COMPLETE SYSTEM.</span>
          </div>
          <div className="studio-footer"><div className="studio-intro"><span className="mono">A LITTLE CONTEXT /</span><p>I build the connections that make a system work — from embedded devices and MQTT communication to Python backends, REST APIs, and the interfaces people use.</p></div><div className="studio-actions"><a className="button primary" href="#selected-work">Explore engineering work <Arrow /></a><a className="studio-resume" href={resume} target="_blank" rel="noreferrer">View resume <Arrow diagonal /></a></div><a className="studio-next" href="#capabilities"><span className="mono">SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span></a></div>
        </div>
      </section>
      <section id="capabilities" className="section shell"><SectionHeading number="01" label="Integration capabilities" title="Engineering across the system.">The interfaces between components are where my software, embedded, and infrastructure experience meet.</SectionHeading><div className="capability-grid">{capabilities.map(x => <article key={x.code}><span className="mono capability-number">{x.code}</span><h3>{x.title}</h3><p>{x.text}</p><Badges items={x.tags} /></article>)}</div></section>
      <section id="selected-work" className="selected-section"><div className="shell"><SectionHeading number="02" label="Selected engineering work" title="Five systems. Different integration problems.">MQTT telemetry, sensor protocols, hardware-connected learning, REST APIs, and physical device control.</SectionHeading><div className="work-toolbar"><div className="filters" role="group" aria-label="Filter featured projects">{filters.map(x => <button key={x} aria-pressed={filter === x} onClick={() => setFilter(x)}>{x}</button>)}</div><button className="notes-button" onClick={() => setExpanded(expanded.size === cases.length ? new Set() : new Set(cases.map(x => x.id)))}>{expanded.size === cases.length ? 'Collapse' : 'Expand'} engineering notes</button></div><p className="filter-count" aria-live="polite">{cases.filter(x => filter === 'All projects' || x.category.includes(filter)).length} case studies shown</p><div className="case-index">{cases.filter(x => filter === 'All projects' || x.category.includes(filter)).map(x => <a href={`#${x.id}`} key={x.id}><span className="mono">{x.number}</span><strong>{x.title}</strong><Arrow diagonal /></a>)}</div>
      {cases.map(project => <CaseStudy key={project.id} project={project} expanded={expanded.has(project.id)} onToggle={toggle} hidden={filter !== 'All projects' && !project.category.includes(filter)} />)}
      </div></section>
      <section id="more-work" className="section shell"><SectionHeading number="03" label="Engineering breadth" title="More connected systems. More context.">Additional work adds signal processing, industrial monitoring, automation, and database-backed workflows.</SectionHeading><article className="cardihoop"><figure><a href={asset('cardihoop.jpeg')} target="_blank" rel="noreferrer" aria-label="Open full-size CardiHoop screenshot"><img src={asset('cardihoop.jpeg')} alt="Original CardiHoop ECG dashboard showing scan records and abnormal-reading flags." loading="lazy" /></a><figcaption>Original CardiHoop screenshot · Displayed counts are not clinical performance metrics.</figcaption></figure><div><p className="eyebrow">MQTT / Python / Inference</p><h3>CardiHoop ECG Monitoring</h3><p>I developed an ECG acquisition and monitoring workflow integrating ESP32, MQTT, Python processing, Edge Impulse inference, database storage, and web-based scan records.</p><p className="inline-flow">ECG acquisition <span>→</span> MQTT <span>→</span> Python / inference <span>→</span> Records & dashboard</p><p className="small-note">Logical processing sequence. No clinical accuracy, formal validation, or message-recovery claim. Sources: R1, R2, P1, I1.</p></div></article>
        <div className="index-heading"><h3>Additional project index</h3><label className="search-label">Search projects<input type="search" placeholder="Try RFID, Python, production…" value={search} onChange={event => setSearch(event.target.value)} /></label></div><p className="sr-only" aria-live="polite">{matchingWork.length} project groups found</p><div className="other-projects">{otherWork.map(([name,text,group]) => <article key={name} hidden={![name, text, group].join(" ").toLowerCase().includes(search.toLowerCase())}><p className="eyebrow">{group}</p><h4>{name}</h4><p>{text}</p></article>)}{matchingWork.length === 0 && <p className="empty-state">No matching projects. Try another technology or clear the search.</p>}</div><p className="small-note">Named systems are retained separately where overlap is unconfirmed. AquaGuard pond imagery was reviewed but is not presented as my work without a supporting contribution record.</p></section>
      <section id="practice" className="practice-section"><div className="shell"><SectionHeading number="04" label="Engineering practice" title="Visibility, validation, and clear boundaries.">Practical evidence of how I work with software, data, and connected systems.</SectionHeading><div className="practice-grid"><article><span className="mono">01 / VALIDATE</span><h3>Check the application boundary</h3><p>Implemented server-side validation and product image upload validation. Used Postman to develop and test backend APIs.</p><a href="#vendolabs">VendoLabsPH API workflow <Arrow /></a></article><article><span className="mono">02 / OBSERVE</span><h3>Make system state visible</h3><p>Built sensor history, alerts, and health views in SEDI. Tool Monitoring adds transaction records, failed-login alerts, and late-return monitoring.</p><a href="#sedi">SEDI diagnostics <Arrow /></a></article><article><span className="mono">03 / CONNECT</span><h3>Bridge software and devices</h3><p>Integrated sensors, messaging, controllers, databases, and browser interfaces. At RNM, collaborated across teams on production and automation solutions.</p><a href="#tools">Device-control workflow <Arrow /></a></article><article><span className="mono">04 / EXPLAIN</span><h3>Document an actionable workflow</h3><p>Created guided IoT exercises for communication, monitoring, dashboard control, RFID, SMS, and OTA firmware updates.</p><a href="#iot-platform">IoT learning platform <Arrow /></a></article></div><details className="scope-details"><summary>Testing and reliability scope <span aria-hidden="true">+</span></summary><div><p>My documented testing experience includes Postman API testing and input validation. Monitoring and transaction records provide operational visibility. These are described as implemented features, with no claim of a formal unit-testing framework or regulated pharmaceutical validation.</p><p>Repeatable unit tests, failed-call retries, malformed or missing-message recovery, and fault-injection results are useful future additions. They are not presented as completed work. No specific communication-failure incident or root-cause report was supplied, so none is reconstructed here.</p><p>RAM API, proprietary adapter platforms, Modbus RTU/TCP, CAN, and LoRaWAN are not established in the available project evidence. LoRa and BLE are supported within the IoT learning platform.</p></div></details></div></section>
      <section id="experience" className="section shell"><SectionHeading number="05" label="Professional experience" title="Development with engineering context.">Official titles and employment dates, as confirmed in the supplied career history.</SectionHeading><div className="experience-grid"><article><p className="period mono">JANUARY 2023 — PRESENT</p><h3>Web, IoT & Embedded Systems Developer</h3><p className="employer">Innovation Central PH <span>· Full-time · Remote, Philippines</span></p><ul><li>Develop web dashboards, backend systems, APIs, IoT platforms, and hardware-connected applications.</li><li>Integrate PHP, MySQL, Node.js, MQTT, Raspberry Pi, ESP32, and cloud/server environments.</li><li>Connect sensor data, device control, kiosk workflows, and machine-learning inference to application interfaces.</li></ul></article><article><p className="period mono">DECEMBER 2019 — JUNE 2023</p><h3>Information Technology Specialist</h3><p className="employer">RNM Dynamics Philippines <span>· Full-time · On-site</span></p><ul><li>Developed company websites, queueing, service-management, file-storage, and PHP/MySQL business systems.</li><li>Integrated web applications with sensors, controllers, and real-time communications for semiconductor production automation.</li><li>Maintained IT infrastructure and collaborated across teams on production, monitoring, and automation needs.</li></ul></article></div><div className="education"><div><p className="eyebrow">Education</p><h3>BS Electronics and Communication Engineering</h3><p>Don Honorio Ventura State University · 2012–2017</p></div><div><p className="eyebrow">Credentials & continuing learning</p><p>Electronics Engineer Licensure Examination Passer · October 2017<br />Electronics Technician Licensure Examination Passer · October 2017<br />AWSome Day Online Conference · Attendance · July 11, 2024</p></div></div></section>
      <section className="evidence-section shell"><details><summary>Source and diagram notes <span aria-hidden="true">+</span></summary><div><p>Case studies draw on my original resumes, existing portfolio descriptions and images, and my supplied project clarifications. Architecture diagrams are newly drawn logical summaries, not screenshots of deployed infrastructure. Solid connections identify explicit source descriptions; dashed connections identify relationships whose transport or topology is not specified.</p><dl>{Object.entries(sources).map(([id,text]) => <div key={id}><dt>{id}</dt><dd>{text}</dd></div>)}</dl><p>Detailed scoring, evidence gaps, and optional improvements are recorded in the accompanying Portfolio_Project_Audit.md. Original screenshots are retained as visual evidence; no synthetic dashboards or test results are used.</p></div></details></section>
      <section id="contact" className="contact-section"><div className="shell contact-grid"><div><p className="eyebrow">Engineering conversation</p><h2>Let’s talk about<br /><span>the integration.</span></h2><p>Jefrey Bonyad, ECE, ECT<br />Sta Ana, Pampanga, Philippines · Remote</p></div><div className="contact-links"><a href="mailto:jefreytiglaobonyad@gmail.com">jefreytiglaobonyad@gmail.com <Arrow diagonal /></a><a href="tel:+639501057592">+63 950 105 7592 <Arrow diagonal /></a><a href="https://www.linkedin.com/in/jefrey-bonyad-592032250/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a><a href="https://github.com/bbystps" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href={resume} target="_blank" rel="noreferrer">Integration Developer resume <Arrow diagonal /></a></div></div><footer className="shell"><span>JEFREY BONYAD / ENGINEERING PORTFOLIO</span><button onClick={() => window.print()}>Print portfolio / Save as PDF</button><a href="#overview">Back to top ↑</a></footer></section>
    </main>
  </>;
}


