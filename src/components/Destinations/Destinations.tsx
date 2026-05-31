"use client";

import { useEffect, useMemo, useState } from "react";

import type { Project } from "../../types/project";
import type { GithubStatus } from "../../types/github-status";

import DestinationCard from "./DestinationCard";

interface DestinationsProps {
  projects: Project[];
  githubStatus: GithubStatus;
}

function getInitialTechnologyFilter() {
  if (typeof window === "undefined") return null;

  return new URLSearchParams(window.location.search).get("tech");
}

export default function Destinations({
  projects,
  githubStatus,
}: DestinationsProps) {
  const [activeTechnology, setActiveTechnology] = useState<string | null>();
  getInitialTechnologyFilter()

  useEffect(() => {

    const handleTechFilter = (event: Event) => {
      const customEvent = event as CustomEvent<string>;
      setActiveTechnology(customEvent.detail);
    };

    window.addEventListener("terminal-tech-filter", handleTechFilter);

    return () => {
      window.removeEventListener("terminal-tech-filter", handleTechFilter);
    };
  }, []);

  const filteredProjects = useMemo(() => {
    if (!activeTechnology) return projects;

    return projects.filter((project) =>
      project.topics.includes(activeTechnology)
    );
  }, [projects, activeTechnology]);

  function clearFilter() {
    const url = new URL(window.location.href);

    url.searchParams.delete("tech");
    url.hash = "depart";

    window.history.pushState({}, "", url);

    setActiveTechnology(null);

    document.getElementById("depart")?.scrollIntoView({
      behavior: "smooth",
    });
  }

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
            PORTFOLIO · {filteredProjects.length} DESTINATIONS
          </p>
        </div>
        {activeTechnology && (
          <div className="destinations__filter">
            <span>FILTRE ACTIF · {activeTechnology}</span>

            <button
              type="button"
              onClick={clearFilter}
              className="destinations__filter-button"
            >
              Retour terminal
            </button>
          </div>
        )}

        {githubStatus === "DOWN" && (
          <p className="destinations__error">
            GitHub indisponible. Les projets ne peuvent pas être chargés.
          </p>
        )}

        <div className="destinations__grid">
          {filteredProjects.map((project) => (
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