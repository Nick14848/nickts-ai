"use client";

import { AccentText } from "./AccentText";
import { useSite } from "./SiteProvider";

export function Community() {
  const { t } = useSite();

  return (
    <section id="community" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="site-shell site-grid gap-y-12">
        <article className="col-span-12 md:col-span-6">
          <p className="meta">{t.community.dsaRole}</p>
          <h3 className="mt-4 max-w-[16ch] text-[24px] font-medium tracking-[-0.03em] md:text-[32px]">
            {t.community.dsaTitle}
          </h3>
          <p className="mt-5 max-w-md text-[16px] leading-7 text-muted">
            <AccentText text={t.community.dsaCopy} />
          </p>
        </article>
        <article className="col-span-12 md:col-span-6">
          <p className="meta">{t.community.creatorTitle}</p>
          <h3 className="mt-4 text-[24px] font-medium tracking-[-0.03em] md:text-[32px]">
            <AccentText text={t.community.creatorCopy} />
          </h3>
          <p className="meta mt-6">{t.community.topics}</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[14px] text-muted">
            {t.community.topicList.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
