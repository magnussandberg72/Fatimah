// Path: app/fatimah/presentation/page.tsx
"use client"

import Link from "next/link"

export default function FatimahPresentationPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold">💖 Who is Fatimah?</h1>
        <p className="text-gray-700">
          Fatimah is a young woman in Ghana living under difficult conditions. 
          This page tells her story and how you can help.
        </p>
      </header>

      {/* Image */}
      <div>
        <img
          src="/fatimah.jpg"
          alt="Fatimah"
          className="rounded-xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Video */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute inset-0 w-full h-full rounded-xl shadow-lg"
          src="https://www.youtube.com/embed/N0TIP7rwcE8"
          title="Fatimah's work video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* Extra Story Section */}
      <div className="space-y-4 text-gray-700">
        <h2 className="text-2xl font-semibold text-center">
          Help with food money for Fatimah 🙏🏼
        </h2>
        <p>Fatimah is a kind, loving woman, trying to do her best.</p>
        <p>
          She has worked in a supermarket, and most recently at a stone/gravel quarry, 
          with a monthly salary of about 70 USD.
        </p>
        <p>
          She covers the monthly bills and medicine for her sick mother, 
          but the food money just isn’t enough to cover basic food costs.
        </p>
        <p>
          My name is Magnus, I am from Sweden, and I got to know Fatimah in 2024. 
          She is my friend, and I have helped her with food money now and then. 
          As I have understood, salaries in Ghana are very low.
        </p>
        <p>
          All support goes via her mother <b>Mavis Boakye</b> (Fatimah’s mom), 
          directly to Fatimah through MTN Mobile Money and WorldRemit.
        </p>
        <p>
          Please send some food money to Fatimah through the WorldRemit app. 
          Every gift is a blessing for her and her mom – they are very poor. 
          Thank you for your kindness 🙏🏼
        </p>
        <p className="italic">/ Magnus, Fatimah and her mom</p>
      </div>

      {/* Direct WorldRemit Button */}
      <div className="text-center">
        <a
          href="https://www.worldremit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          🌍 Send via WorldRemit
        </a>
      </div>

      {/* Support button */}
      <div className="text-center">
        <Link
          href="/fatimah"
          className="inline-block bg-pink-500 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-600 transition"
        >
          ❤️ Support Fatimah
        </Link>
      </div>

      {/* Back to Home button */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-block mt-4 bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-600 transition"
        >
          ⬅️ Back to Home
        </Link>
      </div>
    </div>
  )
}
