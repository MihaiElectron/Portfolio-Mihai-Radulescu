"use client";

import HeroWeather from "../HeroWeather/HeroWeather";

export default function Hero() {
  function scrollToSection(
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `#${sectionId}`);
  }

  return (
    <section className="hero section-separator" id="welcome">
      <div className="hero__content">
        <div className="hero__layout">
          <div className="hero__left">
            <p className="hero__flight">
              <span className="hero__flight-dot"></span>
              <span className="hero__flight-number">Vol n° JS-2026</span>
              <span className="hero__flight-separator">·</span>
              <span className="hero__flight-status">Embarquement immédiat</span>
            </p>

            <h1 className="hero__welcome">
              <span>Bienvenue à</span>
              <span className="hero__terminal">Terminal 12</span>
            </h1>

            <p className="hero__description">
              Développeur web front-end. Je pilote des interfaces React, Redux,
              TypeScript et Sass de la passerelle d&apos;embarquement jusqu&apos;à
              la mise en production. Présentez votre billet, on décolle dans
              quelques lignes.
            </p>

            <div className="hero__actions">
              <a
                href="#depart"
                className="button button--primary"
                onClick={(event) => scrollToSection(event, "depart")}
              >
                Tableau des départs →
              </a>

              <a
                href="#check-in"
                className="button button--secondary"
                onClick={(event) => scrollToSection(event, "check-in")}
              >
                Carte d&apos;embarquement
              </a>
            </div>
          </div>

          <div className="hero__right">
            <HeroWeather />
          </div>
        </div>
      </div>
    </section>
  );
}