import { profile } from "../../data/profile";

export default function Footer() {
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

          <span className="footer__status">
            ● SYSTÈME OPÉRATIONNEL
          </span>
        </div>
      </div>
    </footer>
  );
}