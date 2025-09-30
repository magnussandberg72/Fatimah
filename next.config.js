// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🚫 Stäng av SWC helt
  swcMinify: false,
  compiler: {},
  
NODE_OPTIONS="--no-experimental-fetch",

  // 🚫 Inga SWC-transforms
  experimental: {
    forceSwcTransforms: false,
  },

  // ✅ Kör alltid via Babel
  transpilePackages: [],
};

module.exports = nextConfig;
