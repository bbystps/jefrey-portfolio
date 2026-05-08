import {
  FaReact,
  FaServer,
  FaMicrochip,
  FaCloud,
  FaTools,
  FaDatabase,
  FaWifi,
  FaCode,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: <FaReact />,
    desc: "Modern UI development focused on responsive layouts, clean design, and interactive web experiences.",
    items: ["React", "JavaScript", "jQuery", "HTML", "CSS"],
  },
  {
    title: "Backend & Data",
    icon: <FaDatabase />,
    desc: "Server-side logic, API-connected systems, data handling, and database-driven applications.",
    items: ["Node.js", "PHP", "MySQL", "Python", "WebSockets"],
  },
  {
    title: "IoT & Embedded",
    icon: <FaMicrochip />,
    desc: "Connected device development, sensor integration, MQTT communication, and embedded systems.",
    items: [
      "MQTT",
      "C/C++",
      "Arduino",
      "ESP32",
      "Raspberry Pi",
      "IoT",
      "Embedded Systems",
    ],
  },
  {
    title: "Cloud & Tools",
    icon: <FaCloud />,
    desc: "Deployment, Linux-based hosting, version control, and practical development workflows.",
    items: [
      "AWS",
      "Git",
      "GitHub",
      "Vercel",
      "Hostinger",
      "cPanel"
    ]
  },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container skills-wrapper">
        <div className="skills-top">
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="skills-intro">
            I work across web development, backend systems, IoT integration,
            embedded programming, and cloud deployment — allowing me to build
            both business websites and real-world connected solutions.
          </p>
        </div>

        <div className="skills-summary">
          <div className="skills-summary-card">
            <div className="skills-summary-icon">
              <FaCode />
            </div>
            <div>
              <strong>Frontend + Backend</strong>
              <span>From interfaces to server-connected systems</span>
            </div>
          </div>

          <div className="skills-summary-card">
            <div className="skills-summary-icon">
              <FaWifi />
            </div>
            <div>
              <strong>Web + IoT</strong>
              <span>Dashboards, MQTT, sensors, and connected devices</span>
            </div>
          </div>

          <div className="skills-summary-card">
            <div className="skills-summary-icon">
              <FaTools />
            </div>
            <div>
              <strong>Practical Solutions</strong>
              <span>Built for real-world business and engineering use</span>
            </div>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-group-card" key={group.title}>
              <div className="skill-group-header">
                <div className="skill-group-icon">{group.icon}</div>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.desc}</p>
                </div>
              </div>

              <div className="skill-tags">
                {group.items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;