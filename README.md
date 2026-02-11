# Portfolio Développeur – Mihai Radulescu

Ce dépôt contient le code source de mon portfolio développeur.  
Il s'agit d'une application moderne construite avec Next.js, TypeScript, Sass et Tailwind (utilisé uniquement comme utilitaire).  
Le portfolio a pour objectif de présenter mes projets GitHub, mes compétences, mon parcours et mes réalisations professionnelles.

---

## Objectifs du projet

- Présenter mes projets GitHub de manière dynamique grâce à l'API GitHub.
- Proposer une interface moderne, performante et responsive.
- Mettre en avant mes compétences techniques et mes expériences.
- Construire une base de code propre, scalable et professionnelle.

---

## Stack Technique

### Framework et langage
- Next.js 16.1.6
  Utilisé pour le rendu hybride (SSR/SSG), les performances optimisées et l'architecture App Router.
- React 19  
  Pour la construction de l'interface utilisateur.
- TypeScript  
  Pour un code plus robuste, typé et maintenable.

### Styles
- Sass (SCSS)  
  Utilisé pour structurer les styles avec une architecture modulaire (BEM, abstracts, base, layout, components).
- Tailwind CSS (utilisation utilitaire uniquement)  
  Utilisé pour accélérer la mise en page (flex, grid, spacing, responsive, transitions).

### Données et API
- GitHub API (REST ou GraphQL)  
  Permet de récupérer automatiquement mes projets, descriptions, technologies et statistiques.
- TanStack Query (React Query)  
  Utilisé pour gérer les requêtes API, le cache, les états de chargement et la synchronisation des données.

### Qualité et outils
- ESLint  
  Pour garantir un code propre et cohérent.
- Alias `@/*`  
  Pour des imports plus lisibles et structurés.
- Architecture modulaire  
  Organisation claire des pages, composants, styles, hooks et services.

---

## Fonctionnalités prévues

- Page d'accueil présentant mon profil et mes compétences.
- Liste dynamique de mes projets GitHub.
- Fiches projets détaillées.
- Section contact.
- Design responsive pour mobile, tablette et desktop.

---

## Installation et développement

1. Cloner le dépôt  
   `git clone <url-du-depot>`

2. Installer les dépendances  
   `npm install`

3. Lancer le serveur de développement  
   `npm run dev`

---

## Licence

MIT
