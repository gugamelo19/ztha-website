"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Shield, Zap, Users, Award } from "lucide-react";
import Link from "next/link";

const VALORES = [
  { icon: Shield, title: "Confiança", desc: "Construímos relações duradouras com transparência e comprometimento em cada projeto." },
  { icon: Zap,    title: "Agilidade", desc: "Respondemos rápido e entregamos soluções eficientes sem burocracia." },
  { icon: Users,  title: "Proximidade", desc: "Tratamos cada cliente como parceiro — do primeiro contato ao suporte contínuo." },
  { icon: Award,  title: "Qualidade", desc: "Usamos tecnologias e equipamentos das maiores marcas do mundo." },
];

const TIMELINE = [
  { ano: "2014", titulo: "Fundação", desc: "A ZTHA nasce em Serrinha/BA com foco em suporte técnico e infraestrutura de redes para pequenas empresas da região." },
  { ano: "2016", titulo: "Expansão em CFTV", desc: "Passamos a oferecer soluções completas de câmeras e monitoramento, tornando-nos revendedores autorizados Intelbras e Hikvision." },
  { ano: "2018", titulo: "Cobertura regional", desc: "Expandimos o atendimento para outros municípios da Bahia e passamos a fornecer links de internet corporativos." },
  { ano: "2020", titulo: "Desenvolvimento de Software", desc: "Lançamos a área de desenvolvimento, criando sistemas web e mobile personalizados para nossos clientes." },
  { ano: "2022", titulo: "Alcance nacional", desc: "Começamos a atender clientes em outros estados, com fornecimento de links e suporte remoto para todo o Brasil." },
  { ano: "2024", titulo: "Hoje", desc: "Mais de 10 anos de mercado, com uma equipe especializada e centenas de clientes ativos em todo o território nacional." },
];

export default function SobrePage() {
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
              Quem somos
            </span>
            <h1 style={{
              fontFamily: "var(--font-display-var, sans-serif)",
              fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800,
              color: "#1A2236", letterSpacing: "-0.03em", margin: "0 0 12px",
            }}>
              +10 anos conectando<br/>pessoas e empresas
            </h1>
            <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 16, color: "#6B7A93", margin: 0, maxWidth: 560, lineHeight: 1.7 }}>
              Nascemos em Serrinha, Bahia, com a missão de levar tecnologia de qualidade para empresas e pessoas físicas — independente do tamanho ou localização.
            </p>
          </div>
        </div>

        <div className="container-site" style={{ paddingTop: 64, paddingBottom: 80 }}>

          {/* Missão e visão */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 64 }} className="sobre-grid">
            {[
              { titulo: "Nossa Missão", texto: "Oferecer soluções completas em tecnologia da informação com qualidade, agilidade e preço justo — tornando a tecnologia acessível para empresas e pessoas físicas em todo o Brasil." },
              { titulo: "Nossa Visão", texto: "Ser referência em soluções de TI no Nordeste e expandir nossa presença nacional, reconhecidos pela excelência técnica e pelo atendimento humanizado que nos diferencia." },
            ].map(({ titulo, texto }) => (
              <div key={titulo} style={{ background: "#fff", borderRadius: 14, border: "1px solid #E8EBF0", padding: 32 }}>
                <div style={{ width: 32, height: 4, background: "#4DB89E", borderRadius: 2, marginBottom: 16 }}/>
                <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 20, fontWeight: 700, color: "#1A2236", margin: "0 0 12px" }}>
                  {titulo}
                </h2>
                <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 15, color: "#6B7A93", margin: 0, lineHeight: 1.75 }}>
                  {texto}
                </p>
              </div>
            ))}
          </div>

          {/* Valores */}
          <div style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#1A2236", letterSpacing: "-0.02em", margin: "0 0 32px", textAlign: "center" }}>
              Nossos <span style={{ color: "#4DB89E" }}>Valores</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="valores-grid">
              {VALORES.map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ background: "#fff", borderRadius: 12, border: "1px solid #E8EBF0", padding: 24, textAlign: "center" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 12,
                    background: "#F0FAF7", border: "1px solid #C8EDE4",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    <Icon size={22} color="#4DB89E" aria-hidden="true"/>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 15, fontWeight: 700, color: "#1A2236", margin: "0 0 8px" }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6B7A93", margin: 0, lineHeight: 1.6 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div style={{ marginBottom: 64 }}>
            <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#1A2236", letterSpacing: "-0.02em", margin: "0 0 40px", textAlign: "center" }}>
              Nossa <span style={{ color: "#4DB89E" }}>História</span>
            </h2>
            <div style={{ position: "relative", maxWidth: 720, margin: "0 auto" }}>
              {/* Linha vertical */}
              <div style={{ position: "absolute", left: 68, top: 0, bottom: 0, width: 2, background: "#E8EBF0" }}/>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {TIMELINE.map(({ ano, titulo, desc }, i) => (
                  <div key={ano} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                    {/* Ano */}
                    <div style={{ width: 56, flexShrink: 0, textAlign: "right" }}>
                      <span style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 13, fontWeight: 800, color: i === TIMELINE.length - 1 ? "#4DB89E" : "#8B9CC0" }}>
                        {ano}
                      </span>
                    </div>
                    {/* Ponto */}
                    <div style={{
                      width: 14, height: 14, borderRadius: "50%", flexShrink: 0, marginTop: 3,
                      background: i === TIMELINE.length - 1 ? "#4DB89E" : "#fff",
                      border: `2px solid ${i === TIMELINE.length - 1 ? "#4DB89E" : "#C8EDE4"}`,
                      position: "relative", zIndex: 1,
                    }}/>
                    {/* Conteúdo */}
                    <div style={{ background: "#fff", borderRadius: 10, border: "1px solid #E8EBF0", padding: "16px 20px", flex: 1 }}>
                      <h3 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 15, fontWeight: 700, color: "#1A2236", margin: "0 0 6px" }}>
                        {titulo}
                      </h3>
                      <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 14, color: "#6B7A93", margin: 0, lineHeight: 1.65 }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div style={{ background: "#1A2236", borderRadius: 16, padding: "48px 40px", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: "clamp(22px, 3vw, 34px)", fontWeight: 800, color: "#fff", margin: "0 0 12px", letterSpacing: "-0.02em" }}>
              Pronto para trabalhar com a gente?
            </h2>
            <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 15, color: "#8B9CC0", margin: "0 0 28px" }}>
              Entre em contato e descubra como podemos ajudar o seu negócio.
            </p>
            <Link href="/contato" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#4DB89E", color: "#fff",
              fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 700, fontSize: 15,
              padding: "14px 28px", borderRadius: 8, textDecoration: "none",
            }}>
              Fale com a ZTHA
            </Link>
          </div>

        </div>
      </main>
      <Footer/>

      <style>{`
        @media (max-width: 768px) {
          .sobre-grid { grid-template-columns: 1fr !important; }
          .valores-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .valores-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}