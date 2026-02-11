/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: [
      "ghchart.rshah.org",
      "github-readme-streak-stats.herokuapp.com",
      "github-readme-activity-graph.vercel.app"
    ],
  },
};

export default nextConfig;
