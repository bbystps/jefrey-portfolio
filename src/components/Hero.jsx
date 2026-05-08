import {
  FaReact,
  FaAws,
  FaCloud,
  FaCode,
  FaDesktop,
  FaRocket,
  FaServer,
  FaWifi,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function Hero() {
  const metrics = [
    {
      icon: <FaDesktop />,
      label: "Websites",
      value: "Company Sites",
    },
    {
      icon: <FaReact />,
      label: "Frontend",
      value: "React UI",
    },
    {
      icon: <FaWifi />,
      label: "IoT Systems",
      value: "MQTT Ready",
    },
    {
      icon: <FaAws />,
      label: "Deployment",
      value: "AWS / Linux",
    },
  ];

  const focusItems = [
    {
      label: "Responsive Web Design",
      value: 95,
    },
    {
      label: "React Frontend Development",
      value: 90,
    },
    {
      label: "IoT Dashboard Integration",
      value: 90,
    },
    {
      label: "MQTT / Cloud Deployment",
      value: 85,
    },
  ];

  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="status-pill">
            <FaCheckCircle />
            Available for React, Web Development, and IoT Dashboard Projects
          </p>

          <h2>
            Building modern websites and dashboards for{" "}
            <span>businesses and IoT systems.</span>
          </h2>

          <p className="hero-description">
            I design and develop responsive company websites, business landing
            pages, and real-time IoT dashboards. My work combines clean frontend
            design, web development, MQTT integration, cloud deployment, and
            embedded systems experience.
          </p>

          <div className="hero-highlights">
            <div>
              <FaCode />
              <span>Clean React UI</span>
            </div>

            <div>
              <FaCloud />
              <span>Cloud Ready</span>
            </div>

            <div>
              <FaServer />
              <span>IoT Dashboard</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View Projects
              <FaArrowRight />
            </a>

            <a href="#business-websites" className="secondary-btn">
              View Websites
            </a>
          </div>
        </div>

        <div className="dashboard-card hero-preview-card">
          <div className="dashboard-glow"></div>

          <div className="dashboard-header">
            <div>
              <p className="dashboard-label">Portfolio Preview</p>
              <h3>Web + IoT Project Dashboard</h3>
            </div>

            <span>
              <FaRocket />
              Available
            </span>
          </div>

          <div className="metrics-grid">
            {metrics.map((item, index) => (
              <MetricCard
                key={index}
                icon={item.icon}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>

          <div className="chart-card">
            <div className="chart-title">
              <p>Project Focus</p>
              <span>2026</span>
            </div>

            <div className="focus-list">
              {focusItems.map((item, index) => (
                <div className="focus-item" key={index}>
                  <div className="focus-info">
                    <span>{item.label}</span>
                    <strong>{item.value}%</strong>
                  </div>

                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="dashboard-footer">
            <div>
              <span></span>
              Live UI
            </div>

            <div>
              <span></span>
              MQTT Ready
            </div>

            <div>
              <span></span>
              Responsive
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ icon, label, value }) {
  return (
    <div className="metric-card">
      <div className="metric-icon">{icon}</div>

      <div>
        <p>{label}</p>
        <h4>{value}</h4>
      </div>
    </div>
  );
}

export default Hero;