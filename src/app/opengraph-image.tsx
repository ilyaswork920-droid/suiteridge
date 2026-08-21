import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
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
          justifyContent: "center",
          padding: "80px",
          background: "#F5F3EC",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#2F5D4E",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 44, fontWeight: 700, color: "#1C2119", display: "flex" }}>
            Suite<span style={{ color: "#2F5D4E" }}>Ridge</span>
          </div>
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, color: "#1C2119", maxWidth: 1000, lineHeight: 1.15, display: "flex" }}>
          {siteConfig.tagline}
        </div>
        <div style={{ fontSize: 28, color: "#5C594C", marginTop: 28, maxWidth: 900, display: "flex" }}>
          Independent software research for small business owners.
        </div>
      </div>
    ),
    { ...size }
  );
}
