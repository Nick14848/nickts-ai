"use client";

import { useEffect, useRef } from "react";
import { paletteActions } from "@/data/content";
import { site } from "@/data/site";
import { useSite } from "./SiteProvider";

export function CommandPalette() {
  const {
    t,
    paletteOpen,
    setPaletteOpen,
    toggleLocale,
    copyEmail,
    emailCopied,
  } = useSite();
  const firstButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!paletteOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setPaletteOpen(false);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [paletteOpen, setPaletteOpen]);

  if (!paletteOpen) return null;

  function run(id: (typeof paletteActions)[number]["id"]) {
    const action = paletteActions.find((item) => item.id === id);
    if (!action) return;

    if (action.kind === "section") {
      document.getElementById(action.target)?.scrollIntoView({ behavior: "smooth" });
    }
    if (action.kind === "resume") {
      window.open(site.resumePath, "_blank", "noopener,noreferrer");
    }
    if (action.kind === "github") {
      window.open(site.githubUrl, "_blank", "noopener,noreferrer");
    }
    if (action.kind === "email") {
      void copyEmail();
    }
    if (action.kind === "language") {
      toggleLocale();
    }

    if (action.kind !== "email") {
      setPaletteOpen(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 pt-[18vh]"
      onClick={() => setPaletteOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="command-title"
        className="w-full max-w-lg border border-line bg-elevated"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-line px-5 py-4">
          <p id="command-title" className="meta">
            {t.palette.title}
          </p>
          <p className="mt-2 text-[13px] text-muted">{t.palette.hint}</p>
        </div>
        <ul>
          {paletteActions.map((action, index) => (
            <li key={action.id} className="border-b border-line last:border-b-0">
              <button
                ref={index === 0 ? firstButtonRef : undefined}
                type="button"
                onClick={() => run(action.id)}
                className="flex min-h-12 w-full items-center justify-between px-5 text-left text-[14px] text-ink hover:bg-white/[0.03]"
              >
                <span>
                  {action.id === "copy-email" && emailCopied
                    ? t.elsewhere.copied
                    : t.palette.actions[action.id]}
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] text-muted" aria-hidden="true">
                  {action.kind === "language" ? "EN / 中" : action.kind.toUpperCase()}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
