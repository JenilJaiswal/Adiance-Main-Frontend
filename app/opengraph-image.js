import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Adiance Technologies — NDAA Compliant OEM Camera Manufacturer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0b1220 0%, #1a2540 60%, #BF0603 100%)",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 36,
            fontWeight: 700,
            letterSpacing: -0.5,
          }}
        >
          ADIANCE
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05 }}>
            NDAA Compliant OEM Camera Manufacturer
          </div>
          <div style={{ fontSize: 30, opacity: 0.85, lineHeight: 1.3 }}>
            White-label CCTV · Edge AI · Made in India · 50+ countries
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 22,
              opacity: 0.7,
              letterSpacing: 0.3,
            }}
          >
            adiance.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
