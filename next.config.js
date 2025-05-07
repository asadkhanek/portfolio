/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: '/asad', // Replace 'asad' with your GitHub repository name
  images: {
    unoptimized: true,
  },
  assetPrefix: '/asad/', // Replace 'asad' with your GitHub repository name
};

module.exports = nextConfig;