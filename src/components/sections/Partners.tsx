"use client";

import { useRef, useEffect, useState } from "react";

const PARTNERS = [
  {
    id: "lenovo",
    name: "Lenovo",
    svg: (
      <svg width="90" height="28" viewBox="0 0 90 28" aria-label="Lenovo">
        <text x="0" y="22" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="#E2231A" letterSpacing="-0.5">Lenovo</text>
      </svg>
    ),
  },
  {
    id: "dell",
    name: "Dell",
    svg: (
      <svg width="52" height="52" viewBox="0 0 52 52" aria-label="Dell">
        <circle cx="26" cy="26" r="24" fill="#007DB8"/>
        <text x="26" y="33" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="15" fontWeight="900" fill="white">DELL</text>
      </svg>
    ),
  },
  {
    id: "hp",
    name: "HP",
    svg: (
      <svg width="64" height="40" viewBox="0 0 64 40" aria-label="HP">
        <rect x="2" y="2" width="60" height="36" rx="6" fill="#0096D6"/>
        <text x="32" y="28" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="20" fontWeight="900" fill="white">hp</text>
      </svg>
    ),
  },
  {
    id: "intelbras",
    name: "Intelbras",
    svg: (
      <svg width="110" height="32" viewBox="0 0 110 32" aria-label="Intelbras">
        <text x="55" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="17" fontWeight="900" fill="#00A859" letterSpacing="0.5">intelbras</text>
      </svg>
    ),
  },
  {
    id: "hikvision",
    name: "Hikvision",
    svg: (
      <svg width="110" height="32" viewBox="0 0 110 32" aria-label="Hikvision">
        <rect x="0" y="4" width="26" height="22" rx="3" fill="#D21F26"/>
        <text x="13" y="19" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="9" fontWeight="900" fill="white">HIK</text>
        <text x="32" y="20" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#1A1A1A" letterSpacing="0.3">VISION</text>
      </svg>
    ),
  },
];

export default function Partners() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#fff", paddingTop: 72, paddingBottom: 80, borderTop: "1px solid #E8EBF0" }}>
      <div className="container-site">

        {/* Cabeçalho */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontFamily: "var(--font-display-var, sans-serif)", fontSize: 11, fontWeight: 700,
            color: "#4DB89E", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12,
          }}>
            <span style={{ display: "inline-block", width: 20, height: 2, background: "#4DB89E", borderRadius: 1 }}/>
            Parcerias Oficiais
            <span style={{ display: "inline-block", width: 20, height: 2, background: "#4DB89E", borderRadius: 1 }}/>
          </span>
          <h2 style={{
            fontFamily: "var(--font-display-var, sans-serif)",
            fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 800,
            color: "#1A2236", letterSpacing: "-0.03em", margin: "0 0 10px",
          }}>
            Somos revendedores <span style={{ color: "#4DB89E" }}>autorizados</span>
          </h2>
          <p style={{
            fontFamily: "var(--font-body-var, sans-serif)", fontSize: 15,
            color: "#6B7A93", maxWidth: 480, margin: "0 auto", lineHeight: 1.65,
          }}>
            Trabalhamos com as maiores marcas de tecnologia do mundo para garantir
            produtos originais e suporte certificado.
          </p>
        </div>

        {/* Grid de logos */}
        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}
          className="partners-grid"
        >
          {PARTNERS.map((partner, i) => (
            <PartnerCard key={partner.id} partner={partner} visible={inView} delay={i * 100} />
          ))}
        </div>

        {/* Texto de apoio */}
        <p style={{
          fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13,
          color: "#6B7A93", textAlign: "center", marginTop: 32,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          <span style={{ display: "inline-block", width: 16, height: 1.5, background: "#C8EDE4", borderRadius: 1 }}/>
          Garantia de autenticidade e assistência técnica autorizada
          <span style={{ display: "inline-block", width: 16, height: 1.5, background: "#C8EDE4", borderRadius: 1 }}/>
        </p>

      </div>

      <style>{`
        @media (max-width: 768px) { .partners-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 480px) { .partners-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}

function PartnerCard({ partner, visible, delay }: {
  partner: typeof PARTNERS[number];
  visible: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#F0FAF7" : "#F7F8FA",
        border: `1px solid ${hovered ? "#C8EDE4" : "#E8EBF0"}`,
        borderRadius: 10,
        height: 80,
        display: "flex", alignItems: "center", justifyContent: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, background 0.25s, border-color 0.25s`,
        cursor: "default",
        filter: hovered ? "none" : "grayscale(20%) opacity(0.85)",
      }}
      title={partner.name}
    >
      {partner.svg}
    </div>
  );
}
