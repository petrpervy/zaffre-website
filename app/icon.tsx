import { ImageResponse } from "next/og";

// Browser-tab icon: the Zaffre wordmark — white on the brand blue, with the
// signature dot in a darker blue (mirrors the site logo `zaffre.`).
export const size = { width: 128, height: 128 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f6bff",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          fontWeight: 800,
          fontSize: 34,
          letterSpacing: "-0.04em",
        }}
      >
        zaffre<span style={{ color: "#152a73" }}>.</span>
      </div>
    ),
    size,
  );
}
