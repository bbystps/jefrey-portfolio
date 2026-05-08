import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaReact,
  FaWifi,
  FaDesktop,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact-card">
        <div className="contact-bg-glow"></div>

        <div className="contact-content">
          <div className="contact-left">
            <p className="section-label">Contact</p>

            <h2 className="section-title">
              Let’s build your next website, dashboard, or IoT solution.
            </h2>

            <p className="section-text">
              I’m open to freelance work, React frontend projects, company
              websites, business landing pages, IoT dashboards, MQTT
              integrations, and embedded system development.
            </p>

            <div className="contact-services">
              <div>
                <FaReact />
                <span>React Frontend</span>
              </div>

              <div>
                <FaDesktop />
                <span>Business Websites</span>
              </div>

              <div>
                <FaWifi />
                <span>IoT Dashboards</span>
              </div>
            </div>

            <a
              href="mailto:jefreytiglaobonyad@gmail.com"
              className="contact-main-btn"
            >
              Send Email
              <FaArrowRight />
            </a>
          </div>

          <div className="contact-list">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <span>Email</span>
                <a href="mailto:jefreytiglaobonyad@gmail.com">
                  jefreytiglaobonyad@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaLinkedin />
              </div>

              <div>
                <span>LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/jefrey-bonyad-592032250/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/jefrey-bonyad-592032250
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Location</span>
                <p>Philippines / Remote</p>
              </div>
            </div>

            <div className="contact-availability">
              <FaCheckCircle />
              <div>
                <strong>Available for remote projects</strong>
                <p>Open to full-time, freelance, part-time, and project-based opportunities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;