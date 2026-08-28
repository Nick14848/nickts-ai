import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";
import { resetPreferenceMemory } from "@/lib/preferences";

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  resetPreferenceMemory();
});
