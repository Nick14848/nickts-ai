"use client";

import { site } from "@/data/site";
import { Wordmark } from "./Wordmark";
import { useSite } from "./SiteProvider";

export function Footer() {
  const { t } = useSite();

  return (
    <footer className="border-t border-line py-12 md:py-16">
      <div className="site-shell flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div>
          <Wordmark size="lg" />
          <p className="meta mt-4">{site.identity}</p>
          <p className="meta mt-2">{site.location}</p>
        </div>
        <div className="max-w-xl space-y-3 text-[13px] leading-6 text-muted md:text-right">
          <p className="flex items-center gap-3 text-ink md:justify-end">
            <span className="status-dot size-1.5 bg-accent" aria-hidden="true" />
            <span>{t.footer.built}</span>
          </p>
          <p>{t.footer.copyright}</p>
          <p>{t.footer.notice}</p>
        </div>
      </div>
    </footer>
  );
}
