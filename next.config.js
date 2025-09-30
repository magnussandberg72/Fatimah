// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // stänger av SWC helt
  compiler: undefined, // inga SWC-transforms
  experimental: {
    forceSwcTransforms: false, // blockera SWC
  },
};

module.exports = nextConfig;
