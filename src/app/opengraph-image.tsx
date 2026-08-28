import { ImageResponse } from "next/og";
import { site, markDomainAccent } from "@/data/site";

export const alt = site.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const { before, accent, after } = markDomainAccent();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          color: "#F3F4F6",
          padding: "72px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.18,
          }}
        >
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              style={{
                flex: 1,
                borderRight: "1px solid rgba(255,255,255,0.12)",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", fontSize: 28, letterSpacing: -0.6 }}>
          <span>{before}</span>
          <span style={{ color: "#477AFF" }}>{accent}</span>
          <span>{after}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 22, color: "#8B8D93", letterSpacing: 3 }}>
            NICK TSAI / 蔡逸凯
          </div>
          <div
            style={{
              fontSize: 54,
              lineHeight: 1.05,
              letterSpacing: -1.8,
              maxWidth: 900,
            }}
          >
            Long-termism
          </div>
        </div>
      </div>
    ),
    size,
  );
}
