// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🚫 Stäng av SWC helt
  swcMinify: false,
  compiler: {},

  // 🚫 Inga SWC-transforms
  experimental: {
    forceSwcTransforms: false,
  },

  // ✅ Kör alltid via Babel
  transpilePackages: [],
};

module.exports = nextConfig;
