"use client";

import { useRef, useState } from "react";

export default function TiltCard({
  children, max = 6, style, className,
}: {
  children: React.ReactNode;
  max?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, active: false });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * max, ry: px * max, active: true });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ rx: 0, ry: 0, active: false })}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)${tilt.active ? " scale(1.015)" : ""}`,
        transition: tilt.active ? "transform 0.08s ease-out" : "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
        willChange: "transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
