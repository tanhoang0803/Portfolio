import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Cyan accent bar — top left */}
        <div
          style={{
            position: "absolute",
            top: 3,
            left: 3,
            width: 10,
            height: 3,
            borderRadius: 2,
            background: "#06b6d4",
            display: "flex",
          }}
        />
        {/* Peach accent bar — right side */}
        <div
          style={{
            position: "absolute",
            right: 3,
            top: 10,
            width: 3,
            height: 10,
            borderRadius: 2,
            background: "#fb923c",
            display: "flex",
          }}
        />
        {/* TH text */}
        <span
          style={{
            color: "#ffffff",
            fontSize: 11,
            fontWeight: 800,
            fontFamily: "sans-serif",
            letterSpacing: "-0.5px",
            display: "flex",
          }}
        >
          TH
        </span>
      </div>
    ),
    { ...size }
  );
}
