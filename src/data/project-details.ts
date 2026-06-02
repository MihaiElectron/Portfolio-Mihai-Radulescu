import type { ProjectDetails } from "../types/project-details";

export const projectDetails: Record<string, ProjectDetails> = {
  "riding-cities": {
    video: {
      webm: "/projects/riding-cities.webm",
      mp4: "/projects/riding-cities.mp4",
    },
    context:
      "Dans le cadre d’un stage simulé au sein de l’agence Webonzaï, j’ai été chargé de mettre à jour le site vitrine de l’association Riding Cities afin d’intégrer de nouveaux contenus conformément à une maquette Figma.",
    objectives:
      "Créer une nouvelle section présentant les membres fondateurs de l’association et restructurer la zone de téléchargement des plannings de cours pour répondre aux besoins du client.",
    skills:
      "Intégration HTML sémantique, exploitation d’une maquette Figma, utilisation de classes CSS existantes, gestion des liens vers des ressources téléchargeables et structuration de contenu web.",
    results:
      "La page a été mise en conformité avec la maquette grâce à l’ajout d’une section dédiée aux fondateurs, à la création de boutons de téléchargement distincts pour les cours enfants et adultes, ainsi qu’à l’amélioration de la présentation générale du contenu.",
    improvements:
      "Ajouter une mise en page responsive avancée, optimiser l’accessibilité des contenus et enrichir l’expérience utilisateur avec des interactions plus dynamiques.",
  },

  "booki": {
    video: {
      webm: "/projects/booki.webm",
      mp4: "/projects/booki.mp4",
    },
    context:
      "Dans le cadre du projet Booki, j’ai intégré la page d’accueil responsive d’une agence de voyage permettant aux utilisateurs de rechercher des hébergements et des activités dans une ville donnée.",
    objectives:
      "L’objectif était de transformer des maquettes Figma desktop, tablette et mobile en interface web fonctionnelle, fidèle au design fourni et conforme aux contraintes techniques du projet.",
    skills:
      "J’ai renforcé mes compétences en intégration responsive, structuration HTML sémantique, création de cartes d’hébergement et d’activités, gestion des images avec object-fit, et adaptation des interfaces selon les résolutions d’écran.",
    results:
      "Résultats et impact : Le livrable final est une page d’accueil complète, responsive de 320px à 1440px, respectant les maquettes et validée selon les bonnes pratiques HTML/CSS.",
    improvements:
      "Le projet pourrait être enrichi par l’ajout d’interactions JavaScript, une optimisation plus poussée des performances, une amélioration de l’accessibilité et une logique de recherche réellement fonctionnelle.",
  },
  "ohmyfood": {
    video: {
      webm: "/projects/ohmyfood.webm",
      mp4: "/projects/ohmyfood.mp4",
    },
    context:
      "Dans le cadre du projet Ohmyfood, j’ai intégré l’interface mobile-first d’un site de réservation de restaurants à partir de maquettes mobile et desktop, avec un prototype Figma précisant les animations attendues.",
    objectives:
      "L’objectif était de développer une page d’accueil et plusieurs pages restaurants responsives, tout en enrichissant l’expérience utilisateur grâce à des animations CSS conformes au brief créatif.",
    skills:
      "J’ai appris à structurer un projet Sass, organiser des composants réutilisables, intégrer une approche mobile-first, gérer des animations d’interface et maintenir plusieurs pages partageant une base CSS commune.",
    results:
      "Le projet final propose une interface responsive complète, des pages restaurants cohérentes, des animations fluides et un code versionné sur GitHub, avec une publication possible via GitHub Pages.",
    improvements:
      "Le site pourrait évoluer avec JavaScript pour ajouter une réservation dynamique, une gestion interactive du panier, un filtrage des restaurants et des animations plus avancées selon les interactions utilisateur.",
  },

  "print-it": {
    video: {
      webm: "/projects/printit.webm",
      mp4: "/projects/printit.mp4",
    },
    context:
      "Dans le cadre du projet Print-It, j’ai été chargé d’ajouter de l’interactivité à la bannière d’un site vitrine en développant un carrousel dynamique en JavaScript à partir d’une base HTML et CSS existante.",
    objectives:
      "Concevoir un système de navigation complet permettant de parcourir plusieurs diapositives à l’aide de flèches directionnelles et d’indicateurs visuels, tout en assurant une navigation circulaire fluide.",
    skills:
      "J’ai appris à structurer un projet Sass, organiser des composants réutilisables, intégrer une approche mobile-first, gérer des animations d’interface et maintenir plusieurs pages partageant une base CSS commune.",
    results:
      "Le projet final propose une interface responsive complète, des pages restaurants cohérentes, des animations fluides et un code versionné sur GitHub, avec une publication possible via GitHub Pages.",
    improvements:
      "Le projet pourrait être enrichi par l’ajout d’un défilement automatique, d’animations de transition entre les diapositives, d’une navigation tactile et d’une meilleure accessibilité clavier.",
  },

  "sophie-bluel": {
    video: {
      webm: "/projects/sophie.webm",
      mp4: "/projects/sophie.mp4",
    },
    context:
      "Dans le cadre du projet Sophie Bluel, j’ai développé la partie front-end dynamique du site portfolio d’une architecte d’intérieur à partir d’une base HTML statique, d’un back-end fourni et de maquettes Figma.",
    objectives:
      "L’objectif était d’afficher dynamiquement les travaux depuis une API, de créer une page de connexion administrateur et de développer une modale complète permettant l’ajout et la suppression de projets.",
    skills:
      "J’ai renforcé mes compétences en manipulation du DOM, gestion des formulaires, appels API, authentification par token, affichage conditionnel, création de modale et mise à jour dynamique de l’interface sans rechargement de page.",
    results:
      "Le site permet désormais de charger les projets depuis le back-end, filtrer les travaux par catégorie, connecter un administrateur, gérer un mode édition et ajouter ou supprimer des médias via une interface administrable.",
    improvements:
      "Le projet pourrait être amélioré avec une gestion d’erreurs plus avancée, une validation de formulaire renforcée, une meilleure accessibilité de la modale et une architecture JavaScript plus modulaire.",
  },

  "kasa": {
    video: {
      webm: "/projects/kasa.webm",
      mp4: "/projects/kasa.mp4",
    },
    context:
      "Dans le cadre du projet Kasa, j’ai développé le front-end d’une application de location immobilière avec React, à partir de maquettes fournies et de données simulées issues d’un fichier JSON.",
    objectives:
      "Objectifs : L’objectif était de créer une application web multipage, moderne et réactive, avec une navigation fluide entre les pages et une interface composée de composants React réutilisables.",
    skills:
      "J’ai appris à initialiser une application avec Vite, structurer une interface en composants React, gérer le routage avec React Router, exploiter des données JSON et intégrer des animations CSS avec Sass.",
    results:
      "L’application permet de consulter des logements, accéder à des pages de détail, gérer les routes dynamiques, afficher une page d’erreur et proposer une expérience utilisateur fluide sur desktop et mobile.",
    improvements:
      "Le projet pourrait évoluer avec une API réelle, une gestion des favoris, un moteur de recherche, un filtrage des logements et une migration vers TypeScript pour renforcer la fiabilité du code.",
  },

  "nina-carducci": {
    video: {
      webm: "/projects/nina.webm",
      mp4: "/projects/nina.mp4",
    },
    context:
      "Dans le cadre de ce projet, j’ai optimisé le site vitrine d’une photographe professionnelle afin d’améliorer ses performances, son référencement naturel et son accessibilité, tout en répondant à des besoins de visibilité locale.",
    objectives:
      "L’objectif était d’augmenter les scores Lighthouse, réduire le temps de chargement, renforcer l’accessibilité selon les recommandations WCAG et améliorer la présence du site dans les résultats des moteurs de recherche.",
    skills:
      "J’ai appris à réaliser un audit de performance, optimiser les ressources, améliorer l’accessibilité, implémenter des données structurées, travailler le SEO technique et analyser les indicateurs Core Web Vitals.",
    results:
      "Le poids des images a été réduit de plus de 97 %, les performances du site ont été améliorées, l’accessibilité renforcée et le référencement local optimisé grâce aux données structurées et aux métadonnées sociales.",
    improvements:
      "Le projet pourrait être complété par un suivi analytique avancé, une stratégie éditoriale SEO, l’automatisation des optimisations d’images et une surveillance continue via Search Console.",
  },

  "724events": {
    video: {
      webm: "/projects/724events.webm",
      mp4: "/projects/724events.mp4",
    },
    context:
      "Dans le cadre de ce projet, j’ai repris un site événementiel React existant présentant plusieurs dysfonctionnements fonctionnels et techniques afin de le stabiliser et le préparer à sa mise en production.",
    objectives:
      "L’objectif était d’identifier et corriger les bugs présents dans l’application, valider les tests existants, analyser le comportement des composants React et rédiger un cahier de recette complet couvrant les scénarios métier du site.",
    skills:
      "J’ai renforcé mes compétences en débogage, analyse de composants React, investigation de bugs, tests unitaires, tests d’intégration, rédaction de scénarios fonctionnels et validation qualité d’une application web.",
    results:
      "Le site a été stabilisé, les anomalies corrigées, les tests validés et un cahier de recette complet a été produit afin de garantir le bon fonctionnement des fonctionnalités avant livraison.",
    improvements:
      "Le projet pourrait être enrichi par une couverture de tests plus importante, une intégration continue automatisée et la mise en place d’outils de monitoring des erreurs en production.",
  },

  "argentbank": {
    video: {
      webm: "/projects/argentbank.webm",
      mp4: "/projects/argentbank.mp4",
    },
    context:
      "Dans le cadre du projet ArgentBank, j’ai développé le front-end d’une application bancaire React connectée à un back-end existant, avec authentification utilisateur et gestion d’un tableau de bord personnel.",
    objectives:
      "L’objectif était de créer une application responsive, sécuriser l’accès au profil utilisateur, connecter le front-end à une API REST et gérer les données globales de l’application avec Redux.",
    skills:
      "J’ai renforcé mes compétences en gestion d’état global, appels API authentifiés, protection de routes, persistance de session, modification de profil utilisateur et structuration de composants réutilisables.",
    results:
      "L’application permet à un utilisateur de se connecter, consulter son profil, modifier son pseudo, se déconnecter et accéder uniquement aux informations autorisées grâce à une gestion cohérente du store Redux.",
    improvements:
      "Le projet pourrait être étendu avec la gestion complète des transactions, des filtres avancés, une meilleure stratégie de persistance sécurisée et des tests automatisés sur les flux d’authentification.",
  },

  "menumaker": {
    video: {
      webm: "/projects/menumaker.webm",
      mp4: "/projects/menumaker.mp4",
    },
    context:
      "Dans le cadre du projet MenuMaker, j’ai assuré la préparation complète d’un projet web avant sa phase de développement, en intervenant sur les aspects de planification, d’architecture, de veille technologique et d’organisation Agile.",
    objectives:
      "L’objectif était de transformer des besoins fonctionnels et des User Stories en spécifications techniques détaillées, définir une solution adaptée aux contraintes du projet et construire un Kanban opérationnel pour les équipes de développement.",
    skills:
      "J’ai appris à rédiger des spécifications techniques, analyser une architecture applicative, réaliser une veille structurée, estimer la complexité des tâches et découper des fonctionnalités en tickets exploitables par les développeurs.",
    results:
      "Le projet a abouti à la production d’un dossier technique complet, d’un système de veille documenté, d’un tableau Kanban détaillé et d’un support de présentation permettant d’engager sereinement la phase de développement.",
    improvements:
      "Les livrables pourraient être enrichis par la modélisation UML, la mise en place d’une roadmap produit détaillée et une estimation budgétaire plus précise des différentes phases du projet.",
  },

  "portfolio-mihai-radulescu": {
    video: {
      webm: "/projects/portfolio.webm",
      mp4: "/projects/portfolio.mp4",
    },
    context:
      "Ce projet de fin de parcours consistait à concevoir, développer et déployer un portfolio professionnel afin de valoriser les compétences acquises tout au long de la formation et présenter les réalisations les plus significatives à des recruteurs ou clients potentiels.",
    objectives:
      "L’objectif était de créer une vitrine professionnelle moderne, responsive, accessible et performante, regroupant une présentation personnelle, les projets réalisés, les compétences techniques acquises et les moyens de contact.",
    skills:
      "J’ai consolidé mes compétences en architecture front-end moderne, typage TypeScript, optimisation des performances, déploiement continu, gestion de médias web et conception d’une expérience utilisateur cohérente sur tous les supports.",
    results:
      "Le portfolio est entièrement responsive, déployé en ligne sur Vercel, optimisé pour les performances et met en valeur l’ensemble des projets, compétences et méthodologies acquises durant le parcours OpenClassrooms.",
    improvements:
      "Le portfolio pourra être enrichi progressivement avec de nouveaux projets professionnels, des études de cas plus détaillées, des démonstrations interactives et des contributions open source pertinentes.",
  },
  
};