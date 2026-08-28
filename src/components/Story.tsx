"use client";

import Image from "next/image";
import { lifePhotos } from "@/data/content";
import { cn } from "@/lib/utils";
import { useSite } from "./SiteProvider";

const frameClass = {
  wide: "aspect-[16/10]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
} as const;

export function Story() {
  const { t } = useSite();
  const gallery = lifePhotos.filter((photo) => photo.id !== "bike");

  return (
    <section id="story" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="site-shell site-grid">
        <div className="col-span-12 md:col-span-3">
          <p className="meta">{t.story.label}</p>
        </div>
        <div className="col-span-12 mt-8 md:col-span-6 md:mt-0">
          <h2 className="max-w-[12ch] text-[40px] font-medium leading-[1.02] tracking-[-0.04em] md:text-[56px]">
            {t.story.headline}
          </h2>
          <div className="mt-10 space-y-5 text-[16px] leading-7 text-muted">
            {t.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="col-span-12 mt-12 space-y-8 border-t border-line pt-8 md:col-span-3 md:mt-0 md:border-l md:border-t-0 md:pl-8 md:pt-2">
          <div>
            <p className="meta">{t.story.rail.school}</p>
            <p className="mt-2 text-[14px] leading-6 text-ink">{t.story.rail.degree}</p>
          </div>
          <div>
            <p className="meta">{t.story.rail.cfa}</p>
            <p className="mt-2 text-[14px] text-ink">{t.story.rail.cfaStatus}</p>
          </div>
          <div>
            <p className="meta">{t.story.rail.languages}</p>
            <ul className="mt-2 space-y-1 text-[14px] text-ink">
              {t.story.rail.languageList.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <div className="site-shell mt-16 grid grid-cols-1 gap-x-8 gap-y-12 md:mt-24 md:grid-cols-2">
        {gallery.map((photo) => {
          const copy = t.story.photos[photo.id];
          return (
            <figure key={photo.id} className="min-w-0">
              <div
                className={cn(
                  "relative overflow-hidden border border-line bg-elevated",
                  frameClass[photo.frame],
                )}
              >
                <Image
                  src={photo.src}
                  alt={copy.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4">
                <p className="text-[16px] tracking-[-0.02em] text-ink">{copy.title}</p>
                {copy.caption ? (
                  <p className="mt-2 text-[14px] leading-6 text-muted">{copy.caption}</p>
                ) : null}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
