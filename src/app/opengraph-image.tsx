import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ZTHA Tecnologia — Soluções em TI para todo o Brasil";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F7F8FA",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "45%",
            background: "#F0FAF7",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              color: "#4DB89E",
              letterSpacing: "0.15em",
              marginBottom: 16,
              display: "flex",
            }}
          >
            ZTHA
          </div>

          <div
            style={{
              fontSize: 36,
              fontWeight: 700,
              color: "#1A2236",
              textAlign: "center",
              lineHeight: 1.3,
              marginBottom: 12,
              display: "flex",
            }}
          >
            Infraestrutura. Segurança. Conectividade.
          </div>

          <div
            style={{
              fontSize: 20,
              color: "#6B7A93",
              textAlign: "center",
              maxWidth: 600,
              display: "flex",
            }}
          >
            Soluções completas em TI para todo o Brasil
          </div>

          <div
            style={{
              marginTop: 32,
              background: "#4DB89E",
              color: "#fff",
              fontSize: 18,
              fontWeight: 700,
              padding: "12px 32px",
              borderRadius: 8,
              display: "flex",
            }}
          >
            www.ztha.com.br
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}