"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { useSite } from "./SiteProvider";

export function Hero() {
  const { t } = useSite();
  const [activePlace, setActivePlace] = useState<string | null>(null);
  const active = t.hero.places.find((place) => place.id === activePlace);
  const note = active?.note ?? t.hero.corridorHint;

  return (
    <section id="top" className="pb-16 pt-5 md:pb-24 md:pt-8">
      <div className="site-shell site-grid items-start md:items-stretch">
        <div className="col-span-12 flex min-w-0 flex-col justify-between md:col-span-7">
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {t.hero.places.map((place, index) => (
                <span key={place.id} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span className="meta" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                  <button
                    type="button"
                    aria-expanded={activePlace === place.id}
                    aria-controls="place-note"
                    onMouseEnter={() => setActivePlace(place.id)}
                    onMouseLeave={() => setActivePlace(null)}
                    onFocus={() => setActivePlace(place.id)}
                    onBlur={() => setActivePlace(null)}
                    onClick={() => {
                      if (window.matchMedia("(hover: hover)").matches) return;
                      setActivePlace((current) =>
                        current === place.id ? null : place.id,
                      );
                    }}
                    className={cn(
                      "meta min-h-11 cursor-pointer text-left transition-colors duration-300",
                      activePlace === place.id ? "text-ink" : "hover:text-ink",
                    )}
                  >
                    {place.name}
                  </button>
                </span>
              ))}
            </div>
            <p
              id="place-note"
              className={cn(
                "mt-3 min-h-[1.5rem] text-[13px] leading-6 md:text-[14px]",
                active ? "text-accent" : "text-muted",
              )}
            >
              {note}
            </p>

            <p className="meta mt-8 md:mt-10">{t.hero.given}</p>
            <p className="hero-reveal mt-3 break-words text-[40px] font-medium leading-[0.92] tracking-[-0.05em] sm:text-[60px] md:text-[88px] lg:text-[104px]">
              NICK TS
              <span className="text-accent">AI</span>
            </p>
            <h1 className="hero-reveal mt-10 max-w-[18ch] text-[32px] font-medium leading-[1.12] tracking-[-0.04em] text-ink md:mt-12 md:text-[44px]">
              {t.hero.line1}
              <span className="mt-4 block text-[20px] font-normal tracking-[-0.02em] text-muted md:text-[24px]">
                {t.hero.line2}
              </span>
              <span className="mt-4 block text-[17px] font-normal tracking-[-0.02em] text-accent md:text-[20px]">
                {t.hero.line3}
              </span>
            </h1>
          </div>

          <div className="mt-10 md:mt-14">
            <p className="max-w-xl text-[16px] leading-8 text-muted md:text-[17px]">
              {t.hero.subline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] tracking-[0.14em] md:mt-10">
              <a href="#story" className="flex min-h-11 items-center text-accent">
                {t.hero.explore}
              </a>
              <a
                href={site.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center text-muted hover:text-ink"
              >
                {t.hero.resume}
              </a>
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center text-muted hover:text-ink"
              >
                {t.hero.github}
              </a>
            </div>
          </div>
        </div>

        <div className="col-span-12 mt-12 min-w-0 md:col-span-5 md:mt-0">
          <figure className="relative aspect-[3/4] h-full min-h-[420px] overflow-hidden border border-line bg-elevated md:aspect-auto md:min-h-full">
            <Image
              src="/life/bike.jpg"
              alt={t.hero.bikeAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
