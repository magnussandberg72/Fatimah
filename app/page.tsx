"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/fatimah.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content placerat längst ner */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-4 pb-16 text-center text-white">
        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          🌸 Welcome to Fatimah Support 🌸
        </h1>

        {/* Subtitle */}
        <p className="mb-6 max-w-md text-base md:text-lg">
          Learn about Fatimah’s story and how you can support her directly.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            href="/fatimah/presentation"
            className="px-5 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition"
          >
            💖 Learn about Fatimah
          </Link>
          <Link
            href="/fatimah"
            className="px-5 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition"
          >
            🤝 Support Fatimah
          </Link>
        </div>
      </div>
    </div>
  );
}
