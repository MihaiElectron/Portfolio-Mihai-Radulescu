"use client";

import HeroWeather from "../HeroWeather/HeroWeather";

export default function Hero() {
  return (
    <section className="hero section-separator" id="depart">
      <div className="hero__content">
        <div className="hero__layout">
          <div className="hero__left">
            <p className="hero__flight">
              <span className="hero__flight-dot"></span>
              Vol n° JS-2026 · Embarquement immédiat
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
              <a href="#projects" className="button button--primary">
                Tableau des départs →
              </a>

              <a href="#contact" className="button button--secondary">
                Carte d'embarquement
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