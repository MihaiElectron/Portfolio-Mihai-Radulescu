"use client";

import Link from "next/link";

const navLinks = [
  { href: "depart", section: "01", label: "Departures" },
  { href: "check-in", section: "02", label: "Check-In" },
  { href: "destinations", section: "03", label: "Destinations" },
  { href: "github-activity", section: "04", label: "Radar" },
  { href: "contact", section: "05", label: "Final Call" },
];

export default function Navbar() {
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
    <nav className="navbar section-separator">
      <div className="navbar__left">
        <span className="navbar__badge">T12</span>

        <Link
          href="#welcome"
          className="navbar__brand"
          onClick={(event) => scrollToSection(event, "welcome")}
        >
          <span className="navbar__terminal">TERMINAL 12</span>
          <span className="navbar__dot">·</span>
          <span className="navbar__title">PORTFOLIO</span>
        </Link>
      </div>

      <ul className="navbar__menu">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={`#${link.href}`}
              className="navbar__link"
              onClick={(event) => scrollToSection(event, link.href)}
            >
              <span className="navbar__section">{link.section}</span>
              <span className="navbar__label">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}