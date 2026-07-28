"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface Node { x: number; y: number; vx: number; vy: number; r: number; o: number; }

const TICKER_ITEMS = ["CFTV", "MONITORAMENTO 24H", "BACKUP EM NUVEM", "CABEAMENTO ESTRUTURADO", "DESENVOLVIMENTO DE SOFTWARE", "INFRAESTRUTURA DE REDES"];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Parallax de scroll no conteúdo
  useEffect(() => {
    const onScroll = () => {
      if (contentRef.current) {
        const y = Math.min(window.scrollY, 800);
        contentRef.current.style.transform = `translateY(${y * 0.22}px)`;
        contentRef.current.style.opacity = String(Math.max(1 - y / 700, 0));
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Canvas: orbes + nós com parallax de mouse
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId = 0;
    let time = 0;
    const nodes: Node[] = [];

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };

    const resize = () => {
      const d = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * d;
      canvas.height = canvas.offsetHeight * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };

    const spawnNodes = () => {
      nodes.length = 0;
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      for (let i = 0; i < 50; i++) {
        nodes.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 1.8 + 0.8, o: Math.random() * 0.4 + 0.15,
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      const mx = mouseRef.current.x, my = mouseRef.current.y;
      ctx.clearRect(0, 0, w, h);
      time += 0.003;

      // Orbes com parallax de mouse (camada mais profunda se move mais)
      const x1 = w * 0.72 + Math.sin(time * 0.8) * 80 + mx * 40;
      const y1 = h * 0.32 + Math.cos(time * 0.6) * 60 + my * 40;
      const g1 = ctx.createRadialGradient(x1, y1, 0, x1, y1, 340);
      g1.addColorStop(0, "rgba(77, 184, 158, 0.16)");
      g1.addColorStop(1, "rgba(77, 184, 158, 0)");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, w, h);

      const x2 = w * 0.22 + Math.cos(time * 0.5) * 60 + mx * 25;
      const y2 = h * 0.72 + Math.sin(time * 0.7) * 50 + my * 25;
      const g2 = ctx.createRadialGradient(x2, y2, 0, x2, y2, 300);
      g2.addColorStop(0, "rgba(45, 90, 160, 0.1)");
      g2.addColorStop(1, "rgba(45, 90, 160, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, w, h);

      // Nós com parallax leve (camada intermediária)
      const ox = mx * 12, oy = my * 12;
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(77,184,158,${(1 - dist / 140) * 0.13})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(a.x + ox, a.y + oy);
            ctx.lineTo(b.x + ox, b.y + oy);
            ctx.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x + ox, n.y + oy, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(77,184,158,${n.o})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    const handleResize = () => { resize(); spawnNodes(); };
    resize(); spawnNodes(); draw();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <section style={{
      position: "relative", overflow: "hidden",
      background: "#0A121E", minHeight: "100vh",
      display: "flex", flexDirection: "column",
    }}>
      <canvas ref={canvasRef} aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
      />

      <div ref={contentRef} style={{
        position: "relative", zIndex: 2, flex: 1,
        display: "flex", alignItems: "center",
        maxWidth: 1200, margin: "0 auto", padding: "140px 32px 60px", width: "100%",
        willChange: "transform, opacity",
      }}>
        <div>
          <div className="zt-mono" style={{
            fontSize: 13, color: "rgba(127,227,200,0.6)",
            marginBottom: 28, animation: "ztFadeUp 0.7s ease both",
          }}>
            <span style={{ color: "rgba(77,184,158,0.5)" }}>{"//"}</span> infraestrutura · segurança · conectividade
          </div>

          <h1 style={{
            fontFamily: "var(--font-display-var, sans-serif)",
            fontSize: "clamp(44px, 6.5vw, 82px)", fontWeight: 700,
            color: "#fff", lineHeight: 1.0, letterSpacing: "-0.045em",
            margin: "0 0 30px", maxWidth: 880,
            animation: "ztFadeUp 0.7s ease 0.1s both",
          }}>
            Tecnologia que mantém sua empresa{" "}
            <span style={{
              background: "linear-gradient(135deg, #4DB89E, #7FE3C8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              segura e conectada.
            </span>
          </h1>

          <p style={{
            fontFamily: "var(--font-body-var, sans-serif)",
            fontSize: 18, lineHeight: 1.75, color: "rgba(255,255,255,0.48)",
            maxWidth: 520, margin: "0 0 44px",
            animation: "ztFadeUp 0.7s ease 0.2s both",
          }}>
            Da câmera de segurança ao software sob medida — a ZTHA cuida de toda
            a sua infraestrutura com monitoramento 24h e atendimento em todo o Brasil.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "ztFadeUp 0.7s ease 0.3s both" }}>
            <Link href="/contato" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#4DB89E", color: "#0A121E",
              fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 600, fontSize: 15,
              padding: "16px 32px", borderRadius: 10, textDecoration: "none",
              transition: "transform .15s, box-shadow .2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(77,184,158,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Fale com um especialista
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/servicos" style={{
              display: "inline-flex", alignItems: "center",
              background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.75)",
              fontFamily: "var(--font-display-var, sans-serif)", fontWeight: 500, fontSize: 15,
              padding: "16px 32px", borderRadius: 10, textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)", transition: "border-color .25s, color .25s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(77,184,158,0.4)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}
            >
              Conheça os serviços
            </Link>
          </div>
        </div>
      </div>

      <div style={{
        position: "relative", zIndex: 2,
        borderTop: "1px solid rgba(255,255,255,0.06)",
        overflow: "hidden", padding: "18px 0",
        animation: "ztFadeUp 0.7s ease 0.5s both",
        background: "rgba(10,18,30,0.6)", backdropFilter: "blur(8px)",
      }}>
        <div className="zt-ticker-track">
          {[0, 1].map(dup => (
            <div key={dup} style={{ display: "flex", flexShrink: 0 }}>
              {TICKER_ITEMS.map(item => (
                <span key={item + dup} className="zt-mono" style={{
                  display: "inline-flex", alignItems: "center", gap: 20,
                  fontSize: 12, fontWeight: 500,
                  color: "rgba(255,255,255,0.28)",
                  paddingRight: 20, whiteSpace: "nowrap",
                }}>
                  {item}
                  <span style={{ color: "rgba(77,184,158,0.45)", fontSize: 11 }}>{"</>"}</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
