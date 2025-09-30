// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,          // stäng av SWC minifier
  experimental: {
    forceSwcTransforms: false, // stoppa SWC-transformer
  },
  compiler: {},              // ingen SWC-compiler
  transpilePackages: [],     // säkerställ att Babel används
};

module.exports = nextConfig;
