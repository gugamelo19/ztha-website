"use client";

import { useRef, useEffect, useState } from "react";
import { Video, CloudUpload, Code2, Cable, Network } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting){setInView(true);obs.disconnect();} }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background:"#F7F8FA", padding:"96px 32px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{ maxWidth:620, marginBottom:48 }}>
          <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:12, fontWeight:600, color:"#3AA88E", letterSpacing:"0.16em", textTransform:"uppercase" }}>Nossos serviços</span>
          <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(28px, 4vw, 42px)", fontWeight:700, color:"#1A2236", lineHeight:1.1, letterSpacing:"-0.03em", margin:"14px 0 16px" }}>
            Tudo em tecnologia, sob um só time
          </h2>
          <p style={{ fontSize:16.5, lineHeight:1.7, color:"#6B7A93", margin:0 }}>
            Soluções completas que protegem, conectam e modernizam a operação da sua empresa — do hardware ao software.
          </p>
        </div>

        <div ref={ref} className="zt-bento" style={{
          display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gridAutoRows:"minmax(220px, auto)", gap:20,
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}>

          {/* CFTV — card grande escuro */}
          <BentoCardDark />

          {/* Backup */}
          <BentoCard icon={<CloudUpload size={23} />} title="Backup em Nuvem"
            desc="Dados protegidos com redundância e recuperação garantida. Nunca perca informações críticas." />

          {/* Software */}
          <BentoCard icon={<Code2 size={23} />} title="Desenvolvimento de Software"
            desc="Sistemas e plataformas digitais construídos sob medida para o seu negócio." />

          {/* Cabeamento */}
          <BentoCard icon={<Cable size={23} />} title="Cabeamento Estruturado"
            desc="Infraestrutura de rede física e lógica com padrão profissional, do corporativo ao residencial." />

          {/* Redes — card largo teal */}
          <BentoCardWide />

        </div>

        <div style={{ marginTop:32, display:"flex", justifyContent:"center" }}>
          <Link href="/servicos" style={{
            display:"inline-flex", alignItems:"center", gap:9,
            fontFamily:"'Space Grotesk',sans-serif", fontSize:15, fontWeight:600,
            color:"#1A2236", background:"#fff", border:"1.5px solid #E8EBF0",
            padding:"14px 26px", borderRadius:10, textDecoration:"none",
            transition:"border-color .2s, transform .15s",
          }}
            onMouseEnter={e=>{e.currentTarget.style.borderColor="#4DB89E";e.currentTarget.style.color="#3AA88E";e.currentTarget.style.transform="translateY(-1px)";}}
            onMouseLeave={e=>{e.currentTarget.style.borderColor="#E8EBF0";e.currentTarget.style.color="#1A2236";e.currentTarget.style.transform="translateY(0)";}}
          >
            Ver todos os serviços em detalhe
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .zt-bento { grid-template-columns: 1fr !important; } .zt-bento > * { grid-column: auto !important; grid-row: auto !important; } }
      `}</style>
    </section>
  );
}

function BentoCardDark() {
  return (
    <article style={{
      gridColumn:"span 2", gridRow:"span 1",
      background:"#0A121E", borderRadius:20, padding:34,
      display:"flex", flexDirection:"column", justifyContent:"space-between",
      overflow:"hidden", position:"relative",
    }}>
      <div aria-hidden="true" style={{ position:"absolute", top:-60, right:-40, width:280, height:280, background:"radial-gradient(circle, rgba(77,184,158,0.22), transparent 65%)" }}/>
      <div style={{ position:"relative", zIndex:1 }}>
        <span style={{
          display:"inline-flex", width:48, height:48, alignItems:"center", justifyContent:"center",
          background:"rgba(77,184,158,0.14)", border:"1px solid rgba(77,184,158,0.3)", borderRadius:13,
        }}>
          <Video size={24} color="#4DB89E" />
        </span>
        <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:25, fontWeight:700, color:"#fff", letterSpacing:"-0.02em", margin:"20px 0 10px" }}>
          CFTV & Monitoramento 24h
        </h3>
        <p style={{ fontSize:15, lineHeight:1.65, color:"#9fb0c4", maxWidth:440, margin:0 }}>
          Câmeras de última geração e uma central que vigia seu patrimônio todos os dias, sem interrupção. Segurança real, em tempo real.
        </p>
      </div>
      <div style={{ position:"relative", zIndex:1, display:"flex", gap:10, marginTop:24, flexWrap:"wrap" }}>
        {["Imagens em HD", "Acesso remoto", "Alertas instantâneos"].map(tag => (
          <span key={tag} style={{
            fontSize:12, fontWeight:500, color:"#cfd8e3",
            background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.1)",
            padding:"6px 12px", borderRadius:8,
          }}>{tag}</span>
        ))}
      </div>
    </article>
  );
}

function BentoCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:"#fff", border:`1px solid ${hovered ? "#C8EDE4" : "#E8EBF0"}`, borderRadius:20, padding:30,
        display:"flex", flexDirection:"column", justifyContent:"space-between",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 18px 40px rgba(26,34,54,0.08)" : "none",
        transition:"transform .2s, box-shadow .2s, border-color .2s",
      }}
    >
      <span style={{
        display:"inline-flex", width:46, height:46, alignItems:"center", justifyContent:"center",
        background:"#F0FAF7", borderRadius:12, color:"#3AA88E",
      }}>
        {icon}
      </span>
      <div style={{ marginTop:"auto", paddingTop:22 }}>
        <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:19, fontWeight:700, color:"#1A2236", letterSpacing:"-0.02em", margin:"0 0 8px" }}>{title}</h3>
        <p style={{ fontSize:14, lineHeight:1.6, color:"#6B7A93", margin:0 }}>{desc}</p>
      </div>
    </article>
  );
}

function BentoCardWide() {
  const [hovered, setHovered] = useState(false);
  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn:"span 2",
        background:"#F0FAF7", border:"1px solid #C8EDE4", borderRadius:20, padding:"30px 34px",
        display:"flex", alignItems:"center", gap:28,
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 18px 40px rgba(77,184,158,0.14)" : "none",
        transition:"transform .2s, box-shadow .2s",
      }}
    >
      <span style={{
        display:"inline-flex", flexShrink:0, width:56, height:56, alignItems:"center", justifyContent:"center",
        background:"#fff", border:"1px solid #C8EDE4", borderRadius:14, color:"#3AA88E",
      }}>
        <Network size={26} />
      </span>
      <div>
        <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:21, fontWeight:700, color:"#1A2236", letterSpacing:"-0.02em", margin:"0 0 8px" }}>Infraestrutura de Redes</h3>
        <p style={{ fontSize:14.5, lineHeight:1.6, color:"#557", margin:0, maxWidth:520 }}>
          Projeto e implantação de redes corporativas e domésticas, com suporte técnico especializado que mantém tudo funcionando.
        </p>
      </div>
    </article>
  );
}
