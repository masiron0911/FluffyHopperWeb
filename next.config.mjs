const isGithubPages = process.env.GITHUB_ACTIONS || false;
const repoName = 'FluffyHopperWeb'; // あなたのリポジトリ名（正確に書いてください！）

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: isGithubPages ? `/${repoName}/` : '/', // GitHub Actions上かどうかで切り替える
  basePath: isGithubPages ? `/${repoName}` : '',      // 同じく
  trailingSlash: true, // これはそのままでOK（static exportには推奨）
}

export default nextConfig;
