"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#0A121E", borderTop: "1px solid #1D2C3E" }}>

      <div className="container-site" style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.4fr", gap: 40 }} className="footer-grid">

          {/* Marca */}
          <div>
            <div style={{ marginBottom: 14 }}>
              <Image
                src="/images/logo.png"
                alt="ZTHA Tecnologia"
                width={0}
                height={0}
                unoptimized
                style={{ display: "block", filter: "brightness(0) invert(1)", opacity: 0.9, width: "auto", height: 60 }}
              />
            </div>
            <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6F8197", lineHeight: 1.7, marginBottom: 20, maxWidth: 260 }}>
              Soluções completas em tecnologia para empresas em todo o Brasil.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a href={`mailto:${COMPANY.email}`} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6F8197", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#4DB89E")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6F8197")}
              >
                <Mail size={13} color="#4DB89E"/>{COMPANY.email}
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <MapPin size={13} color="#4DB89E"/>
                <span style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6F8197" }}>
                  {COMPANY.city}, {COMPANY.state} — {COMPANY.country}
                </span>
              </div>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 12, fontWeight: 600, color: "#9FB0C4", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Empresa</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6F8197", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#4DB89E")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6F8197")}
                >{link.label}</Link>
              ))}
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 12, fontWeight: 600, color: "#9FB0C4", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Serviços</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {SERVICES.map((s) => (
                <Link key={s.id} href={`/servicos#${s.id}`} style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6F8197", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#4DB89E")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6F8197")}
                >{s.name}</Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 12, fontWeight: 600, color: "#9FB0C4", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Fale Conosco</h3>
            <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13, color: "#6F8197", lineHeight: 1.65, marginBottom: 16 }}>
              Atendimento rápido via WhatsApp ou formulário de contato.
            </p>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #1D2C3E" }}>
        <div className="container-site" style={{ paddingTop: 16, paddingBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
          <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 12, color: "#8295AA", margin: 0 }}>
            © {year} {COMPANY.fullName}. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 12, color: "#8295AA", margin: 0 }}>
            {COMPANY.city}, {COMPANY.state} — {COMPANY.country}
          </p>
        </div>
      </div>
    </footer>
  );
}
