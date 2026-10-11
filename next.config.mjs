const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: isGithubActions ? '/lesli-web-site' : '',
  assetPrefix: isGithubActions ? '/lesli-web-site/' : '',
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: '.',
  },
};

export default nextConfig;
