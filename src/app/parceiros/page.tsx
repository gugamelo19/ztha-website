"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

const PARTNERS = [
  {
    id: "lenovo",
    name: "Lenovo",
    categoria: "Computadores & Servidores",
    desc: "Revendedor autorizado Lenovo — notebooks, desktops, workstations e servidores com garantia oficial e suporte técnico certificado.",
    produtos: ["Notebooks ThinkPad e IdeaPad", "Desktops ThinkCentre", "Workstations ThinkStation", "Servidores ThinkSystem", "Tablets e acessórios"],
    svg: (
      <svg width="120" height="36" viewBox="0 0 120 36" aria-label="Lenovo">
        <text x="0" y="28" fontFamily="Arial Black, sans-serif" fontSize="30" fontWeight="900" fill="#E2231A" letterSpacing="-0.5">Lenovo</text>
      </svg>
    ),
  },
  {
    id: "dell",
    name: "Dell",
    categoria: "Computadores & Infraestrutura",
    desc: "Parceiro Dell para fornecimento de computadores, servidores, storages e soluções de infraestrutura para empresas de todos os portes.",
    produtos: ["Notebooks Latitude e Inspiron", "Desktops OptiPlex", "Servidores PowerEdge", "Storage PowerVault", "Switches de rede"],
    svg: (
      <svg width="64" height="64" viewBox="0 0 64 64" aria-label="Dell">
        <circle cx="32" cy="32" r="30" fill="#007DB8"/>
        <text x="32" y="40" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="white">DELL</text>
      </svg>
    ),
  },
  {
    id: "hp",
    name: "HP",
    categoria: "Computadores & Impressão",
    desc: "Revenda autorizada HP com linha completa de computadores, impressoras e suprimentos originais com garantia de fábrica.",
    produtos: ["Notebooks HP ProBook e EliteBook", "Desktops HP Pro", "Impressoras LaserJet e OfficeJet", "Suprimentos originais", "Monitores HP"],
    svg: (
      <svg width="72" height="48" viewBox="0 0 72 48" aria-label="HP">
        <rect x="2" y="2" width="68" height="44" rx="8" fill="#0096D6"/>
        <text x="36" y="34" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="26" fontWeight="900" fill="white">hp</text>
      </svg>
    ),
  },
  {
    id: "intelbras",
    name: "Intelbras",
    categoria: "Segurança & Telecom",
    desc: "Revendedor autorizado Intelbras — líderes nacionais em segurança eletrônica, redes e comunicação corporativa.",
    produtos: ["Câmeras e DVRs", "Centrais de alarme", "Controle de acesso", "Interfones e porteiros", "Switches e roteadores"],
    svg: (
      <svg width="130" height="36" viewBox="0 0 130 36" aria-label="Intelbras">
        <text x="65" y="26" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="#00A859" letterSpacing="0.5">intelbras</text>
      </svg>
    ),
  },
  {
    id: "hikvision",
    name: "Hikvision",
    categoria: "CFTV & Monitoramento",
    desc: "Parceiro Hikvision para fornecimento de câmeras IP, NVRs e sistemas de monitoramento de alto desempenho.",
    produtos: ["Câmeras IP Full HD e 4K", "NVR e DVR", "Câmeras PTZ", "Análise de vídeo com IA", "Controle de acesso facial"],
    svg: (
      <svg width="130" height="36" viewBox="0 0 130 36" aria-label="Hikvision">
        <rect x="0" y="4" width="32" height="26" rx="3" fill="#D21F26"/>
        <text x="16" y="22" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900" fill="white">HIK</text>
        <text x="40" y="22" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" fill="#1A1A1A" letterSpacing="0.3">VISION</text>
      </svg>
    ),
  },
];

export default function ParceirosPage() {
  const [active, setActive] = useState<string | null>(null);

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
              Parcerias Oficiais
            </span>
            <h1 style={{
              fontFamily: "var(--font-display-var, sans-serif)",
              fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800,
              color: "#1A2236", letterSpacing: "-0.03em", margin: "0 0 12px",
            }}>
              Somos revendedores <span style={{ color: "#4DB89E" }}>autorizados</span>
            </h1>
            <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 16, color: "#6B7A93", margin: 0, maxWidth: 520, lineHeight: 1.7 }}>
              Trabalhamos com as maiores marcas de tecnologia do mundo. Produtos originais, garantia de fábrica e suporte técnico certificado.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="container-site" style={{ paddingTop: 56, paddingBottom: 80 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {PARTNERS.map((partner) => {
              const isActive = active === partner.id;
              return (
                <div key={partner.id}
                  style={{
                    background: "#fff", borderRadius: 14, padding: 32,
                    border: `1px solid ${isActive ? "#4DB89E" : "#E8EBF0"}`,
                    boxShadow: isActive ? "0 4px 24px rgba(77,184,158,0.10)" : "none",
                    cursor: "pointer", transition: "all 0.25s",
                  }}
                  onClick={() => setActive(isActive ? null : partner.id)}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 28, flex: 1 }}>
                      {/* Logo */}
                      <div style={{
                        width: 140, height: 72, borderRadius: 10, flexShrink: 0,
                        background: "#F7F8FA", border: "1px solid #E8EBF0",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "border-color 0.25s",
                        borderColor: isActive ? "#C8EDE4" : "#E8EBF0",
                      }}>
                        {partner.svg}
                      </div>
                      {/* Info */}
                      <div>
                        <span style={{
                          display: "inline-block",
                          background: "#F0FAF7", border: "1px solid #C8EDE4",
                          color: "#2B8970", padding: "2px 8px", borderRadius: 4,
                          fontFamily: "var(--font-display-var, sans-serif)", fontSize: 10,
                          fontWeight: 700, letterSpacing: "0.05em", marginBottom: 6,
                        }}>
                          {partner.categoria}
                        </span>
                        <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 18, fontWeight: 800, color: "#1A2236", margin: "0 0 6px" }}>
                          {partner.name}
                        </h2>
                        <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 14, color: "#6B7A93", margin: 0, lineHeight: 1.6, maxWidth: 560 }}>
                          {partner.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={20} color="#4DB89E"
                      style={{ flexShrink: 0, transform: isActive ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
                    />
                  </div>

                  {/* Produtos expandidos */}
                  {isActive && (
                    <div style={{ borderTop: "1px solid #E8EBF0", marginTop: 24, paddingTop: 24 }}>
                      <h3 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 13, fontWeight: 700, color: "#4B5A72", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 14px" }}>
                        Produtos disponíveis
                      </h3>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                        {partner.produtos.map((p) => (
                          <span key={p} style={{
                            background: "#F0FAF7", border: "1px solid #C8EDE4",
                            color: "#2B8970", padding: "5px 12px", borderRadius: 5,
                            fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, fontWeight: 500,
                          }}>
                            {p}
                          </span>
                        ))}
                      </div>
                      <Link href="/contato" style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "#4DB89E", color: "#fff",
                        fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 700, fontSize: 14,
                        padding: "10px 20px", borderRadius: 7, textDecoration: "none",
                      }}>
                        Solicitar produto
                        <ArrowRight size={15} aria-hidden="true"/>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}