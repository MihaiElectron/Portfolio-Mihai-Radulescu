import type { Project } from "../../types/project";

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="projects section-separator" id="projects">
      <div className="projects__content">
        <div className="projects__header">
          <div>
            <p className="projects__eyebrow">SECTION 03 - DESTINATIONS</p>
            <h2 className="projects__title">Projets GitHub</h2>
          </div>

          <p className="projects__meta">
            PORTFOLIO · {projects.length} DESTINATIONS
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="projects__card" key={project.name}>
              <div className="projects__card-header">
                <span className="projects__flight">GH</span>
                <span className="projects__status">ONLINE</span>
              </div>

              <h3 className="projects__name">{project.name}</h3>

              <p className="projects__description">
                {project.description ?? "Aucune description disponible."}
              </p>

              <div className="projects__infos">
                <span>{project.language ?? "N/A"}</span>
                <span>{project.stars} STARS</span>
              </div>

              {project.topics.length > 0 && (
                <ul className="projects__topics">
                  {project.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              )}

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="projects__link"
              >
                Voir le repo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}