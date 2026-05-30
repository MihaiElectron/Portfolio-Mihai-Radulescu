import type { Project } from "../../types/project";

interface DestinationsProps {
  projects: Project[];
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
              SECTION 04 - DESTINATIONS
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
          <article className="destinations__placeholder">
            Future Destination Card
          </article>

          <article className="destinations__placeholder">
            Future Destination Card
          </article>
        </div>
      </div>
    </section>
  );
}