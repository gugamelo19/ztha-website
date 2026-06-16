"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-site-border shadow-sm"
          : "bg-white border-b border-site-border"
      )}
    >
      <div className="container-site">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <svg width="26" height="26" viewBox="0 0 40 40" aria-hidden="true">
              <rect x="4" y="14" width="14" height="14" rx="3" fill="none" stroke="#555F6B" strokeWidth="3"/>
              <rect x="22" y="12" width="14" height="14" rx="3" fill="none" stroke="#555F6B" strokeWidth="3"/>
              <circle cx="14" cy="21" r="2.5" fill="#4DB89E"/>
              <circle cx="26" cy="19" r="2.5" fill="#4DB89E"/>
              <line x1="18" y1="21" x2="22" y2="19" stroke="#4DB89E" strokeWidth="1.5"/>
            </svg>
            <span className="font-display font-bold text-base tracking-widest text-teal group-hover:text-teal-dark transition-colors">
              {COMPANY.name}
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-muted hover:text-dark transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <Link
            href="/contato"
            className="hidden md:inline-flex items-center bg-teal hover:bg-teal-dark text-white font-display font-bold text-sm px-5 py-2.5 rounded-md transition-colors"
          >
            Fale Conosco
          </Link>

          {/* Botão menu mobile */}
          <button
            className="md:hidden p-2 text-muted hover:text-dark transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-site-border">
          <div className="container-site py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-sm font-medium text-muted hover:text-teal py-2.5 border-b border-site-border last:border-0 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="mt-3 text-center bg-teal hover:bg-teal-dark text-white font-display font-bold text-sm px-5 py-3 rounded-md transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
