// -------------------------------------------------------------
// TYPES : on décrit exactement la structure renvoyée par GitHub
// -------------------------------------------------------------

interface GithubLanguage {
  name: string;
}

interface GithubTopic {
  topic: {
    name: string;
  };
}

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

interface GithubResponse {
  data: {
    user: {
      repositories: {
        nodes: GithubRepository[];
      };
    };
  };
}

interface Project {
  name: string;
  description: string | null;
  url: string;
  stars: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  status: "done" | "under-process";
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

    const json: GithubResponse = await res.json();

    const repos = json.data.user.repositories.nodes;

    const filtered: Project[] = repos.map((repo) => {
      const topics = repo.repositoryTopics.nodes.map((t) => t.topic.name);

      let status: Project["status"] = "under-process";

      if (topics.includes("status-done")) {
        status = "done";
      }

      if (topics.includes("status-in-progress")) {
        status = "under-process";
      }

      return {
        name: repo.name,
        description: repo.description,
        url: repo.url,
        stars: repo.stargazerCount,
        language: repo.languages.nodes[0]?.name ?? null,
        topics,
        updated_at: repo.updatedAt,
        status,
      };
    });

    return Response.json(filtered);
  } catch (error) {
    return Response.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}