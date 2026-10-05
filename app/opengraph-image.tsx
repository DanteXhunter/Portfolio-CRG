import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `Portafolio de ${profile.name}`;
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
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#f4f4f5",
          background: "#09090b",
        }}
      >
        <div style={{ display: "flex", color: "#27b173", fontSize: 30 }}>
          {profile.initials.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
            {profile.name}
          </div>
          <div style={{ display: "flex", maxWidth: 920, color: "#a1a1aa", fontSize: 34 }}>
            {profile.headline}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26 }}>
          <div
            style={{
              width: 14,
              height: 14,
              display: "flex",
              borderRadius: 999,
              background: "#27b173",
            }}
          />
          Portafolio de desarrollo de software
        </div>
      </div>
    ),
    size
  );
}
