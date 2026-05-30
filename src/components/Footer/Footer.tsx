import { profile } from "../../data/profile";
import type { GithubStatus } from "../../types/github-status";

interface FooterProps {
  githubStatus: GithubStatus;
}

export default function Footer({ githubStatus }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">
          © {currentYear} TERMINAL 12 · TOUS DROITS DÉCOLLÉS
        </p>

        <div className="footer__infos">
          <span>IATA · {profile.iataCode}</span>
          <span>ICAO · {profile.icaoCode}</span>

          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            GITHUB
          </a>

          <span
            className={`footer__status footer__status--${githubStatus.toLowerCase()}`}
          >
            ●{" "}
            {githubStatus === "OPERATIONAL"
              ? "SYSTÈME OPÉRATIONNEL"
              : "SYSTÈME INDISPONIBLE"}
          </span>
        </div>
      </div>
    </footer>
  );
}