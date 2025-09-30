// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // 🚫 stäng av SWC
  compiler: {},     // tom compiler → inga SWC-optimeringar
  experimental: {
    forceSwcTransforms: false, // 🚫 förhindra SWC-fallback
  },
}

module.exports = nextConfig
