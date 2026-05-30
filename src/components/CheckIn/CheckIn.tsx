import { profile } from "../../data/profile";

interface CheckInProps {
  stats: {
    projectsCompleted: number;
    technologiesCount: number;
  };
}

function getTrainingDuration(startDate: Date) {
  const now = new Date();

  const months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    now.getMonth() -
    startDate.getMonth() +
    1;

  return `${months} mois`;
}

export default function CheckIn({ stats }: CheckInProps) {
  return (
    <section className="check-in section-separator" id="check-in">
      <div className="check-in__content">
        <p className="check-in__eyebrow">
          SECTION 02 - CHECK-IN / ENREGISTREMENT
        </p>

        <h2 className="check-in__title">À propos · Bagage à main</h2>

        <div className="check-in__layout">
          <article className="check-in__pass">
            <div className="check-in__pass-main">
              <div className="check-in__pass-header">
                <span>BOARDING PASS</span>
                <span>CLASS · JUNIOR FRONT-END</span>
              </div>

              <div className="check-in__route">
                <div>
                  <span>PASSAGER</span>
                  <strong>{profile.name}</strong>
                </div>

                <div>
                  <span>DE</span>
                  <strong>{profile.departure}</strong>
                </div>

                <div>
                  <span>VERS</span>
                  <strong>{profile.destination}</strong>
                </div>
              </div>

              <p className="check-in__bio">{profile.biography}</p>

              <div className="check-in__pass-footer">
                <span>EMBARQUEMENT · 06:30</span>
                <span>SIÈGE · 7A</span>
                <span>SÉQUENCE · 001</span>
              </div>
            </div>

            <div className="check-in__stub">
              <span
                className={`check-in__stamp check-in__stamp--${profile.availability.toLowerCase()}`}
              >
                {profile.availability === "AVAILABLE"
                  ? "Disponible"
                  : "Indisponible"}
              </span>

              <div>
                <span>GATE</span>
                <strong>A12</strong>
              </div>

              <div className="check-in__barcode"></div>

              <small>JS · RDX · TS</small>
            </div>
          </article>

          <div className="check-in__stats">
            <div className="check-in__stat">
              <strong>
                {getTrainingDuration(new Date(profile.trainingStartDate))}
              </strong>
              <span>FORMATION OC</span>
            </div>

            <div className="check-in__stat">
              <strong>{stats.projectsCompleted}</strong>
              <span>PROJETS RÉALISÉS</span>
            </div>

            <div className="check-in__stat">
              <strong>{stats.technologiesCount}</strong>
              <span>TECHNOLOGIES</span>
            </div>

            <div className="check-in__stat">
              <strong>{profile.careerChangeCount}</strong>
              <span>RECONVERSION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}