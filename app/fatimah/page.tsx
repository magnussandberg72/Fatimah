// Path: app/page.tsx
"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/fatimah.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white space-y-6 max-w-xl bg-black bg-opacity-50 p-8 rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold">🌸 Welcome to Fatimah Support</h1>
        <p className="text-lg">
          Learn about Fatimah’s story and how you can support her directly.
        </p>
        <Link
          href="/fatimah/presentation"
          className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition"
        >
          Learn about Fatimah
        </Link>
      </div>
    </div>
  )
}
