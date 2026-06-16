"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Wifi, MapPin, Zap, Clock } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const MapaCobertura = dynamic(() => import("@/components/sections/MapaCobertura"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", aspectRatio: "960/680", background: "#F0FAF7", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6B7A93" }}>Carregando mapa...</span>
    </div>
  ),
});

const SERVICOS_COBERTURA = [
  { icon: Wifi,   titulo: "Links de Internet",    desc: "Fornecemos links dedicados e compartilhados para empresas em todos os estados brasileiros." },
  { icon: MapPin, titulo: "Suporte Presencial",   desc: "Atendimento técnico in-loco na Bahia e estados vizinhos com deslocamento programado." },
  { icon: Zap,    titulo: "Suporte Remoto",       desc: "Atendimento remoto para todo o Brasil — configuração, manutenção e monitoramento sem sair do lugar." },
  { icon: Clock,  titulo: "Monitoramento 24/7",   desc: "Nossa central de monitoramento opera 24 horas por dia, 7 dias por semana, para qualquer estado." },
];

export default function CoberturaPage() {
  return (
    <>
      <Navbar/>
      <main style={{ paddingTop: 120, background: "#F7F8FA", minHeight: "100vh" }}>

        {/* Hero */}
        <div style={{ background: "#fff", borderBottom: "1px solid #E8EBF0", paddingTop: 48, paddingBottom: 48 }}>
          <div className="container-site">
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              fontFamily: "var(--font-display-var, sans-serif)", fontSize: 11, fontWeight: 700,
              color: "#4DB89E", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 12,
            }}>
              <span style={{ display: "inline-block", width: 20, height: 2, background: "#4DB89E", borderRadius: 1 }}/>
              Alcance Nacional
            </span>
            <h1 style={{
              fontFamily: "var(--font-display-var, sans-serif)",
              fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800,
              color: "#1A2236", letterSpacing: "-0.03em", margin: "0 0 12px",
            }}>
              Atendemos <span style={{ color: "#4DB89E" }}>todo o Brasil</span>
            </h1>
            <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 16, color: "#6B7A93", margin: 0, maxWidth: 520, lineHeight: 1.7 }}>
              Sediados em Serrinha/BA, levamos soluções de TI e links de internet para todos os 26 estados e o Distrito Federal.
            </p>
          </div>
        </div>

        <div className="container-site" style={{ paddingTop: 56, paddingBottom: 80 }}>

          {/* Mapa grande */}
          <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #E8EBF0", padding: 24, marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 18, fontWeight: 700, color: "#1A2236", margin: "0 0 4px" }}>
              Mapa de cobertura
            </h2>
            <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6B7A93", margin: "0 0 20px" }}>
              Pontos de atendimento em todas as capitais e principais cidades
            </p>
            <MapaCobertura scale={820} width={960} height={680}/>
          </div>

          {/* Como atendemos */}
          <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 800, color: "#1A2236", letterSpacing: "-0.02em", margin: "0 0 24px", textAlign: "center" }}>
            Como <span style={{ color: "#4DB89E" }}>atendemos</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 48 }} className="cobertura-grid">
            {SERVICOS_COBERTURA.map(({ icon: Icon, titulo, desc }) => (
              <div key={titulo} style={{ background: "#fff", borderRadius: 12, border: "1px solid #E8EBF0", padding: 24 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: "#F0FAF7", border: "1px solid #C8EDE4",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14,
                }}>
                  <Icon size={20} color="#4DB89E" aria-hidden="true"/>
                </div>
                <h3 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 14, fontWeight: 700, color: "#1A2236", margin: "0 0 8px" }}>
                  {titulo}
                </h3>
                <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6B7A93", margin: 0, lineHeight: 1.6 }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ background: "#1A2236", borderRadius: 16, padding: "40px 32px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 800, color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
              Seu estado é atendido?
            </h2>
            <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 15, color: "#8B9CC0", margin: "0 0 24px" }}>
              Fale com a gente e descubra as opções disponíveis para a sua região.
            </p>
            <Link href="/contato" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#4DB89E", color: "#fff",
              fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 700, fontSize: 15,
              padding: "13px 26px", borderRadius: 8, textDecoration: "none",
            }}>
              Verificar cobertura
            </Link>
          </div>

        </div>
      </main>
      <Footer/>

      <style>{`
        @media (max-width: 900px) { .cobertura-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .cobertura-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
