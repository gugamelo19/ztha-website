"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Video, ShieldCheck, CloudUpload, Cable, Code2, Network, ArrowRight } from "lucide-react";
import { SERVICES, COMPANY } from "@/lib/constants";
import { useState } from "react";
import Link from "next/link";

const ICONS = {
  cftv: Video, monitoramento: ShieldCheck, backup: CloudUpload,
  cabeamento: Cable, software: Code2, redes: Network,
};

const DETAILS: Record<string, { bullets: string[]; color: string }> = {
  cftv: {
    color: "#4DB89E",
    bullets: [
      "Câmeras IP e analógicas de alta resolução (Full HD, 4K)",
      "DVR/NVR com armazenamento local e em nuvem",
      "Acesso remoto pelo celular em tempo real",
      "Câmeras internas, externas e PTZ",
      "Projeto e instalação por técnicos certificados",
      "Suporte e manutenção pós-instalação",
    ],
  },
  monitoramento: {
    color: "#4DB89E",
    bullets: [
      "Central de monitoramento 24h por dia, 7 dias por semana",
      "Monitoramento de câmeras, alarmes e sensores",
      "Acionamento ao cliente em caso de ocorrências",
      "Relatórios periódicos de eventos",
      "Integração com sistemas de alarme",
      "Atendimento remoto imediato",
    ],
  },
  backup: {
    color: "#4DB89E",
    bullets: [
      "Backup automático e agendado na nuvem",
      "Criptografia de dados ponta a ponta",
      "Recuperação rápida em caso de falha ou ransomware",
      "Compatível com Windows, Linux e macOS",
      "Monitoramento de integridade dos backups",
      "Retenção configurável por período",
    ],
  },
  cabeamento: {
    color: "#4DB89E",
    bullets: [
      "Cabeamento estruturado Cat5e, Cat6 e Cat6A",
      "Rack e patch panel organizados",
      "Certificação de todos os pontos de rede",
      "Infraestrutura para voz, dados e CFTV",
      "Projeto de físico e lógico documentado",
      "Adequação a normas ABNT NBR 14565",
    ],
  },
  software: {
    color: "#4DB89E",
    bullets: [
      "Sistemas web e mobile sob medida",
      "Integrações com ERPs, APIs e sistemas legados",
      "Stack moderna: Next.js, Node.js, PostgreSQL",
      "UX/UI design incluso no projeto",
      "Manutenção e evoluções contínuas",
      "Hospedagem e DevOps gerenciados",
    ],
  },
  redes: {
    color: "#4DB89E",
    bullets: [
      "Projeto de redes LAN, WAN e Wi-Fi corporativo",
      "Configuração de switches, roteadores e firewalls",
      "Links de internet dedicados para todo o Brasil",
      "VPN e acesso remoto seguro",
      "Monitoramento de disponibilidade (NOC)",
      "Suporte técnico presencial e remoto",
    ],
  },
};

export default function ServicosPage() {
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
              O que fazemos
            </span>
            <h1 style={{
              fontFamily: "var(--font-display-var, sans-serif)",
              fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800,
              color: "#1A2236", letterSpacing: "-0.03em", margin: "0 0 12px",
            }}>
              Nossas Soluções em TI
            </h1>
            <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 16, color: "#6B7A93", margin: 0, maxWidth: 520, lineHeight: 1.7 }}>
              Do cabeamento à nuvem, do monitoramento ao software — cobertura completa em tecnologia com suporte especializado.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="container-site" style={{ paddingTop: 56, paddingBottom: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="services-grid">
            {SERVICES.map((service) => {
              const Icon = ICONS[service.id as keyof typeof ICONS];
              const detail = DETAILS[service.id];
              const isActive = active === service.id;

              return (
                <div key={service.id}
                  onClick={() => setActive(isActive ? null : service.id)}
                  style={{
                    background: "#fff", borderRadius: 14, padding: 28,
                    border: `1px solid ${isActive ? "#4DB89E" : "#E8EBF0"}`,
                    boxShadow: isActive ? "0 4px 24px rgba(77,184,158,0.12)" : "none",
                    cursor: "pointer", transition: "all 0.25s",
                    gridColumn: isActive ? "1 / -1" : "auto",
                  }}
                >
                  {/* Header do card */}
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: isActive ? 20 : 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: 10, flexShrink: 0,
                        background: isActive ? "#4DB89E" : "#F0FAF7",
                        border: `1px solid ${isActive ? "#4DB89E" : "#C8EDE4"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.25s",
                      }}>
                        {Icon && <Icon size={22} color={isActive ? "#fff" : "#4DB89E"} aria-hidden="true"/>}
                      </div>
                      <div>
                        <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 16, fontWeight: 700, color: isActive ? "#4DB89E" : "#1A2236", margin: "0 0 4px", transition: "color 0.2s" }}>
                          {service.name}
                        </h2>
                        <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6B7A93", margin: 0, lineHeight: 1.5 }}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <ArrowRight size={18} color="#4DB89E" aria-hidden="true"
                      style={{ flexShrink: 0, marginLeft: 12, marginTop: 4, transform: isActive ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
                    />
                  </div>

                  {/* Detalhes expandidos */}
                  {isActive && (
                    <div style={{
                      borderTop: "1px solid #E8EBF0", paddingTop: 20,
                      display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 10,
                    }}>
                      {detail.bullets.map((bullet) => (
                        <div key={bullet} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4DB89E", flexShrink: 0, marginTop: 6 }}/>
                          <span style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 14, color: "#4B5A72", lineHeight: 1.5 }}>
                            {bullet}
                          </span>
                        </div>
                      ))}
                      <div style={{ gridColumn: "1 / -1", marginTop: 8 }}>
                        <Link href="/contato" style={{
                          display: "inline-flex", alignItems: "center", gap: 8,
                          background: "#4DB89E", color: "#fff",
                          fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 700, fontSize: 14,
                          padding: "10px 20px", borderRadius: 7, textDecoration: "none",
                          transition: "background 0.2s",
                        }}>
                          Solicitar orçamento
                          <ArrowRight size={15} aria-hidden="true"/>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer/>

      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}