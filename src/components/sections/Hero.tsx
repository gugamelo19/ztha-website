"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

interface Node {
  x: number; y: number;
  vx: number; vy: number;
  radius: number; opacity: number;
}

const TEAL_RGB  = "77, 184, 158";
const NODE_COUNT = 55;
const MAX_DIST   = 130;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const nodes: Node[] = [];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const spawn = () => {
      nodes.length = 0;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius:  Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

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
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${TEAL_RGB}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${TEAL_RGB}, ${n.opacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    const handleResize = () => { resize(); spawn(); };

    resize(); spawn(); draw();
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-white min-h-[620px] flex items-center">
      {/* Canvas: rede animada */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Painel geométrico direito */}
      <div
        className="absolute inset-0 bg-teal-light z-0"
        style={{ clipPath: "polygon(62% 0, 100% 0, 100% 100%, 50% 100%)" }}
        aria-hidden="true"
      />

      {/* Conteúdo */}
      <div className="container-site relative z-10 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Texto */}
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="flex items-center gap-2.5 font-display text-[11px] font-bold text-teal tracking-[3px] uppercase mb-4">
              <span className="inline-block w-6 h-0.5 bg-teal rounded" />
              Tecnologia para o Brasil inteiro
            </span>

            <h1 className="font-display text-display-xl text-dark mb-5">
              Infraestrutura.<br />
              Segurança.<br />
              <span className="text-teal">Conectividade.</span>
            </h1>

            <p className="font-body text-base text-muted leading-relaxed max-w-[440px] mb-8">
              {COMPANY.description}
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contato"
                className="inline-flex items-center bg-teal hover:bg-teal-dark text-white font-display font-bold text-sm px-7 py-3.5 rounded-md transition-all hover:-translate-y-0.5 duration-150"
              >
                Fale com um especialista
              </Link>
              <Link
                href="/servicos"
                className="inline-flex items-center border border-site-border text-dark-mid hover:border-teal hover:text-teal font-display font-semibold text-sm px-7 py-3.5 rounded-md transition-all hover:-translate-y-0.5 duration-150"
              >
                Ver serviços
              </Link>
            </div>
          </div>

          {/* Badge +10 anos */}
          <div
            className="flex items-center justify-center md:justify-end animate-badge-pop"
            style={{ animationDelay: "0.4s" }}
            aria-label={`Mais de ${COMPANY.yearsInBusiness} anos de experiência na área`}
          >
            <div
              className="w-36 h-36 rounded-full border-2 border-teal bg-white flex flex-col items-center justify-center text-center"
              style={{
                boxShadow:
                  "0 0 0 12px rgba(77,184,158,0.07), 0 0 0 24px rgba(77,184,158,0.03)",
              }}
            >
              <span className="font-display text-[30px] font-extrabold text-dark leading-none tracking-tight">
                +{COMPANY.yearsInBusiness}
              </span>
              <span className="font-display text-sm font-bold text-teal">
                anos
              </span>
              <span className="font-body text-[10px] text-muted leading-snug mt-1">
                de experiência<br />na área
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
