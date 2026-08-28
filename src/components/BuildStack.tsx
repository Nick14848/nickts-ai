"use client";

import { buildTrail, stackNames } from "@/data/content";
import { site } from "@/data/site";
import { useSite } from "./SiteProvider";

export function BuildStack() {
  const { t } = useSite();

  return (
    <section className="border-t border-line py-16 md:py-20">
      <div className="site-shell min-w-0">
        <h2 className="max-w-[18ch] text-[28px] font-medium tracking-[-0.03em] text-ink md:text-[40px]">
          {t.build.heading}
        </h2>
        <p className="mt-8 break-words font-mono text-[13px] tracking-[0.04em] text-ink md:text-[14px]">
          {buildTrail.join(" → ")} → {site.domain}
        </p>
        <p className="mt-4 break-words font-mono text-[12px] tracking-[0.08em] text-muted">
          {stackNames.join(" · ")}
        </p>
        <p className="mt-6 text-[15px] leading-7 text-muted">{t.build.copy}</p>
        <a
          href="#ai-services"
          className="mt-5 inline-flex min-h-11 items-center text-[14px] text-accent hover:text-ink"
        >
          {t.build.action}
        </a>
      </div>
    </section>
  );
}
