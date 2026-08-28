"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/content";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";
import { useSite } from "./SiteProvider";

export function Navigation() {
  const { t, locale, toggleLocale } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setMenuOpen(false);
      }
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b backdrop-blur-md transition-colors duration-300",
        scrolled
          ? "border-accent/45 bg-[#22263a]/94 shadow-[0_12px_34px_rgb(0_0_0_/_0.24)]"
          : "border-line bg-nav/90",
      )}
    >
      <a
        href="#story"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-elevated focus:px-4 focus:py-2"
      >
        {t.nav.skip}
      </a>
      <div className="site-shell flex h-14 min-w-0 items-center justify-between gap-3 md:h-16 md:gap-4">
        <a href="#top" className="min-h-11 min-w-11 content-center">
          <Wordmark />
          <span className="sr-only">{site.domain}</span>
        </a>

        <nav className="hidden items-center gap-7 text-[13px] tracking-[0.08em] text-ink md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="min-h-11 content-center hover:text-accent"
            >
              {t.nav[item.id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 md:gap-10">
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
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center text-[12px] tracking-[0.12em] text-ink hover:text-accent"
          >
            {t.nav.resume}
          </a>

          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="flex min-h-11 items-center text-[13px] tracking-[0.08em] text-ink md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? t.nav.closeMenu : t.nav.menu}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-nav" className="border-t border-line md:hidden">
          <nav className="site-shell flex flex-col py-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="flex min-h-11 items-center text-[14px] tracking-[0.06em] text-ink"
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[item.id]}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
