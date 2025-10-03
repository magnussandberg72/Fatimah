// app/page.tsx
"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <main className="relative h-screen w-screen">
      {/* 🔹 Bakgrundsbild */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fatimah.jpg')" }}
      />

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* 🔹 Innehåll */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 text-white">
        <h1 className="text-3xl font-bold mb-4">🌸 Welcome to Fatimah Support 🌸</h1>
        <p className="mb-6 max-w-md">
          Learn about Fatimah’s story and how you can support her directly.
        </p>

        {/* 🔹 Knappar bredvid varandra */}
        <div className="flex space-x-4">
          <Link
            href="/fatimah/presentation"
            className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-lg shadow text-white font-medium"
          >
            💖 Learn about Fatimah
          </Link>
          <Link
            href="/fatimah"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg shadow text-white font-medium"
          >
            🤝 Support Fatimah
          </Link>
        </div>
      </div>
    </main>
  )
}
