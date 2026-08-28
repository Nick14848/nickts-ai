import { describe, expect, it } from "vitest";
import { collectKeys, dictionaries } from "./translations";

describe("translations", () => {
  it("keeps English and Chinese dictionaries in key parity", () => {
    expect(collectKeys(dictionaries.zh)).toEqual(collectKeys(dictionaries.en));
  });

  it("does not translate brand and product names", () => {
    expect(dictionaries.zh.hero.given).toContain("蔡逸凯");
    expect(dictionaries.zh.hero.subline).toContain("港大");
    expect(dictionaries.zh.hero.subline).not.toContain("Archbridge");
    expect(dictionaries.zh.hero.subline).toContain("HSBC CIB");
    expect(dictionaries.zh.work.label).toBe("03 / 我的项目");
    expect(dictionaries.zh.story.label).toBe("01 / 关于我");
    expect(dictionaries.zh.experience.label).toBe("02 / 过往经历");
    expect(dictionaries.zh.hero.corridorHint).toBe("Hi 大家好我是");
    expect(dictionaries.zh.footer.built).toBe("By Nick Tsai");
    expect(dictionaries.zh.elsewhere.github).toContain("GitHub");
    expect(dictionaries.en.hero.line1).toBe("A personal homepage");
    expect(dictionaries.zh.hero.line1).toBe("的个人主页");
  });
});
