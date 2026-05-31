"use client";

import { useState } from "react";
import { technologies } from "@/data/technologies";
import DepartureAirport from "./TerminalMap";

export default function Departures() {
  const [activeFlights] = useState(technologies.length);

  return (
    <section className="departures section-separator" id="projects">
      <div className="departures__content">
        <div className="departures__header">
          <div>
            <p className="departures__eyebrow">SECTION 01 - DEPARTURES</p>
            <h2 className="departures__title">Tableau des départs</h2>
          </div>
          <p className="departures__meta">
            STACK TECHNIQUE <span>·</span> {activeFlights} VOLS ACTIFS
          </p>
        </div>
        <DepartureAirport />
        <div className="departures__table">
          <div className="departures__row departures__row--head">
            <span>VOL</span>
            <span>DESTINATION</span>
            <span>PORTE</span>
            <span>HEURE</span>
            <span>STATUT</span>
          </div>

          {technologies.map((tech) => (
            <div className="departures__row" key={tech.id}>
              <span className="departures__flight">{tech.flight}</span>

              <div className="departures__destination">
                <span>{tech.destination}</span>
                <small>{tech.details.join(" · ")}</small>
              </div>

              <span>{tech.gate}</span>
              <span>{tech.time}</span>

              <span
                className={`departures__status departures__status--${tech.status
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}
              >
                {tech.status}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}