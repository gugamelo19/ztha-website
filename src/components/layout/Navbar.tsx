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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? "rgba(10,18,30,0.92)" : "rgba(10,18,30,0.72)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      transition: "background 0.3s",
    }}>
      <div className="container-site">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image
              src="/images/logo.png"
              alt="ZTHA Tecnologia"
              width={0}
              height={0}
              unoptimized
              className="nav-logo-img"
              style={{ display: "block", width: "auto", filter: "brightness(0) invert(1)", opacity: 0.95 }}
              priority
            />
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="hide-mobile" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: "var(--font-body-var, sans-serif)", fontSize: 14, fontWeight: 500,
                color: "#9FB0C4", textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9FB0C4")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/contato" className="hide-mobile" style={{
            background: "#4DB89E", color: "#0A121E",
            fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 600, fontSize: 15,
            padding: "12px 24px", borderRadius: 10, textDecoration: "none",
            transition: "transform 0.2s, box-shadow 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 30px rgba(77,184,158,0.4)"; }}
            onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Fale Conosco
          </Link>

          <button className="show-mobile" onClick={() => setIsOpen(!isOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "#9FB0C4" }}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div style={{ background: "#0A121E", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="container-site" style={{ paddingTop: 12, paddingBottom: 16, display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} style={{
                fontFamily: "var(--font-body-var, sans-serif)", fontSize: 14, fontWeight: 500,
                color: "#9FB0C4", textDecoration: "none", padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                {link.label}
              </Link>
            ))}
            <Link href="/contato" onClick={() => setIsOpen(false)} style={{
              marginTop: 12, textAlign: "center", background: "#4DB89E", color: "#0A121E",
              fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 600, fontSize: 15,
              padding: "12px 20px", borderRadius: 10, textDecoration: "none",
            }}>
              Fale Conosco
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .hide-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hide-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        .nav-logo-img { height: 50px; }
        @media (max-width: 767px) { .nav-logo-img { height: 36px; } }
      `}</style>
    </header>
  );
}
