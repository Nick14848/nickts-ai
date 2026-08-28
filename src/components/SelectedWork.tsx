"use client";

import { projects } from "@/data/content";
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
          <h2 className="max-w-[12ch] text-[40px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[64px]">
            {t.work.headline}
          </h2>
        </div>
      </div>
      {projects.map((project) => (
        <ProjectModule key={project.id} project={project} />
      ))}
    </section>
  );
}
