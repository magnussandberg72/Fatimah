// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // 🚫 Stäng av all SWC
  swcMinify: false,
  compiler: {},

  experimental: {
    forceSwcTransforms: false,
  },

  // ✅ Kör alltid via Babel
  transpilePackages: [],
  
  // 🔇 Tysta SWC-loggar
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' }; // bara fel, inga warnings
    return config;
  },
};

module.exports = nextConfig;
