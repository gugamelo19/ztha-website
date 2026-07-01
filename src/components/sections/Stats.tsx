"use client";

import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "", color = "#fff" }: { target: number; suffix?: string; color?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const dur = 1400, start = performance.now();
        function step(now: number) {
          const p = Math.min((now - start) / dur, 1);
          setCount(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <div ref={ref} style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:46, fontWeight:700, color, lineHeight:1, letterSpacing:"-0.03em" }}>
      {suffix}{count}
    </div>
  );
}

export default function Stats() {
  return (
    <section style={{ background:"#1A2236", padding:"64px 32px" }}>
      <div style={{ maxWidth:1200, margin:"0 auto" }}>
        <div className="zt-stats" style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap:24 }}>
          <div>
            <Counter target={10} suffix="+" />
            <div style={{ fontSize:14, color:"#94a3b8", marginTop:10 }}>anos de experiência no mercado</div>
          </div>
          <div>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:46, fontWeight:700, color:"#4DB89E", lineHeight:1, letterSpacing:"-0.03em" }}>24/7</div>
            <div style={{ fontSize:14, color:"#94a3b8", marginTop:10 }}>monitoramento ininterrupto</div>
          </div>
          <div>
            <Counter target={6} />
            <div style={{ fontSize:14, color:"#94a3b8", marginTop:10 }}>áreas de especialidade em TI</div>
          </div>
          <div>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:46, fontWeight:700, color:"#fff", lineHeight:1, letterSpacing:"-0.03em" }}>BR</div>
            <div style={{ fontSize:14, color:"#94a3b8", marginTop:10 }}>cobertura em todo o país</div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .zt-stats { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
