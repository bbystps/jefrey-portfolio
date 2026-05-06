const skills = [
  "React",
  "JavaScript",
  "Jquery",
  "HTML",
  "CSS",
  "Node.js",
  "PHP",
  "MySQL",
  "Python",
  "MQTT",
  "WebSockets",
  "AWS",
  "Linux",
  "C/C++",
  "Arduino",
  "Raspberry Pi",
  "ESP32",
  "IoT",
  "Embedded Systems",
  "Git",
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <p className="section-label">Skills</p>

        <h2 className="section-title">Technologies I work with</h2>

        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;