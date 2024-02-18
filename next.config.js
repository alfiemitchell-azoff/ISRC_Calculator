/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Use the prefix in production and on GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/{ISRC_Calculator}' : '',
};

module.exports = nextConfig;