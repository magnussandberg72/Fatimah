// app/page.tsx
"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Bakgrundsbild */}
      <img 
        src="/fatimah.jpg" 
        alt="Fatimah" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay för kontrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Header uppe till vänster */}
      <div className="absolute top-4 left-4 text-white text-sm font-semibold">
        🌸 Fatimah Support
      </div>

      {/* Centralt block */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          🌸 Welcome to Fatimah Support
        </h1>
        <p className="mb-8 text-lg max-w-xl">
          Learn about Fatimah’s story and how you can support her directly.
        </p>

        {/* Knappar bredvid varandra */}
        <div className="flex gap-4">
          <Link
            href="/fatimah/presentation"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg shadow transition"
          >
            💖 Learn about Fatimah
          </Link>
          <Link
            href="/fatimah"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow transition"
          >
            🤝 Support Fatimah
          </Link>
        </div>
      </div>
    </main>
  )
}
