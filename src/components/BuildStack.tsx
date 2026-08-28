"use client";

import { buildTrail, stackNames } from "@/data/content";
import { site } from "@/data/site";
import { useSite } from "./SiteProvider";

export function BuildStack() {
  const { t, copyEmail } = useSite();

  return (
    <section className="border-t border-line py-16 md:py-20">
      <div className="site-shell min-w-0">
        <p className="break-words font-mono text-[13px] tracking-[0.04em] text-ink md:text-[14px]">
          {buildTrail.join(" → ")}
        </p>
        <p className="mt-4 break-words font-mono text-[12px] tracking-[0.08em] text-muted">
          {stackNames.join(" · ")}
        </p>
        <p className="mt-6 text-[15px] leading-7 text-muted">{t.build.copy}</p>
        <button
          type="button"
          onClick={copyEmail}
          className="mt-5 flex min-h-11 items-center text-[14px] text-ink hover:text-accent"
        >
          {t.build.ask}
        </button>
        <p className="sr-only">{site.email}</p>
      </div>
    </section>
  );
}
