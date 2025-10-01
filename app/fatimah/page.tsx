// Path: app/fatimah/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"

export default function FatimahSupportPage() {
  const [copied, setCopied] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }

  const allDetails = `Receiver: Mavis Boakye (Fatimah’s mother)
Platform: WorldRemit → MTN Mobile Money (Ghana)
MTN Number: +233 594375428`

  return (
    <div className="space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-bold">🤝 How to Support Fatimah</h1>
        <p className="text-gray-700">
          All support goes via her mother <b>Mavis Boakye</b> (Fatimah’s mom), 
          directly to Fatimah through MTN Mobile Money via WorldRemit.
        </p>
      </header>

      {/* Receiver */}
      <div>
        <p><strong>Receiver:</strong> Mavis Boakye (Fatimah’s mother)</p>
        <button
          onClick={() => copyToClipboard("Mavis Boakye", "Receiver")}
          className="mt-1 bg-gray-200 px-3 py-1 rounded"
        >
          Copy Name
        </button>
        {copied === "Receiver" && <span className="ml-2 text-green-600">Copied!</span>}
      </div>

      {/* Platform */}
      <div>
        <p><strong>Platform:</strong> WorldRemit → MTN Mobile Money (Ghana)</p>
      </div>

      {/* MTN Number */}
      <div>
        <p><strong>MTN Number:</strong> +233 594375428</p>
        <button
          onClick={() => copyToClipboard("+233594375428", "Number")}
          className="mt-1 bg-gray-200 px-3 py-1 rounded"
        >
          Copy Number
        </button>
        {copied === "Number" && <span className="ml-2 text-green-600">Copied!</span>}
      </div>

      {/* Copy all details */}
      <div className="text-center">
        <button
          onClick={() => copyToClipboard(allDetails, "All")}
          className="bg-gray-300 px-4 py-2 rounded shadow hover:bg-gray-400 transition"
        >
          📋 Copy All Details
        </button>
        {copied === "All" && <p className="mt-2 text-green-600">All details copied!</p>}
      </div>

      {/* WorldRemit link */}
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

      {/* Navigation buttons */}
      <div className="text-center space-y-2">
        <Link
          href="/fatimah/presentation"
          className="inline-block mt-4 bg-gray-500 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-600 transition"
        >
          ⬅️ Back to Presentation
        </Link>
        <br />
        <Link
          href="/"
          className="inline-block mt-2 bg-gray-700 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
        >
          🏠 Back to Home
        </Link>
      </div>
    </div>
  )
}
