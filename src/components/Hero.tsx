"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import { HeroSignal } from "./HeroSignal";
import { useSite } from "./SiteProvider";

function renderCredential(credential: string) {
  return credential.split(/(\bAI\b)/).map((part, index) => (
    <span
      key={`${part}-${index}`}
      className={part === "AI" ? "text-accent" : undefined}
    >
      {part}
    </span>
  ));
}

export function Hero() {
  const { t } = useSite();
  const [activePlace, setActivePlace] = useState<string | null>(null);
  const active = t.hero.places.find((place) => place.id === activePlace);
  const note = active?.note ?? t.hero.corridorHint;

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-5 md:pb-24 md:pt-8"
    >
      <HeroSignal />
      <div className="site-shell site-grid relative z-10 items-start md:items-stretch">
        <div className="col-span-12 flex min-w-0 flex-col justify-between md:col-span-7">
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              {t.hero.places.map((place, index) => (
                <span key={place.id} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span
                      className="font-mono text-[13px] text-muted"
                      aria-hidden="true"
                    >
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
                      "min-h-11 cursor-pointer text-left text-[20px] font-medium tracking-[0.08em] underline decoration-transparent underline-offset-[6px] transition-colors duration-300 hover:decoration-accent/70 md:text-[26px]",
                      activePlace === place.id
                        ? "text-accent decoration-accent"
                        : "text-ink hover:text-accent",
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

            <p className="mt-6 text-[32px] font-medium tracking-[-0.04em] text-ink md:mt-8 md:text-[44px]">
              {t.hero.given}
            </p>
            <p
              role="img"
              aria-label="NICK TSAI"
              className="hero-reveal mt-4 break-words text-[40px] font-medium leading-[0.92] tracking-[-0.05em] sm:text-[60px] md:text-[88px] lg:text-[104px]"
            >
              <span aria-hidden="true">
                NICK TS
                <span className="text-accent">AI</span>
              </span>
            </p>
            <h1 className="hero-reveal mt-10 max-w-[24ch] text-[28px] font-medium leading-[1.15] tracking-[-0.035em] text-ink md:mt-12 md:text-[38px]">
              {t.hero.homepage}
            </h1>
            <p className="hero-reveal mt-5 max-w-[34ch] text-[19px] leading-[1.4] tracking-[-0.02em] text-ink/85 md:text-[23px]">
              {t.hero.thesis}
            </p>
            <p className="hero-reveal mt-3 text-[17px] leading-[1.45] tracking-[-0.02em] text-accent md:text-[20px]">
              {t.hero.line3}
            </p>
            <ul
              role="list"
              className="hero-reveal mt-8 flex list-none flex-wrap items-center gap-x-3 gap-y-3 font-mono text-[12px] tracking-[0.08em] md:mt-9 md:text-[13px]"
            >
              {t.hero.credentials.map((credential, index) => (
                <li
                  key={credential}
                  className="inline-flex items-center gap-x-3"
                >
                  {index > 0 ? (
                    <span className="text-muted/55" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                  <span className="text-muted">
                    {renderCredential(credential)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 md:mt-14">
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] tracking-[0.14em]">
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
