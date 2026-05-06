function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="status-pill">
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

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#business-websites" className="secondary-btn">
              View Websites
            </a>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-header">
            <h3>Web + IoT Project Preview</h3>
            <span>Available</span>
          </div>

          <div className="metrics-grid">
            <MetricCard label="Websites" value="Company Sites" />
            <MetricCard label="Frontend" value="React UI" />
            <MetricCard label="IoT Systems" value="MQTT Ready" />
            <MetricCard label="Deployment" value="AWS / Linux" />
          </div>

          <div className="chart-card">
            <p>Project Focus</p>

            <div className="focus-list">
              <div>
                <span>Responsive Web Design</span>
                <strong>95%</strong>
              </div>

              <div>
                <span>React Frontend Development</span>
                <strong>90%</strong>
              </div>

              <div>
                <span>IoT Dashboard Integration</span>
                <strong>90%</strong>
              </div>

              <div>
                <span>MQTT / Cloud Deployment</span>
                <strong>85%</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ label, value }) {
  return (
    <div className="metric-card">
      <p>{label}</p>
      <h4>{value}</h4>
    </div>
  );
}

export default Hero;