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
          background: "#0a0a0a",
          border: "1.5px solid #06b6d4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#06b6d4",
            fontSize: 13,
            fontWeight: 700,
            fontFamily: "sans-serif",
            letterSpacing: "-0.5px",
          }}
        >
          TH
        </span>
      </div>
    ),
    { ...size }
  );
}
