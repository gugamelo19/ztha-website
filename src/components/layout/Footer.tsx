"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0F1522", borderTop: "1px solid #1e2a40" }}>

      {/* Corpo do footer */}
      <div className="container-site" style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.4fr", gap: 40 }} className="footer-grid">

          {/* Coluna 1 — Marca */}
          <div>
            <div style={{ marginBottom: 14 }}>
              <Image
                src="/images/logo.png"
                alt="ZTHA Tecnologia"
                width={100}
                height={68}
                style={{ display: "block", filter: "brightness(0) invert(1)", opacity: 0.9, width: "auto", height: 160 }}
              />
            </div>
            
            <p style={{
              fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13,
              color: "#4B5A72", lineHeight: 1.7, marginBottom: 20, maxWidth: 260,
            }}>
              Soluções completas em tecnologia da informação para empresas e
              pessoas físicas em todo o Brasil.
            </p>

            {/* Contato rápido */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href={`mailto:${COMPANY.email}`} style={{
                display: "flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13,
                color: "#4B5A72", textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#4DB89E")}
                onMouseLeave={e => (e.currentTarget.style.color = "#4B5A72")}
              >
                <Mail size={13} color="#4DB89E" aria-hidden="true"/>
                {COMPANY.email}
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={13} color="#4DB89E" aria-hidden="true"/>
                <span style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#4B5A72" }}>
                  {COMPANY.city}, {COMPANY.state} — {COMPANY.country}
                </span>
              </div>
            </div>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-display-var, sans-serif)", fontSize: 11,
              fontWeight: 700, color: "#8B9CC0", letterSpacing: "0.12em",
              textTransform: "uppercase", marginBottom: 16,
            }}>
              Empresa
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} style={{
                  fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13,
                  color: "#4B5A72", textDecoration: "none", transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#4DB89E")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4B5A72")}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna 3 — Serviços */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-display-var, sans-serif)", fontSize: 11,
              fontWeight: 700, color: "#8B9CC0", letterSpacing: "0.12em",
              textTransform: "uppercase", marginBottom: 16,
            }}>
              Serviços
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {SERVICES.map((s) => (
                <Link key={s.id} href={`/servicos#${s.id}`} style={{
                  fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13,
                  color: "#4B5A72", textDecoration: "none", transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#4DB89E")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4B5A72")}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Coluna 4 — CTA */}
          <div>
            <h3 style={{
              fontFamily: "var(--font-display-var, sans-serif)", fontSize: 11,
              fontWeight: 700, color: "#8B9CC0", letterSpacing: "0.12em",
              textTransform: "uppercase", marginBottom: 16,
            }}>
              Fale Conosco
            </h3>
            <p style={{
              fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13,
              color: "#4B5A72", lineHeight: 1.65, marginBottom: 16,
            }}>
              Atendimento rápido via WhatsApp ou formulário de contato.
            </p>
          </div>

        </div>
      </div>

      {/* Barra inferior */}
      <div style={{ borderTop: "1px solid #1e2a40" }}>
        <div className="container-site" style={{
          paddingTop: 16, paddingBottom: 16,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 8,
        }}>
          <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 12, color: "#2D3A52", margin: 0 }}>
            © {year} {COMPANY.fullName}. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 12, color: "#2D3A52", margin: 0 }}>
            {COMPANY.city}, {COMPANY.state} — {COMPANY.country}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
