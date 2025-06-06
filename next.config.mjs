const isGithubPages = process.env.GITHUB_ACTIONS || false;
const repoName = 'FluffyHopperWeb';

const nextConfig = {
  output: 'export',
  images: {
    loader: "custom",
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  transpilePackages: ["next-image-export-optimizer"],
  env: {
    nextImageExportOptimizer_imageFolderPath: "public/images",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : '',
    NEXT_PUBLIC_STRAPI_URL: 'https://strapi.se00sas.com',
  },
  typescript: {
  },
  eslint: {
  },
  assetPrefix: isGithubPages ? `/${repoName}/` : '/',
  basePath: isGithubPages ? `/${repoName}` : '',
  trailingSlash: true, // static export
}

export default nextConfig;
