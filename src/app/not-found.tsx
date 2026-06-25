"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#F7F8FA",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      textAlign: "center",
    }}>
      <Link href="/" style={{ marginBottom: 32 }}>
        <img src="/images/logo.png" alt="ZTHA Tecnologia"
          style={{ height: 80, width: "auto", mixBlendMode: "multiply", display: "block" }}/>
      </Link>

      <span style={{
        fontFamily: "var(--font-display-var, sans-serif)",
        fontSize: 120, fontWeight: 800, color: "#E8EBF0", lineHeight: 1,
      }}>
        404
      </span>

      <h1 style={{
        fontFamily: "var(--font-display-var, sans-serif)",
        fontSize: 28, fontWeight: 700, color: "#1A2236", margin: "8px 0 12px",
      }}>
        Página não encontrada
      </h1>

      <p style={{
        fontFamily: "var(--font-body-var, sans-serif)",
        fontSize: 15, color: "#6B7A93", maxWidth: 400, lineHeight: 1.7, margin: "0 0 32px",
      }}>
        A página que você procura não existe ou foi movida. Volte para a página inicial ou entre em contato.
      </p>

      <div style={{ display: "flex", gap: 12 }}>
        <Link href="/" style={{
          background: "#4DB89E", color: "#fff",
          fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 700, fontSize: 14,
          padding: "12px 24px", borderRadius: 7, textDecoration: "none",
        }}>
          Voltar ao início
        </Link>
        <Link href="/contato" style={{
          background: "transparent", color: "#4DB89E",
          fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 700, fontSize: 14,
          padding: "12px 24px", borderRadius: 7, textDecoration: "none",
          border: "1.5px solid #4DB89E",
        }}>
          Fale conosco
        </Link>
      </div>
    </div>
  );
}