import { ImageResponse } from "next/og";

export const alt = "Sakthi Enterprises: scaffolding on rent in Chennai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#13202b",
          color: "#ffffff",
          borderLeft: "24px solid #ffc20e",
        }}
      >
        <div style={{ fontSize: 40, color: "#ffc20e" }}>Sakthi Enterprises</div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, marginTop: 24 }}>
          Scaffolding on rent in Chennai
        </div>
        <div style={{ fontSize: 36, marginTop: 36, color: "#cfd8df" }}>
          Erection included. Family business since 1999.
        </div>
        <div style={{ fontSize: 40, marginTop: 48 }}>Call or WhatsApp +91 98400 62692</div>
      </div>
    ),
    size
  );
}
