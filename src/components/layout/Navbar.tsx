"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(10,18,30,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      transition: "background 0.4s, backdrop-filter 0.4s, border-bottom 0.4s",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image src="/images/logo.png" alt="ZTHA Tecnologia" width={0} height={0} unoptimized
              className="nav-logo-img" priority
              style={{ display: "block", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.95 }}
            />
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="hide-mobile">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: "var(--font-body-var, sans-serif)", fontSize: 14, fontWeight: 500,
                color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s",
                letterSpacing: "0.01em",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contato" className="hide-mobile" style={{
            background: "#4DB89E", color: "#0A121E",
            fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 600, fontSize: 14,
            padding: "10px 22px", borderRadius: 8, textDecoration: "none",
            transition: "transform 0.15s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(77,184,158,0.35)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Fale Conosco
          </Link>

          <button className="show-mobile" onClick={() => setIsOpen(!isOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "rgba(255,255,255,0.7)" }}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div style={{ background: "rgba(10,18,30,0.98)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "16px 32px", display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} style={{
                fontFamily: "var(--font-body-var, sans-serif)", fontSize: 15, fontWeight: 500,
                color: "rgba(255,255,255,0.6)", textDecoration: "none", padding: "12px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                {link.label}
              </Link>
            ))}
            <Link href="/contato" onClick={() => setIsOpen(false)} style={{
              marginTop: 12, textAlign: "center", background: "#4DB89E", color: "#0A121E",
              fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 600, fontSize: 14,
              padding: "12px 20px", borderRadius: 8, textDecoration: "none",
            }}>
              Fale Conosco
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .hide-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hide-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        .nav-logo-img { height: 42px; }
        @media (max-width: 767px) { .nav-logo-img { height: 32px; } }
      `}</style>
    </header>
  );
}
