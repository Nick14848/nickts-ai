"use client";

import { navItems } from "@/data/content";
import { Wordmark } from "./Wordmark";
import { useSite } from "./SiteProvider";

export function Navigation() {
  const { t, locale, toggleLocale } = useSite();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/88 backdrop-blur-md">
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-elevated focus:px-4 focus:py-2"
      >
        {t.nav.skip}
      </a>
      <div className="site-shell flex h-14 min-w-0 items-center justify-between gap-3 md:h-16 md:gap-4">
        <a href="#top" className="min-h-11 min-w-11 content-center">
          <Wordmark />
          <span className="sr-only">nickts.ai</span>
        </a>

        <nav className="hidden items-center gap-7 text-[13px] tracking-[0.08em] text-muted md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="min-h-11 content-center hover:text-ink"
            >
              {t.nav[item.id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6 md:gap-10">
          <details className="relative md:hidden">
            <summary className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center text-[13px] tracking-[0.08em] text-muted [&::-webkit-details-marker]:hidden">
              {t.nav.menu}
            </summary>
            <div className="absolute right-0 top-full z-50 mt-2 w-44 border border-line bg-elevated p-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="block min-h-11 px-3 py-3 text-[13px] tracking-[0.08em] text-ink"
                >
                  {t.nav[item.id]}
                </a>
              ))}
            </div>
          </details>

          <button
            type="button"
            onClick={toggleLocale}
            aria-label="Switch language"
            className="relative z-10 flex min-h-11 cursor-pointer items-center justify-center gap-1 text-[12px] tracking-[0.12em]"
          >
            <span className={locale === "en" ? "text-ink" : "text-muted"}>EN</span>
            <span className="text-muted">/</span>
            <span className={locale === "zh" ? "text-ink" : "text-muted"}>中</span>
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center text-[12px] tracking-[0.12em] text-muted hover:text-ink"
          >
            {t.nav.resume}
          </a>
        </div>
      </div>
    </header>
  );
}
