import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects section section-muted">
      <div className="container">
        <p className="section-label">Projects</p>

        <h2 className="section-title">Featured work</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <p className="project-type">{project.type}</p>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {/* <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-demo-btn"
              >
                View Live Demo
              </a> */}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;