import Image from "next/image";

import TerminalTechPanel from "./TerminalTechPanel";

import { technologyCategories } from "../../data/technology-categories";

import type { Technology } from "../../types/technology";
import type { TechnologyCategory } from "../../types/technology-category";

interface TerminalMapProps {
  activeCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
  onClosePanel: () => void;
  category: TechnologyCategory | undefined;
  technologies: (Technology | undefined)[];
}

export default function TerminalMap({
  activeCategoryId,
  onSelectCategory,
  onClosePanel,
  category,
  technologies,
}: TerminalMapProps) {
  return (
    <div className="terminal-map" >
      <div className="terminal-map__display">
        {category ? (
          <p key={category.id} className="terminal-map__display-text">
            ZONE {category.code.toUpperCase()} · {category.name}
          </p>
        ) : (
          <p className="terminal-map__display-text terminal-map__display-text--idle">
            Sélectionnez une zone terminal
          </p>
        )}
      </div>

      <div
        className={`terminal-map__visual ${
          activeCategoryId ? "terminal-map__visual--selected" : ""
        }`}
        onClick={onClosePanel}
      >
        <Image
          src="/airport-map.avif"
          alt="Terminal 12 Hub Technique"
          fill
          className="terminal-map__image"
          priority
        />

        {category && (
          <TerminalTechPanel
            key={category.id}
            category={category}
            technologies={technologies}
          />
        )}

        <div
          className={`terminal-map__zones ${
            activeCategoryId ? "terminal-map__zones--selected" : ""
          }`}
        >
          {technologyCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onSelectCategory(category.id);
              }}
              className={`terminal-map__zone terminal-map__zone--${category.code.toLowerCase()} ${
                activeCategoryId === category.id
                  ? "terminal-map__zone--active"
                  : ""
              }`}
            >
              <strong>{category.code.toUpperCase()}</strong>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}