// app/page.tsx
import Image from "next/image"

export default function HomePage() {
  return (
    <main style={{ fontFamily: "sans-serif", textAlign: "center", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        🌸 Welcome to Fatimah Support 🌸
      </h1>

      <p style={{ marginBottom: "1.5rem" }}>
        Learn about Fatimah’s story and support her journey directly.
      </p>

      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Image
          src="/fatimah.jpg"
          alt="Fatimah"
          width={600}
          height={400}
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
      </div>

      <p style={{ marginTop: "1.5rem" }}>
        💙💚❤️ Thank you for your support 💙💚❤️
      </p>

      <a
        href="https://youtube.com" // byt till din YouTube-länk
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#2563eb",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Watch Video
      </a>
    </main>
  )
}
