"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "rgba(255,255,255,0.97)",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      borderBottom: "1px solid #E8EBF0",
      boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      transition: "box-shadow 0.3s, backdrop-filter 0.3s",
    }}>
      <div className="container-site">
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height: 90, paddingTop: 10, paddingBottom: 10 }}>

          {/* Logo */}
         <Link href="/" style={{ display:"flex", alignItems:"center", textDecoration:"none" }}>
            <Image
              src="/images/logo.png"
              alt="ZTHA Tecnologia"
              width={0}
              height={0}
              unoptimized
              className="nav-logo-img"
              style={{ mixBlendMode: "multiply", display: "block", width: "auto", height: 110, maxHeight: "60px" }}
              priority
            />
          </Link>
          
          {/* Nav desktop */}
          <nav style={{ display:"flex", alignItems:"center", gap:28 }} className="hide-mobile" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} style={{
                fontFamily:"var(--font-body-var, sans-serif)", fontSize:14, fontWeight:500,
                color:"#6B7A93", textDecoration:"none", transition:"color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#1A2236")}
                onMouseLeave={e => (e.currentTarget.style.color = "#6B7A93")}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <Link href="/contato" className="hide-mobile" style={{
            background:"#4DB89E", color:"#fff",
            fontFamily:"var(--font-display-var, sans-serif)", fontWeight:700, fontSize:14,
            padding:"10px 20px", borderRadius:6, textDecoration:"none",
            transition:"background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#3AA88E")}
            onMouseLeave={e => (e.currentTarget.style.background = "#4DB89E")}
          >
            Fale Conosco
          </Link>

          {/* Botão mobile */}
          <button className="show-mobile" onClick={() => setIsOpen(!isOpen)}
            style={{ background:"none", border:"none", cursor:"pointer", padding:8, color:"#6B7A93" }}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={isOpen}
          >
            {isOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div style={{ background:"#fff", borderTop:"1px solid #E8EBF0" }}>
          <div className="container-site" style={{ paddingTop:12, paddingBottom:16, display:"flex", flexDirection:"column", gap:4 }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} style={{
                fontFamily:"var(--font-body-var, sans-serif)", fontSize:14, fontWeight:500,
                color:"#6B7A93", textDecoration:"none", padding:"10px 0",
                borderBottom:"1px solid #E8EBF0",
              }}>
                {link.label}
              </Link>
            ))}
            <Link href="/contato" onClick={() => setIsOpen(false)} style={{
              marginTop:12, textAlign:"center", background:"#4DB89E", color:"#fff",
              fontFamily:"var(--font-display-var, sans-serif)", fontWeight:700, fontSize:14,
              padding:"12px 20px", borderRadius:6, textDecoration:"none",
            }}>
              Fale Conosco
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .hide-mobile { display: flex !important; } .show-mobile { display: none !important; } }
        @media (max-width: 767px) { .hide-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        @media (max-width: 767px) {
        .nav-logo-img { height: 60px !important; }
         }
        `}</style>
    </header>
  );
}
