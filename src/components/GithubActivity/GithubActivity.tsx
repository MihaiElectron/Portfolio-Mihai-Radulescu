import Image from "next/image";

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

        <div className="github-activity__charts">
          <div className="github-activity__chart">
            <Image
              src="https://ghchart.rshah.org/MihaiElectron"
              alt="Activité GitHub"
              width={800}
              height={200}
              unoptimized
            />
          </div>

          <div className="github-activity__chart">
            <Image
              src="https://github-readme-activity-graph.vercel.app/graph?username=MihaiElectron&theme=react-dark"
              alt="Graph activité GitHub"
              width={900}
              height={300}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}