"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fatimah.jpg')" }}
    >
      {/* Mörk overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content – längst ner */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-6 pb-20 text-center text-white">
        {/* Rubrik */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-lg">
          🌸 Welcome to Fatimah Support 🌸
        </h1>

        {/* Beskrivning */}
        <p className="mb-8 max-w-md text-base md:text-lg drop-shadow-md">
          Learn about Fatimah’s story and how you can support her directly.
        </p>

        {/* Knappar */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-md justify-center">
          <Link
            href="/fatimah/presentation"
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition text-center"
          >
            💖 Learn about Fatimah
          </Link>
          <Link
            href="/fatimah"
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition text-center"
          >
            🤝 Support Fatimah
          </Link>
        </div>
      </div>
    </div>
  );
}
