import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Abdul Azis - Developer & Job Seeker"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export function GET() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "#e9e4f9",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          maxWidth: 900,
          border: "2px solid #333",
          borderRadius: 16,
          padding: 40,
          background: "white",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "#b19cd9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontWeight: "bold",
              color: "white",
              marginRight: 24,
            }}
          >
            AA
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h1
              style={{
                fontSize: 64,
                fontWeight: "bold",
                margin: 0,
                lineHeight: 1.1,
              }}
            >
              Abdul Azis
            </h1>
            <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
              <div
                style={{
                  padding: "6px 12px",
                  background: "#e9e4f9",
                  borderRadius: 8,
                  fontSize: 24,
                }}
              >
                Job Seeker
              </div>
              <div
                style={{
                  padding: "6px 12px",
                  background: "#b19cd9",
                  borderRadius: 8,
                  fontSize: 24,
                  color: "white",
                }}
              >
                Developer
              </div>
            </div>
          </div>
        </div>
        <p
          style={{
            fontSize: 24,
            color: "#666",
            textAlign: "center",
            maxWidth: 700,
            margin: "12px 0 24px",
          }}
        >
          Fresh graduate with high learning spirit, focus on web development, and web design.
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 12,
          }}
        >
          {["GitHub", "LinkedIn", "X", "Instagram", "Medium"].map((platform) => (
            <div
              key={platform}
              style={{
                padding: "8px 16px",
                background: "#b19cd9",
                borderRadius: 8,
                fontSize: 20,
                color: "white",
              }}
            >
              @aazis7
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 24,
          fontSize: 20,
          color: "#666",
        }}
      >
        aazis7-links.vercel.app
      </div>
    </div>,
    {
      ...size,
    },
  )
}

