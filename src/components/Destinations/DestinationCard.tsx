import type { Project } from "../../types/project";

interface DestinationCardProps {
  project: Project;
}

function getProjectTechnologies(topics: string[]) {
  return topics.filter(
    (topic) => !["status-done", "status-in-progress"].includes(topic)
  );
}

export default function DestinationCard({ project }: DestinationCardProps) {
  const technologies = getProjectTechnologies(project.topics);

  return (
    <article className="destination-card">
      <div className="destination-card__header">
        <span className="destination-card__flight">GH</span>

        <span
          className={`destination-card__status destination-card__status--${project.status}`}
        >
          {project.status === "done" ? "DONE" : "UNDER PROCESS"}
        </span>
      </div>

      <h3 className="destination-card__name">{project.name}</h3>

      <p className="destination-card__description">
        {project.description ?? "Aucune description disponible."}
      </p>

      <div className="destination-card__infos">
        <span>{project.language ?? "N/A"}</span>
        <span>{project.stars} STARS</span>
      </div>

      {technologies.length > 0 && (
        <ul className="destination-card__topics">
          {technologies.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      )}

      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="destination-card__link"
      >
        Voir le repo
      </a>
    </article>
  );
}