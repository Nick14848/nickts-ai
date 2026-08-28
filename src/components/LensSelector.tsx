"use client";

import { lensOrder } from "@/data/content";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { useSite } from "./SiteProvider";

export function LensSelector() {
  const { t, lens, setLens } = useSite();

  return (
    <section
      aria-label={t.lens.label}
      className="relative z-10 border-y border-line py-14 md:py-20"
    >
      <div className="site-shell site-grid">
        <div className="col-span-12 md:col-span-3">
          <p className="meta">{t.lens.label}</p>
          <p className="mt-4 max-w-[36ch] text-[15px] leading-7 text-muted">
            {t.lens.hint}
          </p>
        </div>
        <div className="col-span-12 mt-8 min-w-0 md:col-span-9 md:mt-0">
          <div
            role="tablist"
            aria-label={t.lens.label}
            className="grid grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {lensOrder.map((value) => {
              const selected = lens === value;
              return (
                <div
                  key={value}
                  role="tab"
                  tabIndex={0}
                  aria-label={t.lens[value]}
                  aria-selected={selected}
                  onClick={() => setLens(value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setLens(value);
                    }
                  }}
                  className={cn(
                    "relative z-10 min-h-[9rem] cursor-pointer border px-4 py-4 text-left transition-colors duration-300",
                    selected
                      ? "border-accent bg-accent/15 text-ink"
                      : "border-white/20 text-muted hover:border-accent/70 hover:bg-accent/10 hover:text-ink",
                  )}
                >
                  <span
                    className={cn(
                      "block font-mono text-[12px] tracking-[0.16em]",
                      selected ? "text-accent" : "text-ink/80",
                    )}
                  >
                    {t.lens[value]}
                  </span>
                  <span className="mt-3 block text-[14px] leading-6 text-ink">
                    {t.lens.briefs[value]}
                    {value === "recruiter" ? (
                      <a
                        href={site.resumePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(event) => event.stopPropagation()}
                        className="text-accent underline decoration-accent underline-offset-4 hover:decoration-white"
                      >
                        {t.lens.resumeCta}
                      </a>
                    ) : null}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {t.lens.actions[lens].map((action) => {
              const href = action.href === "resume" ? site.resumePath : action.href;
              const external = action.href === "resume";
              return (
                <a
                  key={`${lens}-${action.label}`}
                  href={href}
                  data-testid="lens-snapshot-item"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="inline-flex min-h-11 cursor-pointer items-center bg-accent px-5 text-[12px] tracking-[0.14em] text-white hover:bg-accent/85"
                >
                  {action.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
