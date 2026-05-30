import Image from "next/image";

import Hero from "@/components/Hero/Hero";
import Departures from "@/components/Departures/Departures";
import CheckIn from "@/components/CheckIn/CheckIn";
import Destinations from "@/components/Destinations/Destinations";

import { technologies } from "@/data/technologies";

import type { Project } from "@/types/project";

async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erreur lors du chargement des projets GitHub");
  }

  return res.json();
}

export default async function Home() {
  const projects = await getProjects();

  const stats = {
    projectsCompleted: projects.length,
    technologiesCount: technologies.length,
  };

  return (
    <main>
      <Hero />
      <Departures />
      <CheckIn stats={stats} />
      <Destinations projects={projects} />

      <section>
        <h2>Mon activité GitHub</h2>

        <Image
          src="https://ghchart.rshah.org/MihaiElectron"
          alt="Activité GitHub"
          width={800}
          height={200}
          unoptimized
        />

        <Image
          src="https://github-readme-activity-graph.vercel.app/graph?username=MihaiElectron&theme=react-dark"
          alt="Graph activité GitHub"
          width={900}
          height={300}
          unoptimized
        />
      </section>
    </main>
  );
}