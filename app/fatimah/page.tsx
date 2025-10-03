// Path: app/fatimah/page.tsx
"use client"

import Link from "next/link"

export default function FatimahSupportPage() {
  return (
    <main className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">🌸 Support Fatimah</h1>
      <p className="mb-6">
        All support goes via her mother <b>Mavis Boakye</b> (Fatimah’s mom), 
        directly to Fatimah through MTN Mobile Money via WorldRemit.
      </p>

      <p><strong>Receiver:</strong> Mavis Boakye</p>
      <p><strong>Platform:</strong> WorldRemit → MTN Mobile Money (Ghana)</p>
      <p><strong>MTN Number:</strong> +233 594375428</p>

      <div className="mt-6 space-x-4">
        <a
          href="https://www.worldremit.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
        >
          🌍 Send via WorldRemit
        </a>
        <Link
          href="/"
          className="inline-block bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-600 transition"
        >
          🏡 Back to Home
        </Link>
      </div>
    </main>
  )
}
