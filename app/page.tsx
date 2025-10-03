"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/fatimah.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Header */}
      <div className="absolute top-4 left-4 text-white text-sm font-semibold z-10">
        🌸 Fatimah Support
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center text-center text-white h-screen px-4">
        <h1 className="text-3xl font-bold mb-4">
          🌸 Welcome to Fatimah Support 🌸
        </h1>
        <p className="mb-8 max-w-md">
          Learn about Fatimah’s story and how you can support her directly.
        </p>

        {/* Buttons side by side */}
        <div className="flex gap-4">
          <Link href="/fatimah/presentation">
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg">
              💖 Learn about Fatimah
            </button>
          </Link>
          <Link href="/fatimah">
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg">
              🤝 Support Fatimah
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
