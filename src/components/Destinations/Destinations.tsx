import type { Project } from "../../types/project";
import DestinationCard from "./DestinationCard";
import type { GithubStatus } from "../../types/github-status";

interface DestinationsProps {
  projects: Project[];
}

interface DestinationsProps {
  projects: Project[];
  githubStatus: GithubStatus;
}

export default function Destinations({
  projects,
}: DestinationsProps) {
  return (
    <section
      className="destinations section-separator"
      id="destinations"
    >
      <div className="destinations__content">
        <div className="destinations__header">
          <div>
            <p className="destinations__eyebrow">
              SECTION 03 - DESTINATIONS
            </p>

            <h2 className="destinations__title">
              Projets GitHub
            </h2>
          </div>

          <p className="destinations__meta">
            PORTFOLIO · {projects.length} DESTINATIONS
          </p>
        </div>

        <div className="destinations__grid">
          {projects.map((project) => (
            <DestinationCard
              key={project.name}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}