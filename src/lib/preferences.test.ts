import { afterEach, describe, expect, it, vi } from "vitest";
import {
  detectBrowserLocale,
  getLocaleSnapshot,
  isLens,
  isLocale,
  resetPreferenceMemory,
  resolveInitialLens,
  resolveInitialLocale,
  storeLocale,
} from "./preferences";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("preferences", () => {
  it("accepts only known locales and lenses", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("zh")).toBe(true);
    expect(isLocale("fr")).toBe(false);
    expect(isLens("recruiter")).toBe(true);
    expect(isLens("builder")).toBe(true);
    expect(isLens("creator")).toBe(true);
    expect(isLens("investor")).toBe(false);
  });

  it("defaults to English unless the browser language is Chinese", () => {
    expect(detectBrowserLocale(["en-US", "en"])).toBe("en");
    expect(detectBrowserLocale(["zh-CN", "en"])).toBe("zh");
    expect(detectBrowserLocale(["zh-HK"])).toBe("zh");
  });

  it("prefers stored locale over browser language", () => {
    expect(resolveInitialLocale("en", ["zh-CN"])).toBe("en");
    expect(resolveInitialLocale(null, ["zh-CN"])).toBe("zh");
    expect(resolveInitialLocale(null, ["en-GB"])).toBe("en");
  });

  it("defaults the lens to recruiter", () => {
    expect(resolveInitialLens(null)).toBe("recruiter");
    expect(resolveInitialLens("builder")).toBe("builder");
  });

  it("keeps language switching working when storage is blocked", () => {
    resetPreferenceMemory();
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("blocked");
    });
    expect(() => storeLocale("zh")).not.toThrow();
    expect(getLocaleSnapshot()).toBe("zh");
  });
});
