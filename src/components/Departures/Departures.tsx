"use client";

import { useEffect } from "react";

import TerminalMap from "./TerminalMap";

import { technologyCategories } from "../../data/technology-categories";
import { technologies } from "../../data/technologies";

interface DeparturesProps {
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
  onClosePanel: () => void;
  onSelectTechnology: (technologyId: string, categoryId: string) => void;
}

export default function Departures({
  selectedCategoryId,
  onSelectCategory,
  onClosePanel,
  onSelectTechnology,
}: DeparturesProps) {

  const selectedCategory = technologyCategories.find(
    (category) => category.id === selectedCategoryId
  );

  const selectedTechnologies =
    selectedCategory?.technologies
      .map((technologyId) =>
        technologies.find((technology) => technology.id === technologyId)
      )
      .filter(Boolean) ?? [];

  useEffect(() => {
    if (!selectedCategoryId) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest(".destinations__filter-button")) return;

      if (!target.closest(".terminal-map")) {
        onClosePanel();
      }
    };

    document.addEventListener("click", closeOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeOnOutsideClick);
    };
  }, [onClosePanel, selectedCategoryId]);

  return (
    <section className="departures section-separator" id="depart">
      <div className="departures__content">
        <div className="departures__header">
          <div>
            <p className="departures__eyebrow">
              SECTION 01 - TERMINAL DIRECTORY
            </p>

            <h2 className="departures__title">Tableau des terminaux</h2>
          </div>

          <p className="departures__meta">
            HUB TECHNIQUE · {technologyCategories.length} ZONES ACTIVES
          </p>
        </div>

        <TerminalMap
          activeCategoryId={selectedCategoryId}
          onSelectCategory={onSelectCategory}
          onClosePanel={onClosePanel}
          onSelectTechnology={onSelectTechnology}
          category={selectedCategory}
          technologies={selectedTechnologies}
        />
      </div>
    </section>
  );
}