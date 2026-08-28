"use client";

import { projectEntries, solutionModules } from "@/data/content";
import { InquiryForm } from "./InquiryForm";
import { useSite } from "./SiteProvider";
import { SolutionModule } from "./SolutionModule";

export function SelectedWork() {
  const { t } = useSite();
  const deepPivotEntry = projectEntries[0];
  const deepPivot = t.work[deepPivotEntry.copyKey];
  const serviceEntry = projectEntries[1];
  const service = t.work[serviceEntry.copyKey];

  return (
    <section id="work" className="scroll-mt-20">
      <div className="site-shell site-grid pt-20 md:pt-28">
        <div className="col-span-12 md:col-span-3">
          <p className="meta">{t.work.label}</p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="max-w-[12ch] text-[40px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[64px]">
            {t.work.headline}
          </h2>
        </div>
      </div>
      <article
        data-testid="project-entry"
        id={deepPivotEntry.id}
        className="border-t border-line py-16 md:py-24"
      >
        <div className="site-shell site-grid">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[42px] leading-none text-ink/25 md:text-[64px]">
              {deepPivotEntry.index}
            </p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
              <span className="status-dot size-1.5 bg-accent" aria-hidden="true" />
              {deepPivot.status}
            </p>
          </div>
          <div className="col-span-12 mt-7 min-w-0 md:col-span-9 md:mt-0">
            <h3 className="break-words text-[34px] font-medium tracking-[-0.04em] text-ink md:text-[52px]">
              {deepPivot.title}
            </h3>
            <p className="mt-3 break-words text-[18px] text-accent md:text-[21px]">
              {deepPivot.descriptor}
            </p>
            <p className="mt-6 max-w-3xl text-[16px] leading-8 text-muted">
              {deepPivot.summary}
            </p>
            <div className="mt-8">
              <p className="meta">{deepPivot.audience}</p>
              <ul
                aria-label={deepPivot.audience}
                className="mt-3 flex min-w-0 flex-wrap gap-2"
                role="list"
              >
                {deepPivot.audienceList.map((item) => (
                  <li
                    key={item}
                    className="max-w-full break-words border border-line px-3 py-2 font-mono text-[11px] tracking-[0.1em] text-ink/80 [overflow-wrap:anywhere]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="meta mt-12">{t.work.solutionsLabel}</p>
            <div className="mt-4 grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-2">
              {solutionModules.map((solution) => (
                <SolutionModule key={solution.id} solution={solution} />
              ))}
            </div>
          </div>
        </div>
      </article>
      <article
        data-testid="project-entry"
        id={serviceEntry.id}
        className="border-t border-line py-16 md:py-24"
      >
        <div className="site-shell site-grid">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono text-[42px] leading-none text-ink/25 md:text-[64px]">
              {serviceEntry.index}
            </p>
            <p className="mt-5 font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
              {service.status}
            </p>
          </div>
          <div className="col-span-12 mt-7 min-w-0 md:col-span-9 md:mt-0">
            <h3 className="break-words text-[30px] font-medium tracking-[-0.04em] text-ink md:text-[46px]">
              {service.title}
            </h3>
            <p className="mt-6 max-w-3xl text-[16px] leading-8 text-muted">
              {service.summary}
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="flex min-w-0 gap-3 border-t border-line pt-4 text-[14px] leading-6 text-ink/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 bg-accent"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 border border-line bg-elevated p-5 md:p-8">
              <h4 className="text-[22px] font-medium tracking-[-0.02em] text-ink">
                {service.inquiry.heading}
              </h4>
              <InquiryForm />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
