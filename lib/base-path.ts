const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrgPages = repository.endsWith(".github.io");

export const runtimeBasePath = isGitHubActions && repository && !isUserOrgPages ? `/${repository}` : "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  if (path.startsWith("//")) {
    return path;
  }

  if (runtimeBasePath && path.startsWith(runtimeBasePath + "/")) {
    return path;
  }

  return `${runtimeBasePath}${path}`;
}
