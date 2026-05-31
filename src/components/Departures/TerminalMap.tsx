import Image from "next/image";

export default function DepartureAirport() {
  return (
    <div className="departure-airport">
      <Image
        src="/airport-map.avif"
        alt="Terminal 12 Hub Technique"
        fill
        className="departure-airport__map"
        priority
      />

      <button className="departure-airport__zone departure-airport__zone--a">
        <strong>A</strong>
        <span>Frontend</span>
      </button>

      <button className="departure-airport__zone departure-airport__zone--b">
        <strong>B</strong>
        <span>Backend</span>
      </button>

      <button className="departure-airport__zone departure-airport__zone--c">
        <strong>C</strong>
        <span>State</span>
      </button>

      <button className="departure-airport__zone departure-airport__zone--d">
        <strong>D</strong>
        <span>Qualité</span>
      </button>

      <button className="departure-airport__zone departure-airport__zone--e">
        <strong>E</strong>
        <span>Testing</span>
      </button>

      <button className="departure-airport__zone departure-airport__zone--f">
        <strong>F</strong>
        <span>DevOps</span>
      </button>
    </div>
  );
}