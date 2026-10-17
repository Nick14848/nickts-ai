import { describe, expect, it } from "vitest";
import { businessCardCopy } from "./business-card";
import { publicProfile, profileMarkdown, llmsIndex } from "./public-profile";

describe("public agent profile", () => {
  for (const locale of ["en", "zh"] as const) {
    it(`keeps ${locale} machine-readable claims aligned with the visual profile`, () => {
      const p = publicProfile(locale);
      expect(p.experience).toEqual(businessCardCopy[locale].experience.jobs);
      expect(p.creator.followers).toBe(7443);
      expect(p.education.dates).toMatch(/2026/);
      expect(p.contact.business_wechat).toBe("nickt1221");
      const markdown = profileMarkdown(locale);
      expect(markdown).toContain(p.experience[0].role);
      expect(markdown).toContain(p.contact.email);
      for (const forbidden of ["6990", "18617190373", "resume.pdf", "resume-zh.pdf", "ACP Nexus", "DGX", "UBS distribution"]) {
        expect(JSON.stringify(p) + markdown).not.toContain(forbidden);
      }
    });
  }
  it("exposes direct resources without requiring mode switching", () => {
    expect(llmsIndex).toContain("No login, JavaScript, scrolling or mode switch");
    expect(llmsIndex).toContain("/about.en.md");
    expect(llmsIndex).toContain("/about.zh.md");
    expect(llmsIndex).toContain("/profile.json");
  });
});
