"use client";

import { COMPANY } from "@/lib/constants";
import Link from "next/link";

export default function CTA() {
  return (
    <section style={{ background:"#F7F8FA", padding:"0 32px 96px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div style={{
          position:"relative", overflow:"hidden",
          background:"linear-gradient(135deg, #0A121E 0%, #15293a 100%)",
          borderRadius:28, padding:"72px 56px", textAlign:"center",
        }}>
          <div aria-hidden="true" style={{ position:"absolute", top:-120, left:"50%", transform:"translateX(-50%)", width:600, height:340, background:"radial-gradient(ellipse, rgba(77,184,158,0.22), transparent 65%)" }}/>
          <div style={{ position:"relative", zIndex:1, maxWidth:680, margin:"0 auto" }}>
            <h2 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:"clamp(28px, 4vw, 44px)", fontWeight:700, color:"#fff", lineHeight:1.1, letterSpacing:"-0.03em", margin:"0 0 18px" }}>
              Pronto para modernizar sua operação?
            </h2>
            <p style={{ fontSize:17, lineHeight:1.7, color:"#9fb0c4", margin:"0 0 36px" }}>
              Converse com um especialista da ZTHA e descubra a solução de TI ideal para a sua empresa — sem compromisso.
            </p>
            <div className="zt-cta-actions" style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer" style={{
                display:"inline-flex", alignItems:"center", gap:10,
                background:"#4DB89E", color:"#0A121E",
                fontFamily:"'Space Grotesk',sans-serif", fontWeight:600, fontSize:15,
                padding:"16px 30px", borderRadius:11, textDecoration:"none",
                transition:"transform .15s, box-shadow .2s",
              }}
                onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 14px 34px rgba(77,184,158,0.4)";}}
                onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none";}}
              >
                <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.9 7.9 0 0 0 3.8.97h.01A7.94 7.94 0 0 0 17.6 6.32ZM12.05 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.49.65.66-2.43-.16-.25a6.59 6.59 0 1 1 5.6 3.09Z"/></svg>
                Chamar no WhatsApp
              </a>
              <Link href="/contato" style={{
                display:"inline-flex", alignItems:"center", gap:10,
                background:"rgba(255,255,255,0.06)", color:"#e6edf4",
                fontFamily:"'Space Grotesk',sans-serif", fontWeight:500, fontSize:15,
                padding:"16px 28px", borderRadius:11, textDecoration:"none",
                border:"1px solid rgba(255,255,255,0.16)", transition:"border-color .2s, background .2s",
              }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(77,184,158,0.5)";e.currentTarget.style.background="rgba(77,184,158,0.08)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.16)";e.currentTarget.style.background="rgba(255,255,255,0.06)";}}
              >
                Enviar mensagem
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 560px) { .zt-cta-actions { flex-direction: column !important; align-items: stretch !important; } }
      `}</style>
    </section>
  );
}
