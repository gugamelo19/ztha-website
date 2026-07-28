"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Só em dispositivos com mouse
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let x = 0, y = 0, tx = -400, ty = -400, raf = 0;
    const move = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.09;
      y += (ty - y) * 0.09;
      if (ref.current) ref.current.style.transform = `translate(${x - 220}px, ${y - 220}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", move, { passive: true });
    loop();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div ref={ref} aria-hidden="true" style={{
      position: "fixed", top: 0, left: 0,
      width: 440, height: 440, borderRadius: "50%",
      background: "radial-gradient(circle, rgba(77,184,158,0.08), transparent 62%)",
      pointerEvents: "none", zIndex: 30, mixBlendMode: "screen",
    }}/>
  );
}
