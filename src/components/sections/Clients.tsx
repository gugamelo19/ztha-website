"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import TiltCard from "@/components/ui/TiltCard";

const CLIENTS = [
  { id: "honda", name: "Honda", logo: "/images/clients/honda.png", h: 80 },
  { id: "cresol", name: "Cresol", logo: "/images/clients/cresol.png", h: 80 },
  { id: "ferreira-filho", name: "Ferreira Filho", logo: "/images/clients/ferreira-filho.png", h: 90 },
  { id: "frigoserra", name: "Frigoserra", logo: "/images/clients/frigoserra.png", h: 75 },
];

export default function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el); return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: "#0A121E", padding: "88px 32px", position: "relative", overflow: "hidden" }}>
      <div aria-hidden="true" style={{ position: "absolute", bottom: -160, right: -100, width: 480, height: 480, background: "radial-gradient(circle, rgba(77,184,158,0.07), transparent 65%)" }}/>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>

        <SectionHeader index="05" label="Quem confia" dark title="Empresas que contam com a gente" />

        <div ref={ref} className="clients-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
          {CLIENTS.map((client, i) => (
            <div key={client.id} style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 0.5s ease ${i * 110}ms, transform 0.5s ease ${i * 110}ms`,
            }}>
              <TiltCard max={8}>
                <div style={{
                  background: "#fff",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 16,
                  height: 140,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "16px 28px",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                }}>
                  <Image src={client.logo} alt={client.name} width={0} height={0} unoptimized
                    style={{ width: "auto", height: "100%", maxHeight: client.h, maxWidth: "100%", objectFit: "contain" }}
                  />
                </div>
              </TiltCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
