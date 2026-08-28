"use client";

import { audienceOrder, audienceRoutes } from "@/data/content";
import { site } from "@/data/site";
import { useSite } from "./SiteProvider";

export function AudiencePaths() {
  const { t } = useSite();

  return (
    <section
      aria-labelledby="audience-title"
      className="border-y border-line py-8 md:py-12"
    >
      <div className="site-shell">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <p id="audience-title" className="meta">
            {t.audience.label}
          </p>
          <p className="max-w-[42ch] text-[14px] leading-6 text-muted">
            {t.audience.hint}
          </p>
        </div>

        <div className="mt-6 grid min-w-0 grid-cols-1 divide-y divide-line border-y border-line md:mt-8 md:grid-cols-3 md:divide-x md:divide-y-0 md:border-x md:border-y">
          {audienceOrder.map((audience) => {
            const route = audienceRoutes[audience];
            const copy = t.audience.cards[audience];

            return (
              <article
                key={audience}
                data-testid="audience-card"
                className="flex min-h-0 flex-col justify-between gap-3 px-0 py-4 md:px-5 md:py-5"
              >
                <div className="flex items-baseline justify-between gap-4 md:block">
                  <h2 className="font-mono text-[12px] tracking-[0.14em] text-accent">
                    {copy.title}
                  </h2>
                  <p className="hidden text-[14px] leading-6 text-ink/80 md:mt-3 md:block">
                    {copy.description}
                  </p>
                  <a
                    href={route.href}
                    className="flex min-h-11 shrink-0 items-center text-[13px] text-ink hover:text-accent md:mt-6"
                  >
                    {copy.action}
                  </a>
                </div>
                {audience === "recruiter" && copy.secondaryAction ? (
                  <a
                    href={site.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 w-fit items-center text-[13px] text-accent"
                  >
                    {copy.secondaryAction}
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
