type Variant = "wireframe" | "mockup" | "live";

/**
 * An abstract, in-code representation of a website inside a browser chrome.
 * Used as the contact-sheet cover (variant="live") and as the three stages
 * of the case-file process arc.
 */
export function MiniSite({
  variant,
  tint,
  className,
}: {
  variant: Variant;
  tint: string;
  className?: string;
}) {
  const isWire = variant === "wireframe";
  const ink = isWire ? "#c8c3b6" : tint;
  const soft = isWire ? "#ded9cd" : `${tint}1f`;
  const softer = isWire ? "#e7e3d8" : `${tint}12`;
  const border = isWire ? "#d8d3c6" : "var(--color-line)";

  return (
    <div
      className={className}
      style={{
        background: "var(--color-paper-raised)",
        border: `1px solid ${border}`,
        borderRadius: 10,
        overflow: "hidden",
        boxShadow: isWire
          ? "none"
          : "0 1px 0 rgba(22,20,15,0.02), 0 24px 48px -32px rgba(22,20,15,0.28)",
      }}
    >
      {/* browser chrome */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          padding: "9px 12px",
          borderBottom: `1px solid ${border}`,
          background: isWire ? "#f1eee6" : "var(--color-paper)",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: isWire ? "#d2cdc0" : `${tint}55`,
            }}
          />
        ))}
        <span
          style={{
            marginLeft: 8,
            height: 8,
            flex: 1,
            maxWidth: 120,
            borderRadius: 4,
            background: softer,
          }}
        />
      </div>

      {/* page body */}
      <div style={{ padding: "16px 16px 20px" }}>
        {/* top nav row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 18,
          }}
        >
          <span
            style={{ width: 34, height: 8, borderRadius: 3, background: ink }}
          />
          <div style={{ display: "flex", gap: 6 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 16,
                  height: 5,
                  borderRadius: 3,
                  background: soft,
                }}
              />
            ))}
          </div>
        </div>

        {/* hero heading lines (left-aligned, editorial) */}
        <div style={{ display: "grid", gap: 7, marginBottom: 8 }}>
          <span
            style={{
              width: "82%",
              height: variant === "live" ? 16 : 13,
              borderRadius: 4,
              background: ink,
            }}
          />
          <span
            style={{
              width: "58%",
              height: variant === "live" ? 16 : 13,
              borderRadius: 4,
              background: variant === "wireframe" ? soft : ink,
            }}
          />
        </div>
        <span
          style={{
            display: "block",
            width: "40%",
            height: 6,
            borderRadius: 3,
            background: soft,
            marginBottom: 16,
          }}
        />

        {/* content row: a feature block + a column of lines */}
        <div style={{ display: "flex", gap: 12 }}>
          <div
            style={{
              flex: "0 0 46%",
              height: 60,
              borderRadius: 7,
              background:
                variant === "live"
                  ? `linear-gradient(135deg, ${tint}26, ${tint}0a)`
                  : soft,
              border: isWire ? `1px dashed ${border}` : "none",
            }}
          />
          <div style={{ flex: 1, display: "grid", gap: 7, alignContent: "start" }}>
            {[0.95, 0.8, 0.88, 0.55].map((w, i) => (
              <span
                key={i}
                style={{
                  width: `${w * 100}%`,
                  height: 6,
                  borderRadius: 3,
                  background: i === 3 ? ink : softer,
                }}
              />
            ))}
            <span
              style={{
                marginTop: 4,
                width: 52,
                height: 16,
                borderRadius: 5,
                background: variant === "wireframe" ? soft : ink,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
