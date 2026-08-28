"use client";

import { projects, workChapters } from "@/data/content";
import { InquiryForm } from "./InquiryForm";
import { ProjectModule } from "./ProjectModule";
import { useSite } from "./SiteProvider";

export function SelectedWork() {
  const { t } = useSite();

  return (
    <section id="work" className="scroll-mt-20">
      <div className="site-shell site-grid pt-20 md:pt-28">
        <div className="col-span-12 md:col-span-3">
          <p className="meta">{t.work.label}</p>
        </div>
        <div className="col-span-12 md:col-span-9">
          <h2 className="max-w-[12ch] text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-ink md:text-[64px]">
            {t.work.headline}
          </h2>
        </div>
      </div>

      {workChapters.map((chapter) => {
        const copy = t.work.chapters[chapter.id];
        const demos = projects.filter((project) =>
          (chapter.demoIds as readonly string[]).includes(project.id),
        );

        return (
          <article
            key={chapter.id}
            id={chapter.id}
            className="border-t border-line py-16 md:py-24"
          >
            <div className="site-shell site-grid">
              <div className="col-span-12 md:col-span-3">
                <p className="font-mono text-[42px] leading-none tracking-tight text-ink/25 md:text-[64px]">
                  {chapter.index}
                </p>
              </div>
              <div className="col-span-12 mt-6 min-w-0 md:col-span-9 md:mt-0">
                <p className="meta text-accent">{copy.tagline}</p>
                <h3 className="mt-3 break-words text-[28px] font-medium tracking-[-0.03em] text-ink md:text-[44px]">
                  {copy.name}
                </h3>
                <p className="mt-5 max-w-2xl text-[16px] leading-7 text-muted">
                  {copy.summary}
                </p>
                <p className="mt-4 max-w-2xl text-[15px] leading-7 text-muted">
                  {copy.details}
                </p>
                {chapter.id === "custom-ai" ? <InquiryForm /> : null}
              </div>
            </div>
            {demos.length ? (
              <div className="mt-6">
                {copy.solutions ? (
                  <div className="site-shell">
                    <p className="meta">{copy.solutions}</p>
                  </div>
                ) : null}
                {demos.map((project) => (
                  <ProjectModule key={project.id} project={project} compact />
                ))}
              </div>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}
