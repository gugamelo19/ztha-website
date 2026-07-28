"use client";

import { useRef, useEffect, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
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

  return <span ref={ref}>{suffix}{count}</span>;
}

const STATS = [
  { value: <Counter target={10} suffix="+" />, label: "anos de experiência no mercado", mono: "experiência" },
  { value: "24/7", label: "monitoramento ininterrupto", mono: "vigilância", teal: true },
  { value: <Counter target={6} />, label: "áreas de especialidade", mono: "serviços" },
  { value: "BR", label: "cobertura em todo o país", mono: "cobertura" },
];

export default function Stats() {
  return (
    <section style={{ background: "#1A2236", padding: "72px 32px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 500, height: 200, background: "radial-gradient(ellipse, rgba(77,184,158,0.08), transparent 70%)" }}/>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        <div className="zt-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 18, padding: "26px 28px",
            }}>
              <div className="zt-mono" style={{ fontSize: 11, color: "rgba(127,227,200,0.45)", marginBottom: 14, textTransform: "uppercase" }}>
                {s.mono}
              </div>
              <div style={{
                fontFamily: "var(--font-display-var, sans-serif)",
                fontSize: 46, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em",
                color: s.teal ? "#4DB89E" : "#fff",
              }}>
                {s.value}
              </div>
              <div style={{ fontFamily: "var(--font-body-var, sans-serif)", fontSize: 13.5, color: "#94a3b8", marginTop: 12 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .zt-stats { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .zt-stats { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
