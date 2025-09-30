// next.config.js
const withTM = require("next-transpile-modules")([]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    forceSwcTransforms: false,
  },
};

module.exports = withTM(nextConfig);
