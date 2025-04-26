const isGithubPages = process.env.GITHUB_ACTIONS || false;
const repoName = 'FluffyHopperWeb';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    path: isGithubPages ? `/${repoName}/` : '/',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: isGithubPages ? `/${repoName}/` : '/',
  basePath: isGithubPages ? `/${repoName}` : '',
  trailingSlash: true, // static export
}

export default nextConfig;
