"use client";

import { useRef, useEffect, useState } from "react";
import { MapPin, Wifi, Zap } from "lucide-react";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";

const GEO_URL = "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

const HIGHLIGHTS = [
  { icon: MapPin, label: "Sede em Serrinha, BA" },
  { icon: Wifi,   label: "Links para todos os estados" },
  { icon: Zap,    label: "Atendimento remoto e presencial" },
];

const STATE_TAGS = [
  "Bahia", "São Paulo", "Minas Gerais", "Rio de Janeiro",
  "Pernambuco", "Ceará", "Goiás", "Paraná", "+ todos os estados"
];

// Coordenadas reais [longitude, latitude]
const SEDE: [number, number] = [-39.0, -11.5]; // Serrinha/BA

const MARKERS: { coords: [number, number]; label: string }[] = [
  { coords: [-43.9, -19.9], label: "Belo Horizonte/MG" },
  { coords: [-46.6, -23.5], label: "São Paulo/SP" },
  { coords: [-43.2, -22.9], label: "Rio de Janeiro/RJ" },
  { coords: [-34.9, -8.1],  label: "Recife/PE" },
  { coords: [-38.5, -3.7],  label: "Fortaleza/CE" },
  { coords: [-49.3, -16.7], label: "Goiânia/GO" },
  { coords: [-49.3, -25.4], label: "Curitiba/PR" },
  { coords: [-38.5, -12.9], label: "Salvador/BA" },
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
              Sediados em Serrinha, Bahia, fornecemos links de internet e soluções
              de TI para clientes em todos os estados. Distância não é barreira —
              atendemos remotamente com a mesma qualidade do presencial.
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
              padding: 16, width: "100%", maxWidth: 640,
            }}>
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ center: [-54, -16], scale: 820 }}
                width={600}
                height={620}
                style={{ width: "100%", height: "auto" }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#E8F5F1"
                        stroke="#4DB89E"
                        strokeWidth={0.8}
                        style={{
                          default: { outline: "none" },
                          hover:   { fill: "#D4EDE7", outline: "none" },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Linhas da sede para os markers */}
                {MARKERS.map((m) => (
                  <Line
                    key={m.label}
                    from={SEDE}
                    to={m.coords}
                    stroke="#4DB89E"
                    strokeWidth={0.7}
                    strokeDasharray="4 4"
                    strokeOpacity={0.4}
                  />
                ))}

                {/* Pontos de atendimento */}
                {MARKERS.map((m) => (
                  <Marker key={m.label} coordinates={m.coords}>
                    <circle r={4} fill="#4DB89E" fillOpacity={0.7} stroke="#fff" strokeWidth={1}/>
                  </Marker>
                ))}

                {/* Sede — Serrinha/BA com pulse */}
                <Marker coordinates={SEDE}>
                  <circle r={10} fill="#4DB89E" fillOpacity={0.15}>
                    <animate attributeName="r" values="8;16;8" dur="2.5s" repeatCount="indefinite"/>
                    <animate attributeName="fill-opacity" values="0.15;0;0.15" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle r={6} fill="#4DB89E" fillOpacity={0.25}>
                    <animate attributeName="r" values="5;10;5" dur="2.5s" repeatCount="indefinite" begin="0.3s"/>
                    <animate attributeName="fill-opacity" values="0.25;0;0.25" dur="2.5s" repeatCount="indefinite" begin="0.3s"/>
                  </circle>
                  <circle r={5} fill="#4DB89E" stroke="#fff" strokeWidth={1.5}/>
                  <rect x={-88} y={-10} width={80} height={18} rx={4} fill="#fff" stroke="#C8EDE4" strokeWidth={1}/>
                  <text x={-48} y={4} textAnchor="middle" fontSize={9} fontWeight={700} fill="#2B8970" fontFamily="sans-serif">
                    Serrinha/BA
                  </text>
                </Marker>
              </ComposableMap>

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
