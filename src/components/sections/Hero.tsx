"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";

interface Node { x:number; y:number; vx:number; vy:number; radius:number; opacity:number; }

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
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      for (let i = 0; i < NODE_COUNT; i++) nodes.push({
        x: Math.random()*w, y: Math.random()*h,
        vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
        radius: Math.random()*2+1, opacity: Math.random()*0.5+0.3,
      });
    };
    const draw = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      ctx.clearRect(0,0,w,h);
      for (const n of nodes) {
        n.x+=n.vx; n.y+=n.vy;
        if(n.x<0||n.x>w) n.vx*=-1;
        if(n.y<0||n.y>h) n.vy*=-1;
      }
      for (let i=0;i<nodes.length;i++) for (let j=i+1;j<nodes.length;j++) {
        const a=nodes[i],b=nodes[j],dx=a.x-b.x,dy=a.y-b.y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<MAX_DIST){
          ctx.beginPath();
          ctx.strokeStyle=`rgba(${TEAL_RGB},${(1-dist/MAX_DIST)*0.18})`;
          ctx.lineWidth=0.8; ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
      for (const n of nodes){
        ctx.beginPath(); ctx.arc(n.x,n.y,n.radius,0,Math.PI*2);
        ctx.fillStyle=`rgba(${TEAL_RGB},${n.opacity})`; ctx.fill();
      }
      animId=requestAnimationFrame(draw);
    };
    const handleResize=()=>{resize();spawn();};
    resize(); spawn(); draw();
    window.addEventListener("resize",handleResize);
    return ()=>{ cancelAnimationFrame(animId); window.removeEventListener("resize",handleResize); };
  }, []);

  return (
    <section style={{ position:"relative", overflow:"hidden", background:"#fff", minHeight:620, display:"flex", alignItems:"center" }}>

      {/* Canvas */}
      <canvas ref={canvasRef} aria-hidden="true" style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }}/>

      {/* Painel geométrico */}
      <div aria-hidden="true" style={{
        position:"absolute", inset:0, background:"#F0FAF7", zIndex:0,
        clipPath:"polygon(62% 0, 100% 0, 100% 100%, 50% 100%)",
      }}/>

      <div className="container-site" style={{ position:"relative", zIndex:2, paddingTop:96, paddingBottom:96 }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:48, alignItems:"center" }} className="hero-grid">

          {/* Texto */}
          <div style={{ animation:"fadeUp 0.6s cubic-bezier(0.22,1,0.36,1) 0.1s both" }}>
            <span style={{
              display:"flex", alignItems:"center", gap:10,
              fontFamily:"var(--font-display-var, sans-serif)", fontSize:11, fontWeight:700,
              color:"#4DB89E", letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:16,
            }}>
              <span style={{ display:"inline-block", width:24, height:2, background:"#4DB89E", borderRadius:1 }}/>
              Tecnologia para o Brasil inteiro
            </span>

            <h1 style={{
              fontFamily:"var(--font-display-var, sans-serif)",
              fontSize:"clamp(36px, 5vw, 58px)", fontWeight:800,
              color:"#1A2236", lineHeight:1.1, letterSpacing:"-0.04em",
              margin:"0 0 20px",
            }}>
              Infraestrutura.<br/>
              Segurança.<br/>
              <span style={{ color:"#4DB89E" }}>Conectividade.</span>
            </h1>

            <p style={{
              fontFamily:"var(--font-body-var, sans-serif)", fontSize:16,
              color:"#6B7A93", lineHeight:1.75, maxWidth:440, margin:"0 0 32px",
            }}>
              {COMPANY.description}
            </p>

            <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
              <Link href="/contato" style={{
                display:"inline-flex", alignItems:"center",
                background:"#4DB89E", color:"#fff",
                fontFamily:"var(--font-display-var, sans-serif)", fontWeight:700, fontSize:14,
                padding:"14px 28px", borderRadius:6, textDecoration:"none",
                transition:"background 0.2s, transform 0.15s",
              }}
                onMouseEnter={e=>{e.currentTarget.style.background="#3AA88E";e.currentTarget.style.transform="translateY(-1px)";}}
                onMouseLeave={e=>{e.currentTarget.style.background="#4DB89E";e.currentTarget.style.transform="translateY(0)";}}
              >
                Fale com um especialista
              </Link>
              <Link href="/servicos" style={{
                display:"inline-flex", alignItems:"center",
                background:"transparent", color:"#4B5A72",
                fontFamily:"var(--font-display-var, sans-serif)", fontWeight:600, fontSize:14,
                padding:"14px 28px", borderRadius:6, textDecoration:"none",
                border:"1.5px solid #E8EBF0", transition:"border-color 0.2s, color 0.2s, transform 0.15s",
              }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="#4DB89E";e.currentTarget.style.color="#4DB89E";e.currentTarget.style.transform="translateY(-1px)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="#E8EBF0";e.currentTarget.style.color="#4B5A72";e.currentTarget.style.transform="translateY(0)";}}
              >
                Ver serviços
              </Link>
            </div>
          </div>

          {/* Badge */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", animation:"badgePop 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.4s both" }}
            aria-label={`Mais de ${COMPANY.yearsInBusiness} anos de experiência na área`}>
            <div style={{
              width:144, height:144, borderRadius:"50%",
              border:"2.5px solid #4DB89E", background:"#fff",
              boxShadow:"0 0 0 12px rgba(77,184,158,0.07), 0 0 0 24px rgba(77,184,158,0.03)",
              display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", textAlign:"center",
            }}>
              <span style={{ fontFamily:"var(--font-display-var, sans-serif)", fontSize:32, fontWeight:800, color:"#1A2236", lineHeight:1, letterSpacing:"-1px" }}>
                +{COMPANY.yearsInBusiness}
              </span>
              <span style={{ fontFamily:"var(--font-display-var, sans-serif)", fontSize:14, fontWeight:700, color:"#4DB89E" }}>
                anos
              </span>
              <span style={{ fontFamily:"var(--font-body-var, sans-serif)", fontSize:10, color:"#6B7A93", lineHeight:1.4, marginTop:4 }}>
                de experiência<br/>na área
              </span>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes badgePop { from{opacity:0;transform:scale(0.7)} to{opacity:1;transform:scale(1)} }
        @media (max-width: 767px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
