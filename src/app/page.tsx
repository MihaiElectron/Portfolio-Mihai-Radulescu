import Hero from "@/components/Hero/Hero";
import Departures from "@/components/Departures/Departures";
import CheckIn from "@/components/CheckIn/CheckIn";
import Destinations from "@/components/Destinations/Destinations";
import GithubActivity from "@/components/GithubActivity/GithubActivity";
import FinalCall from "@/components/FinalCall/FinalCall";
import Footer from "@/components/Footer/Footer";

import { technologies } from "@/data/technologies";

import type { Project } from "@/types/project";
import type { GithubStatus } from "@/types/github-status";

async function getProjects(): Promise<Project[]> {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? "https://portfolio-mihai-radulescu.vercel.app"
      : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/projects`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erreur lors du chargement des projets GitHub");
  }

  return res.json();
}

export default async function Home() {
  let projects: Project[] = [];
  let githubStatus: GithubStatus = "OPERATIONAL";

  try {
    projects = await getProjects();
  } catch {
    githubStatus = "DOWN";
  }

  const stats = {
    projectsCompleted: projects.length,
    technologiesCount: technologies.length,
  };

  return (
    <main>
      <Hero />
      <Departures />
      <CheckIn stats={stats} />
      <Destinations projects={projects} githubStatus={githubStatus} />
      <GithubActivity />
      <FinalCall />
      <Footer githubStatus={githubStatus} />
    </main>
  );
}