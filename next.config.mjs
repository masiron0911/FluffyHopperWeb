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
  // assetPrefixを修正
  assetPrefix: '/', // 先頭にスラッシュを付ける
  basePath: '', // ベースパスを空に設定
  trailingSlash: true, // URLの末尾にスラッシュを追加
}

export default nextConfig
