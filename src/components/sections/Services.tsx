"use client";

import { useRef, useEffect, useState } from "react";
import { Video, ShieldCheck, CloudUpload, Cable, Code2, Network } from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICONS = { cftv:Video, monitoramento:ShieldCheck, backup:CloudUpload, cabeamento:Cable, software:Code2, redes:Network };

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting){setInView(true);obs.disconnect();} }, { threshold:0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background:"#F7F8FA", paddingTop:80, paddingBottom:96 }} aria-labelledby="services-title">
      <div className="container-site">

        {/* Cabeçalho */}
        <div style={{ textAlign:"center", marginBottom:56 }}>
          <span style={{
            display:"inline-flex", alignItems:"center", gap:10,
            fontFamily:"var(--font-display-var, sans-serif)", fontSize:11, fontWeight:700,
            color:"#4DB89E", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:12,
          }}>
            <span style={{ display:"inline-block", width:20, height:2, background:"#4DB89E", borderRadius:1 }}/>
            O que fazemos
            <span style={{ display:"inline-block", width:20, height:2, background:"#4DB89E", borderRadius:1 }}/>
          </span>
          <h2 id="services-title" style={{
            fontFamily:"var(--font-display-var, sans-serif)",
            fontSize:"clamp(28px, 4vw, 40px)", fontWeight:800,
            color:"#1A2236", letterSpacing:"-0.03em", margin:"0 0 12px",
          }}>
            Nossas <span style={{ color:"#4DB89E" }}>Soluções</span>
          </h2>
          <p style={{
            fontFamily:"var(--font-body-var, sans-serif)", fontSize:16,
            color:"#6B7A93", lineHeight:1.75, maxWidth:520, margin:"0 auto",
          }}>
            Do cabeamento à nuvem, do monitoramento ao software — entregamos
            tecnologia de ponta com suporte humano de verdade.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:20 }} className="services-grid">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.id as keyof typeof ICONS];
            return (
              <ServiceCard key={service.id} service={service} Icon={Icon} visible={inView} delay={i * 80} />
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .services-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function ServiceCard({ service, Icon, visible, delay }: {
  service: typeof SERVICES[number];
  Icon: React.ElementType;
  visible: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position:"relative", background:"#fff",
        border:`1px solid ${hovered ? "#C8EDE4" : "#E8EBF0"}`,
        borderRadius:12, padding:24,
        boxShadow: hovered ? "0 4px 24px rgba(77,184,158,0.10)" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms, border-color 0.25s, box-shadow 0.25s`,
        cursor:"default", overflow:"hidden",
      }}
    >
      {/* Linha teal no topo */}
      <span style={{
        position:"absolute", top:0, left:24, right:24, height:2,
        background:"#4DB89E", borderRadius:"0 0 3px 3px",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin:"left",
        transition:"transform 0.3s ease",
      }}/>

      {/* Ícone */}
      <div style={{
        width:44, height:44, borderRadius:8,
        background: hovered ? "#4DB89E" : "#F0FAF7",
        border:`1px solid ${hovered ? "#4DB89E" : "#C8EDE4"}`,
        display:"flex", alignItems:"center", justifyContent:"center",
        marginBottom:20, transition:"background 0.25s, border-color 0.25s",
      }}>
        {Icon && <Icon size={20} color={hovered ? "#fff" : "#4DB89E"} aria-hidden="true" style={{ transition:"color 0.25s" }}/>}
      </div>

      {/* Nome */}
      <h3 style={{
        fontFamily:"var(--font-display-var, sans-serif)", fontSize:15, fontWeight:700,
        color: hovered ? "#4DB89E" : "#1A2236",
        margin:"0 0 8px", transition:"color 0.2s",
      }}>
        {service.name}
      </h3>

      {/* Descrição */}
      <p style={{
        fontFamily:"var(--font-body-var, sans-serif)", fontSize:14,
        color:"#6B7A93", lineHeight:1.65, margin:0,
      }}>
        {service.description}
      </p>
    </div>
  );
}
