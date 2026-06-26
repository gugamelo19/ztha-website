"use client";

import { useRef, useEffect, useState } from "react";
import { MapPin, Wifi, Zap } from "lucide-react";
import dynamic from "next/dynamic";

const MapaCobertura = dynamic(() => import("@/components/sections/MapaCobertura"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", aspectRatio: "960/680", background: "#F0FAF7", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6B7A93" }}>Carregando mapa...</span>
    </div>
  ),
});

const HIGHLIGHTS = [
  { icon: MapPin, label: "Sede em Serrinha, BA" },
  { icon: Wifi,   label: "Links para todos os estados" },
  { icon: Zap,    label: "Atendimento remoto e presencial" },
];

const STATE_TAGS = [
  "Bahia", "São Paulo", "Minas Gerais", "Rio de Janeiro",
  "Pernambuco", "Ceará", "Goiás", "Paraná", "+ todos os estados",
];

export default function Coverage() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#F7F8FA", paddingTop: 80, paddingBottom: 96, borderTop: "1px solid #E8EBF0" }}>
      <div className="container-site">
        <div
          ref={ref}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
          className="coverage-grid"
        >
          {/* Texto */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              fontFamily: "var(--font-display-var, sans-serif)", fontSize: 11, fontWeight: 700,
              color: "#4DB89E", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 14,
            }}>
              <span style={{ display: "inline-block", width: 20, height: 2, background: "#4DB89E", borderRadius: 1 }}/>
              Alcance Nacional
            </span>

            <h2 style={{
              fontFamily: "var(--font-display-var, sans-serif)",
              fontSize: "clamp(28px, 3.5vw, 42px)", fontWeight: 800,
              color: "#1A2236", letterSpacing: "-0.03em", lineHeight: 1.15,
              margin: "0 0 16px",
            }}>
              Atendemos<br/>
              <span style={{ color: "#4DB89E" }}>todo o Brasil</span>
            </h2>

            <p style={{
              fontFamily: "var(--font-body-var, sans-serif)", fontSize: 15,
              color: "#6B7A93", lineHeight: 1.75, margin: "0 0 28px", maxWidth: 420,
            }}>
              Sediados em Serrinha, Bahia, fornecemos soluções
              de TI para clientes em todos os estados.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {HIGHLIGHTS.map(({ icon: Icon, label }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 7,
                    background: "#F0FAF7", border: "1px solid #C8EDE4",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon size={15} color="#4DB89E" aria-hidden="true"/>
                  </div>
                  <span style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 14, color: "#4B5A72", fontWeight: 500 }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {STATE_TAGS.map((tag) => (
                <span key={tag} style={{
                  background: "#F0FAF7", border: "1px solid #C8EDE4",
                  color: "#2B8970", padding: "4px 10px", borderRadius: 4,
                  fontFamily: "var(--font-display-var, sans-serif)", fontSize: 11,
                  fontWeight: 700, letterSpacing: "0.03em",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Mapa */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(24px)",
            transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            display: "flex", justifyContent: "center",
          }}>
            <div style={{
              background: "#fff", borderRadius: 16, border: "1px solid #E8EBF0",
              padding: 16, width: "100%", maxWidth: 520,
            }}>
              <MapaCobertura scale={820} width={600} height={620}/>
              <p style={{
                fontFamily: "var(--font-body-var, sans-serif)", fontSize: 11,
                color: "#6B7A93", textAlign: "center", margin: "4px 0 0",
              }}>
                Cobertura em todos os 26 estados + Distrito Federal
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .coverage-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
