"use client";

import { useEffect, useRef } from "react";
import type { Project } from "../../types/project";
import { projectDetails } from "../../data/project-details";

interface DestinationCardProps {
  project: Project;
  isExpanded?: boolean;
  isClosing?: boolean;
  onExpand: () => void;
  onClose: () => void;
}

function getProjectTechnologies(topics: string[]) {
  return topics.filter(
    (topic) => !["status-done", "status-in-progress"].includes(topic)
  );
}

function formatTopic(topic: string) {
  return topic.replaceAll("-", " ");
}

function slugify(value: string) {
  return value.toLowerCase().trim().replaceAll(" ", "-").replaceAll("_", "-");
}

export default function DestinationCard({
  project,
  isExpanded = false,
  isClosing = false,
  onExpand,
  onClose,
}: DestinationCardProps) {
  const technologies = getProjectTechnologies(project.topics);
  const details = projectDetails[slugify(project.name)];
  const flashRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!isClosing || !flashRef.current || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    flashRef.current.style.left = `${rect.left + rect.width / 2}px`;
    flashRef.current.style.top = `${rect.top + rect.height / 2}px`;
  }, [isClosing]);

  return (
    <>
      <span
        ref={flashRef}
        className={`destination-card__crt-flash ${
          isClosing ? "destination-card__crt-flash--active" : ""
        }`}
        aria-hidden="true"
      />

      <article
        ref={cardRef}
        className={`destination-card ${
          isExpanded ? "destination-card--expanded" : ""
        } ${isClosing ? "destination-card--closing" : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        {isExpanded && (
          <button
            type="button"
            className="destination-card__close"
            onClick={onClose}
            aria-label="Fermer le dossier projet"
          >
            ×
          </button>
        )}

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

        {technologies.length > 0 && (
          <ul className="destination-card__topics">
            {technologies.map((topic) => (
              <li key={topic}>{formatTopic(topic)}</li>
            ))}
          </ul>
        )}

        {isExpanded && details && (
          <div className="destination-card__preview">
            {details.video && (
              <video
                className="destination-card__video"
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
              >
                {details.video.webm && (
                  <source src={details.video.webm} type="video/webm" />
                )}
                {details.video.mp4 && (
                  <source src={details.video.mp4} type="video/mp4" />
                )}
              </video>
            )}

            <div className="destination-card__details">
              <div>
                <span>Contexte</span>
                <p>{details.context}</p>
              </div>
              <div>
                <span>Objectifs</span>
                <p>{details.objectives}</p>
              </div>
              <div>
                <span>Stack technique</span>
                <p>{technologies.map(formatTopic).join(" · ")}</p>
              </div>
              <div>
                <span>Compétences développées</span>
                <p>{details.skills}</p>
              </div>
              <div>
                <span>Résultats et impact</span>
                <p>{details.results}</p>
              </div>
              <div>
                <span>Perspectives d&apos;amélioration</span>
                <p>{details.improvements}</p>
              </div>
            </div>
          </div>
        )}

        <div className="destination-card__actions">
          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="destination-card__link"
          >
            Voir le repo
          </a>

          {!isExpanded && (
            <button
              type="button"
              className="destination-card__button"
              onClick={onExpand}
            >
              Dossier de vol
            </button>
          )}

          {isExpanded && details?.liveUrl && (
            <a
              href={details.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="destination-card__link"
            >
              Site en ligne
            </a>
          )}
        </div>
      </article>
    </>
  );
}
