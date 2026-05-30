"use client";

import { GitHubCalendar } from "react-github-calendar";

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
          <GitHubCalendar
            username="MihaiElectron"
            colorScheme="dark"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            theme={{
              dark: ["#1b2028", "#143820", "#2d8f59", "#6fcf97", "#f9aa0a"],
            }}
          />
        </div>
      </div>
    </section>
  );
}