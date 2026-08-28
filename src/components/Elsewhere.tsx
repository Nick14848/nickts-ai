"use client";

import { site } from "@/data/site";
import { useSite } from "./SiteProvider";

export function Elsewhere() {
  const { t, copyEmail, emailCopied } = useSite();

  const links = [
    { href: site.githubUrl, label: t.elsewhere.github, external: true },
    { href: site.REDNOTE_URL, label: t.elsewhere.rednote, external: true },
    { href: site.DOUYIN_URL, label: t.elsewhere.douyin, external: true },
  ];

  return (
    <section id="elsewhere" className="scroll-mt-20 border-t border-line py-20 md:py-28">
      <div className="site-shell">
        <p className="meta">{t.elsewhere.label}</p>
        <ul className="mt-12 space-y-4 md:space-y-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block min-h-11 max-w-full break-words text-[28px] font-medium tracking-[-0.04em] text-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-accent md:text-[56px] md:hover:translate-x-1"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={copyEmail}
              className="block min-h-11 w-full break-words text-left text-[28px] font-medium tracking-[-0.04em] text-ink hover:text-accent md:text-[56px]"
            >
              {emailCopied ? t.elsewhere.copied : t.elsewhere.email}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}
