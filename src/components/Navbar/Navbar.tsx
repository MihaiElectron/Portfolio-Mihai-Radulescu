"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar section-separator">
      <div className="navbar__left">
        <span className="navbar__badge">T12</span>
        <span className="navbar__terminal">TERMINAL 12</span>
        <span className="navbar__dot">·</span>
        <span className="navbar__title">PORTFOLIO</span>
      </div>

      <ul className="navbar__menu">
        <li>
          <Link href="#depart" className="navbar__link">
            <span className="navbar__section">01</span>
            <span className="navbar__label">Departures</span>
          </Link>
        </li>

        <li>
          <Link href="#check-in" className="navbar__link">
            <span className="navbar__section">02</span>
            <span className="navbar__label">Check-In</span>
          </Link>
        </li>

        <li>
          <Link href="#destinations" className="navbar__link">
            <span className="navbar__section">03</span>
            <span className="navbar__label">Destinations</span>
          </Link>
        </li>

        <li>
          <Link href="#github-activity" className="navbar__link">
            <span className="navbar__section">04</span>
            <span className="navbar__label">Radar</span>
          </Link>
        </li>

        <li>
          <Link href="#contact" className="navbar__link">
            <span className="navbar__section">05</span>
            <span className="navbar__label">Final Call</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}