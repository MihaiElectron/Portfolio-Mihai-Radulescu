import { profile } from "../../data/profile";

export default function FinalCall() {
  return (
    <>
      <section className="final-call section-separator" id="contact">
        <div className="final-call__content">
          <div className="final-call__panel">
            <div className="final-call__left">
              <p className="final-call__eyebrow">
                FINAL CALL · SECTION 06
              </p>

              <h2 className="final-call__title">
                Embarquement
                <br />
                immédiat
              </h2>

              <p className="final-call__description">
                Un projet à faire décoller ? Présentez-vous à la porte A12.
                Les portes ferment 10 minutes avant le départ.
              </p>
            </div>

            <div className="final-call__right">
              <a href={`mailto:${profile.email}`} className="final-call__row">
                <span>Email</span>
                <strong>{profile.email}</strong>
              </a>

              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="final-call__row"
              >
                <span>Github</span>
                <strong>{profile.githubLabel}</strong>
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="final-call__row"
              >
                <span>LinkedIn</span>
                <strong>{profile.linkedinLabel}</strong>
              </a>

              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="final-call__row"
              >
                <span>CV PDF</span>
                <strong>↓ Télécharger</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}