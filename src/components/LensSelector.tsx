"use client";

import { lensOrder, lensStarts } from "@/data/content";
import { cn } from "@/lib/utils";
import { AccentText } from "./AccentText";
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
                <button
                  key={value}
                  type="button"
                  role="tab"
                  aria-label={t.lens[value]}
                  aria-selected={selected}
                  onClick={() => setLens(value)}
                  className={cn(
                    "relative z-10 min-h-[8.75rem] cursor-pointer border px-4 py-4 text-left transition-colors duration-300 sm:min-h-[10.5rem]",
                    selected
                      ? "border-accent bg-accent/10"
                      : "border-line text-muted hover:border-ink/30 hover:text-ink",
                  )}
                >
                  <span
                    className={cn(
                      "block font-mono text-[11px] tracking-[0.16em]",
                      selected ? "text-accent" : "text-muted",
                    )}
                  >
                    {t.lens[value]}
                  </span>
                  <span className="mt-3 block text-[14px] leading-6 text-ink">
                    {t.lens.briefs[value]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
            <ul className="grid min-w-0 flex-1 grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-5">
              {t.lens.cues[lens].map((cue) => (
                <li key={`${lens}-${cue.label}-${cue.href}`}>
                  <a
                    href={cue.href}
                    data-testid="lens-snapshot-item"
                    className="block border-t border-line pt-3 font-mono text-[12px] tracking-[0.08em] text-ink hover:text-accent"
                  >
                    <span className="mb-2 block size-1 bg-accent" />
                    <AccentText text={cue.label} />
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={lensStarts[lens]}
              className="flex min-h-11 shrink-0 items-center text-[13px] tracking-[0.08em] text-accent"
            >
              {t.lens.start} {t.lens.destinations[lens]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
