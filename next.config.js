// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // fångar fler buggar i dev
  swcMinify: true,       // snabbare och mindre build

  // Tillåt externa bilder om vi skulle behöva senare
  images: {
    domains: ["localhost"], 
  },

  // Internationalization (om du vill bygga på flera språk)
  i18n: {
    locales: ["en", "sv"],
    defaultLocale: "en",
  },
}

module.exports = nextConfig
