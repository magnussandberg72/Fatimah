// app/fatimah/presentation/page.tsx
import Image from "next/image";

export default function PresentationPage() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Fatimah Presentation</h1>
      
      {/* Bilden från public/ */}
      <Image 
        src="/fatimah.jpg" 
        alt="Fatimah" 
        width={400} 
        height={300} 
        priority 
      />

      {/* YouTube-länk */}
      <p style={{ marginTop: "1.5rem" }}>
        Se videon här:{" "}
        <a 
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          YouTube
        </a>
      </p>
    </main>
  );
}
