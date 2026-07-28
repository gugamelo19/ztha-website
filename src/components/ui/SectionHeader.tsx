"use client";

export default function SectionHeader({
  index, label, title, subtitle, dark = false, align = "center",
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div style={{
      textAlign: isCenter ? "center" : "left",
      maxWidth: isCenter ? 640 : 620,
      margin: isCenter ? "0 auto 52px" : "0 0 48px",
    }}>
      {/* Índice + label mono */}
      <div style={{
        display: "flex", alignItems: "center", gap: 12,
        justifyContent: isCenter ? "center" : "flex-start",
        marginBottom: 18,
      }}>
        <span className="zt-mono" style={{
          fontSize: 12, fontWeight: 500,
          color: dark ? "rgba(127,227,200,0.55)" : "rgba(58,168,142,0.65)",
        }}>
          /{index}
        </span>
        <span style={{
          width: 32, height: 1,
          background: dark ? "rgba(77,184,158,0.3)" : "rgba(77,184,158,0.4)",
        }}/>
        <span className="zt-mono" style={{
          fontSize: 12, fontWeight: 500, textTransform: "uppercase",
          color: dark ? "rgba(255,255,255,0.45)" : "#6B7A93",
        }}>
          {label}
        </span>
      </div>

      <h2 style={{
        fontFamily: "var(--font-display-var, sans-serif)",
        fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700,
        color: dark ? "#fff" : "#1A2236",
        lineHeight: 1.08, letterSpacing: "-0.035em", margin: 0,
      }}>
        {title}
      </h2>

      {subtitle && (
        <p style={{
          fontFamily: "var(--font-body-var, sans-serif)",
          fontSize: 16.5, lineHeight: 1.7,
          color: dark ? "rgba(255,255,255,0.45)" : "#6B7A93",
          margin: "16px 0 0",
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
