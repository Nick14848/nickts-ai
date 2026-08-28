"use client";

import { experiences } from "@/data/content";
import { useSite } from "./SiteProvider";

export function Experience() {
  const { t } = useSite();

  return (
    <section id="experience" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <p className="meta">{t.experience.label}</p>
        <div className="mt-12 space-y-16 md:space-y-24">
          {experiences.map((item) => {
            const copy = t.experience.items[item.id];
            return (
              <article key={item.id} className="site-grid">
                <div className="col-span-12 md:col-span-3">
                  <p className="font-mono text-[28px] leading-none tracking-tight text-ink md:text-[40px]">
                    {copy.dates}
                  </p>
                  <p className="meta mt-4">{copy.location}</p>
                </div>
                <div className="col-span-12 mt-6 min-w-0 md:col-span-9 md:mt-0">
                  <h3 className="break-words text-[22px] font-medium tracking-[-0.02em] md:text-[28px]">
                    {item.organization}
                  </h3>
                  <p className="mt-3 whitespace-pre-line text-[15px] leading-6 text-muted">
                    {copy.role}
                  </p>
                  <p className="mt-5 max-w-2xl text-[16px] leading-7 text-ink/90">
                    {copy.summary}
                  </p>
                  <ul className="mt-6 max-w-2xl space-y-3 text-[15px] leading-6 text-muted">
                    {copy.points.map((point) => (
                      <li key={point} className="grid grid-cols-[12px_1fr] gap-3">
                        <span className="mt-2 size-1 bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
