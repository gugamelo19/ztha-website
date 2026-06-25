"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("ztha-cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  function handleAccept() {
    localStorage.setItem("ztha-cookies-accepted", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 998,
      background: "#1A2236",
      borderTop: "1px solid #2a3a5c",
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      flexWrap: "wrap",
    }}>
      <p style={{
        fontFamily: "var(--font-body-var, sans-serif)",
        fontSize: 13,
        color: "#8B9CC0",
        margin: 0,
        maxWidth: 600,
        lineHeight: 1.6,
      }}>
        Utilizamos cookies para melhorar sua experiência de navegação.
        Ao continuar, você concorda com nossa política de privacidade.
      </p>
      <button
        onClick={handleAccept}
        style={{
          background: "#4DB89E",
          color: "#fff",
          border: "none",
          fontFamily: "var(--font-display-var, sans-serif)",
          fontWeight: 700,
          fontSize: 13,
          padding: "10px 24px",
          borderRadius: 6,
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        Aceitar cookies
      </button>
    </div>
  );
}