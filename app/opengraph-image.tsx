import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#0a0a0f",
          background:
            "radial-gradient(900px 520px at 82% 20%, #dbe6ff 0%, #f4f7ff 38%, #ffffff 72%), linear-gradient(135deg, #ffffff 0%, #eef3ff 100%)",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#6b6f76",
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <span>Zaffre</span>
          <span>Rochester, NY</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <h1
            style={{
              margin: 0,
              maxWidth: 840,
              fontSize: 92,
              lineHeight: 0.96,
              letterSpacing: "-0.05em",
              fontWeight: 700,
            }}
          >
            Websites that make the work sell.
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: 720,
              color: "#4f5661",
              fontSize: 32,
              lineHeight: 1.35,
            }}
          >
            Proof-first websites for businesses with real products, stories,
            catalogues, stages, and work to show.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            color: "#2f6bff",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span>zaffre.website</span>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: "#2f6bff" }} />
          <span>proof sheet, not brochure</span>
        </div>
      </div>
    ),
    size,
  );
}
