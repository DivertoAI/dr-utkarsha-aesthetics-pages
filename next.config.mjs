/** @type {import('next').NextConfig} */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrgPages = repository.endsWith(".github.io");
const basePath = isGitHubActions && repository && !isUserOrgPages ? `/${repository}` : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.drutkarshaaesthetics.com"
      },
      {
        protocol: "https",
        hostname: "drutkarshaaesthetics.com"
      }
    ]
  }
};

export default nextConfig;
