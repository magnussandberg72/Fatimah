// Path: app/layout.tsx
import "./globals.css"
import { ReactNode } from "react"
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fatimah Support",
  description: "Support Fatimah via WorldRemit & MTN",
}

function BackgroundWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <div
      className={
        isHome
          ? "min-h-screen bg-cover bg-center flex flex-col"
          : "min-h-screen bg-gradient-to-b from-sky-200 to-green-900 flex flex-col"
      }
      style={isHome ? { backgroundImage: "url('/fatimah.jpg')" } : {}}
    >
      <header className="p-4 text-center bg-pink-100 bg-opacity-80 shadow">
        <h1 className="text-2xl font-bold">🌸 Fatimah Support</h1>
      </header>
      <main className={`flex-1 flex items-center justify-center p-6 ${inter.className}`}>
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 w-full max-w-2xl">
          {children}
        </div>
      </main>
      <footer className="p-4 text-center text-sm text-gray-700 bg-white bg-opacity-70">
        By Magnus T. Gustav Sandberg – Vision Framtid
      </footer>
    </div>
  )
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-gray-900">
        <BackgroundWrapper>{children}</BackgroundWrapper>
      </body>
    </html>
  )
}
