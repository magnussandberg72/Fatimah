// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // 🚫 stänger av SWC helt
  compiler: {
    swcMinify: false,
  }
}

module.exports = nextConfig
