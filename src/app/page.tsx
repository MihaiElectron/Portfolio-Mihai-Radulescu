import Hero from "@/components/Hero/Hero";
import TerminalJourney from "@/components/TerminalJourney/TerminalJourney";
import GithubActivity from "@/components/GithubActivity/GithubActivity";
import FinalCall from "@/components/FinalCall/FinalCall";
import Footer from "@/components/Footer/Footer";

import { technologies } from "@/data/technologies";

import type { Project } from "@/types/project";
import type { GithubStatus } from "@/types/github-status";

interface HomeProps {
  searchParams: Promise<{
    tech?: string;
    terminal?: string;
  }>;
}

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

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const initialTechnology = params.tech ?? null;
  const initialTerminal = params.terminal ?? null;

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
    <>
      <main id="contenu-principal" aria-label="Contenu principal du portfolio">
        <Hero />
        <TerminalJourney
          projects={projects}
          githubStatus={githubStatus}
          stats={stats}
          initialTechnology={initialTechnology}
          initialTerminal={initialTerminal}
        />
        <GithubActivity />
        <FinalCall />
      </main>

      <Footer githubStatus={githubStatus} />
    </>
  );
}