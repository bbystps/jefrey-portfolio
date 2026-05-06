import { businessWebsites } from "../data/businessWebsites";

function BusinessWebsites() {
  return (
    <section id="business-websites" className="business-websites section">
      <div className="container">
        <p className="section-label">Web Development</p>

        <h2 className="section-title">Company & Business Websites</h2>

        <p className="section-text">
          Responsive company websites, landing pages, and service pages built
          for businesses that need a professional online presence.
        </p>

        <div className="business-grid">
          {businessWebsites.map((website) => (
            <article key={website.title} className="business-card">
              <div className="business-image">
                <img src={website.image} alt={website.title} />
              </div>

              <p className="project-type">{website.type}</p>

              <h3>{website.title}</h3>

              <p className="project-description">{website.description}</p>

              <div className="project-tags">
                {website.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                href={website.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-demo-btn"
              >
                View Live Demo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessWebsites;