"use client";

import { useState } from "react";

import CheckIn from "../CheckIn/CheckIn";
import Departures from "../Departures/Departures";
import Destinations from "../Destinations/Destinations";

import type { GithubStatus } from "../../types/github-status";
import type { Project } from "../../types/project";

interface TerminalJourneyProps {
  projects: Project[];
  githubStatus: GithubStatus;
  stats: {
    projectsCompleted: number;
    technologiesCount: number;
  };
  initialTechnology: string | null;
  initialTerminal: string | null;
}

export default function TerminalJourney({
  projects,
  githubStatus,
  stats,
  initialTechnology,
  initialTerminal,
}: TerminalJourneyProps) {
  const [activeTechnology, setActiveTechnology] = useState(initialTechnology);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    initialTerminal
  );

  function handleTechnologySelect(technologyId: string, categoryId: string) {
    const url = new URL(window.location.href);

    url.searchParams.set("tech", technologyId);
    url.searchParams.set("terminal", categoryId);
    url.hash = "destinations";

    window.history.pushState({}, "", url);

    setSelectedCategoryId(categoryId);
    setActiveTechnology(technologyId);

    requestAnimationFrame(() => {
      document.getElementById("destinations")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  function handleClearTechnologyFilter() {
    const url = new URL(window.location.href);
    const terminalId = url.searchParams.get("terminal") ?? selectedCategoryId;

    url.searchParams.delete("tech");
    url.hash = "depart";

    window.history.pushState({}, "", url);

    setActiveTechnology(null);
    setSelectedCategoryId(terminalId);

    document.getElementById("depart")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <>
      <Departures
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={setSelectedCategoryId}
        onClosePanel={() => setSelectedCategoryId(null)}
        onSelectTechnology={handleTechnologySelect}
      />

      <CheckIn stats={stats} />

      <Destinations
        projects={projects}
        githubStatus={githubStatus}
        activeTechnology={activeTechnology}
        onClearTechnologyFilter={handleClearTechnologyFilter}
      />
    </>
  );
}