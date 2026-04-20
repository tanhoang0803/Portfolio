import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top cyan bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#06b6d4",
            display: "flex",
          }}
        />

        {/* Avatar */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "linear-gradient(135deg, #060e1c 0%, #0c1e38 100%)",
            border: "1.5px solid #1a4060",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
            position: "relative",
          }}
        >
          <span style={{ color: "#c8e0f0", fontSize: 28, fontWeight: 800, fontFamily: "sans-serif", letterSpacing: -1, display: "flex" }}>
            TH
          </span>
          <div style={{ position: "absolute", bottom: 6, left: "50%", width: 5, height: 5, borderRadius: "50%", background: "#06c8e8", display: "flex" }} />
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#06b6d4",
              display: "flex",
            }}
          />
          <span style={{ color: "#06b6d4", fontSize: 14, letterSpacing: 3, display: "flex" }}>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 24,
          }}
        >
          <span style={{ fontSize: 64, fontWeight: 700, color: "#f9fafb", lineHeight: 1.1, display: "flex" }}>
            Tan Hoang
          </span>
          <span style={{ fontSize: 64, fontWeight: 700, color: "#06b6d4", lineHeight: 1.1, display: "flex" }}>
            Full-Stack Engineer
          </span>
        </div>

        {/* Subheadline */}
        <div style={{ fontSize: 22, color: "#6b7280", marginBottom: 48, display: "flex" }}>
          Building scalable enterprise systems with AI
        </div>

        {/* Stack pills */}
        <div style={{ display: "flex", gap: 12 }}>
          {["Next.js", "TypeScript", "NestJS", "Docker", "OpenAI"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 18px",
                borderRadius: 999,
                border: "1px solid #374151",
                background: "#111827",
                color: "#9ca3af",
                fontSize: 14,
                display: "flex",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 100,
            color: "#374151",
            fontSize: 14,
            display: "flex",
          }}
        >
          portfolio-seven-eosin-57.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
