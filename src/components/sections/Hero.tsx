"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { COMPANY } from "@/lib/constants";
import { Shield, Clock, Globe } from "lucide-react";

const TEAL_RGB = "77, 184, 158";
const NODE_COUNT = 56;
const MAX_DIST = 140;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId: number;
    interface Node { x:number; y:number; vx:number; vy:number; r:number; o:number; }
    const nodes: Node[] = [];
    const resize = () => { const d=window.devicePixelRatio||1; canvas.width=canvas.offsetWidth*d; canvas.height=canvas.offsetHeight*d; ctx.setTransform(d,0,0,d,0,0); };
    const spawn = () => { nodes.length=0; const w=canvas.offsetWidth,h=canvas.offsetHeight; for(let i=0;i<NODE_COUNT;i++) nodes.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-0.5)*0.35,vy:(Math.random()-0.5)*0.35,r:Math.random()*1.8+1,o:Math.random()*0.5+0.25}); };
    const draw = () => { const w=canvas.offsetWidth,h=canvas.offsetHeight; ctx.clearRect(0,0,w,h); for(const n of nodes){n.x+=n.vx;n.y+=n.vy;if(n.x<0||n.x>w)n.vx*=-1;if(n.y<0||n.y>h)n.vy*=-1;} for(let i=0;i<nodes.length;i++) for(let j=i+1;j<nodes.length;j++){const a=nodes[i],b=nodes[j],dx=a.x-b.x,dy=a.y-b.y,d=Math.sqrt(dx*dx+dy*dy);if(d<MAX_DIST){ctx.beginPath();ctx.strokeStyle=`rgba(${TEAL_RGB},${(1-d/MAX_DIST)*0.16})`;ctx.lineWidth=0.7;ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();}} for(const n of nodes){ctx.beginPath();ctx.arc(n.x,n.y,n.r,0,Math.PI*2);ctx.fillStyle=`rgba(${TEAL_RGB},${n.o})`;ctx.fill();} animId=requestAnimationFrame(draw); };
    const onR=()=>{resize();spawn();};resize();spawn();draw();window.addEventListener("resize",onR);
    return ()=>{cancelAnimationFrame(animId);window.removeEventListener("resize",onR);};
  }, []);

  return (
    <section style={{ position:"relative", overflow:"hidden", background:"#0A121E", padding:0, minHeight:"100vh", display:"flex", alignItems:"center" }}>
      <canvas ref={canvasRef} aria-hidden="true" style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none", opacity:0.9 }}/>
      <div aria-hidden="true" style={{ position:"absolute", top:-180, right:-120, width:560, height:560, background:"radial-gradient(circle, rgba(77,184,158,0.22), transparent 62%)", pointerEvents:"none" }}/>
      <div aria-hidden="true" style={{ position:"absolute", bottom:-220, left:-160, width:520, height:520, background:"radial-gradient(circle, rgba(47,108,160,0.16), transparent 65%)", pointerEvents:"none" }}/>

      <div style={{ position:"relative", zIndex:2, maxWidth:1200, margin:"0 auto", padding:"140px 32px 96px" }}>
        <div className="hero-grid" style={{ display:"grid", gridTemplateColumns:"1.15fr 0.85fr", gap:56, alignItems:"center" }}>

          {/* Texto */}
          <div style={{ animation:"ztFadeUp 0.7s ease both" }}>
            <span style={{
              display:"inline-flex", alignItems:"center", gap:9,
              fontFamily:"'Space Grotesk',sans-serif", fontSize:12, fontWeight:600,
              color:"#7fe3c8", letterSpacing:"0.16em", textTransform:"uppercase",
              background:"rgba(77,184,158,0.1)", border:"1px solid rgba(77,184,158,0.25)",
              padding:"7px 14px", borderRadius:100,
            }}>
              <span style={{ width:7, height:7, borderRadius:"50%", background:"#4DB89E", boxShadow:"0 0 0 3px rgba(77,184,158,0.25)" }}/>
              Tecnologia para o Brasil inteiro
            </span>

            <h1 style={{
              fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(40px, 5vw, 62px)", fontWeight:700,
              color:"#fff", lineHeight:1.04, letterSpacing:"-0.035em", margin:"24px 0 22px",
            }}>
              Tecnologia que mantém sua empresa <span style={{ color:"#4DB89E" }}>segura e conectada</span>.
            </h1>

            <p style={{ fontSize:17, lineHeight:1.7, color:"#9fb0c4", maxWidth:480, margin:"0 0 36px" }}>
              Da câmera de segurança ao software sob medida — a ZTHA cuida de toda a sua infraestrutura de TI com monitoramento 24h e atendimento em todo o território nacional.
            </p>

            <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:44 }}>
              <Link href="/contato" style={{
                display:"inline-flex", alignItems:"center", gap:9,
                background:"#4DB89E", color:"#0A121E",
                fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:15,
                padding:"15px 28px", borderRadius:10, textDecoration:"none",
                transition:"transform .15s, box-shadow .2s",
              }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 12px 30px rgba(77,184,158,0.4)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}
              >
                Fale com um especialista
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
              <Link href="/servicos" style={{
                display:"inline-flex", alignItems:"center", gap:9,
                background:"rgba(255,255,255,0.04)", color:"#e6edf4",
                fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize:15,
                padding:"15px 26px", borderRadius:10, textDecoration:"none",
                border:"1px solid rgba(255,255,255,0.16)", transition:"border-color .2s, background .2s",
              }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(77,184,158,0.5)";e.currentTarget.style.background="rgba(77,184,158,0.08)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.16)";e.currentTarget.style.background="rgba(255,255,255,0.04)";}}
              >
                Conheça os serviços
              </Link>
            </div>

            {/* Trust badges */}
            <div style={{ display:"flex", gap:30, flexWrap:"wrap" }}>
              {[
                { icon: Shield, text: "Monitoramento 24h" },
                { icon: Clock, text: "+10 anos de experiência" },
                { icon: Globe, text: "Atendimento nacional" },
              ].map(({icon:Icon, text}) => (
                <div key={text} style={{ display:"flex", alignItems:"center", gap:11 }}>
                  <Icon size={18} color="#4DB89E" strokeWidth={2}/>
                  <span style={{ fontSize:13.5, color:"#aebccd", fontWeight:500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard card */}
          <div style={{ position:"relative", animation:"ztFadeUp 0.7s ease 0.2s both" }}>
            <div style={{
              background:"linear-gradient(160deg, rgba(20,32,48,0.9), rgba(13,22,35,0.95))",
              border:"1px solid rgba(255,255,255,0.1)", borderRadius:20, padding:24,
              boxShadow:"0 30px 70px rgba(0,0,0,0.45)", backdropFilter:"blur(8px)",
            }}>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:20 }}>
                <div style={{ display:"flex", alignItems:"center", gap:9 }}>
                  <span style={{ width:9, height:9, borderRadius:"50%", background:"#4DB89E", boxShadow:"0 0 10px #4DB89E" }}/>
                  <span style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:13, fontWeight:600, color:"#fff" }}>Central de Monitoramento</span>
                </div>
                <span style={{ fontSize:11, fontWeight:600, color:"#7fe3c8", background:"rgba(77,184,158,0.12)", padding:"4px 9px", borderRadius:6 }}>AO VIVO</span>
              </div>

              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:16 }}>
                <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:15 }}>
                  <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:26, fontWeight:700, color:"#fff", lineHeight:1 }}>100%</div>
                  <div style={{ fontSize:11.5, color:"#8295aa", marginTop:6 }}>Uptime da rede</div>
                </div>
                <div style={{ background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:15 }}>
                  <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:26, fontWeight:700, color:"#4DB89E", lineHeight:1 }}>24/7</div>
                  <div style={{ fontSize:11.5, color:"#8295aa", marginTop:6 }}>Vigilância ativa</div>
                </div>
              </div>

              <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                {[
                  { text:"CFTV — 12 câmeras online", time:"agora", color:"#4DB89E" },
                  { text:"Backup em nuvem concluído", time:"3 min", color:"#4DB89E" },
                  { text:"Rede operando normalmente", time:"5 min", color:"#7fe3c8" },
                ].map(item => (
                  <div key={item.text} style={{ display:"flex", alignItems:"center", gap:10, background:"rgba(255,255,255,0.03)", borderRadius:10, padding:"11px 13px" }}>
                    <span style={{ width:6, height:6, borderRadius:"50%", background:item.color, flexShrink:0 }}/>
                    <span style={{ fontSize:12.5, color:"#c4d0dd", flex:1 }}>{item.text}</span>
                    <span style={{ fontSize:11, color:"#6f8197" }}>{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes ztFadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
      `}</style>
    </section>
  );
}
