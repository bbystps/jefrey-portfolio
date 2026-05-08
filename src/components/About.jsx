import {
  FaCode,
  FaMicrochip,
  FaCloud,
  FaReact,
  FaDatabase,
  FaWifi,
} from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      text: "Responsive React interfaces, company websites, landing pages, and portfolio-ready UI sections.",
    },
    {
      icon: <FaWifi />,
      title: "IoT Integration",
      text: "Dashboards connected to sensors, MQTT data, devices, and real-time monitoring systems.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Deployment",
      text: "Experience deploying web systems on AWS EC2, Linux servers, databases, and MQTT brokers.",
    },
  ];

  const skills = [
    "ReactJS",
    "JavaScript",
    "HTML",
    "CSS",
    "NodeJS",
    "PHP",
    "MySQL",
    "MQTT",
    "AWS EC2",
    "Linux",
    "ESP32",
    "Embedded C/C++",
  ];

  return (
    <section id="about" className="about section section-muted">
      <div className="container about-wrapper">
        <div className="about-heading">
          <p className="section-label">About</p>

          <h2 className="section-title">
            Web developer with strong IoT and embedded systems experience.
          </h2>

          <p className="about-intro">
            I create clean, responsive, and practical digital solutions for
            businesses, startups, and IoT-based systems.
          </p>
        </div>

        <div className="about-content-grid">
          <div className="about-profile-card">
            {/* <div className="about-avatar">
              <FaCode />
            </div> */}

            <h3>Full-Stack Web + IoT Developer</h3>

            <p>
              I combine frontend development, cloud deployment, database
              integration, and embedded systems experience to build complete
              real-world solutions.
            </p>

            <div className="about-profile-stats">
              <div>
                <strong>Web</strong>
                <span>React UI</span>
              </div>

              <div>
                <strong>IoT</strong>
                <span>MQTT Ready</span>
              </div>

              <div>
                <strong>Cloud</strong>
                <span>AWS/Linux</span>
              </div>
            </div>
          </div>

          <div className="about-main-card">
            <p>
              I build responsive websites, business landing pages, and web
              dashboards with a focus on clean design, usability, and practical
              real-world application.
            </p>

            <p>
              My background in IoT and embedded systems allows me to work
              beyond the frontend. I can connect web applications with devices,
              sensors, MQTT data, cloud servers, databases, and custom hardware
              systems.
            </p>

            <p>
              This combination helps me create complete solutions — from company
              websites and React interfaces to monitoring dashboards for
              connected devices.
            </p>

          </div>
        </div>

        <div className="about-highlight-grid">
          {highlights.map((item, index) => (
            <div className="about-highlight-card" key={index}>
              <div className="about-highlight-icon">{item.icon}</div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-bottom-note">
          <FaMicrochip />
          <p>
            I understand both the software side and the hardware side — making
            me effective for projects that need websites, dashboards, devices,
            sensors, and cloud-connected systems working together.
          </p>
          <FaDatabase />
        </div>
      </div>
    </section>
  );
}

export default About;