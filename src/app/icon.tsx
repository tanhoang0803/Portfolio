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
          background: "linear-gradient(135deg, #060e1c 0%, #0c1e38 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Sparkle top-right */}
        <div
          style={{
            position: "absolute",
            top: 4,
            right: 5,
            width: 2,
            height: 2,
            borderRadius: "50%",
            background: "#60c8e8",
            opacity: 0.8,
            display: "flex",
          }}
        />
        {/* Sparkle bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 6,
            left: 4,
            width: 1.5,
            height: 1.5,
            borderRadius: "50%",
            background: "#60c8e8",
            opacity: 0.6,
            display: "flex",
          }}
        />
        {/* TH text — metallic white-blue */}
        <span
          style={{
            color: "#c8e0f0",
            fontSize: 11,
            fontWeight: 800,
            fontFamily: "sans-serif",
            letterSpacing: "-0.5px",
            display: "flex",
          }}
        >
          TH
        </span>
        {/* Bottom cyan dot */}
        <div
          style={{
            position: "absolute",
            bottom: 3,
            left: "50%",
            transform: "translateX(-50%)",
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: "#06c8e8",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
