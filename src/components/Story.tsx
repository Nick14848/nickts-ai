"use client";

import Image from "next/image";
import { lifePhotos } from "@/data/content";
import { AccentTerms } from "./AccentTerms";
import { useSite } from "./SiteProvider";

const placeTerms = {
  en: ["Taiwan", "Shenzhen", "Hong Kong"],
  zh: ["台湾", "深圳", "香港"],
} as const;

export function Story() {
  const { t, locale } = useSite();
  const gallery = lifePhotos.filter((photo) => photo.id !== "bike");
  const terms = placeTerms[locale];

  return (
    <section id="story" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="site-shell site-grid">
        <div className="col-span-12 md:col-span-3">
          <p className="meta">{t.story.label}</p>
        </div>
        <div className="col-span-12 mt-8 md:col-span-6 md:mt-0">
          <h2 className="max-w-[12ch] text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-ink md:text-[56px]">
            {t.story.headline}
          </h2>
          <div className="mt-10 space-y-5 text-[16px] leading-7 text-ink/88">
            {t.story.paragraphs.map((paragraph, index) => (
              <p key={paragraph}>
                {index < 3 ? <AccentTerms text={paragraph} terms={terms} /> : paragraph}
              </p>
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

      <div
        data-testid="story-gallery"
        className="site-shell mt-16 grid grid-cols-1 gap-x-6 gap-y-10 md:mt-24 md:grid-cols-2 lg:grid-cols-3"
      >
        {gallery.map((photo) => {
          const copy = t.story.photos[photo.id];
          return (
            <figure key={photo.id} className="min-w-0">
              <div className="relative aspect-[4/3] overflow-hidden border border-line bg-elevated">
                <Image
                  src={photo.src}
                  alt={copy.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2"
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
