"use client";

import { useRef, useEffect, useState } from "react";
import { MessageCircle, Mail } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#1A2236", paddingTop: 80, paddingBottom: 80, position: "relative", overflow: "hidden" }}>

      {/* Linha decorativa topo */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 160, height: 3, background: "#4DB89E", borderRadius: "0 0 6px 6px",
      }}/>

      {/* Decoração de fundo — círculos sutis */}
      <div style={{ position: "absolute", right: -80, top: -80, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(77,184,158,0.08)" }}/>
      <div style={{ position: "absolute", right: -40, top: -40, width: 200, height: 200, borderRadius: "50%", border: "1px solid rgba(77,184,158,0.06)" }}/>
      <div style={{ position: "absolute", left: -100, bottom: -100, width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(77,184,158,0.05)" }}/>

      <div className="container-site" style={{ position: "relative", zIndex: 2 }}>
        <div
          ref={ref}
          style={{
            textAlign: "center",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            fontFamily: "var(--font-display-var, sans-serif)", fontSize: 11, fontWeight: 700,
            color: "#4DB89E", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16,
          }}>
            <span style={{ display: "inline-block", width: 20, height: 2, background: "#4DB89E", borderRadius: 1 }}/>
            Vamos conversar
            <span style={{ display: "inline-block", width: 20, height: 2, background: "#4DB89E", borderRadius: 1 }}/>
          </span>

          <h2 style={{
            fontFamily: "var(--font-display-var, sans-serif)",
            fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800,
            color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.15,
            margin: "0 0 14px",
          }}>
            Precisa de suporte ou<br/>tem um projeto em mente?
          </h2>

          <p style={{
            fontFamily: "var(--font-body-var, sans-serif)", fontSize: 16,
            color: "#8B9CC0", lineHeight: 1.7,
            maxWidth: 480, margin: "0 auto 36px",
          }}>
            Nossa equipe está pronta para te atender — rápido, direto e eficiente.
            Fale agora pelo WhatsApp ou envie uma mensagem.
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <CTAButton
              href={COMPANY.whatsapp}
              bg="#25D366"
              hoverBg="#1ebe5d"
              icon={<MessageCircle size={18} aria-hidden="true"/>}
              label="Falar no WhatsApp"
            />
            <CTAButton
              href="/contato"
              bg="transparent"
              hoverBg="rgba(77,184,158,0.1)"
              border="1.5px solid #4DB89E"
              color="#4DB89E"
              icon={<Mail size={18} aria-hidden="true"/>}
              label="Enviar mensagem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CTAButton({ href, bg, hoverBg, border, color = "#fff", icon, label }: {
  href: string;
  bg: string;
  hoverBg: string;
  border?: string;
  color?: string;
  icon: React.ReactNode;
  label: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 9,
        background: hovered ? hoverBg : bg,
        border: border ?? "none",
        color,
        fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 700, fontSize: 15,
        padding: "14px 28px", borderRadius: 7, textDecoration: "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? "0 6px 20px rgba(0,0,0,0.2)" : "none",
        transition: "all 0.2s ease",
      }}
    >
      {icon}
      {label}
    </a>
  );
}
