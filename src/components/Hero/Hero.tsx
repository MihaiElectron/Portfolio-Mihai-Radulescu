"use client";

export default function Hero() {
  return (
    <section className="hero" id="depart">
      <div className="hero__content">
        <p className="hero__flight">
          <span className="hero__flight-dot"></span>
          Vol n° JS‑2026 · Embarquement immédiat
        </p>


        <h1 className="hero__welcome">
          Bienvenue à<br />
          <span className="hero__terminal">Terminal 12</span>
        </h1>

        <p className="hero__description">
          Développeur web front‑end. Je pilote des interfaces React, Redux,
          TypeScript et Sass de la passerelle d'embarquement jusqu'à la mise en
          production. Présentez votre billet, on décolle dans quelques lignes.
        </p>
      </div>
    </section>
  );
}
