"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MessageCircle, Mail, MapPin, Phone, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const WHATSAPP_NUMBER = "557521370002"; 
export default function ContatoPage() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = `
*Nova mensagem pelo site ZTHA*

*Nome:* ${form.nome}
*E-mail:* ${form.email}
*Telefone:* ${form.telefone || "Não informado"}
*Assunto:* ${form.assunto}

*Mensagem:*
${form.mensagem}
    `.trim();

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
    setEnviado(true);
  };

  const InfoItem = ({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) => (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div style={{
        width: 40, height: 40, borderRadius: 8, flexShrink: 0,
        background: "#F0FAF7", border: "1px solid #C8EDE4",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon size={18} color="#4DB89E" aria-hidden="true"/>
      </div>
      <div>
        <p style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 11, fontWeight: 700, color: "#6B7A93", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 2px" }}>{label}</p>
        {href
          ? <a href={href} style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 15, color: "#1A2236", textDecoration: "none", fontWeight: 500 }}>{value}</a>
          : <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 15, color: "#1A2236", margin: 0, fontWeight: 500 }}>{value}</p>
        }
      </div>
    </div>
  );

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
              Fale Conosco
            </span>
            <h1 style={{
              fontFamily: "var(--font-display-var, sans-serif)",
              fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800,
              color: "#1A2236", letterSpacing: "-0.03em", margin: "0 0 12px",
            }}>
              Vamos conversar sobre<br/>o seu projeto
            </h1>
            <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 16, color: "#6B7A93", margin: 0, maxWidth: 520, lineHeight: 1.7 }}>
              Preencha o formulário ou fale diretamente pelo WhatsApp. Nossa equipe responde rápido.
            </p>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="container-site" style={{ paddingTop: 56, paddingBottom: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start" }} className="contato-grid">

            {/* Info */}
            <div>
              <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #E8EBF0", padding: 32, marginBottom: 20 }}>
                <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 18, fontWeight: 700, color: "#1A2236", margin: "0 0 24px" }}>
                  Informações de contato
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <InfoItem icon={Phone}  label="WhatsApp"    value={COMPANY.whatsapp} href={`https://wa.me/${WHATSAPP_NUMBER}`}/>
                  <InfoItem icon={Mail}   label="E-mail"      value={COMPANY.email}    href={`mailto:${COMPANY.email}`}/>
                  <InfoItem icon={MapPin} label="Endereço"    value="Serrinha, Bahia — Brasil"/>
                  <InfoItem icon={Clock} label="Suporte" value="24 horas"/>
                  <InfoItem icon={Clock} label="Comercial" value="Seg–Sex, 08:00 às 18:00"/>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #E8EBF0", padding: 32 }}>
              {enviado ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#F0FAF7", border: "2px solid #4DB89E", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <MessageCircle size={28} color="#4DB89E"/>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 20, fontWeight: 700, color: "#1A2236", margin: "0 0 10px" }}>
                    WhatsApp aberto!
                  </h3>
                  <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 15, color: "#6B7A93", margin: "0 0 20px" }}>
                    Sua mensagem foi montada automaticamente. Clique em enviar no WhatsApp para concluir.
                  </p>
                  <button
                    onClick={() => { setEnviado(false); setForm({ nome: "", email: "", telefone: "", assunto: "", mensagem: "" }); }}
                    style={{
                      background: "transparent", border: "1.5px solid #4DB89E", color: "#4DB89E",
                      fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 700, fontSize: 14,
                      padding: "10px 20px", borderRadius: 8, cursor: "pointer",
                    }}
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <h2 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 18, fontWeight: 700, color: "#1A2236", margin: "0 0 8px" }}>
                    Envie uma mensagem
                  </h2>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                    <Field label="Nome completo" required>
                      <input type="text" placeholder="Seu nome" required value={form.nome}
                        onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
                        style={inputStyle}/>
                    </Field>
                    <Field label="E-mail" required>
                      <input type="email" placeholder="seu@email.com" required value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        style={inputStyle}/>
                    </Field>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="form-row">
                    <Field label="Telefone / WhatsApp">
                      <input type="tel" placeholder="(00) 00000-0000" value={form.telefone}
                        onChange={e => setForm(f => ({ ...f, telefone: e.target.value }))}
                        style={inputStyle}/>
                    </Field>
                    <Field label="Assunto" required>
                      <select required value={form.assunto}
                        onChange={e => setForm(f => ({ ...f, assunto: e.target.value }))}
                        style={inputStyle}>
                        <option value="">Selecione...</option>
                        <option>CFTV</option>
                        <option>Monitoramento 24h</option>
                        <option>Backup em Nuvem</option>
                        <option>Cabeamento Estruturado</option>
                        <option>Desenvolvimento de Software</option>
                        <option>Infraestrutura de Redes</option>
                        <option>Outros</option>
                      </select>
                    </Field>
                  </div>

                  <Field label="Mensagem" required>
                    <textarea placeholder="Descreva sua necessidade..." required rows={5} value={form.mensagem}
                      onChange={e => setForm(f => ({ ...f, mensagem: e.target.value }))}
                      style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}/>
                  </Field>

                  <button type="submit" style={{
                    background: "#4DB89E", color: "#fff", border: "none", cursor: "pointer",
                    fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 700, fontSize: 15,
                    padding: "14px 28px", borderRadius: 8, transition: "background 0.2s", marginTop: 4,
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#3AA88E"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#4DB89E"; }}
                  >
                    <MessageCircle size={18} aria-hidden="true"/>
                    Enviar via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer/>

      <style>{`
        @media (max-width: 768px) {
          .contato-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        input, select, textarea { outline: none; }
        input:focus, select:focus, textarea:focus { border-color: #4DB89E !important; box-shadow: 0 0 0 3px rgba(77,184,158,0.12); }
      `}</style>
    </>
  );
}

function Field({ label, children, required }: { label: string; children: React.ReactNode; required?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 12, fontWeight: 700, color: "#4B5A72", letterSpacing: "0.05em" }}>
        {label}{required && <span style={{ color: "#4DB89E", marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "10px 14px",
  border: "1px solid #E8EBF0", borderRadius: 8,
  fontFamily: "var(--font-body-var, sans-serif)", fontSize: 14, color: "#1A2236",
  background: "#F7F8FA", transition: "border-color 0.2s, box-shadow 0.2s",
};