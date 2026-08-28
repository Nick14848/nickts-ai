"use client";

import type { ComponentType } from "react";
import type { solutionModules, SolutionVisual } from "@/data/content";
import {
  FeasibilityVisual,
  InvestmentWorkspaceVisual,
  MarketVisual,
  PrivateAiVisual,
} from "./project-visuals/Diagrams";
import { useSite } from "./SiteProvider";

const visuals = {
  workspace: InvestmentWorkspaceVisual,
  feasibility: FeasibilityVisual,
  privateAi: PrivateAiVisual,
  market: MarketVisual,
} satisfies Record<SolutionVisual, ComponentType>;

export function SolutionModule({
  solution,
}: {
  solution: (typeof solutionModules)[number];
}) {
  const { t } = useSite();
  const Visual = visuals[solution.visual];
  const copy = t.work.solutions[solution.id];

  return (
    <article
      data-testid="solution-module"
      className="min-w-0 border border-line bg-elevated"
    >
      <div className="p-5">
        <h4 className="text-[18px] font-medium tracking-[-0.02em] text-ink">
          {solution.name}
        </h4>
        <p className="mt-3 text-[14px] leading-6 text-muted">{copy.summary}</p>
        <ul className="mt-5 flex min-w-0 flex-wrap gap-x-3 gap-y-2" role="list">
          {solution.tags.map((tag) => (
            <li
              key={tag}
              className="meta max-w-full break-words whitespace-normal [overflow-wrap:anywhere]"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div
        aria-label={`${solution.name} diagram`}
        className="group min-w-0 max-w-full overflow-x-auto border-t border-line p-2"
        role="region"
        tabIndex={0}
      >
        <div className="min-w-[480px]">
          <Visual />
        </div>
      </div>
    </article>
  );
}
