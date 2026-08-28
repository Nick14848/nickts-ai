export function HeroSignal() {
  return (
    <div className="hero-signal" aria-hidden="true">
      <svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          className="hero-signal-path"
          d="M0 525 C180 525 210 365 390 365 S630 470 790 300 S1010 215 1200 130"
        />
      </svg>
      <span className="hero-signal-anchor hero-signal-node" />
      <span className="hero-signal-anchor hero-signal-node" />
    </div>
  );
}
