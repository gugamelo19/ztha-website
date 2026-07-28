"use client";

const LOGOS = [
  { id: "lenovo", svg: <svg width="96" height="30" viewBox="0 0 96 30"><text x="0" y="23" fontFamily="Arial Black, sans-serif" fontSize="23" fontWeight="900" fill="#E2231A" letterSpacing="-0.5">Lenovo</text></svg> },
  { id: "dell", svg: <svg width="54" height="54" viewBox="0 0 54 54"><circle cx="27" cy="27" r="25" fill="#007DB8"/><text x="27" y="34" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="15" fontWeight="900" fill="white">DELL</text></svg> },
  { id: "hp", svg: <svg width="58" height="38" viewBox="0 0 58 38"><rect x="2" y="2" width="54" height="34" rx="6" fill="#0096D6"/><text x="29" y="27" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="white">hp</text></svg> },
  { id: "intelbras", svg: <svg width="116" height="30" viewBox="0 0 116 30"><text x="58" y="23" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="21" fontWeight="900" fill="#00A859" letterSpacing="0.3">intelbras</text></svg> },
  { id: "hikvision", svg: <svg width="116" height="30" viewBox="0 0 116 30"><rect x="0" y="4" width="27" height="22" rx="3" fill="#D21F26"/><text x="13.5" y="20" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="9" fontWeight="900" fill="white">HIK</text><text x="34" y="21" fontFamily="Arial, sans-serif" fontSize="15" fontWeight="700" fill="#333" letterSpacing="0.3">VISION</text></svg> },
];

export default function Partners() {
  return (
    <section style={{ background: "#fff", padding: "48px 0", borderTop: "1px solid #EDF0F4", borderBottom: "1px solid #EDF0F4", overflow: "hidden" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px", marginBottom: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, justifyContent: "center" }}>
          <span className="zt-mono" style={{ fontSize: 12, fontWeight: 500, color: "rgba(58,168,142,0.65)" }}>/04</span>
          <span style={{ width: 32, height: 1, background: "rgba(77,184,158,0.4)" }}/>
          <span className="zt-mono" style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", color: "#6B7A93" }}>
            Revenda autorizada
          </span>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ overflow: "hidden", position: "relative" }}>
        {/* Fade nas bordas */}
        <div aria-hidden="true" style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(90deg, #fff, transparent)", zIndex: 2, pointerEvents: "none" }}/>
        <div aria-hidden="true" style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(270deg, #fff, transparent)", zIndex: 2, pointerEvents: "none" }}/>

        <div className="zt-marquee-track">
          {[0, 1].map(dup => (
            <div key={dup} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              {LOGOS.map(logo => (
                <div key={logo.id + dup} style={{
                  display: "flex", alignItems: "center", justifyContent: "center",
                  padding: "0 56px", opacity: 0.5, transition: "opacity 0.25s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "0.5")}
                >
                  {logo.svg}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
