import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "A. Smith Media — Digital Consulting & AI Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0b 0%, #18181b 50%, #0a0a0b 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Gradient accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #7f54b3, #a855f7, #7f54b3)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #7f54b3, #a855f7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "36px",
            fontWeight: 700,
            marginBottom: "24px",
          }}
        >
          A
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            color: "#fafafa",
            marginBottom: "12px",
          }}
        >
          A. Smith Media
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "24px",
            color: "#a1a1aa",
            marginBottom: "32px",
          }}
        >
          Digital Consulting & AI Solutions
        </div>

        {/* Services tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          {["Digital Consulting", "AI Solutions", "Branding", "WordPress Plugins"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "1px solid rgba(127, 84, 179, 0.3)",
                  background: "rgba(127, 84, 179, 0.1)",
                  color: "#a855f7",
                  fontSize: "14px",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Location */}
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            fontSize: "14px",
            color: "#71717a",
          }}
        >
          Frisco, Texas — asmith.media
        </div>
      </div>
    ),
    { ...size }
  );
}
