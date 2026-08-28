import { STORAGE_KEYS, type Lens, type Locale } from "@/data/site";

const localeListeners = new Set<() => void>();
const lensListeners = new Set<() => void>();

let localeMemory: Locale | null = null;
let lensMemory: Lens | null = null;

export function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "zh";
}

export function isLens(value: string | null): value is Lens {
  return value === "recruiter" || value === "builder" || value === "creator";
}

function readStorage(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // WeChat / private mode can block storage. Memory still works.
  }
}

export function readStoredLocale(): Locale | null {
  const value = readStorage(STORAGE_KEYS.locale);
  return isLocale(value) ? value : null;
}

export function storeLocale(locale: Locale): void {
  localeMemory = locale;
  writeStorage(STORAGE_KEYS.locale, locale);
  localeListeners.forEach((listener) => listener());
}

export function readStoredLens(): Lens | null {
  const value = readStorage(STORAGE_KEYS.lens);
  return isLens(value) ? value : null;
}

export function storeLens(lens: Lens): void {
  lensMemory = lens;
  writeStorage(STORAGE_KEYS.lens, lens);
  lensListeners.forEach((listener) => listener());
}

export function detectBrowserLocale(
  languages: readonly string[] = typeof navigator === "undefined"
    ? []
    : navigator.languages ?? [],
): Locale {
  const match = languages.find((entry) => entry.toLowerCase().startsWith("zh"));
  return match ? "zh" : "en";
}

export function resolveInitialLocale(
  stored: Locale | null,
  languages: readonly string[],
): Locale {
  return stored ?? detectBrowserLocale(languages);
}

export function resolveInitialLens(stored: Lens | null): Lens {
  return stored ?? "recruiter";
}

export function subscribeLocale(listener: () => void) {
  localeListeners.add(listener);
  return () => {
    localeListeners.delete(listener);
  };
}

export function subscribeLens(listener: () => void) {
  lensListeners.add(listener);
  return () => {
    lensListeners.delete(listener);
  };
}

export function getLocaleSnapshot(): Locale {
  if (localeMemory) return localeMemory;
  const languages =
    typeof navigator === "undefined" ? [] : (navigator.languages ?? []);
  localeMemory = resolveInitialLocale(readStoredLocale(), languages);
  return localeMemory;
}

export function getLensSnapshot(): Lens {
  if (lensMemory) return lensMemory;
  lensMemory = resolveInitialLens(readStoredLens());
  return lensMemory;
}

export function getServerLocale(): Locale {
  return "en";
}

export function getServerLens(): Lens {
  return "recruiter";
}

export function resetPreferenceMemory(): void {
  localeMemory = null;
  lensMemory = null;
}
