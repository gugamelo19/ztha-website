"use client";

export default function PhotoBanner() {
  return (
    <section style={{
      position: "relative",
      height: 860,
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Foto de fundo */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url('/images/ztha-sede.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}/>

      {/* Overlay escuro */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(10,18,30,0.82), rgba(10,18,30,0.65))",
      }}/>

      {/* Conteúdo */}
      <div style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700,
          color: "#fff", letterSpacing: "-0.03em", margin: "0 0 10px",
        }}>
          Matriz ZTHA
        </h2>
        <p style={{
          fontFamily: "var(--font-body-var, sans-serif)",
          fontSize: 16, color: "#9FB0C4", margin: 0,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4DB89E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          Serrinha, Bahia — Brasil
        </p>
      </div>
    </section>
  );
}