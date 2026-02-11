// -------------------------------------------------------------
// TYPES : on décrit exactement la structure renvoyée par GitHub
// -------------------------------------------------------------

// Langage principal du repo
interface GithubLanguage {
  name: string;
}

// Topic GitHub
interface GithubTopic {
  topic: {
    name: string;
  };
}

// Un repository GitHub (structure GraphQL)
interface GithubRepository {
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  languages: {
    nodes: GithubLanguage[];
  };
  repositoryTopics: {
    nodes: GithubTopic[];
  };
  updatedAt: string;
}

// Structure de la réponse GraphQL GitHub
interface GithubResponse {
  data: {
    user: {
      repositories: {
        nodes: GithubRepository[];
      };
    };
  };
}

// Structure du repo filtré (ce que tu renvoies à ton front)
interface Project {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}


// -------------------------------------------------------------
// API ROUTE
// -------------------------------------------------------------

const GITHUB_API = "https://api.github.com/graphql";

export async function GET() {
  try {
    const query = `
      query {
        user(login: "mihaielectron") {
          repositories(first: 20, orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes {
              name
              description
              url
              stargazerCount
              languages(first: 1) {
                nodes {
                  name
                }
              }
              repositoryTopics(first: 10) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              updatedAt
            }
          }
        }
      }
    `;

    const res = await fetch(GITHUB_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    });

    // On typpe ici la réponse JSON
    const json: GithubResponse = await res.json();

    const repos = json.data.user.repositories.nodes;

    // On typpe ici le résultat final
    const filtered: Project[] = repos.map((repo) => ({
      name: repo.name,
      description: repo.description,
      url: repo.url,
      stars: repo.stargazerCount,
      language: repo.languages.nodes[0]?.name ?? null,
      topics: repo.repositoryTopics.nodes.map((t) => t.topic.name),
      updated_at: repo.updatedAt,
    }));

    return Response.json(filtered);

  } catch (error) {
    return Response.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}
