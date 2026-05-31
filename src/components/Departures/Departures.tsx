"use client";

import { useState } from "react";

import TerminalMap from "./TerminalMap";

import { technologyCategories } from "../../data/technology-categories";
import { technologies } from "../../data/technologies";

export default function Departures() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );

  const selectedCategory = technologyCategories.find(
    (category) => category.id === selectedCategoryId
  );

  const selectedTechnologies =
    selectedCategory?.technologies
      .map((technologyId) =>
        technologies.find((technology) => technology.id === technologyId)
      )
      .filter(Boolean) ?? [];

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
          onSelectCategory={setSelectedCategoryId}
          onClosePanel={() => setSelectedCategoryId(null)}
          category={selectedCategory}
          technologies={selectedTechnologies}
        />
      </div>
    </section>
  );
}