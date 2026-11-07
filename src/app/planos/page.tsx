"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Check, ArrowRight } from "lucide-react";

const WA_URL = "https://wa.me/557521370002";

const INK = "#0A121E";
const DARK = "#1A2236";
const TEAL = "#4DB89E";
const TEAL_DARK = "#3AA88E";
const TEAL_GLOW = "#7FE3C8";
const MUTED = "#6B7A93";
const BORDER = "#E8EBF0";

// ─── helpers ────────────────────────────────────────────────
function CheckItem({ text, light }: { text: string; light?: boolean }) {
  return (
    <li style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
      <Check size={16} color={light ? "#fff" : TEAL} strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
      <span style={{ fontFamily: "var(--font-body-var,sans-serif)", fontSize: 15, color: light ? "#fff" : "#3A4658", lineHeight: 1.5 }}>
        {text}
      </span>
    </li>
  );
}

function WaBtn({ text, msg, dark }: { text: string; msg: string; dark?: boolean }) {
  return (
    <a
      href={`${WA_URL}?text=${encodeURIComponent(msg)}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        background: dark ? INK : "#25D366",
        color: "#fff", borderRadius: 14,
        fontFamily: "var(--font-display-var,sans-serif)", fontWeight: 700, fontSize: 15,
        padding: "16px 28px", textDecoration: "none", width: "100%",
        transition: "transform .15s, box-shadow .2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = dark
          ? "0 10px 28px rgba(0,0,0,0.4)"
          : "0 10px 28px rgba(37,211,102,0.35)";
      }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.8.97h.01A7.94 7.94 0 0 0 17.6 6.32ZM12.05 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.59 6.59 0 1 1 5.6 3.09Z" />
      </svg>
      {text}
    </a>
  );
}

const TABS = [
  { key: "seguranca" as const, label: "Segurança & CFTV" },
  { key: "combo" as const,     label: "Combo ZTHA Total" },
  { key: "empresarial" as const, label: "Empresarial" },
];

const PLANOS_SEG = [
  { id: "start",    nome: "START",    para: "Lojinhas e consultórios",               preco: "89,90",   destaque: false },
  { id: "comercio", nome: "COMÉRCIO", para: "Lojas, mercadinhos, farmácias",          preco: "189,90",  destaque: true  },
  { id: "negocio",  nome: "NEGÓCIO",  para: "Supermercados, depósitos, escolas",      preco: "289,90",  destaque: false },
];

const INCLUDES_SEG = [
  "60 dias de gravação em nuvem",
  "Alertas no celular em tempo real",
  "Monitoramento 24h todos os dias",
  "Instalação profissional inclusa",
];

const COMBO_ITEMS = [
  "Monitoramento em nuvem completo",
  "Segurança de rede + backup",
  "Manutenção de até 5 máquinas",
];

const EMP_ITEMS = [
  "Monitoramento de até 16 pontos",
  "Rede, backup e Wi-Fi gerenciado",
  "Manutenção de até 15 máquinas",
  "Visita técnica mensal garantida",
  "Suporte prioritário em até 8h",
];

export default function PlanosPage() {
  const [tab, setTab] = useState<"seguranca" | "combo" | "empresarial">("seguranca");

  return (
    <>
      <Navbar />
      <main style={{ background: "#F7F8FA", minHeight: "100vh" }}>

        {/* HERO */}
        <section style={{ background: INK, padding: "100px 24px 68px", position: "relative", overflow: "hidden" }}>
          <div aria-hidden style={{ position: "absolute", top: -200, right: -100, width: 560, height: 560, background: `radial-gradient(circle, rgba(77,184,158,0.16), transparent 62%)`, pointerEvents: "none" }} />
          <div style={{ maxWidth: 820, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
            <span className="zt-mono" style={{ fontSize: 11, color: `rgba(127,227,200,0.55)`, letterSpacing: "0.15em", display: "block", marginBottom: 20 }}>
              /planos — segurança · combo · empresarial
            </span>
            <h1 style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: "clamp(34px,5vw,58px)", fontWeight: 700, color: "#fff", lineHeight: 1.05, letterSpacing: "-0.04em", margin: "0 0 18px" }}>
              Chega de{" "}
              <span style={{ background: `linear-gradient(135deg, ${TEAL}, ${TEAL_GLOW})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>3 boletos</span>{" "}
              na sua empresa.
            </h1>
            <p style={{ fontSize: 17, color: "rgba(255,255,255,0.48)", maxWidth: 500, margin: "0 auto 14px", lineHeight: 1.7 }}>
              Câmeras, rede, backup e informática com um fornecedor só.{" "}
              <strong style={{ color: "#fff" }}>Planos a partir de R$89,90/mês.</strong>
            </p>
            <p style={{ fontSize: 13, color: `rgba(77,184,158,0.65)` }}>🎁 Instalação grátis no contrato de 24 meses</p>
          </div>
        </section>

        {/* TABS */}
        <div style={{ background: INK, borderBottom: `1px solid rgba(255,255,255,0.07)` }}>
          <div style={{ maxWidth: 820, margin: "0 auto", padding: "0 24px", display: "flex", overflowX: "auto" }}>
            {TABS.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)} style={{
                background: "none", border: "none", cursor: "pointer",
                padding: "15px 22px", whiteSpace: "nowrap",
                fontFamily: "var(--font-display-var,sans-serif)", fontSize: 14, fontWeight: 600,
                color: tab === t.key ? TEAL : "rgba(255,255,255,0.38)",
                borderBottom: tab === t.key ? `2px solid ${TEAL}` : "2px solid transparent",
                transition: "color .2s, border-color .2s",
              }}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* CONTEÚDO */}
        <div style={{ maxWidth: 820, margin: "0 auto", padding: "52px 24px 80px" }}>

          {/* ── ABA SEGURANÇA ── */}
          {tab === "seguranca" && (
            <div>
              <div style={{ textAlign: "center", marginBottom: 36 }}>
                <h2 style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: "clamp(22px,3.5vw,34px)", fontWeight: 700, color: DARK, letterSpacing: "-0.03em", margin: "0 0 8px" }}>
                  Sua loja monitorada <span style={{ color: TEAL }}>24h</span> por menos de R$3 por dia.
                </h2>
                <p style={{ fontSize: 15, color: MUTED }}>
                  Alertas no celular em tempo real · 60 dias de gravação em nuvem
                </p>
              </div>

              {/* grade de planos */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 28 }} className="planos-seg-grid">
                {PLANOS_SEG.map(p => (
                  <div key={p.id} style={{
                    background: p.destaque ? TEAL_DARK : "#fff",
                    border: p.destaque ? "none" : `1px solid ${BORDER}`,
                    borderRadius: 16, padding: "24px 20px",
                    position: "relative",
                    boxShadow: p.destaque ? `0 16px 40px rgba(58,168,142,0.3)` : "none",
                  }}>
                    {p.destaque && (
                      <div style={{
                        position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                        background: INK, color: TEAL_GLOW,
                        fontFamily: "var(--font-display-var,sans-serif)", fontSize: 10, fontWeight: 700,
                        padding: "4px 14px", borderRadius: 100, letterSpacing: "0.1em", whiteSpace: "nowrap",
                      }}>MAIS VENDIDO</div>
                    )}
                    <div style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: 15, fontWeight: 800, color: p.destaque ? "#fff" : DARK, letterSpacing: "0.06em", marginBottom: 6 }}>{p.nome}</div>
                    <div style={{ fontSize: 12, color: p.destaque ? "rgba(255,255,255,0.55)" : MUTED, marginBottom: 14 }}>{p.para}</div>
                    <div style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: 28, fontWeight: 800, color: p.destaque ? "#fff" : DARK, lineHeight: 1, letterSpacing: "-0.03em" }}>
                      R${p.preco}<span style={{ fontSize: 13, fontWeight: 500, color: p.destaque ? "rgba(255,255,255,0.65)" : MUTED }}>/mês</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* incluso */}
              <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 16, padding: "24px 28px", marginBottom: 26 }}>
                <p style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: 11, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 14px" }}>
                  Todos os planos incluem
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 28px" }} className="includes-grid">
                  {INCLUDES_SEG.map(f => <CheckItem key={f} text={f} />)}
                </ul>
              </div>

              <WaBtn text="Chame no WhatsApp e escreva PLANO" msg="PLANO" />
            </div>
          )}

          {/* ── ABA COMBO ── */}
          {tab === "combo" && (
            <div>
              {/* problema */}
              <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px 28px 24px", marginBottom: 20 }}>
                <p style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: 11, fontWeight: 700, color: MUTED, textTransform: "uppercase", letterSpacing: "0.12em", textAlign: "center", margin: "0 0 18px" }}>
                  Hoje, muita empresa tem
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 16 }} className="problema-grid">
                  {[["📷", "Câmeras de um"], ["🌐", "Rede e backup de outro"], ["🖥️", "Informática de outro"]].map(([ic, lb]) => (
                    <div key={lb} style={{ border: `1.5px dashed ${BORDER}`, borderRadius: 12, padding: "14px 10px", textAlign: "center" }}>
                      <div style={{ fontSize: 22, marginBottom: 6 }}>{ic}</div>
                      <div style={{ fontSize: 12, color: MUTED, lineHeight: 1.4 }}>{lb}</div>
                    </div>
                  ))}
                </div>
                <p style={{ textAlign: "center", fontSize: 14, color: MUTED, margin: 0 }}>3 fornecedores, 3 boletos, 3 contatos.</p>
              </div>

              {/* seta */}
              <div style={{ textAlign: "center", margin: "18px 0" }}>
                <div style={{ display: "inline-flex", width: 38, height: 38, borderRadius: "50%", background: DARK, alignItems: "center", justifyContent: "center" }}>
                  <ArrowRight size={16} color="#fff" style={{ transform: "rotate(90deg)" }} />
                </div>
              </div>

              {/* card combo */}
              <div style={{ background: `linear-gradient(135deg, #2B9075, ${TEAL_DARK})`, borderRadius: 20, padding: "36px 32px", marginBottom: 22, position: "relative", overflow: "hidden" }}>
                <div aria-hidden style={{ position: "absolute", top: -80, right: -80, width: 280, height: 280, background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent 65%)" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 6 }}>Combo ZTHA Total</div>
                  <div style={{ textDecoration: "line-through", color: "rgba(255,255,255,0.5)", fontSize: 14, marginBottom: 4 }}>R$668,80 separado</div>
                  <div style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: 52, fontWeight: 800, color: "#fff", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 22 }}>
                    R$549,90<span style={{ fontSize: 18, fontWeight: 400, opacity: 0.75 }}>/mês</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 22px" }}>
                    {COMBO_ITEMS.map(f => <CheckItem key={f} text={f} light />)}
                  </ul>
                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: 16, textAlign: "center", fontFamily: "var(--font-display-var,sans-serif)", fontSize: 15, fontWeight: 700, color: "#fff" }}>
                    Um boleto só. Um fornecedor só.
                  </div>
                </div>
              </div>

              <WaBtn text="Escreva EMPRESA no WhatsApp" msg="EMPRESA" dark />
              <p style={{ textAlign: "center", fontSize: 12, color: MUTED, marginTop: 12 }}>🎁 Instalação grátis no contrato de 24 meses</p>
            </div>
          )}

          {/* ── ABA EMPRESARIAL ── */}
          {tab === "empresarial" && (
            <div>
              <div style={{ textAlign: "center", marginBottom: 32 }}>
                <h2 style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: "clamp(22px,3.5vw,34px)", fontWeight: 700, color: DARK, letterSpacing: "-0.03em", margin: "0 0 8px" }}>
                  Mais barato que um <span style={{ color: TEAL }}>funcionário de TI.</span>
                </h2>
                <p style={{ fontSize: 15, color: MUTED }}>Monitoramento, rede, backup e informática com um fornecedor só.</p>
              </div>

              <div style={{ background: "#fff", border: `2px solid ${TEAL}`, borderRadius: 20, padding: "32px 28px", marginBottom: 20, position: "relative" }}>
                <div style={{ position: "absolute", top: -12, left: 24, background: TEAL, color: "#fff", fontFamily: "var(--font-display-var,sans-serif)", fontSize: 10, fontWeight: 700, padding: "4px 14px", borderRadius: 100, letterSpacing: "0.12em" }}>
                  ZTHA EMPRESARIAL
                </div>
                <div style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: 46, fontWeight: 800, color: TEAL_DARK, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 22 }}>
                  R$1.490<span style={{ fontSize: 18, fontWeight: 400, color: MUTED }}>/mês</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {EMP_ITEMS.map(f => <CheckItem key={f} text={f} />)}
                </ul>
              </div>

              {/* tags de público */}
              <div style={{ background: "#F0FAF7", border: `1px solid #C8EDE4`, borderRadius: 14, padding: "18px 22px", marginBottom: 26 }}>
                <p style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: 11, fontWeight: 700, color: TEAL_DARK, textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 10px" }}>Ideal para</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Escolas", "Clínicas", "Supermercados", "Cooperativas"].map(tag => (
                    <span key={tag} style={{ background: "#fff", border: `1px solid #C8EDE4`, color: TEAL_DARK, borderRadius: 8, padding: "6px 14px", fontFamily: "var(--font-display-var,sans-serif)", fontSize: 13, fontWeight: 600 }}>{tag}</span>
                  ))}
                </div>
              </div>

              <WaBtn text="Escreva EMPRESA no WhatsApp" msg="EMPRESA" />
              <p style={{ textAlign: "center", fontSize: 12, color: MUTED, marginTop: 12 }}>
                🎁 Instalação grátis no contrato de 24 meses · fale com um consultor
              </p>
            </div>
          )}
        </div>

        {/* ── INDICAÇÃO PREMIADA ── */}
        <section style={{ background: DARK, padding: "72px 24px" }}>
          <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center" }}>
            <span style={{ display: "inline-block", background: "rgba(77,184,158,0.12)", border: `1px solid rgba(77,184,158,0.28)`, color: TEAL_GLOW, fontFamily: "var(--font-display-var,sans-serif)", fontSize: 10, fontWeight: 700, padding: "5px 14px", borderRadius: 100, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 20 }}>
              Indicação Premiada
            </span>
            <h2 style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", margin: "0 0 10px" }}>
              Indique uma empresa e ganhe{" "}
              <span style={{ color: TEAL }}>1 mês grátis.</span>
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: "0 0 30px", lineHeight: 1.7 }}>
              Em Serrinha todo mundo se conhece. Quem indica a ZTHA, ganha.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 26 }}>
              {[
                { n: "1", t: "Indique",            d: "Passe o contato de um comércio ou empresa" },
                { n: "2", t: "Ela fecha contrato", d: "A gente cuida do atendimento e da instalação" },
                { n: "🎁", t: "Você ganha 1 mês grátis", d: "Para cada indicação que fechar" },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", alignItems: "center", gap: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "14px 18px", textAlign: "left" }}>
                  <div style={{ width: 30, height: 30, borderRadius: "50%", flexShrink: 0, background: s.n === "🎁" ? TEAL : "rgba(77,184,158,0.14)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display-var,sans-serif)", fontSize: s.n === "🎁" ? 15 : 13, fontWeight: 700, color: s.n === "🎁" ? "#fff" : TEAL }}>
                    {s.n}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display-var,sans-serif)", fontSize: 14, fontWeight: 700, color: "#fff" }}>{s.t}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <WaBtn text="Escreva INDICO no WhatsApp" msg="INDICO" />
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginTop: 10 }}>Vale para cada indicação que virar contrato</p>
          </div>
        </section>

      </main>
      <Footer />

      <style>{`
        @media (max-width: 680px) {
          .planos-seg-grid { grid-template-columns: 1fr !important; }
          .problema-grid   { grid-template-columns: 1fr !important; }
          .includes-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
