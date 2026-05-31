"use client";

import { useEffect, useMemo, useState } from "react";

import type { Technology } from "../../types/technology";
import type { TechnologyCategory } from "../../types/technology-category";

interface TerminalTechPanelProps {
  category: TechnologyCategory;
  technologies: (Technology | undefined)[];
}

const ITEMS_PER_PAGE = 6;

export default function TerminalTechPanel({
  category,
  technologies,
}: TerminalTechPanelProps) {
  const [page, setPage] = useState(0);

  const cleanTechnologies = technologies.filter(
    (technology): technology is Technology => Boolean(technology)
  );

  const pages = useMemo(() => {
    const result: Technology[][] = [];

    for (let i = 0; i < cleanTechnologies.length; i += ITEMS_PER_PAGE) {
      result.push(cleanTechnologies.slice(i, i + ITEMS_PER_PAGE));
    }

    return result;
  }, [cleanTechnologies]);

  useEffect(() => {
    if (pages.length <= 1) return;

    const interval = setInterval(() => {
      setPage((currentPage) => (currentPage + 1) % pages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [pages.length]);

  return (
    <div
      className="terminal-tech-panel"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="terminal-tech-panel__header">
        <div>
          <p>ZONE {category.code.toUpperCase()}</p>
          <h3>{category.name}</h3>
        </div>

        <span>
          PAGE {page + 1}/{pages.length || 1}
        </span>
      </div>

      <p className="terminal-tech-panel__description">
        {category.description}
      </p>

      <ul className="terminal-tech-panel__list">
        {(pages[page] ?? []).map((technology) => (
          <li key={technology.id}>{technology.name}</li>
        ))}
      </ul>
    </div>
  );
}