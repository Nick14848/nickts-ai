"use client";

import { audienceOrder, audienceRoutes } from "@/data/content";
import { site } from "@/data/site";
import { useSite } from "./SiteProvider";

export function AudiencePaths() {
  const { t } = useSite();

  return (
    <section
      aria-labelledby="audience-title"
      className="border-y border-line py-14 md:py-20"
    >
      <div className="site-shell site-grid">
        <div className="col-span-12 md:col-span-3">
          <p id="audience-title" className="meta">
            {t.audience.label}
          </p>
          <p className="mt-4 max-w-[32ch] text-[16px] leading-7 text-ink/80">
            {t.audience.hint}
          </p>
        </div>

        <div className="col-span-12 mt-8 grid min-w-0 gap-3 md:col-span-9 md:mt-0 md:grid-cols-3">
          {audienceOrder.map((audience) => {
            const route = audienceRoutes[audience];
            const copy = t.audience.cards[audience];

            return (
              <article
                key={audience}
                data-testid="audience-card"
                className="flex min-h-56 flex-col border border-line bg-elevated p-5 transition-colors hover:border-accent/70"
              >
                <h2 className="font-mono text-[12px] tracking-[0.14em] text-accent">
                  {copy.title}
                </h2>
                <p className="mt-5 flex-1 text-[15px] leading-7 text-ink/85">
                  {copy.description}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <a
                    href={route.href}
                    className="flex min-h-11 items-center text-[13px] text-ink hover:text-accent"
                  >
                    {copy.action}
                  </a>
                  {audience === "recruiter" && copy.secondaryAction ? (
                    <a
                      href={site.resumePath}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-11 items-center text-[13px] text-accent"
                    >
                      {copy.secondaryAction}
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
