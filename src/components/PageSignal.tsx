"use client";

import { useEffect, useRef } from "react";

export function PageSignal() {
  const pathRef = useRef<SVGPathElement>(null);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    function update() {
      const path = pathRef.current;
      const node = nodeRef.current;
      const root = rootRef.current;
      if (!path || !node || !root) return;

      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        max <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / max));
      const travel = reduced.matches ? 0.08 : progress;
      const point = path.getPointAtLength(travel * path.getTotalLength());

      node.style.left = `${point.x}%`;
      node.style.top = `${point.y}%`;
      root.style.setProperty("--signal-level", progress.toFixed(3));
    }

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    reduced.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  return (
    <div ref={rootRef} className="page-signal" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" focusable="false">
        <path
          ref={pathRef}
          className="page-signal-path"
          d="M50 0 C 72 16, 28 30, 54 48 S 30 66, 58 82 S 40 92, 50 100"
        />
      </svg>
      <span ref={nodeRef} className="page-signal-node" />
    </div>
  );
}
