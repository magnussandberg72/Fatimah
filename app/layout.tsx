// app/layout.tsx
import "./globals.css"
import { ReactNode } from "react"

export const metadata = {
  title: "Fatimah",
  description: "Support site",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
