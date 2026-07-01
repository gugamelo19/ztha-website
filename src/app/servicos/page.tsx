"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { Video, ShieldCheck, CloudUpload, Cable, Code2, Network, Check, ArrowLeft } from "lucide-react";

const SERVICES_DATA = [
  {
    num: "01", title: "CFTV", icon: Video,
    desc: "Câmeras de segurança e monitoramento visual para residências e empresas, com equipamentos de última geração e imagem em alta definição, acessível de qualquer lugar.",
    checks: ["Imagem em HD com visão noturna", "Acesso remoto pelo celular", "Gravação contínua e por evento"],
    mediaType: "dots",
  },
  {
    num: "02", title: "Monitoramento 24h", icon: ShieldCheck,
    desc: "Central de monitoramento ativa todos os dias, sem interrupção. Segurança real para o seu patrimônio, com resposta rápida sempre que algo foge do padrão.",
    checks: ["Vigilância ininterrupta 7 dias por semana", "Alertas em tempo real", "Equipe técnica de prontidão"],
    mediaType: "radar",
  },
  {
    num: "03", title: "Backup em Nuvem", icon: CloudUpload,
    desc: "Seus dados protegidos com redundância e recuperação garantida. Nunca perca informações críticas — backups automáticos e cópias seguras na nuvem.",
    checks: ["Backups automáticos e agendados", "Redundância em múltiplos locais", "Recuperação rápida de dados"],
    mediaType: "dots",
  },
  {
    num: "04", title: "Cabeamento Estruturado", icon: Cable,
    desc: "Infraestrutura de rede lógica e física com padrão profissional para ambientes corporativos e residenciais — organizada, escalável e pronta para crescer com você.",
    checks: ["Projeto conforme normas técnicas", "Certificação e organização dos pontos", "Pronto para expansão futura"],
    mediaType: "grid",
  },
  {
    num: "05", title: "Desenvolvimento de Software", icon: Code2,
    desc: "Sistemas e plataformas digitais construídos sob medida para as necessidades do seu negócio. Da ideia ao produto no ar, com tecnologia que cresce junto com a empresa.",
    checks: ["Sistemas web e plataformas internas", "Integrações sob medida", "Suporte e evolução contínua"],
    mediaType: "code",
  },
  {
    num: "06", title: "Infraestrutura de Redes", icon: Network,
    desc: "Projetos e implantação de redes corporativas e domésticas com suporte técnico especializado. Conectividade estável que sustenta toda a operação, sem quedas.",
    checks: ["Redes cabeadas e Wi-Fi corporativo", "Configuração e segurança de rede", "Suporte técnico especializado"],
    mediaType: "dots",
  },
];

const PROCESS = [
  { num: "01", title: "Diagnóstico", desc: "Entendemos a sua operação e identificamos o que precisa de atenção." },
  { num: "02", title: "Projeto", desc: "Desenhamos a solução ideal, com escopo e prazos claros." },
  { num: "03", title: "Implantação", desc: "Instalamos e configuramos tudo com a equipe técnica em campo." },
  { num: "04", title: "Suporte", desc: "Acompanhamos o dia a dia e garantimos tudo funcionando." },
];

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header escuro */}
        <section style={{ position: "relative", overflow: "hidden", background: "#0A121E", padding: "84px 32px 76px" }}>
          <div aria-hidden="true" style={{ position: "absolute", top: -160, right: -100, width: 520, height: 520, background: "radial-gradient(circle, rgba(77,184,158,0.2), transparent 62%)", pointerEvents: "none" }} />
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "30px 30px", pointerEvents: "none" }} />
          <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto" }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 500, color: "#9fb0c4", textDecoration: "none", marginBottom: 22 }}>
              <ArrowLeft size={15} /> Voltar ao início
            </Link>
            <span style={{ display: "block", fontFamily: "'Space Grotesk',sans-serif", fontSize: 12, fontWeight: 600, color: "#7fe3c8", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 14 }}>O que fazemos</span>
            <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.035em", maxWidth: 760, margin: "0 0 20px" }}>
              Serviços completos de TI, do hardware ao software
            </h1>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: "#9fb0c4", maxWidth: 560, margin: 0 }}>
              Seis especialidades que se conectam para proteger, manter e modernizar a infraestrutura de tecnologia da sua empresa — com um único time responsável por tudo.
            </p>
          </div>
        </section>

        {/* Lista de serviços */}
        <section style={{ background: "#fff", padding: "88px 32px" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", display: "flex", flexDirection: "column", gap: 72 }}>
            {SERVICES_DATA.map((svc, i) => {
              const Icon = svc.icon;
              const isReversed = i % 2 !== 0;
              return (
                <article key={svc.num} className="zt-svc-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
                  {isReversed && <MediaPanel type={svc.mediaType} icon={<Icon size={82} color="#4DB89E" strokeWidth={1.3} style={{ opacity: 0.9 }} />} />}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                      <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 700, color: "#4DB89E", letterSpacing: "0.1em" }}>{svc.num}</span>
                      <span style={{ height: 1, width: 40, background: "#C8EDE4" }} />
                      <span style={{ display: "inline-flex", width: 44, height: 44, alignItems: "center", justifyContent: "center", background: "#F0FAF7", borderRadius: 12, color: "#3AA88E" }}>
                        <Icon size={22} />
                      </span>
                    </div>
                    <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 30, fontWeight: 700, color: "#1A2236", letterSpacing: "-0.025em", margin: "0 0 14px" }}>{svc.title}</h2>
                    <p style={{ fontSize: 16, lineHeight: 1.72, color: "#6B7A93", margin: "0 0 20px" }}>{svc.desc}</p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                      {svc.checks.map(c => (
                        <li key={c} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14.5, color: "#3a4658" }}>
                          <Check size={17} color="#4DB89E" strokeWidth={2.4} />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {!isReversed && <MediaPanel type={svc.mediaType} icon={<Icon size={82} color="#4DB89E" strokeWidth={1.3} style={{ opacity: 0.85 }} />} />}
                </article>
              );
            })}
          </div>
        </section>

        {/* Processo */}
        <section style={{ background: "#F7F8FA", padding: "88px 32px", borderTop: "1px solid #EDF0F4" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 52px" }}>
              <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 12, fontWeight: 600, color: "#3AA88E", letterSpacing: "0.16em", textTransform: "uppercase" }}>Como trabalhamos</span>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(24px, 3.5vw, 36px)", fontWeight: 700, color: "#1A2236", lineHeight: 1.15, letterSpacing: "-0.03em", margin: "14px 0 0" }}>
                Um processo simples, do diagnóstico ao suporte
              </h2>
            </div>
            <div className="zt-proc" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
              {PROCESS.map(p => (
                <div key={p.num} style={{ background: "#fff", border: "1px solid #E8EBF0", borderRadius: 18, padding: 28 }}>
                  <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 13, fontWeight: 700, color: "#4DB89E" }}>{p.num}</span>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 18, fontWeight: 700, color: "#1A2236", margin: "12px 0 8px" }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "#6B7A93", margin: 0 }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "#fff", padding: "88px 32px" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto" }}>
            <div style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, #0A121E 0%, #15293a 100%)", borderRadius: 28, padding: "64px 48px", textAlign: "center" }}>
              <div aria-hidden="true" style={{ position: "absolute", top: -120, left: "50%", transform: "translateX(-50%)", width: 560, height: 320, background: "radial-gradient(ellipse, rgba(77,184,158,0.22), transparent 65%)" }} />
              <div style={{ position: "relative", zIndex: 1, maxWidth: 640, margin: "0 auto" }}>
                <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(24px, 3.5vw, 40px)", fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
                  Vamos montar a solução certa para você
                </h2>
                <p style={{ fontSize: 16.5, lineHeight: 1.7, color: "#9fb0c4", margin: "0 0 34px" }}>
                  Conte o que a sua empresa precisa. Um especialista da ZTHA responde com um diagnóstico sem compromisso.
                </p>
                <div className="zt-cta-actions" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "#4DB89E", color: "#0A121E",
                    fontFamily: "'Space Grotesk',sans-serif", fontWeight: 600, fontSize: 15,
                    padding: "16px 30px", borderRadius: 11, textDecoration: "none",
                    transition: "transform .15s, box-shadow .2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 34px rgba(77,184,158,0.4)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.8.97h.01A7.94 7.94 0 0 0 17.6 6.32ZM12.05 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.59 6.59 0 1 1 5.6 3.09Z" /></svg>
                    Chamar no WhatsApp
                  </a>
                  <Link href="/contato" style={{
                    display: "inline-flex", alignItems: "center", gap: 10,
                    background: "rgba(255,255,255,0.06)", color: "#e6edf4",
                    fontFamily: "'Space Grotesk',sans-serif", fontWeight: 500, fontSize: 15,
                    padding: "16px 28px", borderRadius: 11, textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.16)", transition: "border-color .2s, background .2s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(77,184,158,0.5)"; e.currentTarget.style.background = "rgba(77,184,158,0.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  >
                    Enviar mensagem
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .zt-svc-row { grid-template-columns: 1fr !important; gap: 28px !important; }
          .zt-svc-row .zt-svc-media { order: -1 !important; }
          .zt-proc { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .zt-cta-actions { flex-direction: column !important; align-items: stretch !important; }
        }
      `}</style>
    </>
  );
}

function MediaPanel({ type, icon }: { type: string; icon: React.ReactNode }) {
  const bgPattern = type === "grid"
    ? "linear-gradient(rgba(77,184,158,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(77,184,158,0.08) 1px, transparent 1px)"
    : type === "radar"
    ? "none"
    : "radial-gradient(rgba(77,184,158,0.12) 1px, transparent 1px)";

  if (type === "code") {
    return (
      <div className="zt-svc-media" style={{
        aspectRatio: "4/3", borderRadius: 20,
        background: "linear-gradient(155deg, #0f1b2b, #0A121E)",
        border: "1px solid #1d2c3e",
        display: "flex", alignItems: "center", justifyContent: "center",
        position: "relative", overflow: "hidden", padding: 24,
      }}>
        <div style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: 16 }}>
          <div style={{ display: "flex", gap: 6, marginBottom: 14 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff5f57" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#febc2e" }} />
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
          </div>
          <div style={{ fontFamily: "'Space Grotesk', monospace", fontSize: 12.5, lineHeight: 1.9, color: "#9fb0c4" }}>
            <span style={{ color: "#7fe3c8" }}>const</span> ztha = <span style={{ color: "#7fe3c8" }}>build</span>(<span style={{ color: "#f0c674" }}>&apos;solução&apos;</span>);<br />
            <span style={{ color: "#7fe3c8" }}>await</span> ztha.<span style={{ color: "#4DB89E" }}>deploy</span>();<br />
            <span style={{ color: "#6f8197" }}>{"// no ar ✓"}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="zt-svc-media" style={{
      aspectRatio: "4/3", borderRadius: 20,
      background: "linear-gradient(155deg, #0f1b2b, #0A121E)",
      border: "1px solid #1d2c3e",
      display: "flex", alignItems: "center", justifyContent: "center",
      position: "relative", overflow: "hidden",
    }}>
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: bgPattern, backgroundSize: type === "grid" ? "28px 28px" : "20px 20px" }} />
      {type === "radar" && (
        <>
          <div aria-hidden="true" style={{ position: "absolute", width: "60%", height: "60%", border: "1px solid rgba(77,184,158,0.25)", borderRadius: "50%" }} />
          <div aria-hidden="true" style={{ position: "absolute", width: "34%", height: "34%", border: "1px solid rgba(77,184,158,0.35)", borderRadius: "50%" }} />
        </>
      )}
      <div style={{ position: "relative" }}>{icon}</div>
    </div>
  );
}