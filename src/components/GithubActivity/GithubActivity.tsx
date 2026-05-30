import GithubActivityClient from "./GithubActivityClient";

export default function GithubActivity() {
  return (
    <section className="github-activity section-separator" id="github-activity">
      <div className="github-activity__content">
        <div className="github-activity__header">
          <div>
            <p className="github-activity__eyebrow">
              SECTION 05 - FLIGHT RADAR
            </p>

            <h2 className="github-activity__title">Activité GitHub</h2>
          </div>

          <p className="github-activity__meta">RADAR · CONTRIBUTIONS</p>
        </div>

        <div className="github-activity__calendar">
          <GithubActivityClient />
        </div>
      </div>
    </section>
  );
}