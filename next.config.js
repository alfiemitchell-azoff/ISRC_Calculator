/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use the prefix in production and on GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/ISRC_Calculator' : '',
  output: 'export',
};

module.exports = nextConfig;