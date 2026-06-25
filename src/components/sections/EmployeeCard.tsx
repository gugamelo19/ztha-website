"use client";

import { useState } from "react";
import { Employee } from "@/lib/employees";
import { Mail, Phone, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function EmployeeCard({ employee }: { employee: Employee }) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const iconStyle = (id: string): React.CSSProperties => ({
    width: 44, height: 44, borderRadius: "50%",
    background: hoveredIcon === id ? "#4DB89E" : "#F0FAF7",
    border: `1px solid ${hoveredIcon === id ? "#4DB89E" : "#C8EDE4"}`,
    display: "flex", alignItems: "center", justifyContent: "center",
    textDecoration: "none", transition: "background 0.2s, border-color 0.2s",
    color: hoveredIcon === id ? "#fff" : "#4DB89E",
  });

  return (
    <div style={{
      minHeight: "100vh",
      background: "#F7F8FA",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: -60, left: -60, width: 200, height: 200, border: "4px solid #E8EBF0", borderRadius: 24, transform: "rotate(45deg)" }}/>
      <div style={{ position: "absolute", top: -40, left: -40, width: 200, height: 200, border: "4px solid #4DB89E", borderRadius: 24, transform: "rotate(45deg)", opacity: 0.4 }}/>
      <div style={{ position: "absolute", bottom: -60, right: -60, width: 200, height: 200, border: "4px solid #E8EBF0", borderRadius: 24, transform: "rotate(45deg)" }}/>
      <div style={{ position: "absolute", bottom: -40, right: -40, width: 200, height: 200, border: "4px solid #4DB89E", borderRadius: 24, transform: "rotate(45deg)", opacity: 0.4 }}/>

      <Image
        src="/images/logo.png"
        alt="ZTHA Tecnologia"
        width={160}
        height={80}
        style={{ mixBlendMode: "multiply", display: "block" }}
        priority
      />

      <div style={{
        background: "#fff", borderRadius: 20, border: "1px solid #E8EBF0",
        padding: "40px 48px", maxWidth: 440, width: "100%", textAlign: "center",
        position: "relative", zIndex: 2, boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
      }}>
        <div style={{
          width: 220, height: 220, borderRadius: "50%", border: "3px solid #4DB89E",
          padding: 3, margin: "0 auto 20px", boxShadow: "0 0 0 6px rgba(77,184,158,0.1)",
        }}>
          <Image
            src={employee.foto}
            alt={employee.nome}
            width={500}
            height={500}
            style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover", display: "block" }}
            priority
          />
        </div>

        <h1 style={{ fontFamily: "var(--font-display-var, sans-serif)", fontSize: 22, fontWeight: 700, color: "#1A2236", margin: "0 0 4px" }}>
          {employee.nome}
        </h1>
        <p style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 14, color: "#6B7A93", margin: "0 0 24px" }}>
          {employee.cargo}
        </p>

        <div style={{ width: 40, height: 3, background: "#4DB89E", borderRadius: 2, margin: "0 auto 24px" }}/>

        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 24 }}>
          {employee.email && (
            <a href={`mailto:${employee.email}`} target="_blank" rel="noopener noreferrer" aria-label="E-mail"
              onMouseEnter={() => setHoveredIcon("email")} onMouseLeave={() => setHoveredIcon(null)}
              style={iconStyle("email")}>
              <Mail size={20}/>
            </a>
          )}
          {employee.whatsapp && (
            <a href={`https://wa.me/${employee.whatsapp}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              onMouseEnter={() => setHoveredIcon("whatsapp")} onMouseLeave={() => setHoveredIcon(null)}
              style={iconStyle("whatsapp")}>
              <Phone size={20}/>
            </a>
          )}
          {employee.linkedin && (
            <a href={employee.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              onMouseEnter={() => setHoveredIcon("linkedin")} onMouseLeave={() => setHoveredIcon(null)}
              style={iconStyle("linkedin")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          )}
          {employee.instagram && (
            <a href={employee.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              onMouseEnter={() => setHoveredIcon("instagram")} onMouseLeave={() => setHoveredIcon(null)}
              style={iconStyle("instagram")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
          )}
        </div>

        <div style={{
          background: "#F7F8FA", borderRadius: 10, padding: "12px 16px",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
        }}>
          <Globe size={14} color="#4DB89E"/>
          <span style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 12, color: "#6B7A93" }}>
            ZTHA Tecnologia — Serrinha/BA
          </span>
        </div>
      </div>

      <Link href="/" style={{
        marginTop: 24, position: "relative", zIndex: 2,
        fontFamily: "var(--font-body-var, sans-serif)",
        fontSize: 13, color: "#4DB89E", textDecoration: "none",
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <Globe size={14}/>
        www.ztha.com.br
      </Link>
    </div>
  );
}