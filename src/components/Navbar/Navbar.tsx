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
        <li><Link href="#depart" className="navbar__link">Départs</Link></li>
        <li><Link href="#checkin" className="navbar__link">Check‑in</Link></li>
        <li><Link href="#securite" className="navbar__link">Sécurité</Link></li>
        <li><Link href="#lounge" className="navbar__link">Lounge</Link></li>
        <li><Link href="#embarquement" className="navbar__link">Embarquement</Link></li>
      </ul>
    </nav>
  );
}
