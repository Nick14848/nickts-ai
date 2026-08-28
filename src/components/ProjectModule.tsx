"use client";

import type { projects } from "@/data/content";
import { site } from "@/data/site";
import {
  FeasibilityVisual,
  MarketVisual,
  NexusVisual,
  PrivateAiVisual,
} from "./project-visuals/Diagrams";
import { useSite } from "./SiteProvider";

const visuals = {
  nexus: NexusVisual,
  feasibility: FeasibilityVisual,
  privateAi: PrivateAiVisual,
  market: MarketVisual,
};

export function ProjectModule({
  project,
  compact = false,
}: {
  project: (typeof projects)[number];
  compact?: boolean;
}) {
  const { t } = useSite();
  const Visual = visuals[project.visual];
  const copy = t.work.projects[project.id];

  return (
    <article
      id={`project-${project.id}`}
      className={compact ? "border-t border-line py-10 md:py-14" : "border-t border-line py-14 md:py-20"}
    >
      <div className="site-shell site-grid">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono text-[42px] leading-none tracking-tight text-ink/20 md:text-[64px]">
            {project.index}
          </p>
        </div>
        <div className="col-span-12 mt-6 min-w-0 md:col-span-9 md:mt-0">
          <h3
            className={
              compact
                ? "break-words text-[22px] font-medium tracking-[-0.03em] md:text-[28px]"
                : "break-words text-[26px] font-medium tracking-[-0.03em] md:text-[40px]"
            }
          >
            {project.name}
          </h3>
          <p className="mt-5 max-w-2xl text-[16px] leading-7 text-muted">
            {copy.summary}
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
            {copy.details}
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {project.tags.map((tag) => (
              <li key={tag} className="meta">
                {tag}
              </li>
            ))}
          </ul>
          {project.demo && copy.demo ? (
            <a
              href={site.nexusDemoHref}
              className="mt-6 inline-flex min-h-11 items-center border border-accent px-4 text-[12px] tracking-[0.12em] text-accent hover:bg-accent/10"
            >
              {copy.demo}
            </a>
          ) : null}
          <div className="group mt-8 overflow-hidden border border-line bg-elevated p-3 md:p-5">
            <Visual />
          </div>
        </div>
      </div>
    </article>
  );
}
