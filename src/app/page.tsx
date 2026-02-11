import Image from "next/image";
import type { Project } from "@/types/project";


// -------------------------------------------------------------
// 2) Fonction qui récupère tes projets via API Next.js
// -------------------------------------------------------------
async function getProjects(): Promise<Project[]> {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store", // pour éviter le cache pendant le dev
  });

  return res.json();
}


// -------------------------------------------------------------
// 3) Composant principal de ta page
// -------------------------------------------------------------
export default async function Home() {
  const projects = await getProjects();
  console.log("projects =", projects); // debug serveur

  return (
    <main>

      {/* ---------------------------------------------------------
         SECTION PROJETS GITHUB
         --------------------------------------------------------- */}
      <section>
        <h1>Mes projets GitHub</h1>

        {projects.map((p) => (
          <div key={p.name}>
            <h2>{p.name}</h2>
            <p>{p.description}</p>
            <a href={p.url} target="_blank">Voir le repo</a>
          </div>
        ))}
      </section>


      {/* ---------------------------------------------------------
         SECTION ACTIVITÉ GITHUB
         ---------------------------------------------------------
         ⚠️ IMPORTANT : Next.js optimise automatiquement les images.
         Mais les images GitHub (graphes, stats, charts) ne sont PAS
         des fichiers statiques → optimisation impossible → erreur 400.

         Solution : ajouter "unoptimized" pour désactiver l’optimisation
         uniquement pour ces images.
         --------------------------------------------------------- */}
      <section style={{ marginTop: "4rem" }}>
        <h1>Mon activité GitHub</h1>

        {/* Graph carré vert (contributions) */}
        <Image
          src="https://ghchart.rshah.org/MihaiElectron"
          alt="Activité GitHub"
          width={800}
          height={200}
          unoptimized // ← évite l’erreur 400
        />

        {/* Activity graph animé */}
        <Image
          src="https://github-readme-activity-graph.vercel.app/graph?username=MihaiElectron&theme=react-dark"
          alt="Graph activité GitHub"
          width={900}
          height={300}
          unoptimized // ← évite l’erreur 400
        />
      </section>

    </main>
  );
}
