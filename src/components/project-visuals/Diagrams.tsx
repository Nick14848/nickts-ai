const stroke = "rgba(255,255,255,0.18)";
const ink = "#F3F4F6";
const muted = "#8B8D93";
const accent = "#477AFF";

function Frame({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <svg
      viewBox="0 0 640 280"
      role="img"
      aria-label={label}
      className="diagram h-auto w-full overflow-visible"
    >
      <rect width="640" height="280" fill="#111113" />
      <rect
        x="0.5"
        y="0.5"
        width="639"
        height="279"
        fill="none"
        stroke={stroke}
      />
      {children}
    </svg>
  );
}

export function InvestmentWorkspaceVisual() {
  return (
    <Frame label="Abstract system diagram of an investment workspace">
      <line x1="150" y1="88" x2="320" y2="140" stroke={stroke} />
      <line x1="150" y1="192" x2="320" y2="140" stroke={stroke} />
      <line x1="320" y1="140" x2="500" y2="88" stroke={stroke} />
      <line x1="320" y1="140" x2="500" y2="192" stroke={stroke} />
      <rect x="48" y="64" width="140" height="48" fill="none" stroke={stroke} />
      <rect x="48" y="168" width="140" height="48" fill="none" stroke={stroke} />
      <rect x="250" y="116" width="140" height="48" fill="none" stroke={accent} />
      <rect x="452" y="64" width="140" height="48" fill="none" stroke={stroke} />
      <rect x="452" y="168" width="140" height="48" fill="none" stroke={stroke} />
      <text x="70" y="92" fill={muted} fontSize="13" fontFamily="ui-monospace, monospace">
        DEAL DATA
      </text>
      <text x="70" y="196" fill={muted} fontSize="13" fontFamily="ui-monospace, monospace">
        WORKFLOW
      </text>
      <text x="320" y="145" textAnchor="middle" fill={ink} fontSize="13" fontFamily="ui-monospace, monospace">
        WORKSPACE
      </text>
      <text x="492" y="92" fill={muted} fontSize="13" fontFamily="ui-monospace, monospace">
        AI TOOLS
      </text>
      <text x="486" y="196" fill={muted} fontSize="13" fontFamily="ui-monospace, monospace">
        TEAM VIEW
      </text>
      <circle cx="390" cy="116" r="3" fill={accent} />
    </Frame>
  );
}

export function FeasibilityVisual() {
  return (
    <Frame label="Abstract human-in-the-loop screening workflow">
      {["TEASER", "EXTRACT", "EVIDENCE", "GATE", "SCORE"].map((label, index) => {
        const x = 36 + index * 120;
        return (
          <g key={label}>
            {index < 4 ? (
              <line
                x1={x + 88}
                y1="140"
                x2={x + 120}
                y2="140"
                stroke={index === 3 ? accent : stroke}
              />
            ) : null}
            <rect
              x={x}
              y="108"
              width="88"
              height="64"
              fill="none"
              stroke={index === 3 ? accent : stroke}
            />
            <text
              x={x + 44}
              y="144"
              textAnchor="middle"
              fill={index === 3 ? ink : muted}
              fontSize="13"
              fontFamily="ui-monospace, monospace"
            >
              {label}
            </text>
          </g>
        );
      })}
      <text x="396" y="92" fill={accent} fontSize="13" fontFamily="ui-monospace, monospace">
        HUMAN
      </text>
    </Frame>
  );
}

export function PrivateAiVisual() {
  return (
    <Frame label="Abstract private inference stack diagram">
      {[
        { y: 40, label: "WORKFLOW SYSTEMS" },
        { y: 92, label: "vLLM SERVING" },
        { y: 144, label: "QWEN" },
        { y: 196, label: "DGX SPARK" },
      ].map((layer, index) => (
        <g key={layer.label}>
          <rect
            x="120"
            y={layer.y}
            width="400"
            height="40"
            fill="none"
            stroke={index === 1 ? accent : stroke}
          />
          <text
            x="320"
            y={layer.y + 25}
            textAnchor="middle"
            fill={index === 1 ? ink : muted}
            fontSize="13"
            fontFamily="ui-monospace, monospace"
          >
            {layer.label}
          </text>
        </g>
      ))}
    </Frame>
  );
}

export function MarketVisual() {
  return (
    <Frame label="Abstract market intelligence pipeline diagram">
      <rect x="40" y="88" width="120" height="48" fill="none" stroke={stroke} />
      <rect x="40" y="156" width="120" height="48" fill="none" stroke={stroke} />
      <rect x="240" y="122" width="160" height="48" fill="none" stroke={accent} />
      <rect x="480" y="122" width="120" height="48" fill="none" stroke={stroke} />
      <line x1="160" y1="112" x2="240" y2="146" stroke={stroke} />
      <line x1="160" y1="180" x2="240" y2="146" stroke={stroke} />
      <line x1="400" y1="146" x2="480" y2="146" stroke={accent} />
      <text x="62" y="116" fill={muted} fontSize="13" fontFamily="ui-monospace, monospace">
        BLOOMBERG
      </text>
      <text x="78" y="184" fill={muted} fontSize="13" fontFamily="ui-monospace, monospace">
        NEWS
      </text>
      <text x="278" y="150" fill={ink} fontSize="13" fontFamily="ui-monospace, monospace">
        PIPELINE
      </text>
      <text x="514" y="150" fill={muted} fontSize="13" fontFamily="ui-monospace, monospace">
        BRIEF
      </text>
    </Frame>
  );
}
