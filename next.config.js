/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/portfolio', // Your GitHub repository name
  images: {
    unoptimized: true,
  },
  assetPrefix: '/portfolio/', // Your GitHub repository name
};

module.exports = nextConfig;