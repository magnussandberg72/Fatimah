// Path: app/fatimah/page.tsx

"use client"

export default function FatimahPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-200 to-yellow-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header */}
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-800">🙏 Support Fatimah</h1>
          <p className="text-gray-700 opacity-90">
            Fatimah lives in Ghana and struggles with poverty and hunger.
            Support goes via her mother <b>Mavis Boakye</b> through MTN Mobile Money (WorldRemit).
          </p>
        </header>

        {/* Support box */}
        <div className="rounded-xl shadow-md bg-white/80 backdrop-blur p-4 space-y-2 text-gray-800">
          <h2 className="text-xl font-semibold">🤝 How to Support</h2>
          <p><strong>Receiver:</strong> Mavis Boakye (Fatimah’s mother)</p>
          <p className="text-sm opacity-80">Funds go directly to Fatimah through Mavis.</p>
          <p><strong>Platform:</strong> WorldRemit → MTN Mobile Money (Ghana)</p>
          <p><strong>MTN Number:</strong> +233 594375428</p>

          <a
            href="https://www.worldremit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
          >
            Send via WorldRemit
          </a>
        </div>

      </div>
    </div>
  )
}
