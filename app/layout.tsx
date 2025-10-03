// Path: app/layout.tsx
import "./globals.css"
import { ReactNode } from "react"
import { Inter } from "next/font/google"
import { headers } from "next/headers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fatimah Support",
  description: "Support Fatimah via WorldRemit & MTN",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // Hämta nuvarande path från request headers (server-side safe)
  const pathname = headers().get("x-invoke-path") || "/"
  const isHome = pathname === "/"

  return (
    <html lang="en" className={inter.className}>
      <body className="text-gray-900">
        <div className="min-h-screen flex flex-col">
          {/* Header (inte på home) */}
          {!isHome && (
            <header className="p-4 text-center bg-pink-100 bg-opacity-80 shadow">
              <h1 className="text-2xl font-bold">🌸 Fatimah Support</h1>
            </header>
          )}

          {/* Content */}
          <main className="flex-1 flex items-center justify-center p-6">
            <div className={isHome ? "w-full" : "bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 w-full max-w-2xl"}>
              {children}
            </div>
          </main>

          {/* Footer (inte på home) */}
          {!isHome && (
            <footer className="p-4 text-center text-sm text-gray-700 bg-white bg-opacity-70">
              By Magnus T. Gustav Sandberg – Vision Framtid
            </footer>
          )}
        </div>
      </body>
    </html>
  )
}
