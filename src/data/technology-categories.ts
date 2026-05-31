import type { TechnologyCategory } from "../types/technology-category";

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "frontend",
    code: "a",
    name: "Frontend",
    description: "Interfaces utilisateur, intégration et composants.",
    technologies: [
      "html",
      "css",
      "sass",
      "javascript",
      "typescript",
      "react",
      "nextjs",
    ],
  },
  {
    id: "backend-api",
    code: "b",
    name: "Backend & API",
    description: "Communication avec les services et gestion des données.",
    technologies: ["api-rest", "fetch", "json", "next-api-routes"],
  },
  {
    id: "state-management",
    code: "c",
    name: "State",
    description: "Gestion de l’état applicatif et des données côté client.",
    technologies: ["redux-toolkit", "store", "slices", "selectors"],
  },
  {
    id: "quality",
    code: "d",
    name: "Qualité",
    description: "Optimisation, accessibilité, SEO et performance web.",
    technologies: ["accessibility", "seo", "lighthouse", "performance"],
  },
  {
    id: "testing-debug",
    code: "e",
    name: "Testing",
    description: "Débogage, tests fonctionnels et cahier de recette.",
    technologies: [
      "chrome-devtools",
      "functional-testing",
      "acceptance-testing",
      "debug",
    ],
  },
  {
    id: "devops-deployment",
    code: "f",
    name: "DevOps",
    description: "Versionnement, déploiement et outils de développement.",
    technologies: ["git", "github", "github-pages", "vercel"],
  },
];