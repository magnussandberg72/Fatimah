// Path: app/fatimah/presentation/page.tsx

"use client"

export default function FatimahPresentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 via-blue-200 to-yellow-100 p-6">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Header */}
        <header className="text-center space-y-3">
          <h1 className="text-4xl font-bold text-gray-800">🌍 Fatimah’s Story</h1>
          <p className="text-gray-700 opacity-90">
            This page presents Fatimah’s life situation and how we can help her together.
            All support goes via her mother <b>Mavis Boakye</b>, directly to Fatimah through MTN Mobile Money.
          </p>
        </header>

        {/* Fatimah image */}
        <div className="rounded-xl shadow-md bg-white/80 backdrop-blur p-4">
          <h2 className="text-xl font-semibold">📸 Fatimah</h2>
          <p className="text-sm text-gray-600 mb-2">A photo of Fatimah</p>
          <img
            src="/fatimah.jpg"
            alt="Fatimah"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* YouTube video */}
        <div className="rounded-xl shadow-md bg-white/80 backdrop-blur p-4">
          <h2 className="text-xl font-semibold">🎥 Video Presentation</h2>
          <p className="text-sm text-gray-600 mb-2">Short story video about Fatimah</p>
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-xl"
              src="https://www.youtube.com/embed/N0TIP7rwcE8"
              title="Fatimah video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Support Info */}
        <div className="rounded-xl shadow-md bg-white/80 backdrop-blur p-4 space-y-2 text-gray-800">
          <h2 className="text-xl font-semibold">🤝 How to Support</h2>
          <p><strong>Receiver:</strong> Mavis Boakye (Fatimah’s mother)</p>
          <p className="text-sm opacity-80">All funds go directly to Fatimah through her mother.</p>
          <p><strong>Platform:</strong> WorldRemit → MTN Mobile Money (Ghana)</p>
          <p><strong>MTN Number:</strong> +233 594375428</p>
        </div>

      </div>
    </div>
  )
}
