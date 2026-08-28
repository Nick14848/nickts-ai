"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { site, type Lens, type Locale } from "@/data/site";
import { dictionaries, type Dictionary } from "@/data/translations";
import {
  getLensSnapshot,
  getLocaleSnapshot,
  storeLens,
  storeLocale,
} from "@/lib/preferences";

type SiteContextValue = {
  locale: Locale;
  lens: Lens;
  t: Dictionary;
  paletteOpen: boolean;
  emailCopied: boolean;
  setLocale: (locale: Locale) => void;
  setLens: (lens: Lens) => void;
  toggleLocale: () => void;
  setPaletteOpen: (open: boolean) => void;
  copyEmail: () => Promise<void>;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [lens, setLensState] = useState<Lens>("recruiter");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setLocaleState(getLocaleSnapshot());
      setLensState(getLensSnapshot());
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    storeLocale(next);
  }, []);

  const setLens = useCallback((next: Lens) => {
    setLensState(next);
    storeLens(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next = current === "en" ? "zh" : "en";
      storeLocale(next);
      return next;
    });
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(site.email);
    } catch {
      const field = document.createElement("textarea");
      field.value = site.email;
      field.setAttribute("readonly", "");
      field.style.position = "fixed";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }

    setEmailCopied(true);
    window.setTimeout(() => setEmailCopied(false), 1600);
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({
      locale,
      lens,
      t: dictionaries[locale],
      paletteOpen,
      emailCopied,
      setLocale,
      setLens,
      toggleLocale,
      setPaletteOpen,
      copyEmail,
    }),
    [
      locale,
      lens,
      paletteOpen,
      emailCopied,
      setLocale,
      setLens,
      toggleLocale,
      copyEmail,
    ],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return context;
}
