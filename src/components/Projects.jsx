import { FaChevronLeft, FaChevronRight, FaLayerGroup } from "react-icons/fa";
import { projects } from "../data/projects";

function Projects() {
  const scrollProjects = (direction) => {
    const container = document.querySelector(".projects-carousel");

    if (!container) return;

    const scrollAmount = 380;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="projects section section-muted">
      <div className="container projects-wrapper">
        <div className="projects-header">
          <div>
            <p className="section-label">Projects</p>
            <h2 className="section-title">Featured work</h2>
          </div>

          <p className="projects-intro">
            A collection of web dashboards, IoT platforms, monitoring systems,
            and real-world connected solutions I have developed.
          </p>
        </div>

        <div className="projects-carousel-header">
          <p>Swipe or use the arrows to explore projects</p>

          <div className="projects-carousel-controls">
            <button
              type="button"
              aria-label="Scroll projects left"
              onClick={() => scrollProjects("left")}
            >
              <FaChevronLeft />
            </button>

            <button
              type="button"
              aria-label="Scroll projects right"
              onClick={() => scrollProjects("right")}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div className="projects-carousel">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <p className="project-type">
                  <FaLayerGroup />
                  {project.type}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-demo-btn"
                  >
                    View Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;